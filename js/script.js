$(document).ready(function(){
    $(".owl-carousel").owlCarousel( {
        loop:true,
        nav:true,
        dots:true,
        margin:65,
        navText: [ '', ' ' ],
        dotsEach: true,

        responsive:{
            0:{
                items:1

            },

            1000:{
                items:3
            }
        }
    });
});