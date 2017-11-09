$(document).ready(function() {
	
 	$("#stream1_btn").on("click", function() {
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});
	$("p").click(function() {
		$("p").toggleClass("redtext");
	});
	$("h2").hover(function() {
		$("h2").toggleClass("h2color");
		$(this).toggleClass("growfont");
	});
	$("a").replaceWith("<button class='bottom_button'>New Button</>");
	
	$("button:first").click(function(){
        $("p:first").toggle("slow");
    });
    $("button:last").click(function() {
    	$(this).hide(5000);
    	$(this).show(5000);
    });
    $("button").hover(function() {
		$("body").toggleClass("newbgcolor");
	});
}); 
