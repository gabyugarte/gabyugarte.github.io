$(document).ready(function(){

    $(window).scroll(function(){

        if(this.scrollY > 200){
            $('.navbar').addClass("sticky");
            }else{
                $('.navbar').removeClass("sticky");
                }

          // Scrolling Button Btn
          if(this.scrollY >500){
            $('.scroll-up-btn').addClass("show");
            }else{
            $('.scroll-up-btn').removeClass("show");
            }   
    });

    var typed = new Typed(".typing-1",{
        strings: [
            "Developer",
            "Freelancer"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2",{
        strings: [
            "Developer",
            "Freelancer"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    //slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0});
    });

    // owl carousel animation
    $('.carousel').owlCarousel({
        margin: 20,
        loop:true,
        navigation:true,
        autoplay: true,
        autoplayTimeOut: 1000,
        autoplayHoverPause: true,

        responsive: {
            0:{
                items:1,
                nav:false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
 

});
 //navbar burger...............................

//  const navSlide = () => {
//     const burger = document.querySelector('.burger');
//     const nav = document.querySelector('.menu');
//     const navLinks = document.querySelectorAll('.menu li');

// burger.addEventListener('click', () => {
//         //toggle Nav
//    nav.classList.toggle('nav-active');
  

//     //Animate links
//     navLinks.forEach((link, index) => {
//         if(link.style.animation){
//         link.style.animation = '';
//         }else{
//             link.style.animation = `NavLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
//         }
        
//         // console.log(index / 7 + 0.3);
//         });
//         //burger animation
//         burger.classList.toggle('toggle');
//     });

//  }

//  navSlide();

