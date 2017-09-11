

$(document).ready(function(){



	 $(".hamburger").click(function(){
	 $("nav").toggleClass("open");
	    });
	
	$("#paralaxbox1").scroll(function() {
		s = $("#paralaxbox1").scrollTop();
		$("#blockquote").css("-webkit-transform", "translateY(" + (s/1.7) + "px)");
		$("#selected-work").css("-webkit-transform", "translateY(" + (s/3) + "px)");

	});

	
	

// On click of the button, scroll to the top of the page.
	$('#top').click(function(){
    //window.scrollTo(0, 0);
    $('html').animate({scrollTop:0}, 'slow');//IE, FF
    $('body').animate({scrollTop:0}, 'slow');//chrome, don't know if Safari works
    $('#paralaxbox1').animate({scrollTop:0}, 'slow');//chrome, don't know if Safari works

    $('.popupPeriod').fadeIn(1000, function(){
        setTimeout(function(){$('.popupPeriod').fadeOut(2000);}, 3000);
    	});
	});	

// Image sequential fade in://
var grid_container = document.querySelectorAll(".grid_container img"), i = .07;
Array.prototype.forEach.call(grid_container, function(grid_container) { 
      setTimeout(function(){ grid_container.classList.add("visible") }, 300*i)
i++;
})


	



	


       
});
