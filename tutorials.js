$(document).ready(function(){
	
	var button = $("#click_me");

	button.on('click', function(){
		console.log("Setting button as clicked");
		$(this).html("Congratulations!");
	})
})
