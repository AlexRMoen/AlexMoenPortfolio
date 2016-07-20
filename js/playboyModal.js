// JavaScript Document

function playboyOpenModal() {

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
    document.getElementById('ella').style.height = '0';
    document.getElementById('ella').style.opacity = '0';
    document.getElementById('ella').style.marginBottom = '0';
    document.getElementById('kojiro').style.height = '0';
    document.getElementById('kojiro').style.opacity = '0';
    document.getElementById('kojiro').style.marginBottom = '0';
    document.getElementById('trello').style.height = '0';
    document.getElementById('trello').style.opacity = '0';
    document.getElementById('trello').style.marginBottom = '0';
    
    // rescales and fades other line 2 items
    document.getElementById('enterprise').style.height = '85vh';
    document.getElementById('enterprise').style.opacity = '0';
    document.getElementById('enterprise').style.width = '0';
    document.getElementById('enterprise').style.marginLeft = '0';
    document.getElementById('chirpr').style.height = '85vh';
    document.getElementById('chirpr').style.opacity = '0';
    document.getElementById('chirpr').style.width = '0';
    document.getElementById('chirpr').style.marginLeft = '0';
    document.getElementById('newitem').style.height = '85vh';
    document.getElementById('newitem').style.opacity = '0';
    document.getElementById('newitem').style.width = '0';
    document.getElementById('newitem').style.marginLeft = '0';
    
    // displays left and right arrows
    document.getElementById('playboyLeftArrow').style.left = '2.5em';
    document.getElementById('playboyLeftArrow').style.opacity = '1';
    document.getElementById('playboyRightArrow').style.right = '2.5em';
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
    document.getElementById('playboyCloseX').style.right = '12vw';
    document.getElementById('playboyCloseX').style.top = '11vh';
    document.getElementById('playboyLabel').style.transform = 'scale(1.3)';
    document.getElementById('playboyLabel').style.bottom = '3.75em';
	
	}, 500);
		 
})(jQuery);


}


