// JavaScript Document

function kojiroOpenModal() {

(function($) {
	
	// stops the video for added resources
	document.getElementById('bgvid').style.display = 'none';
	
    $(document).ready(function() {
		 // scrolls to the top of the gallery div
         $('html, body').animate({
           'scrollTop':   $('#gallery').offset().top
         }, 500); 
	});
	 
	 
	// removes all padding from the gallery
	document.getElementById('gallery').style.padding = '0';
		 
	// removes the visual of the gallery title
	document.getElementById('myWork').style.opacity = '0';
    document.getElementById('myWork').style.transform = 'scale(0)';
			 
			 
			 
	setTimeout(function() {
 
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
    document.getElementById('kojiroLeftArrow').style.left = '2.5em';
    document.getElementById('kojiroLeftArrow').style.opacity = '1';
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
	
	}, 500);
		 
})(jQuery);


}
    