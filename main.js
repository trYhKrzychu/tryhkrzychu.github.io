

$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 50) {
        $(".menu-centrum").css("width" , "100%");
        $(".menu-centrum").css("background-color" , "rgba(68, 68, 68, 0)");
        $(".menu-logo-photo").css("width" , "120px");
        $(".menu-logo-photo").css("height" , "40px");
        }
  
        else{  	
        $(".menu-centrum").css("width" , "70%");
        $(".menu-centrum").css("background-color" , "rgb(68, 68, 68)");
        $(".menu-logo-photo").css("width" , "240px");
        $(".menu-logo-photo").css("height" , "80px");
        }
    })
  })