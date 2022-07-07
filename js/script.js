$(document).ready(function(){
    $(".owl-carousel_1").owlCarousel( {
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

    $(".owl-carousel_2").owlCarousel( {
        loop:true,
        nav:true,
        dots:true,
        margin:33,
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




