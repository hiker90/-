$(function() {
		$(window).scroll(function(event) {
			if($(this).scrollTop()==0){
				$("#to-top").hide();
			}
			if($(this).scrollTop()!=0){
				$("#to-top").show();
			}
		});
		$("#to-top>a").click(function(event) {
			event.preventDefault();
			$("html,body").animate({
				scrollTop:"0px"},
				600
				)
		});
});