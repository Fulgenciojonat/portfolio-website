$(document).ready(function(){
	$('a[href^="#"]').on('click', function(event) {

   let target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }

	});

	$(window).on("load",function(){
      $(".loader-wrapper").fadeOut("slow");
    });

	$('.details').on("click", function(){
		$(this).next(".lead").slideToggle();
		$(this).find(".icon").toggleClass('is-open');


	});


});
