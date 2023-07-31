
$(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay:false,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
    0:{
    items:1,
    nav: false
    },
    500:{
        items:2,
        nav: false
        },
    900:{
    items:3,
    nav: false
    },
    1200:{
    items:4,
    nav: false
    }
    }
    });