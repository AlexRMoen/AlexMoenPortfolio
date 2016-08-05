// JavaScript Document

$(function() {
  $('#playboyModalLinkContainer').hover(function() {
    $('#playboy').css('transform', 'scale(1.1)');
  }, function() {
    // on mouseout, reset the background colour
    $('#playboy').css('transform', '');
  });
});

function playboyOpenModal() {

(function($) {
	
	$('#playboy').css('transform', '');
	
	// closes the modal link divs
	document.getElementById('kojiroModalLinkContainer').style.display = 'none';
	document.getElementById('trelloModalLinkContainer').style.display = 'none';
	document.getElementById('playboyModalLinkContainer').style.display = 'none';
	document.getElementById('enterpriseModalLinkContainer').style.display = 'none';
	document.getElementById('newitemModalLinkContainer').style.display = 'none';
	
	if (window.matchMedia("(min-width: 48em)").matches) {
    $(document).ready(function() {
		 // scrolls to the top of the gallery div
         $('html, body').animate({
           'scrollTop':   $('#gallery').offset().top
         }, 500); 
	});
	}
	 
	 
	// changes the height of the wrapper around the gallery
	document.getElementById('galleryHeightWrapper').style.minHeight = '100vh';
	 
	// removes all padding from the gallery
	document.getElementById('gallery').style.padding = '0';
		 
	// removes the visual of the gallery title
	document.getElementById('myWork').style.opacity = '0';
    document.getElementById('myWork').style.transform = 'scale(0)';
			 
		
	if (window.matchMedia("(min-width: 48em)").matches) {	 
			 
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
	$( "#kojiro" ).addClass( "smallViewHide" );
    document.getElementById('trello').style.height = '0';
    document.getElementById('trello').style.opacity = '0';
    document.getElementById('trello').style.marginBottom = '0';
	$( "#trello" ).addClass( "smallViewHide" );
    
    // rescales and fades other line 2 items
    document.getElementById('enterprise').style.height = '85vh';
    document.getElementById('enterprise').style.opacity = '0';
    document.getElementById('enterprise').style.width = '0';
    document.getElementById('enterprise').style.marginLeft = '0';
	$( "#enterprise" ).addClass( "smallViewHide" );
    document.getElementById('newitem').style.height = '85vh';
    document.getElementById('newitem').style.opacity = '0';
    document.getElementById('newitem').style.width = '0';
    document.getElementById('newitem').style.marginLeft = '0';
	$( "#newitem" ).addClass( "smallViewHide" );
    
    // displays left and right arrows
    document.getElementById('playboyLeftArrow').style.left = '3.5vw';
    document.getElementById('playboyLeftArrow').style.opacity = '1';
    document.getElementById('playboyRightArrow').style.right = '3.5vw';
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
    document.getElementById('playboyLabel').style.transform = 'scale(1.3)';
    document.getElementById('playboyLabel').style.bottom = '3.75em';
    document.getElementById('playboyLabel').style.width = '38%';
	document.getElementById('playboyBottomLabel').style.paddingTop = '0.3em';
	document.getElementById('playboyBottomLabel').style.paddingBottom = '0.4em';
	document.getElementById('playboyTopLabel').style.paddingLeft = '15px';
	document.getElementById('playboyBottomLabel').style.paddingLeft = '15px';
	
	}, 500);
	
	} else {
		
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
	$( "#kojiro" ).addClass( "smallViewHide" );
    document.getElementById('trello').style.height = '0';
    document.getElementById('trello').style.opacity = '0';
    document.getElementById('trello').style.marginBottom = '0';
	$( "#trello" ).addClass( "smallViewHide" );
    
    // rescales and fades other line 2 items
    document.getElementById('enterprise').style.height = '85vh';
    document.getElementById('enterprise').style.opacity = '0';
    document.getElementById('enterprise').style.width = '0';
    document.getElementById('enterprise').style.marginLeft = '0';
	$( "#enterprise" ).addClass( "smallViewHide" );
    document.getElementById('newitem').style.height = '85vh';
    document.getElementById('newitem').style.opacity = '0';
    document.getElementById('newitem').style.width = '0';
    document.getElementById('newitem').style.marginLeft = '0';
	$( "#newitem" ).addClass( "smallViewHide" );
    
    // displays left and right arrows
    document.getElementById('playboyLeftArrow').style.left = '3.5vw';
    document.getElementById('playboyLeftArrow').style.opacity = '1';
    document.getElementById('playboyRightArrow').style.right = '3.5vw';
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
    document.getElementById('playboyLabel').style.transform = 'scale(1.3)';
    document.getElementById('playboyLabel').style.bottom = '3.75em';
    document.getElementById('playboyLabel').style.width = '38%';
	document.getElementById('playboyBottomLabel').style.paddingTop = '0.3em';
	document.getElementById('playboyBottomLabel').style.paddingBottom = '0.4em';
	document.getElementById('playboyTopLabel').style.paddingLeft = '15px';
	document.getElementById('playboyBottomLabel').style.paddingLeft = '15px';
	
	}, 0);
	
	}
		 
})(jQuery);


}


