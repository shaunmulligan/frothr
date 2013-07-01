
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log("link from page is: "+request.greeting);
    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
  });