// JavaScript Document

$(function() {
  $('#ellaModalLinkContainer').hover(function() {
    $('#ella').css('transform', 'scale(1.1)');
	$('#ella').css('z-index', '900');
	$('#kojiro').css('z-index', '1');
	$('#sunnyspot').css('z-index', '1');
	$('#playboy').css('z-index', '1');
	$('#enterprise').css('z-index', '1');
  }, function() {
    // on mouseout, reset the background colour
    $('#ella').css('transform', '');
	$('#ella').css('z-index', '');
	$('#kojiro').css('z-index', '');
	$('#sunnyspot').css('z-index', '');
	$('#playboy').css('z-index', '');
	$('#enterprise').css('z-index', '');
  });
});

function ellaOpenModal() {

(function($) {
	
	$('#ella').css('transform', '');
	
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
    document.getElementById('secondRow').style.paddingTop = '7.5vh';

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
    document.getElementById('playboy').style.height = '85vh';
    document.getElementById('playboy').style.opacity = '0';
    document.getElementById('playboy').style.width = '0';
    document.getElementById('playboy').style.marginLeft = '0';
	$( "#playboy" ).addClass( "smallViewHide" );
    document.getElementById('enterprise').style.height = '85vh';
    document.getElementById('enterprise').style.opacity = '0';
    document.getElementById('enterprise').style.width = '0';
    document.getElementById('enterprise').style.marginLeft = '0';
	$( "#enterprise" ).addClass( "smallViewHide" );
    
    // displays left and right arrows
    document.getElementById('ellaLeftArrow').style.left = '3.5vw';
    document.getElementById('ellaLeftArrow').style.opacity = '1';
    document.getElementById('ellaRightArrow').style.right = '3.5vw';
    document.getElementById('ellaRightArrow').style.opacity = '1';
    
    // scales a gallery item into a modal
    document.getElementById('ella').style.height = '85vh';
    document.getElementById('ella').style.width = '80%';
    document.getElementById('ella').style.marginLeft = '10%';
    document.getElementById('ella').style.marginRight = '10%';
    document.getElementById('ella').style.overflowX = 'hidden';
    document.getElementById('ella').style.overflowY = 'scroll';
    document.getElementById('ellaHeader').style.height = '55%';
    document.getElementById('ellaMain').style.height = '45%';
    document.getElementById('ellaMain').style.opacity = '1';
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
	// stops displaying other modals
	document.getElementById('kojiro').style.display = 'none';
	document.getElementById('sunnyspot').style.display = 'none';
	document.getElementById('playboy').style.display = 'none';
	document.getElementById('enterprise').style.display = 'none';
		}, 1000);
	
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
    document.getElementById('secondRow').style.paddingTop = '7.5vh';

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
    document.getElementById('playboy').style.height = '85vh';
    document.getElementById('playboy').style.opacity = '0';
    document.getElementById('playboy').style.width = '0';
    document.getElementById('playboy').style.marginLeft = '0';
	$( "#playboy" ).addClass( "smallViewHide" );
    document.getElementById('enterprise').style.height = '85vh';
    document.getElementById('enterprise').style.opacity = '0';
    document.getElementById('enterprise').style.width = '0';
    document.getElementById('enterprise').style.marginLeft = '0';
	$( "#enterprise" ).addClass( "smallViewHide" );
    
    // displays left and right arrows
    document.getElementById('ellaLeftArrow').style.left = '3.5vw';
    document.getElementById('ellaLeftArrow').style.opacity = '1';
    document.getElementById('ellaRightArrow').style.right = '3.5vw';
    document.getElementById('ellaRightArrow').style.opacity = '1';
    
    // scales a gallery item into a modal
    document.getElementById('ella').style.height = '85vh';
    document.getElementById('ella').style.width = '80%';
    document.getElementById('ella').style.marginLeft = '10%';
    document.getElementById('ella').style.marginRight = '10%';
    document.getElementById('ella').style.overflowX = 'hidden';
    document.getElementById('ella').style.overflowY = 'scroll';
    document.getElementById('ellaHeader').style.height = '55%';
    document.getElementById('ellaMain').style.height = '45%';
    document.getElementById('ellaMain').style.opacity = '1';
    document.getElementById('ellaCloseX').style.transform = 'scale(1)';
    document.getElementById('ellaCloseX').style.opacity = '1';
    document.getElementById('ellaLabel').style.transform = 'scale(1.3)';
    document.getElementById('ellaLabel').style.bottom = '3.75em';
    document.getElementById('ellaLabel').style.width = '38%';
	document.getElementById('ellaBottomLabel').style.paddingTop = '0.3em';
	document.getElementById('ellaBottomLabel').style.paddingBottom = '0.4em';
	document.getElementById('ellaTopLabel').style.paddingLeft = '15px';
	document.getElementById('ellaBottomLabel').style.paddingLeft = '15px';
	
	// stops displaying other modals
	document.getElementById('kojiro').style.display = 'none';
	document.getElementById('sunnyspot').style.display = 'none';
	document.getElementById('playboy').style.display = 'none';
	document.getElementById('enterprise').style.display = 'none';
	
	}, 0);
	
	}
		 
})(jQuery);


}


