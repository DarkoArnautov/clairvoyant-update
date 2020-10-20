/* --------------------------------------------------
 * script for slick carousel
 * --------------------------------------------------*/
$(document).ready(function() {
  $(".managed-source-carousel").slick({
    autoplay: true,
    arrows: false,
    infinite: true,
	slidesToShow: 4,
	slidesToScroll: 4,
	dots: true,
	responsive: [
		{
		  breakpoint: 1025,
		  settings: {
			slidesToShow: 4,
			slidesToScroll: 4,
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			autoplay: true,
            arrows: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
		  },
		},
		{
          breakpoint: 769,
          settings: {
            autoplay: true,
            arrows: false,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
          },
        }
	  ]
  });
});

