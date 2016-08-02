// JavaScript Document

function newitemOpenModal() {

(function($) {
	
	// stops the video for added resources
	document.getElementById('bgvid').style.display = 'none';
	
    $(document).ready(function() {
		 // scrolls to the top of the gallery div
         $('html, body').animate({
           'scrollTop':   $('#gallery').offset().top
         }, 500); 
	});
	 
	 
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
    document.getElementById('secondRow').style.paddingTop = '7.5vh';

    // rescales and fades line 1 items
    document.getElementById('kojiro').style.height = '0';
    document.getElementById('kojiro').style.opacity = '0';
    document.getElementById('kojiro').style.marginBottom = '0';
    document.getElementById('ella').style.height = '0';
    document.getElementById('ella').style.opacity = '0';
    document.getElementById('ella').style.marginBottom = '0';
    document.getElementById('trello').style.height = '0';
    document.getElementById('trello').style.opacity = '0';
    document.getElementById('trello').style.marginBottom = '0';
    
    // rescales and fades other line 2 items
    document.getElementById('playboy').style.height = '85vh';
    document.getElementById('playboy').style.opacity = '0';
    document.getElementById('playboy').style.width = '0';
    document.getElementById('playboy').style.marginLeft = '0';
    document.getElementById('enterprise').style.height = '85vh';
    document.getElementById('enterprise').style.opacity = '0';
    document.getElementById('enterprise').style.width = '0';
    document.getElementById('enterprise').style.marginLeft = '0';
    document.getElementById('chirpr').style.height = '85vh';
    document.getElementById('chirpr').style.opacity = '0';
    document.getElementById('chirpr').style.width = '0';
    document.getElementById('chirpr').style.marginLeft = '0';
    
    // displays left and right arrows
    document.getElementById('newitemLeftArrow').style.left = '2.5em';
    document.getElementById('newitemLeftArrow').style.opacity = '1';
    // NONE document.getElementById('newitemRightArrow').style.right = '2.5em';
    // NONE document.getElementById('newitemRightArrow').style.opacity = '1';
    
    // scales a gallery item into a modal
    document.getElementById('newitem').style.height = '85vh';
    document.getElementById('newitem').style.width = '80%';
    document.getElementById('newitem').style.marginLeft = '10%';
    document.getElementById('newitem').style.marginRight = '10%';
    document.getElementById('newitem').style.overflowX = 'hidden';
    document.getElementById('newitem').style.overflowY = 'scroll';
    document.getElementById('newitemHeader').style.height = '55%';
    document.getElementById('newitemMain').style.height = '45%';
    document.getElementById('newitemMain').style.opacity = '1';
    document.getElementById('newitemCloseX').style.transform = 'scale(1)';
    document.getElementById('newitemCloseX').style.opacity = '1';
    document.getElementById('newitemCloseX').style.right = '12vw';
    document.getElementById('newitemCloseX').style.top = '11vh';
    document.getElementById('newitemLabel').style.transform = 'scale(1.3)';
    document.getElementById('newitemLabel').style.bottom = '3.75em';
    document.getElementById('newitemLabel').style.width = '38%';
	document.getElementById('newitemBottomLabel').style.paddingTop = '0.3em';
	document.getElementById('newitemBottomLabel').style.paddingBottom = '0.4em';
	document.getElementById('newitemTopLabel').style.paddingLeft = '15px';
	document.getElementById('newitemBottomLabel').style.paddingLeft = '15px';
	
	}, 500);
		 
})(jQuery);


}




function newitemCloseX() {
	
	// changes the height of the wrapper around the gallery
	document.getElementById('galleryHeightWrapper').style.minHeight = '';
	
	// adds the padding to accurately position the modal
    document.getElementById('secondRow').style.paddingTop = '';
	
	// adds padding back to the gallery
	document.getElementById('gallery').style.paddingTop = '';
	document.getElementById('gallery').style.paddingBottom = '';
	
	// rescales and fades-in line 1 items
    document.getElementById('kojiro').style.height = '';
    document.getElementById('kojiro').style.width = '';
    document.getElementById('kojiro').style.opacity = '';
    document.getElementById('kojiro').style.marginLeft = '';
	document.getElementById('kojiro').style.marginBottom = '';
    document.getElementById('ella').style.height = '';
    document.getElementById('ella').style.width = '';
    document.getElementById('ella').style.opacity = '';
    document.getElementById('ella').style.marginLeft = '';
	document.getElementById('ella').style.marginBottom = '';
	document.getElementById('trello').style.height = '';
    document.getElementById('trello').style.width = '';
    document.getElementById('trello').style.opacity = '';
    document.getElementById('trello').style.marginLeft = '';
	document.getElementById('trello').style.marginBottom = '';
	
	// rescales and fades in other line 2 items
    document.getElementById('playboy').style.height = '';
	document.getElementById('playboy').style.width = '';
    document.getElementById('playboy').style.opacity = '';
    document.getElementById('playboy').style.marginLeft = '';
    document.getElementById('enterprise').style.height = '';
	document.getElementById('enterprise').style.width = '';
    document.getElementById('enterprise').style.opacity = '';
	document.getElementById('enterprise').style.marginLeft = '';
    document.getElementById('chirpr').style.height = '';
	document.getElementById('chirpr').style.width = '';
    document.getElementById('chirpr').style.opacity = '';
	document.getElementById('chirpr').style.marginLeft = '';
	
	// removes left and right arrows
    document.getElementById('newitemLeftArrow').style.left = '';
    document.getElementById('newitemLeftArrow').style.opacity = '';
    // NONE document.getElementById('newitemRightArrow').style.right = '-2.5em';
    // NONE document.getElementById('newitemRightArrow').style.opacity = '0';
	
	// scales this modal into a gallery item
    document.getElementById('newitem').style.height = '';
    document.getElementById('newitem').style.width = '';
    document.getElementById('newitem').style.marginLeft = '';
    document.getElementById('newitem').style.marginRight = '';
    document.getElementById('newitem').style.overflowX = 'auto';
    document.getElementById('newitem').style.overflowY = 'hidden';
	
	$("#newitem").animate({ scrollTop: 0 }, 500);
	
    document.getElementById('newitemHeader').style.height = '';
    document.getElementById('newitemMain').style.height = '';
    document.getElementById('newitemMain').style.opacity = '';
    document.getElementById('newitemCloseX').style.transform = '';
    document.getElementById('newitemCloseX').style.opacity = '';
    document.getElementById('newitemCloseX').style.right = '';
    document.getElementById('newitemCloseX').style.top = '';
    document.getElementById('newitemLabel').style.transform = '';
    document.getElementById('newitemLabel').style.bottom = '';
	document.getElementById('newitemLabel').style.width = '';
	document.getElementById('newitemBottomLabel').style.paddingTop = '';
	document.getElementById('newitemBottomLabel').style.paddingBottom = '';
	document.getElementById('newitemTopLabel').style.paddingLeft = '';
	document.getElementById('newitemBottomLabel').style.paddingLeft = '';
	
	// adds the gallery title
    document.getElementById('myWork').style.height = '';
    document.getElementById('myWork').style.marginBottom = '';
		 
	// adds the visual of the gallery title
	document.getElementById('myWork').style.opacity = '';
    document.getElementById('myWork').style.transform = '';
	
	setTimeout(function() {
		
	// opens other elements on screen
    document.getElementById('aboveFold').style.display = 'block';
    document.getElementById('title').style.display = 'block';
    document.getElementById('arrowDown').style.display = 'block';
    document.getElementById('aboutMe').style.display = 'block';
    document.getElementById('porthole').style.display = 'block';
	
	$(window).scrollTop(tempScrollTop);
	
	// starts the video
	document.getElementById('bgvid').style.display = 'block';
	
	}, 500);
	
}


