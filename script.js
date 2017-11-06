$(document).ready(function(){
  // alert("Alert");
  var button = $("#click_me");

  button.on('click', function(){
    $this = $(this);

    console.log("Click detected on: " + $this)

    button.html("Clicked!");
  })
})
