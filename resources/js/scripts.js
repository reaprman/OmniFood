$(document).ready(function() {
    $('.js-section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('stick'); // replaces sticky tag in html file: class="sticky"
        } else {
            $('nav').removeClass('sticky');
            }
        })   
    });