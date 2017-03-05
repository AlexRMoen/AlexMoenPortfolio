// JavaScript Document

function yyyyOpenModal() {

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
    document.getElementById('firstRow').style.paddingTop = '7.5vh';

    // rescales and fades other line 1 items
    document.getElementById('kojiro').style.height = '85vh';
    document.getElementById('kojiro').style.width = '0';
    document.getElementById('kojiro').style.opacity = '0';
    document.getElementById('kojiro').style.marginLeft = '0';
    document.getElementById('trello').style.height = '85vh';
    document.getElementById('trello').style.width = '0';
    document.getElementById('trello').style.opacity = '0';
    document.getElementById('trello').style.marginLeft = '0';
    
    // rescales and fades line 2 items
    document.getElementById('playboy').style.height = '0';
    document.getElementById('playboy').style.opacity = '0';
    document.getElementById('enterprise').style.height = '0';
    document.getElementById('enterprise').style.opacity = '0';
    document.getElementById('chirpr').style.height = '0';
    document.getElementById('chirpr').style.opacity = '0';
    document.getElementById('newitem').style.height = '0';
    document.getElementById('newitem').style.opacity = '0';
    
    // displays left and right arrows
    document.getElementById('yyyyLeftArrow').style.left = '2.5em';
    document.getElementById('yyyyLeftArrow').style.opacity = '1';
    document.getElementById('yyyyRightArrow').style.right = '2.5em';
    document.getElementById('yyyyRightArrow').style.opacity = '1';
    
    // scales a gallery item into a modal
    document.getElementById('yyyy').style.height = '85vh';
    document.getElementById('yyyy').style.width = '80%';
    document.getElementById('yyyy').style.marginLeft = '10%';
    document.getElementById('yyyy').style.marginRight = '10%';
    document.getElementById('yyyy').style.overflowX = 'hidden';
    document.getElementById('yyyy').style.overflowY = 'scroll';
    document.getElementById('yyyyHeader').style.height = '55%';
    document.getElementById('yyyyMain').style.height = '45%';
    document.getElementById('yyyyMain').style.opacity = '1';
    document.getElementById('yyyyCloseX').style.transform = 'scale(1)';
    document.getElementById('yyyyCloseX').style.opacity = '1';
    document.getElementById('yyyyCloseX').style.right = '12vw';
    document.getElementById('yyyyCloseX').style.top = '11vh';
    document.getElementById('yyyyLabel').style.transform = 'scale(1.3)';
    document.getElementById('yyyyLabel').style.bottom = '3.75em';
    document.getElementById('yyyyLabel').style.width = '38%';
	document.getElementById('yyyyBottomLabel').style.paddingTop = '0.3em';
	document.getElementById('yyyyBottomLabel').style.paddingBottom = '0.4em';
	document.getElementById('yyyyTopLabel').style.paddingLeft = '15px';
	document.getElementById('yyyyBottomLabel').style.paddingLeft = '15px';
	
	}, 500);
		 
})(jQuery);


}



