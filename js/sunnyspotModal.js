// JavaScript Document

$(function() {
  $('#sunnyspotModalLinkContainer').hover(function() {
    $('#sunnyspot').css('transform', 'scale(1.1)');
	$('#sunnyspot').css('z-index', '900');
	$('#kojiro').css('z-index', '1');
	$('#ella').css('z-index', '1');
	$('#playboy').css('z-index', '1');
	$('#enterprise').css('z-index', '1');
  }, function() {
    // on mouseout, reset the background colour
    $('#sunnyspot').css('transform', '');
	$('#sunnyspot').css('z-index', '');
	$('#kojiro').css('z-index', '');
	$('#ella').css('z-index', '');
	$('#playboy').css('z-index', '');
	$('#enterprise').css('z-index', '');
  });
});

function sunnyspotOpenModal() {

(function($) {
	
	$('#sunnyspot').css('transform', '');
	
	// closes the modal link divs
	document.getElementById('kojiroModalLinkContainer').style.display = 'none';
	document.getElementById('sunnyspotModalLinkContainer').style.display = 'none';
	document.getElementById('ellaModalLinkContainer').style.display = 'none';
	document.getElementById('playboyModalLinkContainer').style.display = 'none';
	document.getElementById('enterpriseModalLinkContainer').style.display = 'none';
	
	if (window.matchMedia("(min-width: 48em)").matches) {
    $(document).ready(function() {
		 // scrolls to the top of the gallery div
         $('html, body').animate({
           'scrollTop':   $('#gallery').offset().top
         }, 500); 
	});
	}
	 
	 
	// changes the height of the wrapper around the gallery
	document.getElementById('galleryHeightWrapper').style.minHeight = '100vh';
	 
	// removes all padding from the gallery
	document.getElementById('gallery').style.padding = '0';
		 
	// removes the visual of the gallery title
	document.getElementById('myWork').style.opacity = '0';
    document.getElementById('myWork').style.transform = 'scale(0)';
			
			 
	if (window.matchMedia("(min-width: 48em)").matches) {		 
			 
	setTimeout(function() {
		
	tempScrollTop = $(window).scrollTop();
 
    // closes other elements on screen
    document.getElementById('aboveFold').style.display = 'none';
    document.getElementById('title').style.display = 'none';
    document.getElementById('arrowDown').style.display = 'none';
    document.getElementById('aboutMe').style.display = 'none';
    document.getElementById('porthole').style.display = 'none';

    // removes the gallery title
    document.getElementById('myWork').style.height = '0';
    document.getElementById('myWork').style.marginBottom = '0';
	
	// adds the padding to accurately position the modal
    document.getElementById('galleryRow').style.paddingTop = '7.5vh';

    // rescales and fades other line 1 items
    document.getElementById('kojiro').style.height = '85vh';
    document.getElementById('kojiro').style.width = '0';
    document.getElementById('kojiro').style.opacity = '0';
    document.getElementById('kojiro').style.marginLeft = '0';
	$( "#kojiro" ).addClass( "smallViewHide" );
    
    // rescales and fades line 2 items
    document.getElementById('ella').style.height = '0';
    document.getElementById('ella').style.opacity = '0';
	$( "#ella" ).addClass( "smallViewHide" );
    document.getElementById('playboy').style.height = '0';
    document.getElementById('playboy').style.opacity = '0';
	$( "#playboy" ).addClass( "smallViewHide" );
    document.getElementById('enterprise').style.height = '0';
    document.getElementById('enterprise').style.opacity = '0';
	$( "#enterprise" ).addClass( "smallViewHide" );
    
    // displays left and right arrows
    document.getElementById('sunnyspotLeftArrow').style.left = '3.5vw';
    document.getElementById('sunnyspotLeftArrow').style.opacity = '1';
    document.getElementById('sunnyspotRightArrow').style.right = '3.5vw';
    document.getElementById('sunnyspotRightArrow').style.opacity = '1';
    
    // scales a gallery item into a modal
    document.getElementById('sunnyspot').style.height = '85vh';
    document.getElementById('sunnyspot').style.width = '80%';
    document.getElementById('sunnyspot').style.marginLeft = '10%';
    document.getElementById('sunnyspot').style.marginRight = '10%';
    document.getElementById('sunnyspot').style.overflowX = 'hidden';
    document.getElementById('sunnyspot').style.overflowY = 'scroll';
    document.getElementById('sunnyspotHeader').style.height = '55%';
    document.getElementById('sunnyspotMain').style.height = '45%';
    document.getElementById('sunnyspotMain').style.opacity = '1';
    document.getElementById('sunnyspotCloseX').style.transform = 'scale(1)';
    document.getElementById('sunnyspotCloseX').style.opacity = '1';
    document.getElementById('sunnyspotLabel').style.transform = 'scale(1.3)';
    document.getElementById('sunnyspotLabel').style.bottom = '3.75em';
    document.getElementById('sunnyspotLabel').style.width = '38%';
	document.getElementById('sunnyspotBottomLabel').style.paddingTop = '0.3em';
	document.getElementById('sunnyspotBottomLabel').style.paddingBottom = '0.4em';
	document.getElementById('sunnyspotTopLabel').style.paddingLeft = '15px';
	document.getElementById('sunnyspotBottomLabel').style.paddingLeft = '15px';
	
	setTimeout(function() {
	// stops displaying other modals
	document.getElementById('kojiro').style.display = 'none';
	document.getElementById('ella').style.display = 'none';
	document.getElementById('playboy').style.display = 'none';
	document.getElementById('enterprise').style.display = 'none';
		}, 510);
	
	}, 500);
	
	} else {
		
		setTimeout(function() {
		
	tempScrollTop = $(window).scrollTop();
 
    // closes other elements on screen
    document.getElementById('aboveFold').style.display = 'none';
    document.getElementById('title').style.display = 'none';
    document.getElementById('arrowDown').style.display = 'none';
    document.getElementById('aboutMe').style.display = 'none';
    document.getElementById('porthole').style.display = 'none';

    // removes the gallery title
    document.getElementById('myWork').style.height = '0';
    document.getElementById('myWork').style.marginBottom = '0';
	
	// adds the padding to accurately position the modal
    document.getElementById('galleryRow').style.paddingTop = '7.5vh';

    // rescales and fades other line 1 items
    document.getElementById('kojiro').style.height = '85vh';
    document.getElementById('kojiro').style.width = '0';
    document.getElementById('kojiro').style.opacity = '0';
    document.getElementById('kojiro').style.marginLeft = '0';
	$( "#kojiro" ).addClass( "smallViewHide" );
    
    // rescales and fades line 2 items
    document.getElementById('ella').style.height = '0';
    document.getElementById('ella').style.opacity = '0';
	$( "#ella" ).addClass( "smallViewHide" );
    document.getElementById('playboy').style.height = '0';
    document.getElementById('playboy').style.opacity = '0';
	$( "#playboy" ).addClass( "smallViewHide" );
    document.getElementById('enterprise').style.height = '0';
    document.getElementById('enterprise').style.opacity = '0';
	$( "#enterprise" ).addClass( "smallViewHide" );
    
    // displays left and right arrows
    document.getElementById('sunnyspotLeftArrow').style.left = '3.5vw';
    document.getElementById('sunnyspotLeftArrow').style.opacity = '1';
    document.getElementById('sunnyspotRightArrow').style.right = '3.5vw';
    document.getElementById('sunnyspotRightArrow').style.opacity = '1';
    
    // scales a gallery item into a modal
    document.getElementById('sunnyspot').style.height = '85vh';
    document.getElementById('sunnyspot').style.width = '80%';
    document.getElementById('sunnyspot').style.marginLeft = '10%';
    document.getElementById('sunnyspot').style.marginRight = '10%';
    document.getElementById('sunnyspot').style.overflowX = 'hidden';
    document.getElementById('sunnyspot').style.overflowY = 'scroll';
    document.getElementById('sunnyspotHeader').style.height = '55%';
    document.getElementById('sunnyspotMain').style.height = '45%';
    document.getElementById('sunnyspotMain').style.opacity = '1';
    document.getElementById('sunnyspotCloseX').style.transform = 'scale(1)';
    document.getElementById('sunnyspotCloseX').style.opacity = '1';
    document.getElementById('sunnyspotLabel').style.transform = 'scale(1.3)';
    document.getElementById('sunnyspotLabel').style.bottom = '3.75em';
    document.getElementById('sunnyspotLabel').style.width = '38%';
	document.getElementById('sunnyspotBottomLabel').style.paddingTop = '0.3em';
	document.getElementById('sunnyspotBottomLabel').style.paddingBottom = '0.4em';
	document.getElementById('sunnyspotTopLabel').style.paddingLeft = '15px';
	document.getElementById('sunnyspotBottomLabel').style.paddingLeft = '15px';
	
	// stops displaying other modals
	document.getElementById('kojiro').style.display = 'none';
	document.getElementById('ella').style.display = 'none';
	document.getElementById('playboy').style.display = 'none';
	document.getElementById('enterprise').style.display = 'none';
	
	}, 0);
		
	}
		 
})(jQuery);


}

