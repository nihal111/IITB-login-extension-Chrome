var form = document.forms[0];
key1="username"
key2="password"
  chrome.storage.local.get(key1 , function(items) {
    console.log("Getting")
    form.getElementsByTagName('input')[0].value=items.username;
  });
    chrome.storage.local.get(key2 , function(items) {
    console.log("Getting")
    form.getElementsByTagName('input')[1].value=items.password;
  });
form.submit();