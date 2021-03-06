// JavaScript Document

$(function() {
  $('#playboyModalLinkContainer').hover(function() {
    $('#playboy').css('transform', 'scale(1.1)');
	$('#playboy').css('z-index', '900');
	$('#kojiro').css('z-index', '1');
	$('#sunnyspot').css('z-index', '1');
	$('#ella').css('z-index', '1');
	$('#enterprise').css('z-index', '1');
  }, function() {
    // on mouseout, reset the background colour
    $('#playboy').css('transform', '');
	$('#playboy').css('z-index', '');
	$('#kojiro').css('z-index', '');
	$('#sunnyspot').css('z-index', '');
	$('#ella').css('z-index', '');
	$('#enterprise').css('z-index', '');
  });
});

function playboyOpenModal() {

(function($) {
	
	$('#playboy').css('transform', '');
	
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

    // rescales and fades line 1 items
    document.getElementById('kojiro').style.height = '0';
    document.getElementById('kojiro').style.opacity = '0';
    document.getElementById('kojiro').style.marginBottom = '0';
	$( "#kojiro" ).addClass( "smallViewHide" );
    document.getElementById('sunnyspot').style.height = '0';
    document.getElementById('sunnyspot').style.opacity = '0';
    document.getElementById('sunnyspot').style.marginBottom = '0';
	$( "#sunnyspot" ).addClass( "smallViewHide" );
    
    // rescales and fades other line 2 items
    document.getElementById('ella').style.height = '85vh';
    document.getElementById('ella').style.opacity = '0';
    document.getElementById('ella').style.width = '0';
    document.getElementById('ella').style.marginLeft = '0';
	$( "#ella" ).addClass( "smallViewHide" );
    document.getElementById('enterprise').style.height = '85vh';
    document.getElementById('enterprise').style.opacity = '0';
    document.getElementById('enterprise').style.width = '0';
    document.getElementById('enterprise').style.marginLeft = '0';
	$( "#enterprise" ).addClass( "smallViewHide" );
    
    // displays left and right arrows
    document.getElementById('playboyLeftArrow').style.left = '3.5vw';
    document.getElementById('playboyLeftArrow').style.opacity = '1';
    document.getElementById('playboyRightArrow').style.right = '3.5vw';
    document.getElementById('playboyRightArrow').style.opacity = '1';
    
    // scales a gallery item into a modal
    document.getElementById('playboy').style.height = '85vh';
    document.getElementById('playboy').style.width = '80%';
    document.getElementById('playboy').style.marginLeft = '10%';
    document.getElementById('playboy').style.marginRight = '10%';
    document.getElementById('playboy').style.overflowX = 'hidden';
    document.getElementById('playboy').style.overflowY = 'scroll';
    document.getElementById('playboyHeader').style.height = '55%';
    document.getElementById('playboyMain').style.height = '45%';
    document.getElementById('playboyMain').style.opacity = '1';
    document.getElementById('playboyCloseX').style.transform = 'scale(1)';
    document.getElementById('playboyCloseX').style.opacity = '1';
    document.getElementById('playboyLabel').style.transform = 'scale(1.3)';
    document.getElementById('playboyLabel').style.bottom = '3.75em';
    document.getElementById('playboyLabel').style.width = '38%';
	document.getElementById('playboyBottomLabel').style.paddingTop = '0.3em';
	document.getElementById('playboyBottomLabel').style.paddingBottom = '0.4em';
	document.getElementById('playboyTopLabel').style.paddingLeft = '15px';
	document.getElementById('playboyBottomLabel').style.paddingLeft = '15px';
	
	setTimeout(function() {
	// stops displaying other modals
	document.getElementById('kojiro').style.display = 'none';
	document.getElementById('sunnyspot').style.display = 'none';
	document.getElementById('ella').style.display = 'none';
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

    // rescales and fades line 1 items
    document.getElementById('kojiro').style.height = '0';
    document.getElementById('kojiro').style.opacity = '0';
    document.getElementById('kojiro').style.marginBottom = '0';
	$( "#kojiro" ).addClass( "smallViewHide" );
    document.getElementById('sunnyspot').style.height = '0';
    document.getElementById('sunnyspot').style.opacity = '0';
    document.getElementById('sunnyspot').style.marginBottom = '0';
	$( "#sunnyspot" ).addClass( "smallViewHide" );
    
    // rescales and fades other line 2 items
    document.getElementById('ella').style.height = '85vh';
    document.getElementById('ella').style.opacity = '0';
    document.getElementById('ella').style.width = '0';
    document.getElementById('ella').style.marginLeft = '0';
	$( "#ella" ).addClass( "smallViewHide" );
    document.getElementById('enterprise').style.height = '85vh';
    document.getElementById('enterprise').style.opacity = '0';
    document.getElementById('enterprise').style.width = '0';
    document.getElementById('enterprise').style.marginLeft = '0';
	$( "#enterprise" ).addClass( "smallViewHide" );
    
    // displays left and right arrows
    document.getElementById('playboyLeftArrow').style.left = '3.5vw';
    document.getElementById('playboyLeftArrow').style.opacity = '1';
    document.getElementById('playboyRightArrow').style.right = '3.5vw';
    document.getElementById('playboyRightArrow').style.opacity = '1';
    
    // scales a gallery item into a modal
    document.getElementById('playboy').style.height = '85vh';
    document.getElementById('playboy').style.width = '80%';
    document.getElementById('playboy').style.marginLeft = '10%';
    document.getElementById('playboy').style.marginRight = '10%';
    document.getElementById('playboy').style.overflowX = 'hidden';
    document.getElementById('playboy').style.overflowY = 'scroll';
    document.getElementById('playboyHeader').style.height = '55%';
    document.getElementById('playboyMain').style.height = '45%';
    document.getElementById('playboyMain').style.opacity = '1';
    document.getElementById('playboyCloseX').style.transform = 'scale(1)';
    document.getElementById('playboyCloseX').style.opacity = '1';
    document.getElementById('playboyLabel').style.transform = 'scale(1.3)';
    document.getElementById('playboyLabel').style.bottom = '3.75em';
    document.getElementById('playboyLabel').style.width = '38%';
	document.getElementById('playboyBottomLabel').style.paddingTop = '0.3em';
	document.getElementById('playboyBottomLabel').style.paddingBottom = '0.4em';
	document.getElementById('playboyTopLabel').style.paddingLeft = '15px';
	document.getElementById('playboyBottomLabel').style.paddingLeft = '15px';
	
	// stops displaying other modals
	document.getElementById('kojiro').style.display = 'none';
	document.getElementById('sunnyspot').style.display = 'none';
	document.getElementById('ella').style.display = 'none';
	document.getElementById('enterprise').style.display = 'none';
	
	}, 0);
		
	}
		 
})(jQuery);


}


