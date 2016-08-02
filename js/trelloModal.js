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
    document.getElementById('kojiro').style.height = '85vh';
    document.getElementById('kojiro').style.width = '0';
    document.getElementById('kojiro').style.opacity = '0';
    document.getElementById('kojiro').style.marginLeft = '0';
	$( "#kojiro" ).addClass( "smallViewHide" );
    document.getElementById('ella').style.height = '85vh';
    document.getElementById('ella').style.width = '0';
    document.getElementById('ella').style.opacity = '0';
    document.getElementById('ella').style.marginLeft = '0';
	$( "#ella" ).addClass( "smallViewHide" );
    
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
    document.getElementById('trelloLabel').style.width = '38%';
	document.getElementById('trelloBottomLabel').style.paddingTop = '0.3em';
	document.getElementById('trelloBottomLabel').style.paddingBottom = '0.4em';
	document.getElementById('trelloTopLabel').style.paddingLeft = '15px';
	document.getElementById('trelloBottomLabel').style.paddingLeft = '15px';
	
	}, 500);
		 
})(jQuery);


}

function trelloCloseX() {
	
	// removes left and right arrows
    document.getElementById('trelloLeftArrow').style.left = '';
    document.getElementById('trelloLeftArrow').style.opacity = '';
    document.getElementById('trelloRightArrow').style.right = '';
    document.getElementById('trelloRightArrow').style.opacity = '';
	
	$("#trello").animate({ scrollTop: 0 }, 500);
	
	closeX();
	
}


function trelloLeftArrow() {
	
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
    document.getElementById('trelloLabel').style.bottom = '0';
	document.getElementById('trelloLabel').style.width = '100%';
	document.getElementById('trelloBottomLabel').style.paddingTop = '0.5em';
	document.getElementById('trelloBottomLabel').style.paddingBottom = '0.7em';
	document.getElementById('trelloTopLabel').style.paddingLeft = '35px';
	document.getElementById('trelloBottomLabel').style.paddingLeft = '35px';
	$( "#trello" ).addClass( "smallViewHide" );
    
    // switches out arrow for the proper item
    document.getElementById('trelloLeftArrow').style.left = '-2.5em';
    document.getElementById('trelloLeftArrow').style.opacity = '0';
    document.getElementById('trelloRightArrow').style.right = '-2.5em';
    document.getElementById('trelloRightArrow').style.opacity = '0';
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

function trelloRightArrow() {
	
	
    document.getElementById('firstRow').style.paddingTop = '0';
	document.getElementById('secondRow').style.paddingTop = '7.5vh';
	
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
    document.getElementById('trelloLabel').style.bottom = '0';
	document.getElementById('trelloLabel').style.width = '100%';
	document.getElementById('trelloBottomLabel').style.paddingTop = '0.5em';
	document.getElementById('trelloBottomLabel').style.paddingBottom = '0.7em';
	document.getElementById('trelloTopLabel').style.paddingLeft = '35px';
	document.getElementById('trelloBottomLabel').style.paddingLeft = '35px';
	$( "#trello" ).addClass( "smallViewHide" );
    
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
    document.getElementById('kojiro').style.height = '0';
    document.getElementById('kojiro').style.width = '32.2666666667%';
    document.getElementById('kojiro').style.opacity = '0';
    document.getElementById('kojiro').style.marginBottom = '0';
    document.getElementById('ella').style.height = '0';
    document.getElementById('ella').style.width = '32.2666666667%';
    document.getElementById('ella').style.opacity = '0';
    document.getElementById('ella').style.marginBottom = '0';
    document.getElementById('ella').style.marginLeft = '1.6%';
    
    
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
	$( "#playboy" ).removeClass( "smallViewHide" );
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

