function QueryWatson(qry) {
	var baseUrl = "https://gearup.mybluemix.net/news?";
	var queryParam = "qry=";
	var query = qry;
	var queryUrl = baseUrl + queryParam + query;

	jQuery.ajaxPrefilter(function(options) {
		if (options.crossDomain && jQuery.support.cors) {
			options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
		}
	});

	$.getJSON(queryUrl, function(result){
	data = result;
		
	$("#myUl").empty();
	var items = [];
	$.each(result, function(i, field){
		 items.push("<li>" + field.title +"</li>"+"<hr class='nspace'>");
	});
	 $("#myUl").append(items.join(''));
	});
}

document.addEventListener("DOMContentLoaded", function(event) {

		QueryWatson("hurricane")

		$('#mainNav').affix({
			offset: {
				top: 100,
			}

		})

		document.getElementById('shelter').addEventListener("click", function( innerEvent ) {
			QueryWatson($("#newsQuery").val());
		});

		$(document).on('click', 'a[href^="#"]', function () {
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
					var $target = $(this.hash);
					$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
					if ($target.length) {
						var targetOffset = $target.offset().top -0;
						$('html,body').animate({scrollTop: targetOffset}, 300);
						return false;
					}
				}
		});


	})