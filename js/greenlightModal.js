// JavaScript Document

$(function() {
  $('#greenlightModalLinkContainer').hover(function() {
    $('#greenlight').css('transform', 'scale(1.1)');
	$('#greenlight').css('z-index', '900');
	$('#sunnyspot').css('z-index', '1');
	$('#kojiro').css('z-index', '1');
	$('#ella').css('z-index', '1');
	$('#playboy').css('z-index', '1');
	$('#enterprise').css('z-index', '1');
  }, function() {
    // on mouseout, reset the background colour
    $('#greenlight').css('transform', '');
	$('#greenlight').css('z-index', '');
	$('#sunnyspot').css('z-index', '');
	$('#kojiro').css('z-index', '');
	$('#ella').css('z-index', '');
	$('#playboy').css('z-index', '');
	$('#enterprise').css('z-index', '');
  });
});

function greenlightOpenModal() {

(function($) {
	
	$('#greenlight').css('transform', '');
	
	// closes the modal link divs
	document.getElementById('kojiroModalLinkContainer').style.display = 'none';
	document.getElementById('greenlightModalLinkContainer').style.display = 'none';
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
	  document.getElementById('sunnyspot').style.height = '85vh';
    document.getElementById('sunnyspot').style.width = '0';
    document.getElementById('sunnyspot').style.opacity = '0';
	document.getElementById('sunnyspot').style.marginLeft = '0';
	$( "#sunnyspot" ).addClass( "smallViewHide" );
    
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
    document.getElementById('greenlightLeftArrow').style.left = '3.5vw';
    document.getElementById('greenlightLeftArrow').style.opacity = '1';
    document.getElementById('greenlightRightArrow').style.right = '3.5vw';
    document.getElementById('greenlightRightArrow').style.opacity = '1';
    
    // scales a gallery item into a modal
    document.getElementById('greenlight').style.height = '85vh';
    document.getElementById('greenlight').style.width = '80%';
    document.getElementById('greenlight').style.marginLeft = '10%';
    document.getElementById('greenlight').style.marginRight = '10%';
    document.getElementById('greenlight').style.overflowX = 'hidden';
    document.getElementById('greenlight').style.overflowY = 'scroll';
    document.getElementById('greenlightHeader').style.height = '55%';
    document.getElementById('greenlightMain').style.height = '45%';
    document.getElementById('greenlightMain').style.opacity = '1';
    document.getElementById('greenlightCloseX').style.transform = 'scale(1)';
    document.getElementById('greenlightCloseX').style.opacity = '1';
    document.getElementById('greenlightLabel').style.transform = 'scale(1.3)';
    document.getElementById('greenlightLabel').style.bottom = '3.75em';
    document.getElementById('greenlightLabel').style.width = '38%';
	document.getElementById('greenlightBottomLabel').style.paddingTop = '0.3em';
	document.getElementById('greenlightBottomLabel').style.paddingBottom = '0.4em';
	document.getElementById('greenlightTopLabel').style.paddingLeft = '15px';
	document.getElementById('greenlightBottomLabel').style.paddingLeft = '15px';
	
	setTimeout(function() {
	// stops displaying other modals
	document.getElementById('kojiro').style.display = 'none';
	document.getElementById('sunnyspot').style.display = 'none';
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
	document.getElementById('sunnyspot').style.height = '85vh';
    document.getElementById('sunnyspot').style.width = '0';
    document.getElementById('sunnyspot').style.opacity = '0';
    document.getElementById('sunnyspot').style.marginLeft = '0';
	$( "#sunnyspot" ).addClass( "smallViewHide" );
    
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
    document.getElementById('greenlightLeftArrow').style.left = '3.5vw';
    document.getElementById('greenlightLeftArrow').style.opacity = '1';
    document.getElementById('greenlightRightArrow').style.right = '3.5vw';
    document.getElementById('greenlightRightArrow').style.opacity = '1';
    
    // scales a gallery item into a modal
    document.getElementById('greenlight').style.height = '85vh';
    document.getElementById('greenlight').style.width = '80%';
    document.getElementById('greenlight').style.marginLeft = '10%';
    document.getElementById('greenlight').style.marginRight = '10%';
    document.getElementById('greenlight').style.overflowX = 'hidden';
    document.getElementById('greenlight').style.overflowY = 'scroll';
    document.getElementById('greenlightHeader').style.height = '55%';
    document.getElementById('greenlightMain').style.height = '45%';
    document.getElementById('greenlightMain').style.opacity = '1';
    document.getElementById('greenlightCloseX').style.transform = 'scale(1)';
    document.getElementById('greenlightCloseX').style.opacity = '1';
    document.getElementById('greenlightLabel').style.transform = 'scale(1.3)';
    document.getElementById('greenlightLabel').style.bottom = '3.75em';
    document.getElementById('greenlightLabel').style.width = '38%';
	document.getElementById('greenlightBottomLabel').style.paddingTop = '0.3em';
	document.getElementById('greenlightBottomLabel').style.paddingBottom = '0.4em';
	document.getElementById('greenlightTopLabel').style.paddingLeft = '15px';
	document.getElementById('greenlightBottomLabel').style.paddingLeft = '15px';
	
	// stops displaying other modals
	document.getElementById('kojiro').style.display = 'none';
	document.getElementById('sunnyspot').style.display = 'none';
	document.getElementById('ella').style.display = 'none';
	document.getElementById('playboy').style.display = 'none';
	document.getElementById('enterprise').style.display = 'none';
	
	}, 0);
		
	}
		 
})(jQuery);


}