function playboyCloseX() {
	
	// changes the height of the wrapper around the gallery
	document.getElementById('galleryHeightWrapper').style.minHeight = '100%';
	
	// adds the padding to accurately position the modal
    document.getElementById('secondRow').style.paddingTop = '0';
	
	// adds padding back to the gallery
	document.getElementById('gallery').style.paddingTop = '2em';
	document.getElementById('gallery').style.paddingBottom = '3em';
	
	// rescales and fades-in line 1 items
    document.getElementById('ella').style.height = '35vh';
    document.getElementById('ella').style.width = '32.2666666667%';
    document.getElementById('ella').style.opacity = '1';
    document.getElementById('ella').style.marginLeft = '0';
	document.getElementById('ella').style.marginBottom = '1.6vw';
    document.getElementById('kojiro').style.height = '35vh';
    document.getElementById('kojiro').style.width = '32.2666666667%';
    document.getElementById('kojiro').style.opacity = '1';
    document.getElementById('kojiro').style.marginLeft = '1.6%';
	document.getElementById('kojiro').style.marginBottom = '1.6vw';
	document.getElementById('trello').style.height = '35vh';
    document.getElementById('trello').style.width = '32.2666666667%';
    document.getElementById('trello').style.opacity = '1';
    document.getElementById('trello').style.marginLeft = '1.6%';
	document.getElementById('trello').style.marginBottom = '1.6vw';
	
	// rescales and fades in other line 2 items
    document.getElementById('enterprise').style.height = '35vh';
	document.getElementById('enterprise').style.width = '23.8%';
    document.getElementById('enterprise').style.opacity = '1';
    document.getElementById('enterprise').style.marginLeft = '1.6%';
    document.getElementById('chirpr').style.height = '35vh';
	document.getElementById('chirpr').style.width = '23.8%';
    document.getElementById('chirpr').style.opacity = '1';
	document.getElementById('chirpr').style.marginLeft = '1.6%';
    document.getElementById('newitem').style.height = '35vh';
	document.getElementById('newitem').style.width = '23.8%';
    document.getElementById('newitem').style.opacity = '1';
	document.getElementById('newitem').style.marginLeft = '1.6%';
	
	// removes left and right arrows
    document.getElementById('playboyLeftArrow').style.left = '-2.5em';
    document.getElementById('playboyLeftArrow').style.opacity = '1';
    document.getElementById('playboyRightArrow').style.right = '-2.5em';
    document.getElementById('playboyRightArrow').style.opacity = '0';
	
	// scales this modal into a gallery item
    document.getElementById('playboy').style.height = '35vh';
    document.getElementById('playboy').style.width = '23.8%';
    document.getElementById('playboy').style.marginLeft = '0';
    document.getElementById('playboy').style.marginRight = '0';
    document.getElementById('playboy').style.overflowX = 'auto';
    document.getElementById('playboy').style.overflowY = 'hidden';
	
	$("#playboy").animate({ scrollTop: 0 }, 500);
	
    document.getElementById('playboyHeader').style.height = '100%';
    document.getElementById('playboyMain').style.height = '0';
    document.getElementById('playboyMain').style.opacity = '0';
    document.getElementById('playboyCloseX').style.transform = 'scale(0)';
    document.getElementById('playboyCloseX').style.opacity = '0';
    document.getElementById('playboyCloseX').style.right = '50%';
    document.getElementById('playboyCloseX').style.top = '50%';
    document.getElementById('playboyLabel').style.transform = 'scale(1)';
    document.getElementById('playboyLabel').style.bottom = '1.75em';
	
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




function playboyLeftArrow() {
	
    // closes itself
    document.getElementById('trello').style.width = '0';
    document.getElementById('trello').style.opacity = '0';
    document.getElementById('trello').style.marginLeft = '0';
    document.getElementById('trello').style.marginRight = '0';
    document.getElementById('trelloHeader').style.height = '100%';
    document.getElementById('trelloMain').style.height = '0';
    document.getElementById('trelloMain').style.opacity = '0';
	document.getElementById('trello').style.overflowX = 'auto';
    document.getElementById('trello').style.overflowY = 'hidden';
	
	$("#trello").animate({ scrollTop: 0 }, 500);
	
    document.getElementById('trelloCloseX').style.transform = 'scale(0)';
    document.getElementById('trelloCloseX').style.opacity = '0';
    document.getElementById('trelloCloseX').style.right = '50%';
    document.getElementById('trelloCloseX').style.top = '50%';
    document.getElementById('trelloLabel').style.transform = 'scale(1)';
    document.getElementById('trelloLabel').style.bottom = '1.75em';
    
    // switches out arrow for the proper item
    document.getElementById('trelloLeftArrow').style.left = '-2.5em';
    document.getElementById('trelloLeftArrow').style.opacity = '0';
    document.getElementById('trelloRightArrow').style.right = '-2.5em';
    document.getElementById('trelloRightArrow').style.opacity = '0';
	document.getElementById('kojiroLeftArrow').style.left = '2.5em';
    document.getElementById('kojiroLeftArrow').style.opacity = '1';
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
	
}

function playboyRightArrow() {
	
	
// closes itself

    document.getElementById('trello').style.height = '0';
    document.getElementById('trello').style.width = '32.2666666667%';
    document.getElementById('trello').style.opacity = '0';
    document.getElementById('trello').style.marginLeft = '1.6%';
    document.getElementById('trello').style.marginRight = '0';
    document.getElementById('trello').style.marginBottom = '0';
    document.getElementById('trelloHeader').style.height = '100%';
    document.getElementById('trelloMain').style.height = '0';
    document.getElementById('trelloMain').style.opacity = '0';
	document.getElementById('trello').style.overflowX = 'auto';
    document.getElementById('trello').style.overflowY = 'hidden';
	
	$("#trello").animate({ scrollTop: 0 }, 500);
	
    document.getElementById('trelloCloseX').style.transform = 'scale(0)';
    document.getElementById('trelloCloseX').style.opacity = '0';
    document.getElementById('trelloCloseX').style.right = '50%';
    document.getElementById('trelloCloseX').style.top = '50%';
    document.getElementById('trelloLabel').style.transform = 'scale(1)';
    document.getElementById('trelloLabel').style.bottom = '1.75em';
    
    // switches out arrow for the proper item
    document.getElementById('trelloLeftArrow').style.left = '-2.5em';
    document.getElementById('trelloLeftArrow').style.opacity = '0';
    document.getElementById('trelloRightArrow').style.right = '-2.5em';
    document.getElementById('trelloRightArrow').style.opacity = '0';
    document.getElementById('playboyLeftArrow').style.left = '2.5em';
    document.getElementById('playboyLeftArrow').style.opacity = '1';
    document.getElementById('playboyRightArrow').style.right = '2.5em';
    document.getElementById('playboyRightArrow').style.opacity = '1';
	
	// resizes top row items
    document.getElementById('ella').style.height = '0';
    document.getElementById('ella').style.width = '32.2666666667%';
    document.getElementById('ella').style.opacity = '0';
    document.getElementById('ella').style.marginBottom = '0';
    document.getElementById('kojiro').style.height = '0';
    document.getElementById('kojiro').style.width = '32.2666666667%';
    document.getElementById('kojiro').style.opacity = '0';
    document.getElementById('kojiro').style.marginBottom = '0';
    document.getElementById('kojiro').style.marginLeft = '1.6%';
    
    
    // resizes bottom row items
    document.getElementById('enterprise').style.height = '85vh';
    document.getElementById('enterprise').style.opacity = '0';
    document.getElementById('enterprise').style.width = '0';
    document.getElementById('enterprise').style.marginLeft = '0';
    document.getElementById('chirpr').style.height = '85vh';
    document.getElementById('chirpr').style.opacity = '0';
    document.getElementById('chirpr').style.width = '0';
    document.getElementById('chirpr').style.marginLeft = '0';
    document.getElementById('newitem').style.height = '85vh';
    document.getElementById('newitem').style.opacity = '0';
    document.getElementById('newitem').style.width = '0';
    document.getElementById('newitem').style.marginLeft = '0';
    
    
    // moves other modal into place
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
    document.getElementById('playboyCloseX').style.right = '12vw';
    document.getElementById('playboyCloseX').style.top = '11vh';
    document.getElementById('playboyLabel').style.transform = 'scale(1.3)';
    document.getElementById('playboyLabel').style.bottom = '3.75em';
	
}

