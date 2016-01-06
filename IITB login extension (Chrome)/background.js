var tablink = "https://internet.iitb.ac.in/";
var interval = 29*60*1000;

function open(){
	chrome.tabs.create({ url: tablink });
	console.log("Opened internet.iitb.ac.in");
}


function closetab(){
	chrome.tabs.getSelected(null,function(tab) {
    chrome.tabs.remove(tab.id, function() { });
});
}

function perform(){
	open();
	
	chrome.tabs.onUpdated.addListener(function(tabid, changeinfo, tab) {
    var url = tab.url;
        if (url == "https://internet.iitb.ac.in/logout.php" && changeinfo.status == "complete") {
        	closetab();
    }
   });

}

chrome.windows.onCreated.addListener(function() {
perform();
});
setInterval(perform,interval);

document.getElementById('Login').addEventListener('click',perform);



