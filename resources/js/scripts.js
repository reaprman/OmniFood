
/* for the sticky navigation */
$(document).ready(function() {
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky'); // replaces sticky tag in html file: class="sticky"
        } else {
            $('nav').removeClass('sticky');
            }
        })   
    }, {
        offset: '60px;' // menu will now appear 60px before the next section
    });

    /* Scroll on buttons */

    $('js--scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('js--section-plans').offset().top}, 1000)
    })