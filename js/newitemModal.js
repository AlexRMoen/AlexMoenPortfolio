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
    document.getElementById('newitemRightArrow').style.right = '2.5em';
    document.getElementById('newitemRightArrow').style.opacity = '1';
    
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
	
	}, 500);
		 
})(jQuery);


}