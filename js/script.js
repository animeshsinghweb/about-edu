$(document).ready(function() {
    $('#load').addClass('hidden');
    $('.slider').slider();
    $('#ujjwala').hide();
    $('#gourav').hide();
    $('#animesh').hide();
    $('#arya').hide();

    $(window).scroll(function() {
        //if you hard code, then use console
        //.log to determine when you want the 
        //nav bar to stick.  
        console.log($(window).scrollTop())
        if ($(window).scrollTop() > 210) {
            $('#nav').addClass('fix');
        }
        if ($(window).scrollTop() < 210) {
            $('#nav').removeClass('fix');
        }

        if ($(window).scrollTop() > 280) {
            $('#ujjwala').fadeIn(4000);
        }
        if ($(window).scrollTop() > 670) {
            $('#gourav').fadeIn(4000);
        }
        if ($(window).scrollTop() > 1090) {
            $('#animesh').fadeIn(4000);
            $('#arya').fadeIn(4000);
        }
    });

    $(document).ready(function() {
        $('.parallax').parallax();
    });
});