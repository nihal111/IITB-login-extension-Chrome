var form = document.forms[0];
var username, password;

function retrieve()
{
    key1="username"
    key2="password"

      chrome.storage.local.get(key1 , function(items) {
        console.log("Getting")
        username=items.username;
        form.getElementsByTagName('input')[0].value=username;
      });
        chrome.storage.local.get(key2 , function(items) {
        console.log("Getting")
        password=items.password;
        form.getElementsByTagName('input')[1].value=password;
      });
}

function submit()
{   console.log(username);
    console.log(password);
    console.log(form.getElementsByTagName('input')[0].value);
    console.log(form.getElementsByTagName('input')[1].value);
    form.submit();
}

retrieve();
setTimeout(submit,1000);