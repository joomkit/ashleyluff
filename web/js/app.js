
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
    // $('#lightgal').lightGallery({
    //     selector: '.portfolio-box-img',
    //     zoom: 'false',
    //     autoplay: false,
    //     autoplayControls: 'false',
    //     fullScreen:'false'
    //     //appendSubHtmlTo: '.lg-item'
    // });
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

    var $container = $('.portfolioContainer');

    const $imgs = $('.lazy');
    const $win = $(window);

    $imgs.lazyload({
        effect: "fadeIn",
        failure_limit: Math.max($imgs.length - 1, 0),
        event: 'lazylazy'
    });


    function loadVisible($els, trigger) {
        $els.filter(function () {
            var rect = this.getBoundingClientRect();
            return rect.top >= 0 && rect.top <= window.innerHeight;
        }).trigger(trigger);
    }

// Initialize isotope
    $grid = $('.portfolioContainer').isotope();

    $grid.isotope('on', 'layoutComplete', function () {
        loadVisible($imgs, 'lazylazy');
    });

    $win.on('scroll', function () {
        loadVisible($imgs, 'lazylazy');
    });
});

//lazy load
// document.addEventListener("DOMContentLoaded", function() {
//     let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
//     let active = false;
//
//     const lazyLoad = function() {
//         if (active === false) {
//             active = true;
//
//             setTimeout(function() {
//                 lazyImages.forEach(function(lazyImage) {
//                     if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
//                       //removed as no srceset used
//                         // lazyImage.src = lazyImage.dataset.src;
//                         // lazyImage.srcset = lazyImage.dataset.srcset;
//                         lazyImage.classList.remove("lazy");
//
//                         lazyImages = lazyImages.filter(function(image) {
//                             return image !== lazyImage;
//                         });
//
//                         if (lazyImages.length === 0) {
//                             document.removeEventListener("scroll", lazyLoad);
//                             window.removeEventListener("resize", lazyLoad);
//                             window.removeEventListener("orientationchange", lazyLoad);
//                         }
//                     }
//                 });
//
//                 active = false;
//             }, 200);
//         }
//     };
//
//     document.addEventListener("scroll", lazyLoad);
//     window.addEventListener("resize", lazyLoad);
//     window.addEventListener("orientationchange", lazyLoad);
// });
// document.addEventListener("DOMContentLoaded", function() {
//     var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
//
//     if ("IntersectionObserver" in window) {
//         let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
//             entries.forEach(function(entry) {
//                 if (entry.isIntersecting) {
//                     let lazyImage = entry.target;
//                     lazyImage.src = lazyImage.dataset.src;
//                     // lazyImage.srcset = lazyImage.dataset.srcset;
//                     lazyImage.classList.remove("lazy");
//                     lazyImageObserver.unobserve(lazyImage);
//                 }
//             });
//         });
//
//         lazyImages.forEach(function(lazyImage) {
//             lazyImageObserver.observe(lazyImage);
//         });
//     } else {
//         // Possibly fall back to a more compatible method here
//     }
// });
