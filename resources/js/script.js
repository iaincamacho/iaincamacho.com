// PARALX BACKGROUND // 

$(window).scroll(function(e){
  parallax();
  if ($(window).scrollTop() > 10) {
  	$('.header').addClass('border');
  } else {
  	$('.header').removeClass('border');
  }
});

function parallax(){
  var scrolled = $(window).scrollTop();
  $('#background').css('top',-(scrolled*.25)+60+'px');
}

// REVOLVING TITLE SLIDER // 

function changebackground() {
   $('#headerSlider').stop().animate({ 'background-position-y': '-=120px' }, 300, 'linear');
}
setInterval(changebackground, 3000);

$(document).ready(function() {

// Opening Menu Function

	$('#more').click(function() {
		if ($('#headers .superheader').hasClass('active')) {
			$('#headers .superheader').removeClass('active');
		} else {
			$('#headers .superheader').addClass('active');
		}
		return(false);
	});

// Changing Most Recently Background Slider

	$('.inner-screen.imac').stop().animate({ 'background-position-y': '-=100000px' }, 2000000, 'linear')});

// Photo Slider
function movePhotos() {
   $('.inner-screen.ipad').stop().animate({ 'background-position-x': '-=295px' }, 300, 'linear');
}
setInterval(movePhotos, 3000);


/// FANCY BOX  //

$(document).ready(function() {
	$(".fancybox").fancybox({
		openEffect	: 'fade',
		closeEffect	: 'fade',
		nextEffect	: 'elastic',
		prevEffect	: 'elastic'
	});
});


