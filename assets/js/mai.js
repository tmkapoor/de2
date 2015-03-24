var moreInfo = [
	{
		title: "Solar Eclipse",
		img: "http://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Solar_eclipse_1999_4_NR.jpg/609px-Solar_eclipse_1999_4_NR.jpg",
		desc: "Something...",
		bits: {
			section1: "Lorem ipsum dolor sit amet, vix in omnes mollis appetere, elitr debitis mnesarchum ad pro. Cu duo modo debet, sed alterum adversarium ne, euismod tibique intellegebat ne per.",
			section2: "Lorem ipsum dolor sit amet, vix in omnes mollis appetere, elitr debitis mnesarchum ad pro. Cu duo modo debet, sed alterum adversarium ne, euismod tibique intellegebat ne per.",
			section3: "Lorem ipsum dolor sit amet, vix in omnes mollis appetere, elitr debitis mnesarchum ad pro. Cu duo modo debet, sed alterum adversarium ne, euismod tibique intellegebat ne per.",
			section4: "Lorem ipsum dolor sit amet, vix in omnes mollis appetere, elitr debitis mnesarchum ad pro. Cu duo modo debet, sed alterum adversarium ne, euismod tibique intellegebat ne per.",
		}
	},
	{
		title: "Shetland Islands",
		img: "http://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Solar_eclipse_1999_4_NR.jpg/609px-Solar_eclipse_1999_4_NR.jpg",
		desc: "Something...",
		bits: {
			section1: "Lorem ipsum dolor sit amet, vix in omnes mollis appetere, elitr debitis mnesarchum ad pro. Cu duo modo debet, sed alterum adversarium ne, euismod tibique intellegebat ne per.",
			section2: "Lorem ipsum dolor sit amet, vix in omnes mollis appetere, elitr debitis mnesarchum ad pro. Cu duo modo debet, sed alterum adversarium ne, euismod tibique intellegebat ne per.",
			section3: "Lorem ipsum dolor sit amet, vix in omnes mollis appetere, elitr debitis mnesarchum ad pro. Cu duo modo debet, sed alterum adversarium ne, euismod tibique intellegebat ne per.",
			section4: "Lorem ipsum dolor sit amet, vix in omnes mollis appetere, elitr debitis mnesarchum ad pro. Cu duo modo debet, sed alterum adversarium ne, euismod tibique intellegebat ne per.",
		}
	},
	{
		title: "Norwegian Sea",
		img: "http://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Solar_eclipse_1999_4_NR.jpg/609px-Solar_eclipse_1999_4_NR.jpg",
		desc: "Something...",
		bits: {
			section1: "Lorem ipsum dolor sit amet, vix in omnes mollis appetere, elitr debitis mnesarchum ad pro. Cu duo modo debet, sed alterum adversarium ne, euismod tibique intellegebat ne per.",
			section2: "Lorem ipsum dolor sit amet, vix in omnes mollis appetere, elitr debitis mnesarchum ad pro. Cu duo modo debet, sed alterum adversarium ne, euismod tibique intellegebat ne per.",
			section3: "Lorem ipsum dolor sit amet, vix in omnes mollis appetere, elitr debitis mnesarchum ad pro. Cu duo modo debet, sed alterum adversarium ne, euismod tibique intellegebat ne per.",
			section4: "Lorem ipsum dolor sit amet, vix in omnes mollis appetere, elitr debitis mnesarchum ad pro. Cu duo modo debet, sed alterum adversarium ne, euismod tibique intellegebat ne per.",
		}
	},
	{
		title: "British Isles",
		img: "http://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Solar_eclipse_1999_4_NR.jpg/609px-Solar_eclipse_1999_4_NR.jpg",
		desc: "Something...",
		bits: {
			section1: "Lorem ipsum dolor sit amet, vix in omnes mollis appetere, elitr debitis mnesarchum ad pro. Cu duo modo debet, sed alterum adversarium ne, euismod tibique intellegebat ne per.",
			section2: "Lorem ipsum dolor sit amet, vix in omnes mollis appetere, elitr debitis mnesarchum ad pro. Cu duo modo debet, sed alterum adversarium ne, euismod tibique intellegebat ne per.",
			section3: "Lorem ipsum dolor sit amet, vix in omnes mollis appetere, elitr debitis mnesarchum ad pro. Cu duo modo debet, sed alterum adversarium ne, euismod tibique intellegebat ne per.",
			section4: "Lorem ipsum dolor sit amet, vix in omnes mollis appetere, elitr debitis mnesarchum ad pro. Cu duo modo debet, sed alterum adversarium ne, euismod tibique intellegebat ne per.",
		}
	},
	{
		title: "Liz Bonnin",
		img: "http://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Solar_eclipse_1999_4_NR.jpg/609px-Solar_eclipse_1999_4_NR.jpg",
		desc: "Something...",
		bits: {
			section1: "Lorem ipsum dolor sit amet, vix in omnes mollis appetere, elitr debitis mnesarchum ad pro. Cu duo modo debet, sed alterum adversarium ne, euismod tibique intellegebat ne per.",
			section2: "Lorem ipsum dolor sit amet, vix in omnes mollis appetere, elitr debitis mnesarchum ad pro. Cu duo modo debet, sed alterum adversarium ne, euismod tibique intellegebat ne per.",
			section3: "Lorem ipsum dolor sit amet, vix in omnes mollis appetere, elitr debitis mnesarchum ad pro. Cu duo modo debet, sed alterum adversarium ne, euismod tibique intellegebat ne per.",
			section4: "Lorem ipsum dolor sit amet, vix in omnes mollis appetere, elitr debitis mnesarchum ad pro. Cu duo modo debet, sed alterum adversarium ne, euismod tibique intellegebat ne per.",
		}
	},

	{
		title: "National Eclipse Weather Experiment",
		img: "http://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Solar_eclipse_1999_4_NR.jpg/609px-Solar_eclipse_1999_4_NR.jpg",
		desc: "Something...",
		bits: {
			section1: "Lorem ipsum dolor sit amet, vix in omnes mollis appetere, elitr debitis mnesarchum ad pro. Cu duo modo debet, sed alterum adversarium ne, euismod tibique intellegebat ne per.",
			section2: "Lorem ipsum dolor sit amet, vix in omnes mollis appetere, elitr debitis mnesarchum ad pro. Cu duo modo debet, sed alterum adversarium ne, euismod tibique intellegebat ne per.",
			section3: "Lorem ipsum dolor sit amet, vix in omnes mollis appetere, elitr debitis mnesarchum ad pro. Cu duo modo debet, sed alterum adversarium ne, euismod tibique intellegebat ne per.",
			section4: "Lorem ipsum dolor sit amet, vix in omnes mollis appetere, elitr debitis mnesarchum ad pro. Cu duo modo debet, sed alterum adversarium ne, euismod tibique intellegebat ne per.",
		}
	},
];



