$(document).ready(function () {

    // NAVBAR
    $('.nav-menu').click(function(){
        $('.nav').toggleClass('nav-open');
      });

      // Toggle Sort by Price
      $('.ascending').click(function(){
        $('.ascend').addClass('hidden');
        $('.descend').removeClass('hidden');
      });

      $('.descending').click(function(){
        $('.descend').addClass('hidden');
        $('.ascend').removeClass('hidden');
      });

      //BULMA FOR SORTING
      $('.dropdown-trigger').click(function(e){
        $('.sorttrigger').toggleClass('is-active');
        e.stopPropagation();
      });
});

// TESTIMONIAL SLIDER
$('.responsive-testimonial-slide').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  autoplay: true,
  pauseOnHover: true,
});

// SINGLE LISTING SLIDER
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  autoplay: true,
  adaptiveHeight: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true
});

// LIGHTBOX
$('.slider-for').slickLightbox();

$('.responsive-slide').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  autoplay: true,
  slidesToScroll: 3,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
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