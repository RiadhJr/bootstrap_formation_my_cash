

$(window).on("load",function(){
    /*-----------------preloader--------------------*/
    $(".preloader").fadeOut("slow");
});

$(document).ready(function() {
    /*----------------navbar shrink----------------*/
    $(window).on("scroll",function(){
      if($(this).scrollTop() > 90){
        $(".navbar").addClass("navbar-shrink");
      }
      else{
        $(".navbar").removeClass("navbar-shrink");
      }
    });
    /*----------------video popup----------------*/
    const videoSrc = $("#player-1").attr("src");
    $(".video-play-btn, .video-popup").on("click", function(){
        if($(".video-popup").hasClass("open")){
          $(".video-popup").removeClass("open");
          $("#player-1").attr("src","");
        }
        else{
          $(".video-popup").addClass("open");
          if($("#player-1").attr("src")==''){
            $("#player-1").attr("src",videoSrc);
          }
        }
    });
 
    /* ---------------------- features carousel ---------------- */
    $('.features-carousel').owlCarousel({
      loop:true,
      margin: 0,
      autoplay: true,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
          },
          600:{
              items:2,
          },
          1000:{
              items:3,
          }
      }
  });

  /* ---------------------- screenshots carousel ---------------- */
  $('.screenshots-carousel').owlCarousel({
    loop:true,
    margin: 0,
    autoplay: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:4,
        }
    }
  });

 /* ---------------------- testimonials carousel ---------------- */
    $('.testimonials-carousel').owlCarousel({
    loop:true,
    margin: 0,
    autoplay: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
    });

    /* ---------------------- team carousel ---------------- */
    $('.team-carousel').owlCarousel({
    loop:true,
    margin: 0,
    autoplay: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
    });

    /*---------------------------- page scrolling - scrollit ------------------*/
    $.scrollIt({
        topOffset: -50
    });

    /*---------------------------- navbar collapse ------------------*/
    $("nav-link").on("click", function(){
        $(".navbar-collapse").collapse("hide");
    });

    /*----------------------------toggle theme - light and dark mode-----------------*/
    function toggleTheme(){
        if(localStorage.getItem("my-cash") !== null){
            if(localStorage.getItem("my-cash") === "dark"){
                $("body").addClass("dark");
            }
            else{
                $("body").removeClass("dark");
            }
        }
        updateIcon();
    }
    toggleTheme();
    $(".toggle-theme").on("click",function(){
        $("body").toggleClass("dark");
        if($("body").hasClass("dark")){
            localStorage.setItem("my-cash","dark");
        }
        else{
            localStorage.setItem("my-cash","light");
        }
        updateIcon();
    });
    function updateIcon(){
        if($("body").hasClass("dark")){
            $(".toggle-theme i").removeClass("fa-moon");
            $(".toggle-theme i").addClass("fa-sun");
        }
        else{
            $(".toggle-theme i").removeClass("fa-sun");
            $(".toggle-theme i").addClass("fa-moon");
        }
    }
});
