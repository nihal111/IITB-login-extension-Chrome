// Saves options to chrome.storage
var username,password;
function save_options() {
  alert("Saved");
  username = document.getElementsByTagName('input')[0].value;
  password = document.getElementsByTagName('input')[1].value;

chrome.storage.sync.set({
    "uname": username,
    pass: password
  });

var uname= chrome.storage.sync.get("uname")['uname'];
console.log(uname);

}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
  }, function(items) {
    console.log(items.uname)
    console.log(items.pass)
    document.getElementsByTagName('input')[0].value = items.uname;
    document.getElementsByTagName('input')[1].value = items.pass;
  });
}

//document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',save_options);
