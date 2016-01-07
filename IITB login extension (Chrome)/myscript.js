var form = document.forms[0];

var username, password,internet,gpo,moodle,website;

function stringStartsWith (string, prefix) {
    return string.slice(0, prefix.length) == prefix;
}

function retrieve()
{
    key1 = "username"
    key2 = "password"
    key3 = "internet"
    key4 = "gpo"
    key5 = "moodle"

      chrome.storage.local.get(key1 , function(items) {
        console.log("Getting username");
        username=items.username;
        form.getElementsByTagName('input')[0].value=username;
      });
        chrome.storage.local.get(key2 , function(items) {
        console.log("Getting passwoed");
        password=items.password;
        form.getElementsByTagName('input')[1].value=password;
      });
        chrome.storage.local.get(key3 , function(items) {
        internet=items.internet;
        console.log(internet);

      });
        chrome.storage.local.get(key4 , function(items) {
        gpo=items.gpo;
        console.log(gpo);
      });
        chrome.storage.local.get(key5 , function(items) {
        moodle=items.moodle;
        console.log(moodle);
      });
        website = (window.location.href);

}

function submit()
{   
    if ((stringStartsWith(website,"https://internet.iitb.ac.in") && internet==true) || (stringStartsWith(website,"https://gpo.iitb.ac.in/src/login.php") && gpo==true) || (stringStartsWith(website,"http://moodle.iitb.ac.in/login") && moodle==true))
    form.submit();
}

retrieve();

setTimeout(submit,10);
