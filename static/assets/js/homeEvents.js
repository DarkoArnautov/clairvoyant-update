renderData();

function shortenStr(str, maxCharCount){
    let tempStr = str.substring(0, maxCharCount);
    for(let i = tempStr.length - 1;  i >= 0; i--){
      if(tempStr[i] === ' '){
        tempStr = tempStr.substring(0, i);
        break;
      }
    }
    return tempStr + '. . .';
  }
  
function renderData() {
    let slider = document.getElementById('slider');
    // index 0 = title
    // index 1 = desc
    // index 2 = tag
    // index 3 = icon
    // inex 4 = URL
    for (let i = 0; i < data.length; i++) {
        let slide = document.createElement("div");
        slide.style.position = 'relative';

        // slide icon
        let slideIconContainer = document.createElement('div');
        slideIconContainer.className="slide-icon-container";

        let slideIcon = document.createElement('div');
        slideIcon.innerHTML = data[i][3];
        slideIcon.className="slide-icon";

        slide.appendChild(slideIcon);
        slide.appendChild(slideIconContainer);

        // slide title
        let slideTitle = document.createElement('div');
        slideTitle.innerHTML = data[i][0];
        slideTitle.className="slide-title";        
        slide.appendChild(slideTitle);

        // slide description
        let slideDesc = document.createElement('p');
        slideDesc.innerHTML = `${data[i][1]}`;
        if(data[i][4]!=="") {
          slideDesc.innerHTML += ` <a href=${data[i][4]} target="_blank">Read More</a>`;
        }
        slideDesc.className="slide-desc";        
        slide.appendChild(slideDesc);

        // add flex styling to slide
        slide.style.display = "flex";
        slide.style.flexDirection = "column";
        slide.style.justifyContent = "center";
        slide.style.alignItems = "center";
        if(slider!=null)
        slider.appendChild(slide);
    }
    $(document).ready(function () {
        $('.home-carousel').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          dots: true,
          responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]  
        });
    });
}