function ellaCloseX() {
	
	// starts displaying other modals
	document.getElementById('kojiro').style.display = '';
	document.getElementById('sunnyspot').style.display = '';
	document.getElementById('playboy').style.display = '';
	document.getElementById('enterprise').style.display = '';
	
	// removes left and right arrows
    document.getElementById('ellaLeftArrow').style.left = '';
    document.getElementById('ellaLeftArrow').style.opacity = '';
    document.getElementById('ellaRightArrow').style.right = '';
    document.getElementById('ellaRightArrow').style.opacity = '';
	
	if (window.matchMedia("(min-width: 48em)").matches) {
	$("#ella").animate({ scrollTop: 0 }, 500);
	} else {
	$("#ella").animate({ scrollTop: 0 }, 0);
	}
	
	closeX();
	
}




function ellaLeftArrow() {
	
		// starts displaying other modals
	document.getElementById('kojiro').style.display = '';
	document.getElementById('sunnyspot').style.display = '';
	document.getElementById('playboy').style.display = '';
	document.getElementById('enterprise').style.display = '';
	
	
	// adds the padding to accurately position the modal
    document.getElementById('firstRow').style.paddingTop = '7.5vh';
	document.getElementById('secondRow').style.paddingTop = '0';
	
	
    // closes itself
    document.getElementById('ella').style.height = '0';
    document.getElementById('ella').style.width = '23.8%';
    document.getElementById('ella').style.opacity = '0';
    document.getElementById('ella').style.marginLeft = '0';
    document.getElementById('ella').style.marginRight = '0';
    document.getElementById('ella').style.marginBottom = '0';
    document.getElementById('ellaHeader').style.height = '100%';
    document.getElementById('ellaMain').style.height = '0';
    document.getElementById('ellaMain').style.opacity = '0';
	document.getElementById('ella').style.overflowX = 'auto';
    document.getElementById('ella').style.overflowY = 'hidden';
	
	if (window.matchMedia("(min-width: 48em)").matches) {
	$("#ella").animate({ scrollTop: 0 }, 500);
	} else {
	$("#ella").animate({ scrollTop: 0 }, 0);
	}
	
    document.getElementById('ellaCloseX').style.transform = 'scale(0)';
    document.getElementById('ellaCloseX').style.opacity = '0';
    document.getElementById('ellaLabel').style.transform = 'scale(1)';
    document.getElementById('ellaLabel').style.bottom = '0';
	document.getElementById('ellaLabel').style.width = '100%';
	document.getElementById('ellaBottomLabel').style.paddingTop = '0.5em';
	document.getElementById('ellaBottomLabel').style.paddingBottom = '0.7em';
	document.getElementById('ellaTopLabel').style.paddingLeft = '35px';
	document.getElementById('ellaBottomLabel').style.paddingLeft = '35px';
	$( "#ella" ).addClass( "smallViewHide" );
    
    // switches out arrow for the proper item
    document.getElementById('ellaLeftArrow').style.left = '-3.5vw';
    document.getElementById('ellaLeftArrow').style.opacity = '0';
    document.getElementById('ellaRightArrow').style.right = '-3.5vw';
    document.getElementById('ellaRightArrow').style.opacity = '0';
    document.getElementById('sunnyspotLeftArrow').style.left = '3.5vw';
    document.getElementById('sunnyspotLeftArrow').style.opacity = '1';
    document.getElementById('sunnyspotRightArrow').style.right = '3.5vw';
    document.getElementById('sunnyspotRightArrow').style.opacity = '1';
	
	// resizes top row items
    document.getElementById('kojiro').style.height = '85vh';
    document.getElementById('kojiro').style.width = '0';
    document.getElementById('kojiro').style.opacity = '0';
    document.getElementById('kojiro').style.marginBottom = '1.6vw';
    
    
    // resizes bottom row items
    document.getElementById('playboy').style.height = '0';
    document.getElementById('playboy').style.opacity = '0';
    document.getElementById('playboy').style.width = '23.8%';
    document.getElementById('playboy').style.marginLeft = '1.6%';
    document.getElementById('enterprise').style.height = '0';
    document.getElementById('enterprise').style.opacity = '0';
    document.getElementById('enterprise').style.width = '23.8%';
    document.getElementById('enterprise').style.marginLeft = '1.6%';
    
    
    // moves other modal into place
	$( "#sunnyspot" ).removeClass( "smallViewHide" );
    document.getElementById('sunnyspot').style.height = '85vh';
    document.getElementById('sunnyspot').style.width = '80%';
    document.getElementById('sunnyspot').style.marginLeft = '10%';
    document.getElementById('sunnyspot').style.marginRight = '10%';
    document.getElementById('sunnyspot').style.marginBottom = '1.6vw';
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
	
}

