var tablink = "https://internet.iitb.ac.in/";
var interval = 29*60*1000;


function open(){
	chrome.tabs.create({ url: tablink });
	console.log("Opened internet.iitb.ac.in");
}

function check_status(){
	chrome.tabs.getSelected(null,function(tab) {
	    
	    tablink = tab.url;
	    console.log("URL:",tab.url);

	});
}
	
function login(){
	if (tablink=="https://internet.iitb.ac.in/logout.php")
		console.log("Already logged in");
	else 
		{
			console.log("Not logged in");
			
		}
}

function closetab(){
	chrome.tabs.getSelected(null,function(tab) {
    chrome.tabs.remove(tab.id, function() { });
});
}

function perform(){
	open();
	setTimeout(check_status,400);
	setTimeout(login,500);
	setTimeout(closetab,1000);
}
chrome.windows.onCreated.addListener(function() {
perform();
});
setInterval(perform,interval);

document.getElementById('Login').addEventListener('click',perform);



