 


 $(document).ready(function(){
  var animal_type="dog";
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag="+animal_type;
    var animals=["bear","dear","monkey","tiger","rabbit","dog","cat","wolf","lion"];
    $(".content_div").empty();

    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      console.log(response)
      generate_button()

      var img = $('<img src="'+response.data.image_original_url+'">');

      $(".content_div").append(img);
     
    })


     function generate_button(){

        for (var i=0; i<animals.length; i++){

          var buttons = $('<button class="menu_button">'+animals[i]+'</button>')

          $(".button_div").append(buttons)

        }
       }

  });