function newitemLeftArrow() {
	

	
	
// closes itself

    document.getElementById('newitem').style.height = '85vh';
    document.getElementById('newitem').style.width = '0';
    document.getElementById('newitem').style.opacity = '0';
    document.getElementById('newitem').style.marginLeft = '0';
    document.getElementById('newitem').style.marginRight = '0';
    document.getElementById('newitem').style.marginBottom = '0';
    document.getElementById('newitemHeader').style.height = '100%';
    document.getElementById('newitemMain').style.height = '0';
    document.getElementById('newitemMain').style.opacity = '0';
	document.getElementById('newitem').style.overflowX = 'auto';
    document.getElementById('newitem').style.overflowY = 'hidden';
	
	$("#newitem").animate({ scrollTop: 0 }, 500);
	
    document.getElementById('newitemCloseX').style.transform = 'scale(0)';
    document.getElementById('newitemCloseX').style.opacity = '0';
    document.getElementById('newitemCloseX').style.right = '50%';
    document.getElementById('newitemCloseX').style.top = '50%';
    document.getElementById('newitemLabel').style.transform = 'scale(1)';
    document.getElementById('newitemLabel').style.bottom = '0';
	document.getElementById('newitemLabel').style.width = '100%';
	document.getElementById('newitemBottomLabel').style.paddingTop = '0.5em';
	document.getElementById('newitemBottomLabel').style.paddingBottom = '0.7em';
	document.getElementById('newitemTopLabel').style.paddingLeft = '35px';
	document.getElementById('newitemBottomLabel').style.paddingLeft = '35px';
    
    // switches out arrow for the proper item
    document.getElementById('newitemLeftArrow').style.left = '-2.5em';
    document.getElementById('newitemLeftArrow').style.opacity = '0';
    // NONE document.getElementById('newitemRightArrow').style.right = '-2.5em';
    // NONE document.getElementById('newitemRightArrow').style.opacity = '0';
    document.getElementById('chirprLeftArrow').style.left = '2.5em';
    document.getElementById('chirprLeftArrow').style.opacity = '1';
    document.getElementById('chirprRightArrow').style.right = '2.5em';
    document.getElementById('chirprRightArrow').style.opacity = '1'; 
    
    
    // moves other modal into place
    document.getElementById('chirpr').style.height = '85vh';
    document.getElementById('chirpr').style.width = '80%';
    document.getElementById('chirpr').style.marginLeft = '10%';
    document.getElementById('chirpr').style.marginRight = '10%';
    document.getElementById('chirpr').style.opacity = '1';
    document.getElementById('chirprHeader').style.height = '55%';
    document.getElementById('chirprMain').style.height = '45%';
    document.getElementById('chirprMain').style.opacity = '1';
	document.getElementById('chirpr').style.overflowX = 'hidden';
    document.getElementById('chirpr').style.overflowY = 'scroll';
    document.getElementById('chirprCloseX').style.transform = 'scale(1)';
    document.getElementById('chirprCloseX').style.opacity = '1';
    document.getElementById('chirprCloseX').style.right = '12vw';
    document.getElementById('chirprCloseX').style.top = '11vh';
    document.getElementById('chirprLabel').style.transform = 'scale(1.3)';
    document.getElementById('chirprLabel').style.bottom = '3.75em';
    document.getElementById('chirprLabel').style.width = '38%';
	document.getElementById('chirprBottomLabel').style.paddingTop = '0.3em';
	document.getElementById('chirprBottomLabel').style.paddingBottom = '0.4em';
	document.getElementById('chirprTopLabel').style.paddingLeft = '15px';
	document.getElementById('chirprBottomLabel').style.paddingLeft = '15px';
	
}