function sunnyspotCloseX() {
	
	// starts displaying other modals
	document.getElementById('kojiro').style.display = '';
	document.getElementById('ella').style.display = '';
	document.getElementById('playboy').style.display = '';
	document.getElementById('enterprise').style.display = '';
	
	// removes left and right arrows
    document.getElementById('sunnyspotLeftArrow').style.left = '';
    document.getElementById('sunnyspotLeftArrow').style.opacity = '';
    document.getElementById('sunnyspotRightArrow').style.right = '';
    document.getElementById('sunnyspotRightArrow').style.opacity = '';
	
	if (window.matchMedia("(min-width: 48em)").matches) {
	$("#sunnyspot").animate({ scrollTop: 0 }, 500);
	} else {
	$("#sunnyspot").animate({ scrollTop: 0 }, 0);
	}
	
	closeX();
	
}


function sunnyspotLeftArrow() {
	
	
	// starts displaying relevant modal
	document.getElementById('kojiro').style.display = '';
	
    // closes itself
    document.getElementById('sunnyspot').style.width = '0';
    document.getElementById('sunnyspot').style.opacity = '0';
    document.getElementById('sunnyspot').style.marginLeft = '0';
    document.getElementById('sunnyspot').style.marginRight = '0';
    document.getElementById('sunnyspotHeader').style.height = '100%';
    document.getElementById('sunnyspotMain').style.height = '0';
    document.getElementById('sunnyspotMain').style.opacity = '0';
	document.getElementById('sunnyspot').style.overflowX = 'auto';
    document.getElementById('sunnyspot').style.overflowY = 'hidden';
	
	if (window.matchMedia("(min-width: 48em)").matches) {
	$("#sunnyspot").animate({ scrollTop: 0 }, 500);
	} else {
	$("#sunnyspot").animate({ scrollTop: 0 }, 0);
	}
	
    document.getElementById('sunnyspotCloseX').style.transform = 'scale(0)';
    document.getElementById('sunnyspotCloseX').style.opacity = '0';
    document.getElementById('sunnyspotLabel').style.transform = 'scale(1)';
    document.getElementById('sunnyspotLabel').style.bottom = '0';
	document.getElementById('sunnyspotLabel').style.width = '100%';
	document.getElementById('sunnyspotBottomLabel').style.paddingTop = '0.5em';
	document.getElementById('sunnyspotBottomLabel').style.paddingBottom = '0.7em';
	document.getElementById('sunnyspotTopLabel').style.paddingLeft = '35px';
	document.getElementById('sunnyspotBottomLabel').style.paddingLeft = '35px';
	$( "#sunnyspot" ).addClass( "smallViewHide" );
    
    // switches out arrow for the proper item
    document.getElementById('sunnyspotLeftArrow').style.left = '-3.5vw';
    document.getElementById('sunnyspotLeftArrow').style.opacity = '0';
    document.getElementById('sunnyspotRightArrow').style.right = '-3.5vw';
    document.getElementById('sunnyspotRightArrow').style.opacity = '0';
	// NONE document.getElementById('kojiroLeftArrow').style.left = '3.5vw';
    // NONE document.getElementById('kojiroLeftArrow').style.opacity = '1';
    document.getElementById('kojiroRightArrow').style.right = '3.5vw';
    document.getElementById('kojiroRightArrow').style.opacity = '1';
    
    // moves other modal into place
	$( "#kojiro" ).removeClass( "smallViewHide" );
    document.getElementById('kojiro').style.height = '85vh';
    document.getElementById('kojiro').style.width = '80%';
    document.getElementById('kojiro').style.marginLeft = '10%';
    document.getElementById('kojiro').style.marginRight = '10%';
    document.getElementById('kojiro').style.opacity = '1';
    document.getElementById('kojiroHeader').style.height = '55%';
    document.getElementById('kojiroMain').style.height = '45%';
    document.getElementById('kojiroMain').style.opacity = '1';
	document.getElementById('kojiro').style.overflowX = 'hidden';
    document.getElementById('kojiro').style.overflowY = 'scroll';
    document.getElementById('kojiroCloseX').style.transform = 'scale(1)';
    document.getElementById('kojiroCloseX').style.opacity = '1';
    document.getElementById('kojiroLabel').style.transform = 'scale(1.3)';
    document.getElementById('kojiroLabel').style.bottom = '3.75em';
    document.getElementById('kojiroLabel').style.width = '38%';
	document.getElementById('kojiroBottomLabel').style.paddingTop = '0.3em';
	document.getElementById('kojiroBottomLabel').style.paddingBottom = '0.4em';
	document.getElementById('kojiroTopLabel').style.paddingLeft = '15px';
	document.getElementById('kojiroBottomLabel').style.paddingLeft = '15px';
	
	setTimeout(function() {
	// stops displaying current modal
	document.getElementById('sunnyspot').style.display = 'none';
		}, 510);
	
}

