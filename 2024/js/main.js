var url = window.location.protocol + '//'+window.location.hostname
jQuery(".promotour").owlCarousel({
		slideBy: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayTimeout: 7000,
        loop: false,
        margin:15,
        pagination: false,
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        smartSpeed: 700,
        center: false,
        nav: true,
		navText: ['<i class="fa-solid fa-chevron-left"></i>',
          '<i class="fa-solid fa-chevron-right"></i>'],
        responsiveClass: true, // Optional helper class. Add 'owl-reponsive-' + 'breakpoint' class to main element.
        responsive: {
            0: {
                items: 1// In this configuration 1 is enabled from 0px up to 479px screen size
            },

            480: {
                items: 1// from 480 to 677
            },

            678: {
                items: 2 // from this breakpoint 678 to 959
            },

            959: {
                items: 3// from this breakpoint 960 to 1199
            },

            1200: {
                items: 4
            }
        }
    });
jQuery(".newsrelation").owlCarousel({
		slideBy: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayTimeout: 7000,
        loop: true,
        pagination: false,
        items: 1,
        smartSpeed: 700,
        center: false,
        nav: true,
		dots:false,
        navText: ["<img src='./images/icon-back.png'>",
          "<img src='./images/icon-next.png'>"],        
    });
jQuery(".hotelrelation").owlCarousel({
		slideBy: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayTimeout: 7000,
        loop: true,
        pagination: false,
        items: 1,
        smartSpeed: 700,
        center: false,
        nav: true,
		dots:false,
        navText: ["<img src='./images/icon-back.png'>",
          "<img src='./images/icon-next.png'>"],        
    });	
	
	jQuery(".owl-logo").owlCarousel({
		loop: true,
                margin: 10,
                responsiveClass: true,
				dots:false,
				autoplay: true,
				autoplaySpeed: 2200,
				autoplayTimeout: 2200,
				autoplayHoverPause: true,
				slideTransition: 'linear',
				 navText: ["",
				""],
                responsive: {
                  0: {
                    items: 3,
                    nav: true
                  },
                  768: {
                    items: 3,
                    nav: false
                  },
                  1025: {
                    items: 6,
                    nav: true,
                    margin: 10
                  }
                }       
    });	

jQuery(document).ready(function(){
	
	jQuery('ul.tabs li').click(function(){
		var tab_id = jQuery(this).attr('data-tab');

		jQuery('ul.tabs li').removeClass('current');
		jQuery('.tab-content').removeClass('current');

		jQuery(this).addClass('current');
		jQuery("#"+tab_id).addClass('current');
	})

});
var tdt = jQuery;
tdt(document).ready(function(){
	tdt('#carousel').flexslider({
		animation: "slide",
		controlNav: false,
		animationLoop: false,
		slideshow: false,
		itemWidth: 130,
		itemMargin: 20,
		asNavFor: '#slider'
	});
	tdt('#slider').flexslider({
		animation: "slide",
		controlNav: false,
		animationLoop: true,
		slideshow: true,
		sync: "#carousel",
		start: function(slider){
		  tdt('body').removeClass('loading');
		}
	});
});
(function ($) {
// variables
var Options, get_options;
// object
Options = (function () {
	// constructor
	function Options(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z) {
		this.logo_align = a;
		this.links_align = b;
		this.socialBar_align = c;
		this.searchBar_align = d;
		this.trigger = e;
		this.effect = f;
		this.effect_speed = g;
		this.sibling = h;
		this.outside_click_close = i;
		this.top_fixed = j;
		this.sticky_header = k;
		this.sticky_header_height = l;
		this.menu_position = m;
		this.full_width = n;
		this.color_change = o;
		this.color_button = p;
	}
	// object classes
	Options.prototype.optionsChange = function () {
		// menu initialize
		$('#menu-1').megaMenu({
			// DESKTOP MODE SETTINGS
			logo_align          : this.logo_align,
			links_align         : this.links_align,
			socialBar_align     : this.socialBar_align,
			searchBar_align     : this.searchBar_align,
			trigger             : this.trigger,
			effect              : this.effect,
			effect_speed        : 400,
			sibling             : true,
			outside_click_close : true,
			top_fixed           : this.top_fixed,
			sticky_header       : this.sticky_header,
			sticky_header_height: 200,
			menu_position       : this.menu_position,
			full_width          : false,
			// MOBILE MODE SETTINGS
			mobile_settings     : {
				collapse            : true,
				sibling             : true,
				scrollBar           : true,
				scrollBar_height    : 400,
				top_fixed           : false,
				sticky_header       : false,
				sticky_header_height: 200
			}
		});
	};

	// color change function
	Options.prototype.colorChange = function (selector, color) {
		$(selector).click(function () {
			$('#menu-1').attr('data-color', color);
		})
	};

	// return options
	return Options;
})();

// call object
get_options = new Options();
// call options change
get_options.optionsChange();
// call color change function
get_options.colorChange();
// logo align left or right
})(jQuery);
var cbpAnimatedHeader = (function() {
		var docElem = document.documentElement,
		header = $('.bottomhead'),
		didScroll = false,
		changeHeaderOn = 20;

function init() {
	window.addEventListener( 'scroll', function( event ) {
		if( !didScroll ) {
			didScroll = true;
			setTimeout( scrollPage, 110 );
		}
	}, false );
}
function scrollPage() {
	var sy = scrollY();
	if ( sy >= changeHeaderOn ) {
		header.addClass('fixtop');
//		header.find('.logo-b img').attr('src','./images/logo-s.png');
	}
	else {
		header.removeClass('fixtop');
//		header.find('.logo-b img').attr('src','./images/logo.gif');
	}
	didScroll = false;
}
function scrollY() {
	return window.pageYOffset || docElem.scrollTop;
}
init();
})();

// Fixed Form Order
const divFixed = document.querySelector(".tourdetail_right_fixed");

if (divFixed) {
    const divWrap = document.querySelector(".tourdetail_warp");

    const divRight = document.querySelector(".tourdetail_right");
    const widthForm = divRight.offsetWidth;

    divFixed.style.cssText = `
    width: ${widthForm}px;
  `;

    window.addEventListener("scroll", function () {
        if (window.scrollY > divWrap.offsetTop) {
            divFixed.classList.add("form-fixed");
        } else {
            divFixed.classList.remove("form-fixed");
        }

        if (window.scrollY > divWrap.offsetHeight + divWrap.offsetTop + 100 - screen.height) {
            divFixed.classList.add("form-end-fixed");
        } else {
            divFixed.classList.remove("form-end-fixed");
        }
    });
}
// End Fixed Form Order