$(document).ready(function(){
  var button = $("#click_me");

  button.on('click', function(){
    $this = $(this);

    console.log("Click detected on: " + $this)

    button.html("Clicked!");
  })
})

$('html').css('background-color', '#5B73FB');