function playboyCloseX() {
	
	// removes left and right arrows
    document.getElementById('playboyLeftArrow').style.left = '';
    document.getElementById('playboyLeftArrow').style.opacity = '';
    document.getElementById('playboyRightArrow').style.right = '';
    document.getElementById('playboyRightArrow').style.opacity = '';
	
	if (window.matchMedia("(min-width: 48em)").matches) {
	$("#playboy").animate({ scrollTop: 0 }, 500);
	} else {
	$("#playboy").animate({ scrollTop: 0 }, 0);
	}
	
	closeX();
	
}




function playboyLeftArrow() {
	
	// adds the padding to accurately position the modal
    document.getElementById('firstRow').style.paddingTop = '7.5vh';
	document.getElementById('secondRow').style.paddingTop = '0';
	
	
    // closes itself
    document.getElementById('playboy').style.height = '0';
    document.getElementById('playboy').style.width = '23.8%';
    document.getElementById('playboy').style.opacity = '0';
    document.getElementById('playboy').style.marginLeft = '0';
    document.getElementById('playboy').style.marginRight = '0';
    document.getElementById('playboy').style.marginBottom = '0';
    document.getElementById('playboyHeader').style.height = '100%';
    document.getElementById('playboyMain').style.height = '0';
    document.getElementById('playboyMain').style.opacity = '0';
	document.getElementById('playboy').style.overflowX = 'auto';
    document.getElementById('playboy').style.overflowY = 'hidden';
	
	if (window.matchMedia("(min-width: 48em)").matches) {
	$("#playboy").animate({ scrollTop: 0 }, 500);
	} else {
	$("#playboy").animate({ scrollTop: 0 }, 0);
	}
	
    document.getElementById('playboyCloseX').style.transform = 'scale(0)';
    document.getElementById('playboyCloseX').style.opacity = '0';
    document.getElementById('playboyLabel').style.transform = 'scale(1)';
    document.getElementById('playboyLabel').style.bottom = '0';
	document.getElementById('playboyLabel').style.width = '100%';
	document.getElementById('playboyBottomLabel').style.paddingTop = '0.5em';
	document.getElementById('playboyBottomLabel').style.paddingBottom = '0.7em';
	document.getElementById('playboyTopLabel').style.paddingLeft = '35px';
	document.getElementById('playboyBottomLabel').style.paddingLeft = '35px';
	$( "#playboy" ).addClass( "smallViewHide" );
    
    // switches out arrow for the proper item
    document.getElementById('playboyLeftArrow').style.left = '-3.5vw';
    document.getElementById('playboyLeftArrow').style.opacity = '0';
    document.getElementById('playboyRightArrow').style.right = '-3.5vw';
    document.getElementById('playboyRightArrow').style.opacity = '0';
    document.getElementById('trelloLeftArrow').style.left = '3.5vw';
    document.getElementById('trelloLeftArrow').style.opacity = '1';
    document.getElementById('trelloRightArrow').style.right = '3.5vw';
    document.getElementById('trelloRightArrow').style.opacity = '1';
	
	// resizes top row items
    document.getElementById('kojiro').style.height = '85vh';
    document.getElementById('kojiro').style.width = '0';
    document.getElementById('kojiro').style.opacity = '0';
    document.getElementById('kojiro').style.marginBottom = '1.6vw';
    
    
    // resizes bottom row items
    document.getElementById('enterprise').style.height = '0';
    document.getElementById('enterprise').style.opacity = '0';
    document.getElementById('enterprise').style.width = '23.8%';
    document.getElementById('enterprise').style.marginLeft = '1.6%';
    document.getElementById('newitem').style.height = '0';
    document.getElementById('newitem').style.opacity = '0';
    document.getElementById('newitem').style.width = '23.8%';
    document.getElementById('newitem').style.marginLeft = '1.6%';
    
    
    // moves other modal into place
	$( "#trello" ).removeClass( "smallViewHide" );
    document.getElementById('trello').style.height = '85vh';
    document.getElementById('trello').style.width = '80%';
    document.getElementById('trello').style.marginLeft = '10%';
    document.getElementById('trello').style.marginRight = '10%';
    document.getElementById('trello').style.marginBottom = '1.6vw';
    document.getElementById('trello').style.opacity = '1';
    document.getElementById('trelloHeader').style.height = '55%';
    document.getElementById('trelloMain').style.height = '45%';
    document.getElementById('trelloMain').style.opacity = '1';
	document.getElementById('trello').style.overflowX = 'hidden';
    document.getElementById('trello').style.overflowY = 'scroll';
    document.getElementById('trelloCloseX').style.transform = 'scale(1)';
    document.getElementById('trelloCloseX').style.opacity = '1';
    document.getElementById('trelloLabel').style.transform = 'scale(1.3)';
    document.getElementById('trelloLabel').style.bottom = '3.75em';
    document.getElementById('trelloLabel').style.width = '38%';
	document.getElementById('trelloBottomLabel').style.paddingTop = '0.3em';
	document.getElementById('trelloBottomLabel').style.paddingBottom = '0.4em';
	document.getElementById('trelloTopLabel').style.paddingLeft = '15px';
	document.getElementById('trelloBottomLabel').style.paddingLeft = '15px';
	
}

