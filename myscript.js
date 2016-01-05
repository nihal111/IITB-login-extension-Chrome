
var form = document.forms[0];
    chrome.storage.sync.get({
  }, function(items) {
    form.getElementsByTagName('input')[0].value = items.uname;
    form.getElementsByTagName('input')[1].value = items.pass;
  });
form.submit();