$(document).ready(function($) {

	if(page == "info"){
		var modalOn = false;

		var depth = 0;

		var cardlinkIndex = 0;

		var clickedCardlink;

		$("cardlink").click(function(e){
			var floatingBlock = $(".floating");
			var modalBG = $('.modal-bg');

			clickedCardlink = $(this);

			cardlinkIndex = $(this).attr('index');

			modalBG.show();
			modalOn = true;
			modalBG.css({
				width: $(window).width(),
				height: $(window).height(),
			});
			
			floatingBlock.show().animate({left: "10%"}, 200);
			$('html, body').animate({
		        scrollTop: floatingBlock.offset().top
		    }, "fast");

		    //cardlinkIndex += 0;

		    var contentItem = moreInfo[cardlinkIndex];

		    var contentHolder = floatingBlock.find('.content-holder');

		    var content = "";

		    content += "<div class='col-md-8 col-xs-12'> <h2>"+  contentItem["title"] +"</h2> <h3>"+ contentItem['desc'] +"</h3> </br> <a href='/stage3' class='btn btn-lg btn-primary' >View on timeline</a> </div>";

		    content += "<div class='col-md-4 col-xs-12'> <img src='" + contentItem['img'] + "' /></div>";

		    var keys = Object.keys(contentItem['bits']);

		    content += " <div class='col-xs-12'> ";

		    for(var i = 0 ; i < keys.length ; i++){
		    	content += "<label>" + keys[i] + "</label>";
		    	content += "<p>" + contentItem['bits'][keys[i]] + "</p>";
		    }

		    content += "</div>";

		    contentHolder.html(content);

		});

		$(".modal-bg").click(function(e){
			if(modalOn){
				var floatingBlock = $(".floating");
				var modalBG = $('.modal-bg');

				floatingBlock.show().animate({left: "10%"}, 200);
				$('html, body').animate({
			        scrollTop: clickedCardlink.offset().top
			    }, "fast");

				floatingBlock.hide().animate({left: "100%"}, 200);

				modalBG.hide();
				modalOn = false;

			}
		});

		$(".buttons-holder div").click(function(event) {
			if($(this).hasClass('deeper')){
				if(depth >= 0 && depth < 2){
					var levelToHide = ".level" + depth;
					depth++;
					var levelToShow = ".level" + depth;

					$("div"+levelToHide).slideUp("slow");
					$(levelToShow).slideDown('"slow"', function() {});
				}
			}
			else if($(this).hasClass('shallow')){
				if(depth > 0 && depth <= 2){
					var levelToHide = ".level" + depth;
					depth--;
					var levelToShow = ".level" + depth;

					$(levelToHide).slideUp("slow");
					$(levelToShow).slideDown('"slow"', function() {});
				}
			}
			else if ($(this).hasClass('timeline')){
				window.location.href = '/stage3';
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
				extraInfo.slideDown('slow', function() {});

				$('html,body').animate({
			          scrollTop: $(this).offset().top
			        }, "slow");
			}
		});
	}

});