function sunnyspotRightArrow() {
	
	// starts displaying relevant modal
	document.getElementById('ella').style.display = '';
	
    // closes itself
    document.getElementById('sunnyspot').style.height = '0';
    document.getElementById('sunnyspot').style.width = '32.2666666667%';
    document.getElementById('sunnyspot').style.opacity = '0';
    document.getElementById('sunnyspot').style.marginLeft = '1.6%';
    document.getElementById('sunnyspot').style.marginRight = '0';
    document.getElementById('sunnyspot').style.marginBottom = '0';
    document.getElementById('sunnyspotHeader').style.height = '100%';
    document.getElementById('sunnyspotMain').style.height = '0';
    document.getElementById('sunnyspotMain').style.opacity = '0';
	document.getElementById('sunnyspot').style.overflowX = 'auto';
    document.getElementById('sunnyspot').style.overflowY = 'hidden';
	
	if (window.matchMedia("(min-width: 48em)").matches) {
	$("#sunnyspot").animate({ scrollTop: 0 }, 500);
	} else {
	$("#sunnyspot").animate({ scrollTop: 0 }, 0);
	}
	
    document.getElementById('sunnyspotCloseX').style.transform = 'scale(0)';
    document.getElementById('sunnyspotCloseX').style.opacity = '0';
    document.getElementById('sunnyspotLabel').style.transform = 'scale(1)';
    document.getElementById('sunnyspotLabel').style.bottom = '0';
	document.getElementById('sunnyspotLabel').style.width = '100%';
	document.getElementById('sunnyspotBottomLabel').style.paddingTop = '0.5em';
	document.getElementById('sunnyspotBottomLabel').style.paddingBottom = '0.7em';
	document.getElementById('sunnyspotTopLabel').style.paddingLeft = '35px';
	document.getElementById('sunnyspotBottomLabel').style.paddingLeft = '35px';
	$( "#sunnyspot" ).addClass( "smallViewHide" );
    
    // switches out arrow for the proper item
    document.getElementById('sunnyspotLeftArrow').style.left = '-3.5vw';
    document.getElementById('sunnyspotLeftArrow').style.opacity = '0';
    document.getElementById('sunnyspotRightArrow').style.right = '-3.5vw';
    document.getElementById('sunnyspotRightArrow').style.opacity = '0';
    document.getElementById('ellaLeftArrow').style.left = '3.5vw';
    document.getElementById('ellaLeftArrow').style.opacity = '1';
    document.getElementById('ellaRightArrow').style.right = '3.5vw';
    document.getElementById('ellaRightArrow').style.opacity = '1';
	
	// resizes top row items
    document.getElementById('kojiro').style.height = '0';
    document.getElementById('kojiro').style.width = '32.2666666667%';
    document.getElementById('kojiro').style.opacity = '0';
    document.getElementById('kojiro').style.marginBottom = '0';
    
    
    // resizes bottom row items
    document.getElementById('playboy').style.height = '85vh';
    document.getElementById('playboy').style.opacity = '0';
    document.getElementById('playboy').style.width = '0';
    document.getElementById('playboy').style.marginLeft = '0';
    document.getElementById('enterprise').style.height = '85vh';
    document.getElementById('enterprise').style.opacity = '0';
    document.getElementById('enterprise').style.width = '0';
    document.getElementById('enterprise').style.marginLeft = '0';
    
    
    // moves other modal into place
	$( "#ella" ).removeClass( "smallViewHide" );
    document.getElementById('ella').style.height = '85vh';
    document.getElementById('ella').style.width = '80%';
    document.getElementById('ella').style.marginLeft = '10%';
    document.getElementById('ella').style.marginRight = '10%';
    document.getElementById('ella').style.opacity = '1';
    document.getElementById('ellaHeader').style.height = '55%';
    document.getElementById('ellaMain').style.height = '45%';
    document.getElementById('ellaMain').style.opacity = '1';
	document.getElementById('ella').style.overflowX = 'hidden';
    document.getElementById('ella').style.overflowY = 'scroll';
    document.getElementById('ellaCloseX').style.transform = 'scale(1)';
    document.getElementById('ellaCloseX').style.opacity = '1';
    document.getElementById('ellaLabel').style.transform = 'scale(1.3)';
    document.getElementById('ellaLabel').style.bottom = '3.75em';
    document.getElementById('ellaLabel').style.width = '38%';
	document.getElementById('ellaBottomLabel').style.paddingTop = '0.3em';
	document.getElementById('ellaBottomLabel').style.paddingBottom = '0.4em';
	document.getElementById('ellaTopLabel').style.paddingLeft = '15px';
	document.getElementById('ellaBottomLabel').style.paddingLeft = '15px';
	
	setTimeout(function() {
	// stops displaying current modal
	document.getElementById('sunnyspot').style.display = 'none';
		}, 510);
	
}

