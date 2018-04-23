var height;
var trigger;

window.onresize = calcHeight();

	$(document).ready(function () {
		height = $(document).height() - $(window).height();
		trigger = 100;
	});

	function calcHeight() {
		var height = $(document).height() - $(window).height();
	} 


	$(".footer, #logo").hide();

	$(window).scroll(function() {
        console.log(height+" "+$(this).scrollTop());
    if ($(this).scrollTop() > height - trigger) {
    	$(".footer, #logo").slideDown(100);
		} else {
					$(".footer, #logo").slideUp(100);
				}
});