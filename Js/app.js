$(function () {
   'use strict';

   //Menu Toggle
   $('#navbar_toggler').on('click', function () {
      $('#site_logo,#mainMenu ul, #navbar_toggler').toggleClass('menu_active')
   })

   //Banner Slider Activation
   $('.banner_slider').slick({
      prevArrow:$('.banner_slider_icon_btn.prev'),
      nextArrow: $('.banner_slider_icon_btn.next'),
   });

   //Blog Slider Activation
   $('.blog_slider_container').slick({
      slidesToShow: 3,
      centerMode: true,
      centerPadding: '0px',
   });
})