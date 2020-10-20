(function($){var jWindow=$(window);var elements=[];var elementsInView=[];var isSpying=false;var ticks=0;var unique_id=1;var offset={top:0,right:0,bottom:0,left:0,}
function findElements(top,right,bottom,left){var hits=$();$.each(elements,function(i,element){if(element.height()>0){var elTop=element.offset().top,elLeft=element.offset().left,elRight=elLeft+element.width(),elBottom=elTop+element.height();var isIntersect=!(elLeft>right||elRight<left||elTop>bottom||elBottom<top);if(isIntersect){hits.push(element);}}});return hits;}function onScroll(){++ticks;var top=jWindow.scrollTop(),left=jWindow.scrollLeft(),right=left+jWindow.width(),bottom=top+jWindow.height();var intersections=findElements(top+offset.top+200,right+offset.right,bottom+offset.bottom,left+offset.left);$.each(intersections,function(i,element){var lastTick=element.data('scrollSpy:ticks');if(typeof lastTick!='number'){element.triggerHandler('scrollSpy:enter');}element.data('scrollSpy:ticks',ticks);});$.each(elementsInView,function(i,element){var lastTick=element.data('scrollSpy:ticks');if(typeof lastTick=='number'&&lastTick!==ticks){element.triggerHandler('scrollSpy:exit');element.data('scrollSpy:ticks',null);}});elementsInView=intersections;}function onWinSize(){jWindow.trigger('scrollSpy:winSize');}var getTime=(Date.now||function(){return new Date().getTime();});function throttle(func,wait,options){var context,args,result;var timeout=null;var previous=0;options||(options={});var later=function(){previous=options.leading===false?0:getTime();timeout=null;result=func.apply(context,args);context=args=null;};return function(){var now=getTime();if(!previous&&options.leading===false)previous=now;var remaining=wait-(now-previous);context=this;args=arguments;if(remaining<=0){clearTimeout(timeout);timeout=null;previous=now;result=func.apply(context,args);context=args=null;}else if(!timeout&&options.trailing!==false){timeout=setTimeout(later,remaining);}return result;};};$.scrollSpy=function(selector,options){var defaults={throttle:100,scrollOffset:200};options=$.extend(defaults,options);var visible=[];selector=$(selector);selector.each(function(i,element){elements.push($(element));$(element).data("scrollSpy:id",i);});offset.top=options.offsetTop||0;offset.right=options.offsetRight||0;offset.bottom=options.offsetBottom||0;offset.left=options.offsetLeft||0;var throttledScroll=throttle(onScroll,options.throttle||100);var readyScroll=function(){$(document).ready(throttledScroll);};if(!isSpying){jWindow.on('scroll',readyScroll);jWindow.on('resize',readyScroll);isSpying=true;}setTimeout(readyScroll,0);selector.on('scrollSpy:enter',function(){visible=$.grep(visible,function(value){return value.height()!=0;});var $this=$(this);if(visible[0]){$('a[href="#'+visible[0].attr('id')+'"]').parent().removeClass('current');if($this.data('scrollSpy:id')<visible[0].data('scrollSpy:id')){visible.unshift($(this));}else{visible.push($(this));}}else{visible.push($(this));}$('a[href="#'+visible[0].attr('id')+'"]').parent().addClass('current');});selector.on('scrollSpy:exit',function(){visible=$.grep(visible,function(value){return value.height()!=0;});if(visible[0]){$('a[href="#'+visible[0].attr('id')+'"]').parent().removeClass('current');var $this=$(this);visible=$.grep(visible,function(value){return value.attr('id')!=$this.attr('id');});if(visible[0]){$('a[href="#'+visible[0].attr('id')+'"]').parent().addClass('current');}}});return selector;};$.winSizeSpy=function(options){$.winSizeSpy=function(){return jWindow;};options=options||{throttle:100};return jWindow.on('resize',throttle(onWinSize,options.throttle||100));};$.fn.scrollSpy=function(options){return $.scrollSpy($(this),options);};})(jQuery);