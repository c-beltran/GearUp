document.addEventListener("DOMContentLoaded", function(event) {

	$('#mainNav').affix({
		offset: {
			top: 100,
		}

	})

	document.getElementById('shelter').addEventListener("click", function( innerEvent ) {
	       var url = "https://data.cityofnewyork.us/resource/addd-ji6a.json"
	      $.getJSON(url, function(result){
	      data = result;
	        
	        $("#myOl").empty();
	       var items = [];
	       $.each(result, function(i, field){
	         items.push("<li>" +"City: "+field.city +"; address: "+field.address+"</li>");
	      });
	       $("#myOl").append(items.join(''));
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