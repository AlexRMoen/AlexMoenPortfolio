// JavaScript Document

function closeX() {
	
	// starts displaying other modals
	document.getElementById('kojiro').style.display = '';
	document.getElementById('ella').style.display = '';
	document.getElementById('sunnyspot').style.display = '';
	document.getElementById('ella').style.display = '';
	document.getElementById('playboy').style.display = '';
	
	// opens the modal link divs
	document.getElementById('kojiroModalLinkContainer').style.display = '';
	document.getElementById('sunnyspotModalLinkContainer').style.display = '';
	document.getElementById('ellaModalLinkContainer').style.display = '';
	document.getElementById('playboyModalLinkContainer').style.display = '';
	document.getElementById('enterpriseModalLinkContainer').style.display = '';
	
	// changes the height of the wrapper around the gallery
	document.getElementById('galleryHeightWrapper').style.minHeight = '';
	
	// adds the padding to accurately position the modal
    document.getElementById('galleryRow').style.paddingTop = '';
	
	// adds padding back to the gallery
	document.getElementById('gallery').style.paddingTop = '';
	document.getElementById('gallery').style.paddingBottom = '';
	
	// scales all modals back to gallery items
    document.getElementById('kojiro').style.height = '';
    document.getElementById('kojiro').style.width = '';
    document.getElementById('kojiro').style.opacity = '';
    document.getElementById('kojiro').style.marginLeft = '';
    document.getElementById('kojiro').style.marginRight = '';
    document.getElementById('kojiro').style.marginBottom = '';
    document.getElementById('kojiro').style.overflowX = 'auto';
    document.getElementById('kojiro').style.overflowY = 'hidden';
	$( "#kojiro" ).removeClass( "smallViewHide" );
    document.getElementById('kojiroHeader').style.height = '';
    document.getElementById('kojiroMain').style.height = '';
    document.getElementById('kojiroMain').style.opacity = '';
    document.getElementById('kojiroCloseX').style.transform = '';
    document.getElementById('kojiroCloseX').style.opacity = '';
    document.getElementById('kojiroLabel').style.transform = '';
    document.getElementById('kojiroLabel').style.bottom = '';
	document.getElementById('kojiroLabel').style.width = '';
	document.getElementById('kojiroBottomLabel').style.paddingTop = '';
	document.getElementById('kojiroBottomLabel').style.paddingBottom = '';
	document.getElementById('kojiroTopLabel').style.paddingLeft = '';
	document.getElementById('kojiroBottomLabel').style.paddingLeft = '';
	
	document.getElementById('sunnyspot').style.height = '';
    document.getElementById('sunnyspot').style.width = '';
    document.getElementById('sunnyspot').style.opacity = '';
    document.getElementById('sunnyspot').style.marginLeft = '';
    document.getElementById('sunnyspot').style.marginRight = '';
    document.getElementById('sunnyspot').style.marginBottom = '';
    document.getElementById('sunnyspot').style.overflowX = 'auto';
    document.getElementById('sunnyspot').style.overflowY = 'hidden';
	$( "#sunnyspot" ).removeClass( "smallViewHide" );
    document.getElementById('sunnyspotHeader').style.height = '';
    document.getElementById('sunnyspotMain').style.height = '';
    document.getElementById('sunnyspotMain').style.opacity = '';
    document.getElementById('sunnyspotCloseX').style.transform = '';
    document.getElementById('sunnyspotCloseX').style.opacity = '';
    document.getElementById('sunnyspotLabel').style.transform = '';
    document.getElementById('sunnyspotLabel').style.bottom = '';
	document.getElementById('sunnyspotLabel').style.width = '';
	document.getElementById('sunnyspotBottomLabel').style.paddingTop = '';
	document.getElementById('sunnyspotBottomLabel').style.paddingBottom = '';
	document.getElementById('sunnyspotTopLabel').style.paddingLeft = '';
	document.getElementById('sunnyspotBottomLabel').style.paddingLeft = '';
	
	document.getElementById('ella').style.height = '';
    document.getElementById('ella').style.width = '';
    document.getElementById('ella').style.opacity = '';
    document.getElementById('ella').style.marginLeft = '';
    document.getElementById('ella').style.marginRight = '';
    document.getElementById('ella').style.marginBottom = '';
    document.getElementById('ella').style.overflowX = 'auto';
    document.getElementById('ella').style.overflowY = 'hidden';
	$( "#ella" ).removeClass( "smallViewHide" );
    document.getElementById('ellaHeader').style.height = '';
    document.getElementById('ellaMain').style.height = '';
    document.getElementById('ellaMain').style.opacity = '';
    document.getElementById('ellaCloseX').style.transform = '';
    document.getElementById('ellaCloseX').style.opacity = '';
    document.getElementById('ellaLabel').style.transform = '';
    document.getElementById('ellaLabel').style.bottom = '';
	document.getElementById('ellaLabel').style.width = '';
	document.getElementById('ellaBottomLabel').style.paddingTop = '';
	document.getElementById('ellaBottomLabel').style.paddingBottom = '';
	document.getElementById('ellaTopLabel').style.paddingLeft = '';
	document.getElementById('ellaBottomLabel').style.paddingLeft = '';
	
	document.getElementById('playboy').style.height = '';
    document.getElementById('playboy').style.width = '';
    document.getElementById('playboy').style.opacity = '';
    document.getElementById('playboy').style.marginLeft = '';
    document.getElementById('playboy').style.marginRight = '';
    document.getElementById('playboy').style.marginBottom = '';
    document.getElementById('playboy').style.overflowX = 'auto';
    document.getElementById('playboy').style.overflowY = 'hidden';
	$( "#playboy" ).removeClass( "smallViewHide" );
    document.getElementById('playboyHeader').style.height = '';
    document.getElementById('playboyMain').style.height = '';
    document.getElementById('playboyMain').style.opacity = '';
    document.getElementById('playboyCloseX').style.transform = '';
    document.getElementById('playboyCloseX').style.opacity = '';
    document.getElementById('playboyLabel').style.transform = '';
    document.getElementById('playboyLabel').style.bottom = '';
	document.getElementById('playboyLabel').style.width = '';
	document.getElementById('playboyBottomLabel').style.paddingTop = '';
	document.getElementById('playboyBottomLabel').style.paddingBottom = '';
	document.getElementById('playboyTopLabel').style.paddingLeft = '';
	document.getElementById('playboyBottomLabel').style.paddingLeft = '';
	
	document.getElementById('enterprise').style.height = '';
    document.getElementById('enterprise').style.width = '';
    document.getElementById('enterprise').style.opacity = '';
    document.getElementById('enterprise').style.marginLeft = '';
    document.getElementById('enterprise').style.marginRight = '';
    document.getElementById('enterprise').style.marginBottom = '';
    document.getElementById('enterprise').style.overflowX = 'auto';
    document.getElementById('enterprise').style.overflowY = 'hidden';
	$( "#enterprise" ).removeClass( "smallViewHide" );
    document.getElementById('enterpriseHeader').style.height = '';
    document.getElementById('enterpriseMain').style.height = '';
    document.getElementById('enterpriseMain').style.opacity = '';
    document.getElementById('enterpriseCloseX').style.transform = '';
    document.getElementById('enterpriseCloseX').style.opacity = '';
    document.getElementById('enterpriseLabel').style.transform = '';
    document.getElementById('enterpriseLabel').style.bottom = '';
	document.getElementById('enterpriseLabel').style.width = '';
	document.getElementById('enterpriseBottomLabel').style.paddingTop = '';
	document.getElementById('enterpriseBottomLabel').style.paddingBottom = '';
	document.getElementById('enterpriseTopLabel').style.paddingLeft = '';
	document.getElementById('enterpriseBottomLabel').style.paddingLeft = '';
	
	// adds the gallery title
    document.getElementById('myWork').style.height = '';
    document.getElementById('myWork').style.marginBottom = '';
		 
	// adds the visual of the gallery title
	document.getElementById('myWork').style.opacity = '';
    document.getElementById('myWork').style.transform = '';
	
	if (window.matchMedia("(min-width: 48em)").matches) {
	
	setTimeout(function() {
	
	// opens other elements on screen
    document.getElementById('aboveFold').style.display = 'block';
    document.getElementById('title').style.display = 'block';
    document.getElementById('arrowDown').style.display = 'block';
    document.getElementById('aboutMe').style.display = 'block';
    document.getElementById('porthole').style.display = 'block';
	
	$(window).scrollTop(tempScrollTop);
	
	}, 500);
	
	} else {
		
			setTimeout(function() {
	
	// opens other elements on screen
    document.getElementById('aboveFold').style.display = 'block';
    document.getElementById('title').style.display = 'block';
    document.getElementById('arrowDown').style.display = 'block';
    document.getElementById('aboutMe').style.display = 'block';
    document.getElementById('porthole').style.display = 'block';
	
	$(window).scrollTop(tempScrollTop);
	
	}, 0);
	
	}
	
}

