$('.header .hover-line').hover(function(){
    $('.header .under-line').removeClass('hide')
},function(){
    $('.header .under-line').addClass('hide')
})

// $('.header .btn-dropdown .nav-item').click(function(){

//     if($(this).parents().hasClass('on')){
//         $('.dropdown-menu').css({opacity:1,visibility: "visible"})
//         $(this).parents().removeClass('on')
//     }else{
//         $('.dropdown-menu').css({opacity:0,visibility: "hidden"})
//         $(this).parents().addClass('on')
//     }
// })

$('.header .btn-dropdown .nav-item').click(function(){
    $('.dropdown-menu').toggleClass('on')
})



gsap.to('.sc-visual .group-text',{
    scrollTrigger:{
        trigger:'.sc-visual',
        start:'0% -20%',
        end:'100% 0%',
        scrub:1,
    },
    transform: "translateX(0%)"
})


gsap.to('.sc-intro .text-wrap',{
    scrollTrigger:{
        trigger:'.sc-intro',
        start:'0% 0%',
        end:'100% -50 %',
        scrub:1,
    },
    opacity:0
})



$('.sc-intro a').click(function(e){
    e.preventDefault();
    var target = $(this).attr('href'); // btn-select a 의 href - sc-work
    var target_pos = $(target).offset().top; // 문서끝부터 선택한 요소까지의 거리
    $('html,body').stop().animate({"scrollTop":target_pos},500)
})


gsap.to('.sc-work',{
    scrollTrigger:{
        trigger:'.sc-intro .btn-select',
        start:'0% 100%',
        end:'0% 0%',
        scrub:1,
    },
})

gsap.to('.sc-cooperation .move-right',{
    scrollTrigger:{
        trigger:'.sc-cooperation .logos',
        start:'0% 100%',
        end:'0% 0%',
        scrub:1,
    },
    delay:50,
    x:-10
})

gsap.to('.sc-cooperation .move-left',{
    scrollTrigger:{
        trigger:'.sc-cooperation .logos',
        start:'0% 100%',
        end:'0% 0%',
        scrub:1,
        delay:50,
    },
    x:10
})


gsap.to('.sc-contact',{
    scrollTrigger:{
        trigger:'.sc-testimonials',
        start:'0% 100%',
        end:'0% 0%',
        scrub:1,
    },
})


var swiper = new Swiper('.goodthing-slide',{
    slidesPerView:'auto',
    spaceBetween:20,
    pagination:{
        el:'.pagination',
        type:'progressbar'
    },
})

ScrollTrigger.create({
    trigger:'.sc-work',
    start:'0% 50%',
    end:'100% 0%',
    onEnter:function(){
        $('[data-bg="1"]').addClass('on')
    },
    onLeaveBack:function(){
        $('[data-bg="1"]').removeClass('on')
    }
})