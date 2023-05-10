$(document).ready(function(){  
      $('.slideshow-container').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    var prev = $(".slick-prev");
    prev.html('<i class="fa-solid fa-arrow-left"></i>');

    var next = $(".slick-next");
    next.html('<i class="fa-solid fa-arrow-right"></i>');

})

//fag page accordion
// const accordion = document.getElementsByClassName("content-box");

// function removeActivesInAccordion() {
//     for (let i = 0; i < accordion.length; i++) {
//         accordion[i].classList.remove("active");
//     }
// }

// for (let i = 0; i < accordion.length; i++) {
//     accordion[i].addEventListener("click", function () {
//         removeActivesInAccordion();
//         accordion[i].classList.toggle("active");
//     })

// }
//offcanvas mobile menu start 
var $offCanvasNav = $('.mobile-menu'),
$offCanvasNavSubMenu = $offCanvasNav.find('.dropdown');

/*Add Toggle Button With Off Canvas Sub Menu*/
$offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i></i></span>');

/*Close Off Canvas Sub Menu*/
$offCanvasNavSubMenu.slideUp();

/*Category Sub Menu Toggle*/
$offCanvasNav.on('click', 'li a, li .menu-expand', function(e) {
var $this = $(this);
if ( ($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand')) ) {
    e.preventDefault();
    if ($this.siblings('ul:visible').length){
        $this.parent('li').removeClass('active');
        $this.siblings('ul').slideUp();
    } else {
        $this.parent('li').addClass('active');
        $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
        $this.closest('li').siblings('li').find('ul:visible').slideUp();
        $this.siblings('ul').slideDown();
    }
}
});
//Product page
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

  $('.owl-carusel-last-seen').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:3
        },
        972:{
            items:4
        }
    }

   
})

$('.owl-carousel-product').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$(document).on('change', '.selectpicker', function(e){
    e.preventDefault();

    window.location = $(this).find('option:selected').val();
});

$("#basket").click(function(){
    $("#basket-toggle").toggleClass("basket-clicked");
    $("")
  });


  // product carousel active
	$('.product-carousel-4').slick({
		slidesToShow: 4,
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1
				}
			}
		]
        
	});
    	// image zoom effect
	

