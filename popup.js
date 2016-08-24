var a = new stat();

document.addEventListener('DOMContentLoaded', function() {

// getCurrentTabUrl(function(url) {
// document.getElementById('status').textContent = url + " - - - - - " + ;
// });
        // document.getElementById('status').textContent = getTheTab();
});

chrome.tabs.onCreated.addListener(function(tab){

document.getElementById("stats").textContent = "sup";
});

function getCurrentTabUrl(callback) {
  
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
   
    var tab = tabs[0];

    var url = tab.url;
    console.assert(typeof url == 'string', 'tab.url should be a string');

    callback(url);
  });
}
chrome.windows.onCreated.addListener(function(window){
	console.log("suh du");
});

