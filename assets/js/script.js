(function ($) {
     $(document).ready(function () {
          //Owl Carousel
          $('.owl-carousel').owlCarousel({
               loop: true,
               margin: 10,
               nav: true,
               items: 1,
          });

          //Hero Text Animate
          let spans = $('.skill-container span');
          let visArr = [];
          let hidArr = [];

          //Choose Hide or Show
          function hideOrShow() {
               spans.each(function () {
                    if ($(this).hasClass('visible')) {
                         visArr.push($(this));
                    } else {
                         hidArr.push($(this));
                    }
               });
          }

          //Change vis to hide
          function visToHide() {
               visArr[0].removeClass('visible');
               visArr[0].addClass('hidden');
               hidArr.push(visArr[0]);
               visArr = [];
          }

          //To visible
          function toVis() {
               hidArr[0].removeClass('hidden');
               hidArr[0].addClass('visible');
               visArr.push(hidArr[0]);
               hidArr.shift();
          }


          setInterval(function () {
               hideOrShow();
               visToHide();
               toVis();
          }, 4000);


          //burger Ainmate
          $('.burger').mouseover(function () {
               $(this).children().addClass('initAnimate');
          }).mouseout(function () {
               $(this).children().removeClass('initAnimate');
          }).click(function () {
               $('.navMenu').show();
               $('body').css({
                    'overflow': 'hidden'
               })
               $('.navClose').click(function () {
                    $('.navMenu').hide();
                    $('body').css({
                         'overflow': 'auto'
                    })
               })
               $('.navigator').click(function () {
                    $('.navMenu').hide();
                    $('body').css({
                         'overflow': 'auto'
                    })
               })
          });

          //Isotope
          $grid = $('.grid');
          $('.filter .nav-item button').on('click', function () {
               $('.filter .nav-item button').removeClass('active');
               let filter = $(this).data('filter');
               $grid.isotope({
                    filter: `${filter}`
               });
               $(this).addClass('active');
          });

     })
})(jQuery);