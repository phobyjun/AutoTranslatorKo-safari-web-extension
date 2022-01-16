browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if( request.message === "start" ) {
        alert('goodgoodgood');
    }
});
