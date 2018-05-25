
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