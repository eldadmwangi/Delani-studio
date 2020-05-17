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

            $( "#portfolios" ).hover(
                function() {
                  $( this ).append( $( "<span> ***</span>" ) );
                }, function() {
                  $( this ).find( "span" ).last().remove();
                });

                $( "#portfolios.img" ).hover(function() {
                    $( this ).fadeOut( 100 );
                    $( this ).fadeIn( 500 );
                  });
            });



