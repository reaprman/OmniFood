
$(document).ready(function() {

    /* for the sticky navigation */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky'); // replaces sticky tag in html file: class="sticky"
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;' // menu will now appear 60px before the next section
    });

    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });

    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });

    /* Navigation scroll */

    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
            || location.hostname == this.hostname) {
    
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
               if (target.length) {
                 $('html,body').animate({
                     scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }

        /* Animations on scroll */

        $('.js--wp-1').waypoint(function(direction){
            $('js--wp-1').addClass('animated fadeIn');
        })
    });
});
    
