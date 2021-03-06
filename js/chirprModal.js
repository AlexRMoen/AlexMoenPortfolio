// JavaScript Document

$(function() {
  $('#chirprModalLinkContainer').hover(function() {
    $('#chirpr').css('transform', 'scale(1.1)');
  }, function() {
    // on mouseout, reset the background colour
    $('#chirpr').css('transform', '');
  });
});

function chirprOpenModal() {

(function($) {
	
	$('#chirpr').css('transform', '');
	
	// closes the modal link divs
	document.getElementById('kojiroModalLinkContainer').style.display = 'none';
	document.getElementById('xxxModalLinkContainer').style.display = 'none';
	document.getElementById('xxxModalLinkContainer').style.display = 'none';
	document.getElementById('ellaModalLinkContainer').style.display = 'none';
	document.getElementById('enterpriseModalLinkContainer').style.display = 'none';
	document.getElementById('chirprModalLinkContainer').style.display = 'none';
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
    document.getElementById('xxx').style.height = '0';
    document.getElementById('xxx').style.opacity = '0';
    document.getElementById('xxx').style.marginBottom = '0';
	$( "#xxx" ).addClass( "smallViewHide" );
    document.getElementById('xxx').style.height = '0';
    document.getElementById('xxx').style.opacity = '0';
    document.getElementById('xxx').style.marginBottom = '0';
	$( "#xxx" ).addClass( "smallViewHide" );
    
    // rescales and fades other line 2 items
    document.getElementById('ella').style.height = '85vh';
    document.getElementById('ella').style.opacity = '0';
    document.getElementById('ella').style.width = '0';
    document.getElementById('ella').style.marginLeft = '0';
	$( "#ella" ).addClass( "smallViewHide" );
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
    document.getElementById('chirprLeftArrow').style.left = '3.5vw';
    document.getElementById('chirprLeftArrow').style.opacity = '1';
    document.getElementById('chirprRightArrow').style.right = '3.5vw';
    document.getElementById('chirprRightArrow').style.opacity = '1';
    
    // scales a gallery item into a modal
    document.getElementById('chirpr').style.height = '85vh';
    document.getElementById('chirpr').style.width = '80%';
    document.getElementById('chirpr').style.marginLeft = '10%';
    document.getElementById('chirpr').style.marginRight = '10%';
    document.getElementById('chirpr').style.overflowX = 'hidden';
    document.getElementById('chirpr').style.overflowY = 'scroll';
    document.getElementById('chirprHeader').style.height = '55%';
    document.getElementById('chirprMain').style.height = '45%';
    document.getElementById('chirprMain').style.opacity = '1';
    document.getElementById('chirprCloseX').style.transform = 'scale(1)';
    document.getElementById('chirprCloseX').style.opacity = '1';
    document.getElementById('chirprLabel').style.transform = 'scale(1.3)';
    document.getElementById('chirprLabel').style.bottom = '3.75em';
    document.getElementById('chirprLabel').style.width = '38%';
	document.getElementById('chirprBottomLabel').style.paddingTop = '0.3em';
	document.getElementById('chirprBottomLabel').style.paddingBottom = '0.4em';
	document.getElementById('chirprTopLabel').style.paddingLeft = '15px';
	document.getElementById('chirprBottomLabel').style.paddingLeft = '15px';
	
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
    document.getElementById('xxx').style.height = '0';
    document.getElementById('xxx').style.opacity = '0';
    document.getElementById('xxx').style.marginBottom = '0';
	$( "#xxx" ).addClass( "smallViewHide" );
    document.getElementById('xxx').style.height = '0';
    document.getElementById('xxx').style.opacity = '0';
    document.getElementById('xxx').style.marginBottom = '0';
	$( "#xxx" ).addClass( "smallViewHide" );
    
    // rescales and fades other line 2 items
    document.getElementById('ella').style.height = '85vh';
    document.getElementById('ella').style.opacity = '0';
    document.getElementById('ella').style.width = '0';
    document.getElementById('ella').style.marginLeft = '0';
	$( "#ella" ).addClass( "smallViewHide" );
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
    document.getElementById('chirprLeftArrow').style.left = '3.5vw';
    document.getElementById('chirprLeftArrow').style.opacity = '1';
    document.getElementById('chirprRightArrow').style.right = '3.5vw';
    document.getElementById('chirprRightArrow').style.opacity = '1';
    
    // scales a gallery item into a modal
    document.getElementById('chirpr').style.height = '85vh';
    document.getElementById('chirpr').style.width = '80%';
    document.getElementById('chirpr').style.marginLeft = '10%';
    document.getElementById('chirpr').style.marginRight = '10%';
    document.getElementById('chirpr').style.overflowX = 'hidden';
    document.getElementById('chirpr').style.overflowY = 'scroll';
    document.getElementById('chirprHeader').style.height = '55%';
    document.getElementById('chirprMain').style.height = '45%';
    document.getElementById('chirprMain').style.opacity = '1';
    document.getElementById('chirprCloseX').style.transform = 'scale(1)';
    document.getElementById('chirprCloseX').style.opacity = '1';
    document.getElementById('chirprLabel').style.transform = 'scale(1.3)';
    document.getElementById('chirprLabel').style.bottom = '3.75em';
    document.getElementById('chirprLabel').style.width = '38%';
	document.getElementById('chirprBottomLabel').style.paddingTop = '0.3em';
	document.getElementById('chirprBottomLabel').style.paddingBottom = '0.4em';
	document.getElementById('chirprTopLabel').style.paddingLeft = '15px';
	document.getElementById('chirprBottomLabel').style.paddingLeft = '15px';
	
	}, 0);
		
	}
		 
})(jQuery);


}



