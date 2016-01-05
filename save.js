// Saves options to chrome.storage

function save_options() {
	alert("hey");
  var username = document.getElementsByTagName('input')[0].value;
  var password = document.getElementsByTagName('input')[1].value;
  chrome.storage.sync.set({ "username" : username }, function() {
    if (chrome.runtime.error) {
      console.log("Runtime error.");
     else
     	alert(username);
    }
  });
    chrome.storage.sync.set({ "password" : password }, function() {
    if (chrome.runtime.error) {
      console.log("Runtime error.");
    }
  });

}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get("username", function(result) {
    if (!chrome.runtime.error) {
      console.log(result);
      document.getElementsByTagName('input')[0].value=result;
    }
  });
  chrome.storage.sync.get("password", function(result) {
    if (!chrome.runtime.error) {
      console.log(result);
      document.getElementsByTagName('input')[1].value=result;
    }
  });
}

