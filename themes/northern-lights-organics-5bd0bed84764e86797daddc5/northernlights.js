$(document).ready(function($) {
    $.ageCheck({minAge: 19});        

	new WOW().init();    

	$("a[href='#top']").click(function() {
	  $("html, body").animate({ scrollTop: 0 }, "slow");
	  return false;
	});

});  