function ellaRightArrow() {
	
	// starts displaying other modals
	document.getElementById('kojiro').style.display = '';
	document.getElementById('sunnyspot').style.display = '';
	document.getElementById('playboy').style.display = '';
	document.getElementById('enterprise').style.display = '';
	
	
	
// closes itself

    document.getElementById('ella').style.height = '85vh';
    document.getElementById('ella').style.width = '0';
    document.getElementById('ella').style.opacity = '0';
    document.getElementById('ella').style.marginLeft = '0';
    document.getElementById('ella').style.marginRight = '0';
    document.getElementById('ella').style.marginBottom = '0';
    document.getElementById('ellaHeader').style.height = '100%';
    document.getElementById('ellaMain').style.height = '0';
    document.getElementById('ellaMain').style.opacity = '0';
	document.getElementById('ella').style.overflowX = 'auto';
    document.getElementById('ella').style.overflowY = 'hidden';
	
	if (window.matchMedia("(min-width: 48em)").matches) {
	$("#ella").animate({ scrollTop: 0 }, 500);
	} else {
	$("#ella").animate({ scrollTop: 0 }, 0);
	}
	
    document.getElementById('ellaCloseX').style.transform = 'scale(0)';
    document.getElementById('ellaCloseX').style.opacity = '0';
    document.getElementById('ellaLabel').style.transform = 'scale(1)';
    document.getElementById('ellaLabel').style.bottom = '0';
	document.getElementById('ellaLabel').style.width = '100%';
	document.getElementById('ellaBottomLabel').style.paddingTop = '0.5em';
	document.getElementById('ellaBottomLabel').style.paddingBottom = '0.7em';
	document.getElementById('ellaTopLabel').style.paddingLeft = '35px';
	document.getElementById('ellaBottomLabel').style.paddingLeft = '35px';
	$( "#ella" ).addClass( "smallViewHide" );
    
    // switches out arrow for the proper item
    document.getElementById('ellaLeftArrow').style.left = '-3.5vw';
    document.getElementById('ellaLeftArrow').style.opacity = '0';
    document.getElementById('ellaRightArrow').style.right = '-3.5vw';
    document.getElementById('ellaRightArrow').style.opacity = '0';
    document.getElementById('playboyLeftArrow').style.left = '3.5vw';
    document.getElementById('playboyLeftArrow').style.opacity = '1';
    document.getElementById('playboyRightArrow').style.right = '3.5vw';
    document.getElementById('playboyRightArrow').style.opacity = '1'; 
    
    
    // moves other modal into place
	$( "#playboy" ).removeClass( "smallViewHide" );
    document.getElementById('playboy').style.height = '85vh';
    document.getElementById('playboy').style.width = '80%';
    document.getElementById('playboy').style.marginLeft = '10%';
    document.getElementById('playboy').style.marginRight = '10%';
    document.getElementById('playboy').style.opacity = '1';
    document.getElementById('playboyHeader').style.height = '55%';
    document.getElementById('playboyMain').style.height = '45%';
    document.getElementById('playboyMain').style.opacity = '1';
	document.getElementById('playboy').style.overflowX = 'hidden';
    document.getElementById('playboy').style.overflowY = 'scroll';
    document.getElementById('playboyCloseX').style.transform = 'scale(1)';
    document.getElementById('playboyCloseX').style.opacity = '1';
    document.getElementById('playboyLabel').style.transform = 'scale(1.3)';
    document.getElementById('playboyLabel').style.bottom = '3.75em';
    document.getElementById('playboyLabel').style.width = '38%';
	document.getElementById('playboyBottomLabel').style.paddingTop = '0.3em';
	document.getElementById('playboyBottomLabel').style.paddingBottom = '0.4em';
	document.getElementById('playboyTopLabel').style.paddingLeft = '15px';
	document.getElementById('playboyBottomLabel').style.paddingLeft = '15px';
	
}