function greenlightCloseX() {
	
	// starts displaying other modals
	document.getElementById('kojiro').style.display = '';
	document.getElementById('sunnyspot').style.display = '';
	document.getElementById('ella').style.display = '';
	document.getElementById('playboy').style.display = '';
	document.getElementById('enterprise').style.display = '';
	
	// removes left and right arrows
    document.getElementById('greenlightLeftArrow').style.left = '';
    document.getElementById('greenlightLeftArrow').style.opacity = '';
    document.getElementById('greenlightRightArrow').style.right = '';
    document.getElementById('greenlightRightArrow').style.opacity = '';
	
	if (window.matchMedia("(min-width: 48em)").matches) {
	$("#greenlight").animate({ scrollTop: 0 }, 500);
	} else {
	$("#greenlight").animate({ scrollTop: 0 }, 0);
	}
	
	closeX();
	
}


function greenlightLeftArrow() {
	
	
	// starts displaying relevant modal
	document.getElementById('kojiro').style.display = '';
	
    // closes itself
    document.getElementById('greenlight').style.width = '0';
    document.getElementById('greenlight').style.opacity = '0';
    document.getElementById('greenlight').style.marginLeft = '0';
    document.getElementById('greenlight').style.marginRight = '0';
    document.getElementById('greenlightHeader').style.height = '100%';
    document.getElementById('greenlightMain').style.height = '0';
    document.getElementById('greenlightMain').style.opacity = '0';
	document.getElementById('greenlight').style.overflowX = 'auto';
    document.getElementById('greenlight').style.overflowY = 'hidden';
	
	if (window.matchMedia("(min-width: 48em)").matches) {
	$("#greenlight").animate({ scrollTop: 0 }, 500);
	} else {
	$("#greenlight").animate({ scrollTop: 0 }, 0);
	}
	
    document.getElementById('greenlightCloseX').style.transform = 'scale(0)';
    document.getElementById('greenlightCloseX').style.opacity = '0';
    document.getElementById('greenlightLabel').style.transform = 'scale(1)';
    document.getElementById('greenlightLabel').style.bottom = '0';
	document.getElementById('greenlightLabel').style.width = '100%';
	document.getElementById('greenlightBottomLabel').style.paddingTop = '0.5em';
	document.getElementById('greenlightBottomLabel').style.paddingBottom = '0.7em';
	document.getElementById('greenlightTopLabel').style.paddingLeft = '35px';
	document.getElementById('greenlightBottomLabel').style.paddingLeft = '35px';
	$( "#greenlight" ).addClass( "smallViewHide" );
    
    // switches out arrow for the proper item
    document.getElementById('greenlightLeftArrow').style.left = '-3.5vw';
    document.getElementById('greenlightLeftArrow').style.opacity = '0';
    document.getElementById('greenlightRightArrow').style.right = '-3.5vw';
    document.getElementById('greenlightRightArrow').style.opacity = '0';
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
	document.getElementById('greenlight').style.display = 'none';
		}, 510);
	
}

