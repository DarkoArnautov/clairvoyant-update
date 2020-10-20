/* YRSS 1.1.2 */
/* Copyright (c) 2017 Mark Hillard - MIT License */

var img, pubDate, title, text, link;

    'use strict';

    $.fn.yrss = function (url, options, fn) {

        var defaults = {
            ssl: false,
            limit: 10,
            reverse: false,
            cache: true,
            maxage: 3600,
            showerror: true,
            errormsg: '',
            tags: false,
            date: true,
            dateformat: 'default',
            titletag: 'h3',
            content: true,
            image: false,
            snippet: true,
            snippetlimit: 60,
            linktarget: '_self'
        };

        options = $.extend(defaults, options);

        // return function
        return this.each(function (i, e) {
            var s = '';
            if (options.ssl) {
                s = 's';
            }
            if (!$(e).hasClass('rss-feed')) {
                $(e).addClass('rss-feed');
            }
            if (url === null) {
                return false;
            }
            var query = 'http' + s + '://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from feed where url="' + url + '"');
            if (options.limit !== null) {
                query += ' limit ' + options.limit;
            }
            if (options.reverse) {
                query += ' | reverse()';
            }
            if (options.cache) {
                query += '&_maxage=' + options.maxage;
            }
            query += '&format=json';

            $.getJSON(query, function (data, status, errorThrown) {
                if (status === 'success') {
                    process(e, data, options);

                    if ($.isFunction(fn)) {
                        fn.call(this, $(e));
                    }

                } else if (status === 'error' || status === 'parsererror') {
                    if (options.showerror) {
                        var msg;

                        if (options.errormsg !== '') {
                            msg = options.errormsg;
                        } else {
                            msg = errorThrown;
                        }

                        $(e).html('<div class="rss-error"><p>' + msg + '</p></div>');

                    } else {
                        return false;
                    }
                }
            });
        });
    };

    var process = function (e, data, options) {
        var entries = data.query.results.item; // entries have data of all posts

        if (!$.isArray(entries)) {
            entries = [entries];
        }
        if (!entries) {
            return false;
        }

        var html = '';
        var htmlObject;

        for (var key in entries) {
            var entry = entries[key];

            if (entry.pubDate) {
                var entryDate = new Date(entry.pubDate);

                if (options.dateformat === 'default') {
                    pubDate = (entryDate.getMonth() + 1).toString() + '/' + entryDate.getDate().toString() + '/' + entryDate.getFullYear();
                } else if (options.dateformat === 'spellmonth') {
                    var months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
                    pubDate = months[entryDate.getMonth()] + '/' + entryDate.getDate().toString() + '/' + entryDate.getFullYear();
                } else if (options.dateformat === 'localedate') {
                    pubDate = entryDate.toLocaleDateString();
                } else if (options.dateformat === 'localedatetime') {
                    pubDate = entryDate.toLocaleDateString() + ' ' + entryDate.toLocaleTimeString();
                }
            }

            title = entry.title;
            link = 'href="' + entry.link + '"';

            img = entry.encoded.match(/src="([^']+)></)[1];

            if (img.includes(".png") || img.includes(".jpg") || img.includes(".jpeg")) {
                img = img.substr(0, img.indexOf('"'));
            }
            else {img = "assets/img/blog-default.png"}
                img = 'src="' + img + '"';

            if (options.content) {
                if (entry.description !== undefined) {
                    text = $.trim(entry.description);
                } else {
                    text = $.trim(entry.encoded);
                }

                html += '<div class="entry-content">' + text + '</div>';
                htmlObject = $(html);

                $.each(htmlObject, function () {
                    if (options.image) {
                        var image = $(this).find('img').first();
                        var downloadingImage = $('<img>');
                        downloadingImage.load(function () {
                            image.attr("src", $(this).attr('src'));
                        });

                        if (image.length !== 0) {
                            $(this).prepend('<div class="entry-image">');
                            $(this).find(image).addClass('img-responsive-2');
                            $(this).find('.entry-image').append(image).nextAll().wrapAll('<div class="entry-text"></div>');
                        }
                    }

                    if (options.snippet) {
                        var content = $(this).find('.entry-content');
                        content = content.context.innerText;
                        if (content.length > 60) content = content.substring(0, 60) + '...';
                        text = content;
                    }
                });
            }
            // injecting data to the html template
            var source   = document.getElementById("template").innerHTML;
            var template = Handlebars.compile(source);
            var context = {title: title, date: pubDate, body: text};
            var html    = template(context);

            var href = 'href=""';
            var re = new RegExp(href, 'g');

            html = html.replace(re, link);
            html = html.replace(new RegExp('src=""', 'g'), img);
            html = html.replace('entry', 'entry'+key);

            document.getElementById('data').innerHTML += html;
console.log(html);
            html = "";
        }
    };

    var feed = 'https://medium.com/feed/clairvoyantblog';

    $('#feed').yrss(feed, {
        ssl: false,
        limit: 3,
        errormsg: '',
        tags: false,
        date: true,
        dateformat: 'spellmonth',
        content: true,
        image: true,
        linktarget: '_blank'
    }, function () {
        // optional callback function
    });