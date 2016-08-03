// JavaScript Document

function closeX() {
	
	// changes the height of the wrapper around the gallery
	document.getElementById('galleryHeightWrapper').style.minHeight = '';
	
	// adds the padding to accurately position the modal
    document.getElementById('firstRow').style.paddingTop = '';
    document.getElementById('secondRow').style.paddingTop = '';
	
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
    document.getElementById('kojiroCloseX').style.right = '';
    document.getElementById('kojiroCloseX').style.top = '';
    document.getElementById('kojiroLabel').style.transform = '';
    document.getElementById('kojiroLabel').style.bottom = '';
	document.getElementById('kojiroLabel').style.width = '';
	document.getElementById('kojiroBottomLabel').style.paddingTop = '';
	document.getElementById('kojiroBottomLabel').style.paddingBottom = '';
	document.getElementById('kojiroTopLabel').style.paddingLeft = '';
	document.getElementById('kojiroBottomLabel').style.paddingLeft = '';
	
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
    document.getElementById('ellaCloseX').style.right = '';
    document.getElementById('ellaCloseX').style.top = '';
    document.getElementById('ellaLabel').style.transform = '';
    document.getElementById('ellaLabel').style.bottom = '';
	document.getElementById('ellaLabel').style.width = '';
	document.getElementById('ellaBottomLabel').style.paddingTop = '';
	document.getElementById('ellaBottomLabel').style.paddingBottom = '';
	document.getElementById('ellaTopLabel').style.paddingLeft = '';
	document.getElementById('ellaBottomLabel').style.paddingLeft = '';
	
	document.getElementById('trello').style.height = '';
    document.getElementById('trello').style.width = '';
    document.getElementById('trello').style.opacity = '';
    document.getElementById('trello').style.marginLeft = '';
    document.getElementById('trello').style.marginRight = '';
    document.getElementById('trello').style.marginBottom = '';
    document.getElementById('trello').style.overflowX = 'auto';
    document.getElementById('trello').style.overflowY = 'hidden';
	$( "#trello" ).removeClass( "smallViewHide" );
    document.getElementById('trelloHeader').style.height = '';
    document.getElementById('trelloMain').style.height = '';
    document.getElementById('trelloMain').style.opacity = '';
    document.getElementById('trelloCloseX').style.transform = '';
    document.getElementById('trelloCloseX').style.opacity = '';
    document.getElementById('trelloCloseX').style.right = '';
    document.getElementById('trelloCloseX').style.top = '';
    document.getElementById('trelloLabel').style.transform = '';
    document.getElementById('trelloLabel').style.bottom = '';
	document.getElementById('trelloLabel').style.width = '';
	document.getElementById('trelloBottomLabel').style.paddingTop = '';
	document.getElementById('trelloBottomLabel').style.paddingBottom = '';
	document.getElementById('trelloTopLabel').style.paddingLeft = '';
	document.getElementById('trelloBottomLabel').style.paddingLeft = '';
	
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
    document.getElementById('playboyCloseX').style.right = '';
    document.getElementById('playboyCloseX').style.top = '';
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
    document.getElementById('enterpriseCloseX').style.right = '';
    document.getElementById('enterpriseCloseX').style.top = '';
    document.getElementById('enterpriseLabel').style.transform = '';
    document.getElementById('enterpriseLabel').style.bottom = '';
	document.getElementById('enterpriseLabel').style.width = '';
	document.getElementById('enterpriseBottomLabel').style.paddingTop = '';
	document.getElementById('enterpriseBottomLabel').style.paddingBottom = '';
	document.getElementById('enterpriseTopLabel').style.paddingLeft = '';
	document.getElementById('enterpriseBottomLabel').style.paddingLeft = '';
	
	document.getElementById('chirpr').style.height = '';
    document.getElementById('chirpr').style.width = '';
    document.getElementById('chirpr').style.opacity = '';
    document.getElementById('chirpr').style.marginLeft = '';
    document.getElementById('chirpr').style.marginRight = '';
    document.getElementById('chirpr').style.marginBottom = '';
    document.getElementById('chirpr').style.overflowX = 'auto';
    document.getElementById('chirpr').style.overflowY = 'hidden';
	$( "#chirpr" ).removeClass( "smallViewHide" );
    document.getElementById('chirprHeader').style.height = '';
    document.getElementById('chirprMain').style.height = '';
    document.getElementById('chirprMain').style.opacity = '';
    document.getElementById('chirprCloseX').style.transform = '';
    document.getElementById('chirprCloseX').style.opacity = '';
    document.getElementById('chirprCloseX').style.right = '';
    document.getElementById('chirprCloseX').style.top = '';
    document.getElementById('chirprLabel').style.transform = '';
    document.getElementById('chirprLabel').style.bottom = '';
	document.getElementById('chirprLabel').style.width = '';
	document.getElementById('chirprBottomLabel').style.paddingTop = '';
	document.getElementById('chirprBottomLabel').style.paddingBottom = '';
	document.getElementById('chirprTopLabel').style.paddingLeft = '';
	document.getElementById('chirprBottomLabel').style.paddingLeft = '';
	
	document.getElementById('newitem').style.height = '';
    document.getElementById('newitem').style.width = '';
    document.getElementById('newitem').style.opacity = '';
    document.getElementById('newitem').style.marginLeft = '';
    document.getElementById('newitem').style.marginRight = '';
    document.getElementById('newitem').style.marginBottom = '';
    document.getElementById('newitem').style.overflowX = 'auto';
    document.getElementById('newitem').style.overflowY = 'hidden';
	$( "#newitem" ).removeClass( "smallViewHide" );
    document.getElementById('newitemHeader').style.height = '';
    document.getElementById('newitemMain').style.height = '';
    document.getElementById('newitemMain').style.opacity = '';
    document.getElementById('newitemCloseX').style.transform = '';
    document.getElementById('newitemCloseX').style.opacity = '';
    document.getElementById('newitemCloseX').style.right = '';
    document.getElementById('newitemCloseX').style.top = '';
    document.getElementById('newitemLabel').style.transform = '';
    document.getElementById('newitemLabel').style.bottom = '';
	document.getElementById('newitemLabel').style.width = '';
	document.getElementById('newitemBottomLabel').style.paddingTop = '';
	document.getElementById('newitemBottomLabel').style.paddingBottom = '';
	document.getElementById('newitemTopLabel').style.paddingLeft = '';
	document.getElementById('newitemBottomLabel').style.paddingLeft = '';
	
	// adds the gallery title
    document.getElementById('myWork').style.height = '';
    document.getElementById('myWork').style.marginBottom = '';
		 
	// adds the visual of the gallery title
	document.getElementById('myWork').style.opacity = '';
    document.getElementById('myWork').style.transform = '';
	
	if (window.matchMedia("(min-width: 800px)").matches) {
	
	setTimeout(function() {
	
	// opens other elements on screen
    document.getElementById('aboveFold').style.display = 'block';
    document.getElementById('title').style.display = 'block';
    document.getElementById('arrowDown').style.display = 'block';
    document.getElementById('aboutMe').style.display = 'block';
    document.getElementById('porthole').style.display = 'block';
	
	$(window).scrollTop(tempScrollTop);
	
	// starts the video
	document.getElementById('bgvid').style.display = 'block';
	
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
	
	// starts the video
	document.getElementById('bgvid').style.display = 'block';
	
	}, 0);
	
	}
	
}
