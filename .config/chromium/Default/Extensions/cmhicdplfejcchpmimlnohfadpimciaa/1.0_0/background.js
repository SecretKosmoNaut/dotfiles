chrome.browserAction.onClicked.addListener(function(activeTab){
  var url = "http://getvideostream.com/launch-app";
  chrome.tabs.update({ url: url });
});