function playboyCloseX() {
	
	// starts displaying other modals
	document.getElementById('kojiro').style.display = '';
	document.getElementById('sunnyspot').style.display = '';
	document.getElementById('ella').style.display = '';
	document.getElementById('enterprise').style.display = '';
	
	// removes left and right arrows
    document.getElementById('playboyLeftArrow').style.left = '';
    document.getElementById('playboyLeftArrow').style.opacity = '';
    document.getElementById('playboyRightArrow').style.right = '';
    document.getElementById('playboyRightArrow').style.opacity = '';
	
	if (window.matchMedia("(min-width: 48em)").matches) {	
	$("#playboy").animate({ scrollTop: 0 }, 500);
	} else {
	$("#playboy").animate({ scrollTop: 0 }, 0);
	}
	
	closeX();
	
}


function playboyLeftArrow() {
	
// starts displaying relevant
	document.getElementById('ella').style.display = '';
	
	
// closes itself

    document.getElementById('playboy').style.height = '85vh';
    document.getElementById('playboy').style.width = '0';
    document.getElementById('playboy').style.opacity = '0';
    document.getElementById('playboy').style.marginLeft = '0';
    document.getElementById('playboy').style.marginRight = '0';
    document.getElementById('playboy').style.marginBottom = '0';
    document.getElementById('playboyHeader').style.height = '100%';
    document.getElementById('playboyMain').style.height = '0';
    document.getElementById('playboyMain').style.opacity = '0';
	document.getElementById('playboy').style.overflowX = 'auto';
    document.getElementById('playboy').style.overflowY = 'hidden';
	
	if (window.matchMedia("(min-width: 48em)").matches) {	
	$("#playboy").animate({ scrollTop: 0 }, 500);
	} else {
	$("#playboy").animate({ scrollTop: 0 }, 0);
	}
	
    document.getElementById('playboyCloseX').style.transform = 'scale(0)';
    document.getElementById('playboyCloseX').style.opacity = '0';
    document.getElementById('playboyLabel').style.transform = 'scale(1)';
    document.getElementById('playboyLabel').style.bottom = '0';
	document.getElementById('playboyLabel').style.width = '100%';
	document.getElementById('playboyBottomLabel').style.paddingTop = '0.5em';
	document.getElementById('playboyBottomLabel').style.paddingBottom = '0.7em';
	document.getElementById('playboyTopLabel').style.paddingLeft = '35px';
	document.getElementById('playboyBottomLabel').style.paddingLeft = '35px';
	$( "#playboy" ).addClass( "smallViewHide" );
    
    // switches out arrow for the proper item
    document.getElementById('playboyLeftArrow').style.left = '-3.5vw';
    document.getElementById('playboyLeftArrow').style.opacity = '0';
    document.getElementById('playboyRightArrow').style.right = '-3.5vw';
    document.getElementById('playboyRightArrow').style.opacity = '0';
    document.getElementById('ellaLeftArrow').style.left = '3.5vw';
    document.getElementById('ellaLeftArrow').style.opacity = '1';
    document.getElementById('ellaRightArrow').style.right = '3.5vw';
    document.getElementById('ellaRightArrow').style.opacity = '1'; 
    
    
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
	document.getElementById('playboy').style.display = 'none';
		}, 510);
	
}



