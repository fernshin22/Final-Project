

$(document).ready(function(){



	 $(".hamburger").click(function(){
	 $("nav").toggleClass("open");
	    })
	});

	$("#paralaxbox1").scroll(function() {
		s = $("#paralaxbox1").scrollTop();
		$("#paralaxbox1 #blockquote").css("-webkit-transform", "translateY(" + (s/3) + "px)");

	$("#paralaxbox2").scroll(function() {
		s = $("#paralaxbox2").scrollTop();
		$("#paralaxbox2 #selected-work").css("-webkit-transform", "translateY(" + (s/3) + "px)");
	})''

// On click of the button, scroll to the top of the page.
	$('#top').click(function(){
    //window.scrollTo(0, 0);
    $('html').animate({scrollTop:0}, 'slow');//IE, FF
    $('body').animate({scrollTop:0}, 'slow');//chrome, don't know if Safari works
    $('.popupPeriod').fadeIn(1000, function(){
        setTimeout(function(){$('.popupPeriod').fadeOut(2000);}, 3000);
    });

	



	
       
});


//Hi Barry, I'm having a really hard time with getting javascript to work.
//Basically, I'm only inserting it into my index.html page to do the following:
//1. Open the hamburger menu to reveal the list 
//2. Applied "parallax" which has somehow disabled the top navigation links
//and all the content below the header are overlapping it instead of scrolling under
//3. Back to Top button on the bottom of the page not working either


