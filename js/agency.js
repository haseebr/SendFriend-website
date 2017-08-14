(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 54) 
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });
    

    // Activate scrollspy to add active class to navbar items on scroll
    /*$('body').scrollspy({
        target: '#mainNav',
        offset: 54
    });*/

    // Closes responsive menu when a link is clicked
    $('.navbar-collapse>ul>li>a').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Collapse the navbar when page is scrolled
    $(window).scroll(function() { 
        if ($(document).scrollTop() > $("#heading").height()) {
            $("#mainNav").addClass("navbar-shrink");
            $("#mainNav").addClass("fixed-top");
            $("#mainNav").css("position","fixed");
        } 
        else { //navbar at top of page, absolute
            $("#mainNav").removeClass("navbar-shrink");
            $("#mainNav").removeClass("fixed-top");
            $("#mainNav").css("position","absolute");
        }
    });
    
    
    //Success message on mailing list submission
    
    
    $("#mc-embedded-subscribe").click(function(){
    	$('#mc-embedded-subscribe-form').animate({'opacity': 0}, 400, function(){
	        $(this).html("<div class='col-lg-12 text-center'><h2>Thanks for Signing Up!</h2></div>").animate({'opacity': 1}, 400);    
	});
    });

})(jQuery); // End of use strict
