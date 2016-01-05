var tablink = "https://internet.iitb.ac.in/";
var interval = 30*60*1000;

function open(){
	chrome.tabs.create({ url: tablink });
	console.log("Opened internet.iitb.ac.in");
}

function check_status(){
	chrome.tabs.getSelected(null,function(tab) {
	    
	    tablink = tab.url;
	    console.log(tab.url);
	});

	if (tablink=="https://internet.iitb.ac.in/logout.php")
		console.log("Already kogged in");
	else 
		console.log("Not logged in");
}

open();
setTimeout(check_status,1000);