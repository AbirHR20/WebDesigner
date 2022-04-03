$(document).ready(function(){

    //progress bar

    $('.jqueryscript').rProgressbar({
        percentage: 85,
        fillBackgroundColor: '#FF4E6D',
        backgroundColor: '#EEEEEE',
        borderRadius: '0px',
        height: '10px',
        width: '100%'
      });
    
    //nav bar
    
    var nav =$('nav');

    $(window).on('scroll',function(){
        var scrolling = $(this).scrollTop();

        if (scrolling > 100){
            nav.addClass('navfix');
        }
        else{
            nav.removeClass('navfix');
        }

    });

    //test slider

    $('.test-slider').slick({
        prevArrow : '<i class="fa fa-chevron-left prev-arrow"></i>',
        nextArrow : '<i class="fa fa-chevron-right next-arrow"></i>',
        outline : true,
        autoplay : false ,
        responsive : [
            {
                breakpoint: 767 ,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: false,
                  arrows : true,
                }
              },
        ]
    });

    //type js

    var typed = new Typed('.element', {
        strings: ["Design Expert", "Web Designer", "Web ui Artist"],
        typeSpeed: 70,
        loop : true,
      });
    
      //wow js

      new WOW().init();
    
});