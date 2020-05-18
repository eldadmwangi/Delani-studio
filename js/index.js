$(document).ready(function(){
    $("#design1").click(function(){
      $(".design").toggle();
    });
    $(".des").click(function(){
        $(".design").toggle();
      });
    $("#development1").click(function(){
        $(".development").toggle();
      });
      $(".dev").click(function(){
          $(".development").toggle();
        });

        $("#product1").click(function(){
            $(".product").toggle();
          });
          $(".prod").click(function(){
              $(".product").toggle();
            });

            $("#message").click(function(event) {
                whatToSay = "Hi, we have recieved your message";
                alert(whatToSay);
              });

              $('#portfolios').hover(function() {
                $('#portfolios.img').fadeIn('slow');
                $('#portfolios.img').fadeOut('slow'); 
            }, function() { 
                $('#portfolios').fadeIn('slow'); 
                $('#portfolios').fadeOut('slow');   
                $("#portfolios").delay(300).fadeIn(300);   
            });

            $('#portfolios1').hover(function() {
                $('#portfolios1.img').fadeIn('slow');
                $('#portfolios1.img').fadeOut('slow'); 
            }, function() { 
                $('#portfolios1').fadeIn('slow'); 
                $('#portfolios1').fadeOut('slow'); 
                $("#portfolios1").delay(300).fadeIn(300);  
            });
            });