function playboyRightArrow() {
	

	
	
// closes itself

    document.getElementById('playboy').style.height = '85vh';
    document.getElementById('playboy').style.width = '0';
    document.getElementById('playboy').style.opacity = '0';
    document.getElementById('playboy').style.marginLeft = '0';
    document.getElementById('playboy').style.marginRight = '0';
    document.getElementById('playboy').style.marginBottom = '0';
    document.getElementById('playboyHeader').style.height = '100%';
    document.getElementById('playboyMain').style.height = '0';
    document.getElementById('playboyMain').style.opacity = '0';
	document.getElementById('playboy').style.overflowX = 'auto';
    document.getElementById('playboy').style.overflowY = 'hidden';
	
	if (window.matchMedia("(min-width: 48em)").matches) {
	$("#playboy").animate({ scrollTop: 0 }, 500);
	} else {
	$("#playboy").animate({ scrollTop: 0 }, 0);
	}
	
    document.getElementById('playboyCloseX').style.transform = 'scale(0)';
    document.getElementById('playboyCloseX').style.opacity = '0';
    document.getElementById('playboyLabel').style.transform = 'scale(1)';
    document.getElementById('playboyLabel').style.bottom = '0';
	document.getElementById('playboyLabel').style.width = '100%';
	document.getElementById('playboyBottomLabel').style.paddingTop = '0.5em';
	document.getElementById('playboyBottomLabel').style.paddingBottom = '0.7em';
	document.getElementById('playboyTopLabel').style.paddingLeft = '35px';
	document.getElementById('playboyBottomLabel').style.paddingLeft = '35px';
	$( "#playboy" ).addClass( "smallViewHide" );
    
    // switches out arrow for the proper item
    document.getElementById('playboyLeftArrow').style.left = '-3.5vw';
    document.getElementById('playboyLeftArrow').style.opacity = '0';
    document.getElementById('playboyRightArrow').style.right = '-3.5vw';
    document.getElementById('playboyRightArrow').style.opacity = '0';
    document.getElementById('enterpriseLeftArrow').style.left = '3.5vw';
    document.getElementById('enterpriseLeftArrow').style.opacity = '1';
    document.getElementById('enterpriseRightArrow').style.right = '3.5vw';
    document.getElementById('enterpriseRightArrow').style.opacity = '1'; 
    
    
    // moves other modal into place
	$( "#enterprise" ).removeClass( "smallViewHide" );
    document.getElementById('enterprise').style.height = '85vh';
    document.getElementById('enterprise').style.width = '80%';
    document.getElementById('enterprise').style.marginLeft = '10%';
    document.getElementById('enterprise').style.marginRight = '10%';
    document.getElementById('enterprise').style.opacity = '1';
    document.getElementById('enterpriseHeader').style.height = '55%';
    document.getElementById('enterpriseMain').style.height = '45%';
    document.getElementById('enterpriseMain').style.opacity = '1';
	document.getElementById('enterprise').style.overflowX = 'hidden';
    document.getElementById('enterprise').style.overflowY = 'scroll';
    document.getElementById('enterpriseCloseX').style.transform = 'scale(1)';
    document.getElementById('enterpriseCloseX').style.opacity = '1';
    document.getElementById('enterpriseLabel').style.transform = 'scale(1.3)';
    document.getElementById('enterpriseLabel').style.bottom = '3.75em';
    document.getElementById('enterpriseLabel').style.width = '38%';
	document.getElementById('enterpriseBottomLabel').style.paddingTop = '0.3em';
	document.getElementById('enterpriseBottomLabel').style.paddingBottom = '0.4em';
	document.getElementById('enterpriseTopLabel').style.paddingLeft = '15px';
	document.getElementById('enterpriseBottomLabel').style.paddingLeft = '15px';
	
}


