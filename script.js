// $(document).ready(function(){
//   // alert("Alert");
//   var button = $("#click_me");
//
//   button.on('click', function(){
//     $this = $(this);
//
//     console.log("Click detected on: " + $this)
//
//     button.html("Clicked!");
//   })
// })



  function initMap() {
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }
