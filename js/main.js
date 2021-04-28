$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    // navText: ["<img src='myprevimage.png'>","<img src='mynextimage.png'>"],
    center:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

