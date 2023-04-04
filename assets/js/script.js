    // sticky header
    $('.navbar-toggler').click(function () {
      $('.navbar-toggler').toggleClass('active');
    });

    $(window).scroll(function () {
      if ($(window).scrollTop() >= 76) {
        $('header').addClass('sticky');
        $('#topbottombtn').addClass('active');
      }
      else {
        $('header').removeClass('sticky');
        $('header').removeClass('active');
      }
    });


$('.nav-link').click(function() {
  $('nav-link').toggleClass('active');
})

// auto typing
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Graphic Designer", "UI/UX Designer", "Front end Developer"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
    if(textArray.length) setTimeout(type, newTextDelay + 250);
  });

  // progress bar
  jQuery(document).ready(function(){
  
    jQuery('.progress-bar').each(function() {
      jQuery(this).find('.progress-content').animate({
        width:jQuery(this).attr('data-percentage')
      },2000);
      
      jQuery(this).find('.progress-number-mark').animate(
        {left:jQuery(this).attr('data-percentage')},
        {
         duration: 2000,
         step: function(now, fx) {
           var data = Math.round(now);
           jQuery(this).find('.percent').html(data + '%');
         }
      });  
    });
  });

  // testimonial

  $(".testimonial-content").owlCarousel({
    loop: true,
    items: 2,
    margin: 50,
    dots: true,
    nav: false,
    mouseDrag: true,
    autoplay: false,
    autoplayTimeout: 4000,
    smartSpeed: 800
  });
  

  $(function () {
		
    var filterList = {
    
      init: function () {
      
        // https://mixitup.kunkalabs.com/
        $('#gallery').mixItUp({
          selectors: {
            target: '.gallery-item',
            filter: '.filter'	
          },
          load: {
            filter: '.emailtemp, .appdesign, .webdesign, .htmlcss' // show all items on page load.
          }     
        });						
      }
    };
    
    // Filter ALL the things
    filterList.init();
  });


  $('[data-fancybox]').fancybox({
    toolbar: false,
  });

  jQuery(document).ready(function($) {
    "use strict";
    //  TESTIMONIALS CAROUSEL HOOK
    $('#customers-testimonials').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots:true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          1170: {
            items: 3
          }
        }
    });
  });


//   var btn = $('#button');

// $(window).scroll(function() {
//   if ($(window).scrollTop() > 300) {
//     btn.addClass('show');
//   } else {
//     btn.removeClass('show');
//   }
// });

// btn.on('click', function(e) {
//   e.preventDefault();
//   $('html, body').animate({scrollTop:0}, '300');
// });

$(".to-top-btn").click(function(){
  $(window).scroll(function(){
    var scrolled = $(window).scrollTop();
    if (scrolled > 100) $('.to-top-btn').fadeIn('slow');
    if (scrolled < 100) $('.to-top-btn').fadeOut('slow');
  });
  $('html, body').animate({
      scrollTop: $('html, body').offset().top,
  });
});

// menu






  