function greenlightRightArrow() {
	
	// starts displaying relevant modal
	document.getElementById('sunnyspot').style.display = '';
	
    // closes itself
    document.getElementById('greenlight').style.height = '0';
    document.getElementById('greenlight').style.width = '32.2666666667%';
    document.getElementById('greenlight').style.opacity = '0';
    document.getElementById('greenlight').style.marginLeft = '1.6%';
    document.getElementById('greenlight').style.marginRight = '0';
    document.getElementById('greenlight').style.marginBottom = '0';
    document.getElementById('greenlightHeader').style.height = '100%';
    document.getElementById('greenlightMain').style.height = '0';
    document.getElementById('greenlightMain').style.opacity = '0';
	document.getElementById('greenlight').style.overflowX = 'auto';
    document.getElementById('greenlight').style.overflowY = 'hidden';
	
	if (window.matchMedia("(min-width: 48em)").matches) {
	$("#greenlight").animate({ scrollTop: 0 }, 500);
	} else {
	$("#greenlight").animate({ scrollTop: 0 }, 0);
	}
	
    document.getElementById('greenlightCloseX').style.transform = 'scale(0)';
    document.getElementById('greenlightCloseX').style.opacity = '0';
    document.getElementById('greenlightLabel').style.transform = 'scale(1)';
    document.getElementById('greenlightLabel').style.bottom = '0';
	document.getElementById('greenlightLabel').style.width = '100%';
	document.getElementById('greenlightBottomLabel').style.paddingTop = '0.5em';
	document.getElementById('greenlightBottomLabel').style.paddingBottom = '0.7em';
	document.getElementById('greenlightTopLabel').style.paddingLeft = '35px';
	document.getElementById('greenlightBottomLabel').style.paddingLeft = '35px';
	$( "#greenlight" ).addClass( "smallViewHide" );
    
    // switches out arrow for the proper item
    document.getElementById('greenlightLeftArrow').style.left = '-3.5vw';
    document.getElementById('greenlightLeftArrow').style.opacity = '0';
    document.getElementById('greenlightRightArrow').style.right = '-3.5vw';
    document.getElementById('greenlightRightArrow').style.opacity = '0';
    document.getElementById('sunnyspotLeftArrow').style.left = '3.5vw';
    document.getElementById('sunnyspotLeftArrow').style.opacity = '1';
    document.getElementById('sunnyspotRightArrow').style.right = '3.5vw';
    document.getElementById('sunnyspotRightArrow').style.opacity = '1';
    
    // moves other modal into place
	$( "#sunnyspot" ).removeClass( "smallViewHide" );
    document.getElementById('sunnyspot').style.height = '85vh';
    document.getElementById('sunnyspot').style.width = '80%';
    document.getElementById('sunnyspot').style.marginLeft = '10%';
    document.getElementById('sunnyspot').style.marginRight = '10%';
    document.getElementById('sunnyspot').style.opacity = '1';
    document.getElementById('sunnyspotHeader').style.height = '55%';
    document.getElementById('sunnyspotMain').style.height = '45%';
    document.getElementById('sunnyspotMain').style.opacity = '1';
	document.getElementById('sunnyspot').style.overflowX = 'hidden';
    document.getElementById('sunnyspot').style.overflowY = 'scroll';
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
	// stops displaying current modal
	document.getElementById('greenlight').style.display = 'none';
		}, 510);
	
}

