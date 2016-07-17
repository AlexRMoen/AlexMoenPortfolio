// JavaScript Document

function openEllaModal() {
	
	
        document.getElementById('bgvid').style.display = 'none';

var scrollingToGallery = true;

if (scrollingToGallery == true) {
(function($) {
    $(document).ready(function() {
         $('html, body').animate({
           'scrollTop':   $('#gallery').offset().top
         }, 400);
		 
		document.getElementById('gallery').style.padding = '0';
		 
		
		 
		     });
			 
			 
			 
			 setTimeout(function() {
 
         // closes other elements on screen
        document.getElementById('aboveFold').style.display = 'none';
        document.getElementById('aboutMe').style.display = 'none';
        document.getElementById('porthole').style.display = 'none';
 
}, 400);


setTimeout(function() {
			 
			 
        
    document.getElementById('myWork').style.opacity = '0';
    document.getElementById('myWork').style.transform = 'scale(0)';
    document.getElementById('myWork').style.height = '0';
    document.getElementById('myWork').style.marginBottom = '0';
        document.getElementById('firstRow').style.paddingTop = '7.5vh';
        document.getElementById('title').style.display = 'none';
        document.getElementById('arrowDown').style.display = 'none';
        

    
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
	
	}, 400);
	
	
	
			 
			 
})(jQuery);
}

	
	
	






}