
    injectJs(chrome.extension.getURL('src/inject/h5utils.js'));
    injectJs(chrome.extension.getURL('src/inject/linkGetter.js'));



    chrome.extension.sendMessage({greeting: "hello"}, function(response) {
    	var readyStateCheckInterval = setInterval(function() {
    	if (document.readyState === "complete") {
    		clearInterval(readyStateCheckInterval);

    	}
    	}, 10);
    });
    var orignalLinkVal = "";
    var timer = setInterval(function(){
        if(document.readyState === "complete"){
        if(orignalLinkVal!=document.getElementById('droppedLink').innerHTML){
            orignalLinkVal = document.getElementById('droppedLink').innerHTML;
            console.log("link is: "+orignalLinkVal);

            chrome.runtime.sendMessage({greeting: orignalLinkVal}, function(response) {
              console.log("link message passed");
            });

        }}
    },50);


    function injectJs(link) {
    var scr = document.createElement('script');
    scr.type="text/javascript";
    scr.src=link;
    document.getElementsByTagName('body')[0].appendChild(scr);
    //document.body.appendChild(scr);
    }
