// if the icon button is clicked
var buttonClicked = function (tab) {
	let msg = {
		url: tab.url
	};

	chrome.tabs.sendMessage(tab.id, msg);
}


chrome.browserAction.onClicked.addListener(buttonClicked);

