document.addEventListener("DOMContentLoaded", function(event) {
	
		$('#mainNav').affix({
			offset: {
				top: 100,
			}
	
		})
	
		document.getElementById('shelter').addEventListener("click", function( innerEvent ) {
					// var url = "https://data.cityofnewyork.us/resource/addd-ji6a.json"
					var baseUrl = "https://gearup.mybluemix.net/news?";
					var queryParam = "qry=";
					var query = $("#newsQuery").val();
					var queryUrl = baseUrl + queryParam + query;
	
					jQuery.ajaxPrefilter(function(options) {
						if (options.crossDomain && jQuery.support.cors) {
							options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
						}
					});
	
					$.getJSON(queryUrl, function(result){
					data = result;
					
					console.log(queryUrl);
					
					$("#myUl").empty();
					var items = [];
					$.each(result, function(i, field){
						 items.push("<li>" + field.title +"</li>");
					});
					 $("#myUl").append(items.join(''));
					});
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