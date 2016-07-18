// JavaScript Document

function ellaOpenModal() {

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
    // NONE document.getElementById('ellaLeftArrow').style.left = '2.5em';
    // NONE document.getElementById('ellaLeftArrow').style.opacity = '1';
    document.getElementById('ellaRightArrow').style.right = '2.5em';
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
    document.getElementById('ellaCloseX').style.right = '12vw';
    document.getElementById('ellaCloseX').style.top = '11vh';
    document.getElementById('ellaLabel').style.transform = 'scale(1.3)';
    document.getElementById('ellaLabel').style.bottom = '3.75em';
	
	}, 500);
		 
})(jQuery);


}


function ellaCloseX() {
	
	// changes the height of the wrapper around the gallery
	document.getElementById('galleryHeightWrapper').style.minHeight = '100%';
	
	// adds the padding to accurately position the modal
    document.getElementById('firstRow').style.paddingTop = '0';
	
	// adds padding back to the gallery
	document.getElementById('gallery').style.paddingTop = '1.5em';
	document.getElementById('gallery').style.paddingBottom = '2em';
	
	// rescales and fades-in other line 1 items
    document.getElementById('kojiro').style.height = '35vh';
    document.getElementById('kojiro').style.width = '32.2666666667%';
    document.getElementById('kojiro').style.opacity = '1';
    document.getElementById('kojiro').style.marginLeft = '1.6%';
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
    // NONE document.getElementById('ellaLeftArrow').style.left = '-2.5em';
    // NONE document.getElementById('ellaLeftArrow').style.opacity = '1';
    document.getElementById('ellaRightArrow').style.right = '-2.5em';
    document.getElementById('ellaRightArrow').style.opacity = '0';
	
	// scales a gallery item into a modal
    document.getElementById('ella').style.height = '35vh';
    document.getElementById('ella').style.width = '32.2666666667%';
    document.getElementById('ella').style.marginLeft = '0';
    document.getElementById('ella').style.marginRight = '0';
    document.getElementById('ella').style.overflowX = 'auto';
    document.getElementById('ella').style.overflowY = 'hidden';
	
	$("#ella").animate({ scrollTop: 0 }, 500);
	
    document.getElementById('ellaHeader').style.height = '100%';
    document.getElementById('ellaMain').style.height = '0';
    document.getElementById('ellaMain').style.opacity = '0';
    document.getElementById('ellaCloseX').style.transform = 'scale(0)';
    document.getElementById('ellaCloseX').style.opacity = '0';
    document.getElementById('ellaCloseX').style.right = '91.5333333333%';
    document.getElementById('ellaCloseX').style.top = '50%';
    document.getElementById('ellaLabel').style.transform = 'scale(1)';
    document.getElementById('ellaLabel').style.bottom = '1.75em';
	
	// adds the gallery title
    document.getElementById('myWork').style.height = 'auto';
    document.getElementById('myWork').style.marginBottom = '1em';
		 
	// adds the visual of the gallery title
	document.getElementById('myWork').style.opacity = '1';
    document.getElementById('myWork').style.transform = 'scale(1)';
	
	// opens other elements on screen
    document.getElementById('aboveFold').style.display = 'block';
    document.getElementById('title').style.display = 'block';
    document.getElementById('arrowDown').style.display = 'block';
    document.getElementById('aboutMe').style.display = 'block';
    document.getElementById('porthole').style.display = 'block';
	
	$(window).scrollTop(tempScrollTop);
	
	// starts the video
	document.getElementById('bgvid').style.display = 'block';
	
}


	
	

function ellaRightArrow() {
	
// closes itself
    document.getElementById('ella').style.width = '0';
    document.getElementById('ella').style.opacity = '0';
    document.getElementById('ella').style.marginLeft = '0';
    document.getElementById('ella').style.marginRight = '0';
    document.getElementById('ellaHeader').style.height = '100%';
    document.getElementById('ellaMain').style.height = '0';
    document.getElementById('ellaMain').style.opacity = '0';
    document.getElementById('ellaCloseX').style.transform = 'scale(0)';
    document.getElementById('ellaCloseX').style.opacity = '0';
    document.getElementById('ellaCloseX').style.right = '91.5333333333%';
    document.getElementById('ellaCloseX').style.top = '50%';
    document.getElementById('ellaLabel').style.transform = 'scale(1)';
    document.getElementById('ellaLabel').style.bottom = '1.75em';
    
    // switches out arrow for the proper item
    // NONE document.getElementById('ellaLeftArrow').style.left = '-2.5em';
    // NONE document.getElementById('ellaLeftArrow').style.opacity = '0';
    document.getElementById('ellaRightArrow').style.right = '-2.5em';
    document.getElementById('ellaRightArrow').style.opacity = '0';
    document.getElementById('kojiroLeftArrow').style.left = '2.5em';
    document.getElementById('kojiroLeftArrow').style.opacity = '1';
    document.getElementById('kojiroRightArrow').style.right = '2.5em';
    document.getElementById('kojiroRightArrow').style.opacity = '1';
    
    // moves other modal into place
    document.getElementById('kojiro').style.height = '85vh';
    document.getElementById('kojiro').style.width = '80%';
    document.getElementById('kojiro').style.marginLeft = '10%';
    document.getElementById('kojiro').style.marginRight = '10%';
    document.getElementById('kojiro').style.overflowX = 'hidden';
    document.getElementById('kojiro').style.overflowY = 'scroll';
    document.getElementById('kojiro').style.opacity = '1';
    document.getElementById('kojiroHeader').style.height = '55%';
    document.getElementById('kojiroMain').style.height = '45%';
    document.getElementById('kojiroMain').style.opacity = '1';
    document.getElementById('kojiroCloseX').style.transform = 'scale(1)';
    document.getElementById('kojiroCloseX').style.opacity = '1';
    document.getElementById('kojiroCloseX').style.right = '12vw';
    document.getElementById('kojiroCloseX').style.top = '11vh';
    document.getElementById('kojiroLabel').style.transform = 'scale(1.3)';
    document.getElementById('kojiroLabel').style.bottom = '3.75em';
	
}