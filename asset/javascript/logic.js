 
  $(document).ready(function(){
  var results=[];
  var animals=["bear","dear","monkey","tiger","rabbit","dog","cat","wolf","lion"];
  initial_generate_button()

  $(document).on("click",".menu_button",function(){

  var animal_type=$(this).text();
  var queryURL ='https://api.giphy.com/v1/gifs/search?q='+animal_type+'&api_key=dc6zaTOxFJmzC'
      
   
    $(".content_div").empty();
    

    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      results=response.data;
      // console.log(results)
          

      for (var i=0; i<12; i++){

      var gif_div = $('<div class="gif_div">')
      var rating = $('<p>rating: '+results[i].rating+'</p>');
      var img = $('<img class="images_div" src="'+results[i].images.downsized_still.url+'" data-state="still" number="'+i+'">');

      gif_div.append(rating);
      gif_div.append(img);

      $(".content_div").append(gif_div);
      
      }
    })
  // console.log(results)
});



  function initial_generate_button(){

        for (var i=0; i<animals.length; i++){

          var buttons = $('<button class="menu_button">'+animals[i]+'</button>');

          $(".button_div").append(buttons);
        }
       } 


  $("#add_button").on("click", function add_button(){

    var new_animal = $("#input_box").val();
    var button_new = $('<button class="menu_button">'+new_animal+'</button>');
    $(".button_div").append(button_new);
  });


 
   $(document).on("click",".images_div",function pausing_image(){

    var data_state = $(this).attr("data-state");
    // console.log(data_state);
    var index = $(this).attr("number");    

    if (data_state=="still"){
      $(this).attr("data-state","animate");
      $(this).attr("src",results[(index)].images.downsized.url);
       }
    else if (data_state=="animate"){
      $(this).attr("data-state","still");
      $(this).attr("src",results[(index)].images.downsized_still.url);
    }

  })
})
