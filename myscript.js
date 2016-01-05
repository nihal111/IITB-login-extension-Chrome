var form = document.forms[0];
key1="username"
key2="password"
  chrome.storage.local.get(key1 , function(items) {
    form.getElementsByTagName('input')[0].value=items.username;
    console.log(form.getElementsByTagName('input')[0].value)
  });
    chrome.storage.local.get(key2 , function(items) {
    console.log(items.password)
    form.getElementsByTagName('input')[1].value=items.password;
    console.log(form.getElementsByTagName('input')[1].value)
  });
console.log("Going to submit")
form.submit()
console.log("Submitted")