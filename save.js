
var values = {}
var key1 = "username"
var key2 = "password"

function save_options() {
  var username = document.getElementsByTagName('input')[0].value;
  var password = document.getElementsByTagName('input')[1].value;
  values[key1]=username;
  values[key2]=password;
  chrome.storage.local.set(values);

}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.local.get(key1 , function(items) {
    console.log("Getting")
    document.getElementsByTagName('input')[0].value=items.username;
  });
    chrome.storage.local.get(key2 , function(items) {
    console.log("Getting")
    document.getElementsByTagName('input')[1].value=items.password;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',save_options);