function playboyRightArrow() {
	
// starts displaying other modals
	document.getElementById('enterprise').style.display = '';
	
	
// closes itself

    document.getElementById('playboy').style.height = '85vh';
    document.getElementById('playboy').style.width = '0';
    document.getElementById('playboy').style.opacity = '0';
    document.getElementById('playboy').style.marginLeft = '0';
    document.getElementById('playboy').style.marginRight = '0';
    document.getElementById('playboy').style.marginBottom = '0';
    document.getElementById('playboyHeader').style.height = '100%';
    document.getElementById('playboyMain').style.height = '0';
    document.getElementById('playboyMain').style.opacity = '0';
	document.getElementById('playboy').style.overflowX = 'auto';
    document.getElementById('playboy').style.overflowY = 'hidden';
	
	if (window.matchMedia("(min-width: 48em)").matches) {	
	$("#playboy").animate({ scrollTop: 0 }, 500);
	} else {
	$("#playboy").animate({ scrollTop: 0 }, 0);
	}
	
    document.getElementById('playboyCloseX').style.transform = 'scale(0)';
    document.getElementById('playboyCloseX').style.opacity = '0';
    document.getElementById('playboyLabel').style.transform = 'scale(1)';
    document.getElementById('playboyLabel').style.bottom = '0';
	document.getElementById('playboyLabel').style.width = '100%';
	document.getElementById('playboyBottomLabel').style.paddingTop = '0.5em';
	document.getElementById('playboyBottomLabel').style.paddingBottom = '0.7em';
	document.getElementById('playboyTopLabel').style.paddingLeft = '35px';
	document.getElementById('playboyBottomLabel').style.paddingLeft = '35px';
	$( "#playboy" ).addClass( "smallViewHide" );
    
    // switches out arrow for the proper item
    document.getElementById('playboyLeftArrow').style.left = '-3.5vw';
    document.getElementById('playboyLeftArrow').style.opacity = '0';
    document.getElementById('playboyRightArrow').style.right = '-3.5vw';
    document.getElementById('playboyRightArrow').style.opacity = '0';
    document.getElementById('enterpriseLeftArrow').style.left = '3.5vw';
    document.getElementById('enterpriseLeftArrow').style.opacity = '1';
    // NONE document.getElementById('enterpriseRightArrow').style.right = '3.5vw';
    // NONE document.getElementById('enterpriseRightArrow').style.opacity = '1'; 
    
    
    // moves other modal into place
	$( "#enterprise" ).removeClass( "smallViewHide" );
    document.getElementById('enterprise').style.height = '85vh';
    document.getElementById('enterprise').style.width = '80%';
    document.getElementById('enterprise').style.marginLeft = '10%';
    document.getElementById('enterprise').style.marginRight = '10%';
    document.getElementById('enterprise').style.opacity = '1';
    document.getElementById('enterpriseHeader').style.height = '55%';
    document.getElementById('enterpriseMain').style.height = '45%';
    document.getElementById('enterpriseMain').style.opacity = '1';
	document.getElementById('enterprise').style.overflowX = 'hidden';
    document.getElementById('enterprise').style.overflowY = 'scroll';
    document.getElementById('enterpriseCloseX').style.transform = 'scale(1)';
    document.getElementById('enterpriseCloseX').style.opacity = '1';
    document.getElementById('enterpriseLabel').style.transform = 'scale(1.3)';
    document.getElementById('enterpriseLabel').style.bottom = '3.75em';
    document.getElementById('enterpriseLabel').style.width = '38%';
	document.getElementById('enterpriseBottomLabel').style.paddingTop = '0.3em';
	document.getElementById('enterpriseBottomLabel').style.paddingBottom = '0.4em';
	document.getElementById('enterpriseTopLabel').style.paddingLeft = '15px';
	document.getElementById('enterpriseBottomLabel').style.paddingLeft = '15px';
	
	setTimeout(function() {
	// stops displaying current modal
	document.getElementById('playboy').style.display = 'none';
		}, 510);
	
}