function yyyyCloseX() {
	
	// changes the height of the wrapper around the gallery
	document.getElementById('galleryHeightWrapper').style.minHeight = '100%';
	
	// adds the padding to accurately position the modal
    document.getElementById('firstRow').style.paddingTop = '0';
	
	// adds padding back to the gallery
	document.getElementById('gallery').style.paddingTop = '2em';
	document.getElementById('gallery').style.paddingBottom = '3em';
	
	// rescales and fades-in other line 1 items
    document.getElementById('kojiro').style.height = '35vh';
    document.getElementById('kojiro').style.width = '32.2666666667%';
    document.getElementById('kojiro').style.opacity = '1';
    document.getElementById('kojiro').style.marginLeft = '0';
    document.getElementById('trello').style.height = '35vh';
    document.getElementById('trello').style.width = '32.2666666667%';
    document.getElementById('trello').style.opacity = '1';
    document.getElementById('trello').style.marginLeft = '1.6%';
	
	// rescales and fadesin line 2 items
    document.getElementById('playboy').style.height = '35vh';
    document.getElementById('playboy').style.opacity = '1';
    document.getElementById('enterprise').style.height = '35vh';
    document.getElementById('enterprise').style.opacity = '1';
    document.getElementById('chirpr').style.height = '35vh';
    document.getElementById('chirpr').style.opacity = '1';
    document.getElementById('newitem').style.height = '35vh';
    document.getElementById('newitem').style.opacity = '1';
	
	// removes left and right arrows
    document.getElementById('yyyyLeftArrow').style.left = '-2.5em';
    document.getElementById('yyyyLeftArrow').style.opacity = '1';
    document.getElementById('yyyyRightArrow').style.right = '-2.5em';
    document.getElementById('yyyyRightArrow').style.opacity = '0';
	
	// scales a gallery item into a modal
    document.getElementById('yyyy').style.height = '35vh';
    document.getElementById('yyyy').style.width = '32.2666666667%';
    document.getElementById('yyyy').style.marginLeft = '1.6%';
    document.getElementById('yyyy').style.marginRight = '0';
    document.getElementById('yyyy').style.overflowX = 'auto';
    document.getElementById('yyyy').style.overflowY = 'hidden';
	
	$("#yyyy").animate({ scrollTop: 0 }, 500);
	
    document.getElementById('yyyyHeader').style.height = '100%';
    document.getElementById('yyyyMain').style.height = '0';
    document.getElementById('yyyyMain').style.opacity = '0';
    document.getElementById('yyyyCloseX').style.transform = 'scale(0)';
    document.getElementById('yyyyCloseX').style.opacity = '0';
    document.getElementById('yyyyCloseX').style.right = '50%';
    document.getElementById('yyyyCloseX').style.top = '50%';
    document.getElementById('yyyyLabel').style.transform = 'scale(1)';
    document.getElementById('yyyyLabel').style.bottom = '0';
	document.getElementById('yyyyLabel').style.width = '100%';
	document.getElementById('yyyyBottomLabel').style.paddingTop = '0.5em';
	document.getElementById('yyyyBottomLabel').style.paddingBottom = '0.7em';
	document.getElementById('yyyyTopLabel').style.paddingLeft = '35px';
	document.getElementById('yyyyBottomLabel').style.paddingLeft = '35px';
	
	// adds the gallery title
    document.getElementById('myWork').style.height = 'auto';
    document.getElementById('myWork').style.marginBottom = '1em';
		 
	// adds the visual of the gallery title
	document.getElementById('myWork').style.opacity = '1';
    document.getElementById('myWork').style.transform = 'scale(1)';
	
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


function yyyyLeftArrow() {
	
    // closes itself
    document.getElementById('yyyy').style.width = '0';
    document.getElementById('yyyy').style.opacity = '0';
    document.getElementById('yyyy').style.marginLeft = '0';
    document.getElementById('yyyy').style.marginRight = '0';
    document.getElementById('yyyyHeader').style.height = '100%';
    document.getElementById('yyyyMain').style.height = '0';
    document.getElementById('yyyyMain').style.opacity = '0';
	document.getElementById('yyyy').style.overflowX = 'auto';
    document.getElementById('yyyy').style.overflowY = 'hidden';
	
	$("#yyyy").animate({ scrollTop: 0 }, 500);
	
    document.getElementById('yyyyCloseX').style.transform = 'scale(0)';
    document.getElementById('yyyyCloseX').style.opacity = '0';
    document.getElementById('yyyyCloseX').style.right = '50%';
    document.getElementById('yyyyCloseX').style.top = '50%';
    document.getElementById('yyyyLabel').style.transform = 'scale(1)';
    document.getElementById('yyyyLabel').style.bottom = '0';
	document.getElementById('yyyyLabel').style.width = '100%';
	document.getElementById('yyyyBottomLabel').style.paddingTop = '0.5em';
	document.getElementById('yyyyBottomLabel').style.paddingBottom = '0.7em';
	document.getElementById('yyyyTopLabel').style.paddingLeft = '35px';
	document.getElementById('yyyyBottomLabel').style.paddingLeft = '35px';
    
    // switches out arrow for the proper item
    document.getElementById('yyyyLeftArrow').style.left = '-2.5em';
    document.getElementById('yyyyLeftArrow').style.opacity = '0';
    document.getElementById('yyyyRightArrow').style.right = '-2.5em';
    document.getElementById('yyyyRightArrow').style.opacity = '0';
	// NONE document.getElementById('kojiroLeftArrow').style.left = '2.5em';
    // NONE document.getElementById('kojiroLeftArrow').style.opacity = '0';
    document.getElementById('kojiroRightArrow').style.right = '2.5em';
    document.getElementById('kojiroRightArrow').style.opacity = '1';
    
    // moves other modal into place
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
    document.getElementById('kojiroCloseX').style.right = '12vw';
    document.getElementById('kojiroCloseX').style.top = '11vh';
    document.getElementById('kojiroLabel').style.transform = 'scale(1.3)';
    document.getElementById('kojiroLabel').style.bottom = '3.75em';
    document.getElementById('kojiroLabel').style.width = '38%';
	document.getElementById('kojiroBottomLabel').style.paddingTop = '0.3em';
	document.getElementById('kojiroBottomLabel').style.paddingBottom = '0.4em';
	document.getElementById('kojiroTopLabel').style.paddingLeft = '15px';
	document.getElementById('kojiroBottomLabel').style.paddingLeft = '15px';
	
}

function yyyyRightArrow() {
	
// closes itself
    document.getElementById('yyyy').style.width = '0';
    document.getElementById('yyyy').style.opacity = '0';
    document.getElementById('yyyy').style.marginLeft = '0';
    document.getElementById('yyyy').style.marginRight = '0';
    document.getElementById('yyyyHeader').style.height = '100%';
    document.getElementById('yyyyMain').style.height = '0';
    document.getElementById('yyyyMain').style.opacity = '0';
	document.getElementById('yyyy').style.overflowX = 'auto';
    document.getElementById('yyyy').style.overflowY = 'hidden';
	
	$("#yyyy").animate({ scrollTop: 0 }, 500);
	
    document.getElementById('yyyyCloseX').style.transform = 'scale(0)';
    document.getElementById('yyyyCloseX').style.opacity = '0';
    document.getElementById('yyyyCloseX').style.right = '50%';
    document.getElementById('yyyyCloseX').style.top = '50%';
    document.getElementById('yyyyLabel').style.transform = 'scale(1)';
    document.getElementById('yyyyLabel').style.bottom = '0';
	document.getElementById('yyyyLabel').style.width = '100%';
	document.getElementById('yyyyBottomLabel').style.paddingTop = '0.5em';
	document.getElementById('yyyyBottomLabel').style.paddingBottom = '0.7em';
	document.getElementById('yyyyTopLabel').style.paddingLeft = '35px';
	document.getElementById('yyyyBottomLabel').style.paddingLeft = '35px';
    
    // switches out arrow for the proper item
    document.getElementById('yyyyLeftArrow').style.left = '-2.5em';
    document.getElementById('yyyyLeftArrow').style.opacity = '0';
    document.getElementById('yyyyRightArrow').style.right = '-2.5em';
    document.getElementById('yyyyRightArrow').style.opacity = '0';
    document.getElementById('trelloLeftArrow').style.left = '2.5em';
    document.getElementById('trelloLeftArrow').style.opacity = '1';
    document.getElementById('trelloRightArrow').style.right = '2.5em';
    document.getElementById('trelloRightArrow').style.opacity = '1';
    
    // moves other modal into place
    document.getElementById('trello').style.height = '85vh';
    document.getElementById('trello').style.width = '80%';
    document.getElementById('trello').style.marginLeft = '10%';
    document.getElementById('trello').style.marginRight = '10%';
    document.getElementById('trello').style.opacity = '1';
    document.getElementById('trelloHeader').style.height = '55%';
    document.getElementById('trelloMain').style.height = '45%';
    document.getElementById('trelloMain').style.opacity = '1';
	document.getElementById('trello').style.overflowX = 'hidden';
    document.getElementById('trello').style.overflowY = 'scroll';
    document.getElementById('trelloCloseX').style.transform = 'scale(1)';
    document.getElementById('trelloCloseX').style.opacity = '1';
    document.getElementById('trelloCloseX').style.right = '12vw';
    document.getElementById('trelloCloseX').style.top = '11vh';
    document.getElementById('trelloLabel').style.transform = 'scale(1.3)';
    document.getElementById('trelloLabel').style.bottom = '3.75em';
    document.getElementById('trelloLabel').style.width = '38%';
	document.getElementById('trelloBottomLabel').style.paddingTop = '0.3em';
	document.getElementById('trelloBottomLabel').style.paddingBottom = '0.4em';
	document.getElementById('trelloTopLabel').style.paddingLeft = '15px';
	document.getElementById('trelloBottomLabel').style.paddingLeft = '15px';
	
}


    