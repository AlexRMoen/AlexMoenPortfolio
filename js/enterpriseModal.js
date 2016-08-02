// JavaScript Document

function enterpriseOpenModal() {

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
    document.getElementById('chirpr').style.height = '85vh';
    document.getElementById('chirpr').style.opacity = '0';
    document.getElementById('chirpr').style.width = '0';
    document.getElementById('chirpr').style.marginLeft = '0';
    document.getElementById('newitem').style.height = '85vh';
    document.getElementById('newitem').style.opacity = '0';
    document.getElementById('newitem').style.width = '0';
    document.getElementById('newitem').style.marginLeft = '0';
    
    // displays left and right arrows
    document.getElementById('enterpriseLeftArrow').style.left = '2.5em';
    document.getElementById('enterpriseLeftArrow').style.opacity = '1';
    document.getElementById('enterpriseRightArrow').style.right = '2.5em';
    document.getElementById('enterpriseRightArrow').style.opacity = '1';
    
    // scales a gallery item into a modal
    document.getElementById('enterprise').style.height = '85vh';
    document.getElementById('enterprise').style.width = '80%';
    document.getElementById('enterprise').style.marginLeft = '10%';
    document.getElementById('enterprise').style.marginRight = '10%';
    document.getElementById('enterprise').style.overflowX = 'hidden';
    document.getElementById('enterprise').style.overflowY = 'scroll';
    document.getElementById('enterpriseHeader').style.height = '55%';
    document.getElementById('enterpriseMain').style.height = '45%';
    document.getElementById('enterpriseMain').style.opacity = '1';
    document.getElementById('enterpriseCloseX').style.transform = 'scale(1)';
    document.getElementById('enterpriseCloseX').style.opacity = '1';
    document.getElementById('enterpriseCloseX').style.right = '12vw';
    document.getElementById('enterpriseCloseX').style.top = '11vh';
    document.getElementById('enterpriseLabel').style.transform = 'scale(1.3)';
    document.getElementById('enterpriseLabel').style.bottom = '3.75em';
    document.getElementById('enterpriseLabel').style.width = '38%';
	document.getElementById('enterpriseBottomLabel').style.paddingTop = '0.3em';
	document.getElementById('enterpriseBottomLabel').style.paddingBottom = '0.4em';
	document.getElementById('enterpriseTopLabel').style.paddingLeft = '15px';
	document.getElementById('enterpriseBottomLabel').style.paddingLeft = '15px';
	
	}, 500);
		 
})(jQuery);


}


function enterpriseCloseX() {
	
	// removes left and right arrows
    document.getElementById('enterpriseLeftArrow').style.left = '';
    document.getElementById('enterpriseLeftArrow').style.opacity = '';
    document.getElementById('enterpriseRightArrow').style.right = '';
    document.getElementById('enterpriseRightArrow').style.opacity = '';
	
	$("#enterprise").animate({ scrollTop: 0 }, 500);
	
	closeX();
	
}


function enterpriseLeftArrow() {
	

	
	
// closes itself

    document.getElementById('enterprise').style.height = '85vh';
    document.getElementById('enterprise').style.width = '0';
    document.getElementById('enterprise').style.opacity = '0';
    document.getElementById('enterprise').style.marginLeft = '0';
    document.getElementById('enterprise').style.marginRight = '0';
    document.getElementById('enterprise').style.marginBottom = '0';
    document.getElementById('enterpriseHeader').style.height = '100%';
    document.getElementById('enterpriseMain').style.height = '0';
    document.getElementById('enterpriseMain').style.opacity = '0';
	document.getElementById('enterprise').style.overflowX = 'auto';
    document.getElementById('enterprise').style.overflowY = 'hidden';
	
	$("#enterprise").animate({ scrollTop: 0 }, 500);
	
    document.getElementById('enterpriseCloseX').style.transform = 'scale(0)';
    document.getElementById('enterpriseCloseX').style.opacity = '0';
    document.getElementById('enterpriseCloseX').style.right = '50%';
    document.getElementById('enterpriseCloseX').style.top = '50%';
    document.getElementById('enterpriseLabel').style.transform = 'scale(1)';
    document.getElementById('enterpriseLabel').style.bottom = '0';
	document.getElementById('enterpriseLabel').style.width = '100%';
	document.getElementById('enterpriseBottomLabel').style.paddingTop = '0.5em';
	document.getElementById('enterpriseBottomLabel').style.paddingBottom = '0.7em';
	document.getElementById('enterpriseTopLabel').style.paddingLeft = '35px';
	document.getElementById('enterpriseBottomLabel').style.paddingLeft = '35px';
    
    // switches out arrow for the proper item
    document.getElementById('enterpriseLeftArrow').style.left = '-2.5em';
    document.getElementById('enterpriseLeftArrow').style.opacity = '0';
    document.getElementById('enterpriseRightArrow').style.right = '-2.5em';
    document.getElementById('enterpriseRightArrow').style.opacity = '0';
    document.getElementById('playboyLeftArrow').style.left = '2.5em';
    document.getElementById('playboyLeftArrow').style.opacity = '1';
    document.getElementById('playboyRightArrow').style.right = '2.5em';
    document.getElementById('playboyRightArrow').style.opacity = '1'; 
    
    
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
    document.getElementById('playboyLabel').style.width = '38%';
	document.getElementById('playboyBottomLabel').style.paddingTop = '0.3em';
	document.getElementById('playboyBottomLabel').style.paddingBottom = '0.4em';
	document.getElementById('playboyTopLabel').style.paddingLeft = '15px';
	document.getElementById('playboyBottomLabel').style.paddingLeft = '15px';
	
}



function enterpriseRightArrow() {
	

	
	
// closes itself

    document.getElementById('enterprise').style.height = '85vh';
    document.getElementById('enterprise').style.width = '0';
    document.getElementById('enterprise').style.opacity = '0';
    document.getElementById('enterprise').style.marginLeft = '0';
    document.getElementById('enterprise').style.marginRight = '0';
    document.getElementById('enterprise').style.marginBottom = '0';
    document.getElementById('enterpriseHeader').style.height = '100%';
    document.getElementById('enterpriseMain').style.height = '0';
    document.getElementById('enterpriseMain').style.opacity = '0';
	document.getElementById('enterprise').style.overflowX = 'auto';
    document.getElementById('enterprise').style.overflowY = 'hidden';
	
	$("#enterprise").animate({ scrollTop: 0 }, 500);
	
    document.getElementById('enterpriseCloseX').style.transform = 'scale(0)';
    document.getElementById('enterpriseCloseX').style.opacity = '0';
    document.getElementById('enterpriseCloseX').style.right = '50%';
    document.getElementById('enterpriseCloseX').style.top = '50%';
    document.getElementById('enterpriseLabel').style.transform = 'scale(1)';
    document.getElementById('enterpriseLabel').style.bottom = '0';
	document.getElementById('enterpriseLabel').style.width = '100%';
	document.getElementById('enterpriseBottomLabel').style.paddingTop = '0.5em';
	document.getElementById('enterpriseBottomLabel').style.paddingBottom = '0.7em';
	document.getElementById('enterpriseTopLabel').style.paddingLeft = '35px';
	document.getElementById('enterpriseBottomLabel').style.paddingLeft = '35px';
    
    // switches out arrow for the proper item
    document.getElementById('enterpriseLeftArrow').style.left = '-2.5em';
    document.getElementById('enterpriseLeftArrow').style.opacity = '0';
    document.getElementById('enterpriseRightArrow').style.right = '-2.5em';
    document.getElementById('enterpriseRightArrow').style.opacity = '0';
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
