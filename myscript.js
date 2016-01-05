var form = document.forms[0];
  chrome.storage.sync.get("username", function(result) {
    if (!chrome.runtime.error) {
      console.log(result);
      form.getElementsByTagName('input')[0].value=result;
    }
  });
  chrome.storage.sync.get("password", function(result) {
    if (!chrome.runtime.error) {
      console.log(result);
      form.getElementsByTagName('input')[1].value=result;
    }
  });
form.submit();