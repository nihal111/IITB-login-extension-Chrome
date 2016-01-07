
var values = {}
var key1 = "username"
var key2 = "password"
var key3 = "internet"
var key4 = "gpo"
var key5 = "moodle"

function save_options() {
  var username = document.getElementsByTagName('input')[0].value;
  var password = document.getElementsByTagName('input')[1].value;
  values[key1]=username;
  values[key2]=password;
  values[key3]=document.getElementById("internet").checked;
  values[key4]=document.getElementById("gpo").checked;
  values[key5]=document.getElementById("moodle").checked;
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
    chrome.storage.local.get(key3 , function(items) {
    console.log("Getting")
    document.getElementById("internet").checked=items.internet;
  });
    chrome.storage.local.get(key4 , function(items) {
    console.log("Getting")
    document.getElementById("gpo").checked=items.gpo;
  });
    chrome.storage.local.get(key5 , function(items) {
    console.log("Getting")
    document.getElementById("moodle").checked=items.moodle;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',save_options);