function chirprCloseX() {
	
	// removes left and right arrows
    document.getElementById('chirprLeftArrow').style.left = '';
    document.getElementById('chirprLeftArrow').style.opacity = '';
    document.getElementById('chirprRightArrow').style.right = '';
    document.getElementById('chirprRightArrow').style.opacity = '';
	
	if (window.matchMedia("(min-width: 48em)").matches) { 
	$("#chirpr").animate({ scrollTop: 0 }, 500);
	} else {
	$("#chirpr").animate({ scrollTop: 0 }, 0);
	}
	
	closeX();
	
}


function chirprLeftArrow() {
	

	
	
// closes itself

    document.getElementById('chirpr').style.height = '85vh';
    document.getElementById('chirpr').style.width = '0';
    document.getElementById('chirpr').style.opacity = '0';
    document.getElementById('chirpr').style.marginLeft = '0';
    document.getElementById('chirpr').style.marginRight = '0';
    document.getElementById('chirpr').style.marginBottom = '0';
    document.getElementById('chirprHeader').style.height = '100%';
    document.getElementById('chirprMain').style.height = '0';
    document.getElementById('chirprMain').style.opacity = '0';
	document.getElementById('chirpr').style.overflowX = 'auto';
    document.getElementById('chirpr').style.overflowY = 'hidden';
	
	if (window.matchMedia("(min-width: 48em)").matches) { 
	$("#chirpr").animate({ scrollTop: 0 }, 500);
	} else {
	$("#chirpr").animate({ scrollTop: 0 }, 0);
	}
	
    document.getElementById('chirprCloseX').style.transform = 'scale(0)';
    document.getElementById('chirprCloseX').style.opacity = '0';
    document.getElementById('chirprLabel').style.transform = 'scale(1)';
    document.getElementById('chirprLabel').style.bottom = '0';
	document.getElementById('chirprLabel').style.width = '100%';
	document.getElementById('chirprBottomLabel').style.paddingTop = '0.5em';
	document.getElementById('chirprBottomLabel').style.paddingBottom = '0.7em';
	document.getElementById('chirprTopLabel').style.paddingLeft = '35px';
	document.getElementById('chirprBottomLabel').style.paddingLeft = '35px';
	$( "#chirpr" ).addClass( "smallViewHide" );
    
    // switches out arrow for the proper item
    document.getElementById('chirprLeftArrow').style.left = '-3.5vw';
    document.getElementById('chirprLeftArrow').style.opacity = '0';
    document.getElementById('chirprRightArrow').style.right = '-3.5vw';
    document.getElementById('chirprRightArrow').style.opacity = '0';
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



function chirprRightArrow() {
	

	
	
// closes itself

    document.getElementById('chirpr').style.height = '85vh';
    document.getElementById('chirpr').style.width = '0';
    document.getElementById('chirpr').style.opacity = '0';
    document.getElementById('chirpr').style.marginLeft = '0';
    document.getElementById('chirpr').style.marginRight = '0';
    document.getElementById('chirpr').style.marginBottom = '0';
    document.getElementById('chirprHeader').style.height = '100%';
    document.getElementById('chirprMain').style.height = '0';
    document.getElementById('chirprMain').style.opacity = '0';
	document.getElementById('chirpr').style.overflowX = 'auto';
    document.getElementById('chirpr').style.overflowY = 'hidden';
	
	if (window.matchMedia("(min-width: 48em)").matches) { 
	$("#chirpr").animate({ scrollTop: 0 }, 500);
	} else {
	$("#chirpr").animate({ scrollTop: 0 }, 0);
	}
	
    document.getElementById('chirprCloseX').style.transform = 'scale(0)';
    document.getElementById('chirprCloseX').style.opacity = '0';
    document.getElementById('chirprLabel').style.transform = 'scale(1)';
    document.getElementById('chirprLabel').style.bottom = '0';
	document.getElementById('chirprLabel').style.width = '100%';
	document.getElementById('chirprBottomLabel').style.paddingTop = '0.5em';
	document.getElementById('chirprBottomLabel').style.paddingBottom = '0.7em';
	document.getElementById('chirprTopLabel').style.paddingLeft = '35px';
	document.getElementById('chirprBottomLabel').style.paddingLeft = '35px';
	$( "#chirpr" ).addClass( "smallViewHide" );
    
    // switches out arrow for the proper item
    document.getElementById('chirprLeftArrow').style.left = '-3.5vw';
    document.getElementById('chirprLeftArrow').style.opacity = '0';
    document.getElementById('chirprRightArrow').style.right = '-3.5vw';
    document.getElementById('chirprRightArrow').style.opacity = '0';
    document.getElementById('newitemLeftArrow').style.left = '3.5vw';
    document.getElementById('newitemLeftArrow').style.opacity = '1';
    // NONE document.getElementById('newitemRightArrow').style.right = '3.5vw';
    // NONE document.getElementById('newitemRightArrow').style.opacity = '1'; 
    
    
    // moves other modal into place
	$( "#newitem" ).removeClass( "smallViewHide" );
    document.getElementById('newitem').style.height = '85vh';
    document.getElementById('newitem').style.width = '80%';
    document.getElementById('newitem').style.marginLeft = '10%';
    document.getElementById('newitem').style.marginRight = '10%';
    document.getElementById('newitem').style.opacity = '1';
    document.getElementById('newitemHeader').style.height = '55%';
    document.getElementById('newitemMain').style.height = '45%';
    document.getElementById('newitemMain').style.opacity = '1';
	document.getElementById('newitem').style.overflowX = 'hidden';
    document.getElementById('newitem').style.overflowY = 'scroll';
    document.getElementById('newitemCloseX').style.transform = 'scale(1)';
    document.getElementById('newitemCloseX').style.opacity = '1';
    document.getElementById('newitemLabel').style.transform = 'scale(1.3)';
    document.getElementById('newitemLabel').style.bottom = '3.75em';
    document.getElementById('newitemLabel').style.width = '38%';
	document.getElementById('newitemBottomLabel').style.paddingTop = '0.3em';
	document.getElementById('newitemBottomLabel').style.paddingBottom = '0.4em';
	document.getElementById('newitemTopLabel').style.paddingLeft = '15px';
	document.getElementById('newitemBottomLabel').style.paddingLeft = '15px';
	
}
