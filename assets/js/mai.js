$(document).ready(function($) {


	if(page == "info"){
		var modalOn = false;

		$("cardlink").click(function(e){
			var floatingBlock = $(".floating");
			var modalBG = $('.modal-bg');
			
			floatingBlock.show().animate({left: "10%"}, 200);

			modalBG.show();
			modalOn = true;
			modalBG.css({
				width: $(window).width(),
				height: $(window).height(),
			});
		});

		$(".modal-bg").click(function(e){
			if(modalOn){
				var floatingBlock = $(".floating");
				var modalBG = $('.modal-bg');

				floatingBlock.hide().animate({left: "100%"}, 200);

				modalBG.hide();
				modalOn = false;

			}
		});
	}

	if(page == "timeline"){
		/*$(".time-article").hover(function(e){
			$(this).parent().parent().children(".related").removeClass('dont-show');
		},
		function(e){
			$(this).parent().parent().children(".related").addClass('dont-show');
		});*/
		$(".time-article").mouseover(function(e){
			$(this).parent().parent().bind("mouseover", function(e){
				$(this).addClass('highlight');
				$(this).children(".related").removeClass('dont-show');
			});
			$(this).parent().parent().bind("mouseleave", function(e){
				$(this).removeClass('highlight');
				$(this).children(".related").addClass('dont-show');
			});
		});
	}

	if(page == "3"){
		$(".timeline-scroll").height($(document).height() * 0.9);

		$(".item-holder div").click(function(event) {
			var extraInfo = $(this).find(".extra-info");

			if(!(extraInfo.is(":visible"))){
				$(".item-holder div").removeClass('highlight');

				$(this).addClass('highlight');
				var allExtraInfo = $(".extra-info");

				allExtraInfo.slideUp('slow', function() {});
				extraInfo.slideDown('slow', function() {
					$('html,body').animate({
			          scrollTop: $(this).offset().top
			        }, "slow");
				});
			}
		});
	}

});