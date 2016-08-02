// JavaScript Document

function kojiroOpenModal() {

(function($) {
	
	// stops the video for added resources
	document.getElementById('bgvid').style.display = 'none';
	
	if (window.matchMedia("(min-width: 800px)").matches) {
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
    document.getElementById('firstRow').style.paddingTop = '7.5vh';

    // rescales and fades other line 1 items
    document.getElementById('ella').style.height = '85vh';
    document.getElementById('ella').style.width = '0';
    document.getElementById('ella').style.opacity = '0';
    document.getElementById('ella').style.marginLeft = '0';
	$( "#ella" ).addClass( "smallViewHide" );
    document.getElementById('trello').style.height = '85vh';
    document.getElementById('trello').style.width = '0';
    document.getElementById('trello').style.opacity = '0';
    document.getElementById('trello').style.marginLeft = '0';
	$( "#trello" ).addClass( "smallViewHide" );
    
    // rescales and fades line 2 items
    document.getElementById('playboy').style.height = '0';
    document.getElementById('playboy').style.opacity = '0';
	$( "#playboy" ).addClass( "smallViewHide" );
    document.getElementById('enterprise').style.height = '0';
    document.getElementById('enterprise').style.opacity = '0';
	$( "#enterprise" ).addClass( "smallViewHide" );
    document.getElementById('chirpr').style.height = '0';
    document.getElementById('chirpr').style.opacity = '0';
	$( "#chirpr" ).addClass( "smallViewHide" );
    document.getElementById('newitem').style.height = '0';
    document.getElementById('newitem').style.opacity = '0';
	$( "#newitem" ).addClass( "smallViewHide" );
    
    // displays left and right arrows
    // NONE document.getElementById('kojiroLeftArrow').style.left = '2.5em';
    // NONE document.getElementById('kojiroLeftArrow').style.opacity = '1';
    document.getElementById('kojiroRightArrow').style.right = '2.5em';
    document.getElementById('kojiroRightArrow').style.opacity = '1';
    
    // scales a gallery item into a modal
    document.getElementById('kojiro').style.height = '85vh';
    document.getElementById('kojiro').style.width = '80%';
    document.getElementById('kojiro').style.marginLeft = '10%';
    document.getElementById('kojiro').style.marginRight = '10%';
    document.getElementById('kojiro').style.overflowX = 'hidden';
    document.getElementById('kojiro').style.overflowY = 'scroll';
    document.getElementById('kojiroHeader').style.height = '55%';
    document.getElementById('kojiroMain').style.height = '45%';
    document.getElementById('kojiroMain').style.opacity = '1';
    document.getElementById('kojiroCloseX').style.transform = 'scale(1)';
    document.getElementById('kojiroCloseX').style.opacity = '1';
    document.getElementById('kojiroCloseX').style.right = '12vw';
    document.getElementById('kojiroCloseX').style.top = '11vh';
    document.getElementById('kojiroLabel').style.transform = 'scale(1.3)';
    document.getElementById('kojiroLabel').style.bottom = '3.75em';
    document.getElementById('kojiroLabel').style.width = '38%';
	document.getElementById('kojiroBottomLabel').style.paddingTop = '0.3em';
	document.getElementById('kojiroBottomLabel').style.paddingBottom = '0.4em';
	document.getElementById('kojiroTopLabel').style.paddingLeft = '15px';
	document.getElementById('kojiroBottomLabel').style.paddingLeft = '15px';
	
	}, 500);
		 
})(jQuery);


}


function kojiroCloseX() {
	
	// removes left and right arrows
    // NONE document.getElementById('kojiroLeftArrow').style.left = '';
    // NONE document.getElementById('kojiroLeftArrow').style.opacity = '';
    document.getElementById('kojiroRightArrow').style.right = '';
    document.getElementById('kojiroRightArrow').style.opacity = '';
	
	$("#kojiro").animate({ scrollTop: 0 }, 500);
	
	closeX();
	
}


	
	

function kojiroRightArrow() {
	
// closes itself
    document.getElementById('kojiro').style.width = '0';
    document.getElementById('kojiro').style.opacity = '0';
    document.getElementById('kojiro').style.marginLeft = '0';
    document.getElementById('kojiro').style.marginRight = '0';
    document.getElementById('kojiroHeader').style.height = '100%';
    document.getElementById('kojiroMain').style.height = '0';
    document.getElementById('kojiroMain').style.opacity = '0';
	document.getElementById('kojiro').style.overflowX = 'auto';
    document.getElementById('kojiro').style.overflowY = 'hidden';
	
	$("#kojiro").animate({ scrollTop: 0 }, 500);
	
    document.getElementById('kojiroCloseX').style.transform = 'scale(0)';
    document.getElementById('kojiroCloseX').style.opacity = '0';
    document.getElementById('kojiroCloseX').style.right = '50%';
    document.getElementById('kojiroCloseX').style.top = '50%';
    document.getElementById('kojiroLabel').style.transform = 'scale(1)';
    document.getElementById('kojiroLabel').style.bottom = '0';
	document.getElementById('kojiroLabel').style.width = '100%';
	document.getElementById('kojiroBottomLabel').style.paddingTop = '0.5em';
	document.getElementById('kojiroBottomLabel').style.paddingBottom = '0.7em';
	document.getElementById('kojiroTopLabel').style.paddingLeft = '35px';
	document.getElementById('kojiroBottomLabel').style.paddingLeft = '35px';
	$( "#kojiro" ).addClass( "smallViewHide" );
    
    // switches out arrow for the proper item
    // NONE document.getElementById('kojiroLeftArrow').style.left = '-2.5em';
    // NONE document.getElementById('kojiroLeftArrow').style.opacity = '0';
    document.getElementById('kojiroRightArrow').style.right = '-2.5em';
    document.getElementById('kojiroRightArrow').style.opacity = '0';
    document.getElementById('ellaLeftArrow').style.left = '2.5em';
    document.getElementById('ellaLeftArrow').style.opacity = '1';
    document.getElementById('ellaRightArrow').style.right = '2.5em';
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
    document.getElementById('ellaCloseX').style.right = '12vw';
    document.getElementById('ellaCloseX').style.top = '11vh';
    document.getElementById('ellaLabel').style.transform = 'scale(1.3)';
    document.getElementById('ellaLabel').style.bottom = '3.75em';
    document.getElementById('ellaLabel').style.width = '38%';
	document.getElementById('ellaBottomLabel').style.paddingTop = '0.3em';
	document.getElementById('ellaBottomLabel').style.paddingBottom = '0.4em';
	document.getElementById('ellaTopLabel').style.paddingLeft = '15px';
	document.getElementById('ellaBottomLabel').style.paddingLeft = '15px';
	
}