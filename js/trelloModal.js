// JavaScript Document

function trelloOpenModal() {

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
    document.getElementById('ella').style.height = '85vh';
    document.getElementById('ella').style.width = '0';
    document.getElementById('ella').style.opacity = '0';
    document.getElementById('ella').style.marginLeft = '0';
    document.getElementById('kojiro').style.height = '85vh';
    document.getElementById('kojiro').style.width = '0';
    document.getElementById('kojiro').style.opacity = '0';
    document.getElementById('kojiro').style.marginLeft = '0';
    
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
    document.getElementById('trelloLeftArrow').style.left = '2.5em';
    document.getElementById('trelloLeftArrow').style.opacity = '1';
    document.getElementById('trelloRightArrow').style.right = '2.5em';
    document.getElementById('trelloRightArrow').style.opacity = '1';
    
    // scales a gallery item into a modal
    document.getElementById('trello').style.height = '85vh';
    document.getElementById('trello').style.width = '80%';
    document.getElementById('trello').style.marginLeft = '10%';
    document.getElementById('trello').style.marginRight = '10%';
    document.getElementById('trello').style.overflowX = 'hidden';
    document.getElementById('trello').style.overflowY = 'scroll';
    document.getElementById('trelloHeader').style.height = '55%';
    document.getElementById('trelloMain').style.height = '45%';
    document.getElementById('trelloMain').style.opacity = '1';
    document.getElementById('trelloCloseX').style.transform = 'scale(1)';
    document.getElementById('trelloCloseX').style.opacity = '1';
    document.getElementById('trelloCloseX').style.right = '12vw';
    document.getElementById('trelloCloseX').style.top = '11vh';
    document.getElementById('trelloLabel').style.transform = 'scale(1.3)';
    document.getElementById('trelloLabel').style.bottom = '3.75em';
	
	}, 500);
		 
})(jQuery);


}