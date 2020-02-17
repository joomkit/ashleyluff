
/* Theme Name: Eagle - Responsive Minimal Template
   Author: Zoyothemes
   Version: 2.0.0
   File Description: Main JS file of the template
*/


(function ($) {

    'use strict';

    // Active Menu
    $(".navbar-nav a").each(function () {
        if (this.href == window.location.href) {
            $(this).parent().addClass("active-item"); // add active to li of the current link
            $(this).parent().parent().parent().addClass("active-item"); // add active class to an anchor
        }
    });



})(jQuery);



$(document).ready(function() {
    $('#lightgal').lightGallery({
        selector: '.portfolio-box-img',
        zoom: 'false',
        autoplay: false,
        autoplayControls: 'false',
        fullScreen:'false'
        //appendSubHtmlTo: '.lg-item'
    });
    // $('a[href*="#"]').on('click', function(e) {
    //     e.preventDefault()
    //
    //     $('html, body').animate(
    //         {
    //             scrollTop: $($(this).attr('href')).offset().top,
    //         },
    //         500,
    //         'linear'
    //     )
    // });


//Smooth scrolling with links
        $('a.scroll-down').on('click', function(event){

            event.preventDefault();
            $('html,body').animate({scrollTop:$(this.hash).offset().top -75}, 1500);
        });
});

