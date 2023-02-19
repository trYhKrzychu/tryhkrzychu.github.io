    $(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
        $(".sidebar").css("left" , "0%");
        }
        else{  	
        $(".sidebar").css("left" , "-5%");
        }

     

        if (scroll > 0 && scroll < 749){
        $(".sidebar-button:nth-of-type(2)").css("color" , "#47b649" );
        }
        else{
        $(".sidebar-button:nth-of-type(2)").css("color" , "inherit");
        }

        if (scroll > 749 && scroll < 2100){
        $(".sidebar-button:nth-of-type(3)").css("color" , "#47b649" );
        }
        else{
        $(".sidebar-button:nth-of-type(3)").css("color" , "inherit");
        }

        if (scroll > 2099 && scroll < 2654){
        $(".sidebar-button:nth-of-type(4)").css("color" , "#47b649" );
        }
        else{
        $(".sidebar-button:nth-of-type(4)").css("color" , "inherit");
        }

        if (scroll > 2654 && scroll < 3000){
        $(".sidebar-button:nth-of-type(5)").css("color" , "#47b649" );
        }
        else{
        $(".sidebar-button:nth-of-type(5)").css("color" , "inherit");
        }
    })
  })
  const input = document.getElementById("contact-form-email");

input.addEventListener('invalid', function (event) {
  if (event.target.validity.valueMissing) {
    event.target.setCustomValidity('Proszę wprowadzić adres email. (PRZYKŁAD, NIGDZIE NIE ZOSTANIE WYSŁANY EMAIL!)');
  }
})

input.addEventListener('change', function (event) {
  event.target.setCustomValidity('');
})
  $(".menu-button-click:nth-child(1), .sidebar-button:nth-of-type(2)").click(function(){$(document).scrollTop(0)});
  $(".menu-button-click:nth-child(2), .sidebar-button:nth-of-type(3)").click(function(){$(document).scrollTop(750)});
  $(".menu-button-click:nth-child(3), .sidebar-button:nth-of-type(4)").click(function(){$(document).scrollTop(2100)});
  $(".menu-button-click:nth-child(4), .sidebar-button:nth-of-type(5)").click(function(){$(document).scrollTop(2655)});
