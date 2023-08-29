$(document).ready(function(){
   

    //  owl-carousel owl-carousel
    var slider1 = $(".slider1").owlCarousel({
        items:3,
        nav:true,
        dots:true,
        autoplay: true,
        loop: true,
        smartSpeed: 300,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            767:{
                items:1,
                nav:false
            },
            991:{
                items:1,
                nav:false
            },
        },
        nav:true,
        navText: [
            '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>',
            '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>'
        ],
    });
    // button next and privious 
    $('.tmPrevBtn').click(function() {
        slider1.trigger('next.owl.carousel');
    })  
    $('.tmNextBtn').click(function() {
        slider1.trigger('prev.owl.carousel', [300]);
    })  


    //
    // accordion
    $(".a-content").hide()
    $(".accordion li").first().children(".a-content").show();
    $(".a-title ").click(function(){
        //$(this).parent("li").children(".a-content").slideToggle();
        $(this).parent("li").siblings().children(".a-content").slideUp();
        $(this).next().slideToggle();
   });



});