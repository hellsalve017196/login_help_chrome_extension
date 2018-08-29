var v_id = "xx";
var p_id = "xx";
var pass = "xx";
var apex = "xx";

var gotMessage = function (message, sender, sendResponse) {
  if (message.url != undefined) {

    if (message.url.indexOf("outlook") > 0) {
      document.querySelector("#username").value = p_id;
      document.querySelector("#password").value = pass;
    }

    else if (message.url.indexOf("atlport.oss.rr.com") > 0) {
      document.querySelector("#login-form-username").value = v_id;
      document.querySelector("#login-form-password").value = pass;
    }

    else if (message.url.indexOf("jira") > 0) {
      document.querySelector("#login-form-username").value = v_id;
      document.querySelector("#login-form-password").value = pass;
    }

    else if (message.url.indexOf("clarity") > 0) {
      document.querySelector("#ppm_login_username").value = p_id;
      document.querySelector("#ppm_login_password").value = pass;
    }

    else if (message.url.indexOf("myapex") > 0) {
      document.querySelector("#userid").value = apex;
      document.querySelector("#pwd").value = pass;
    }

    else if (message.url.indexOf("localhost") > 0) {
      document.querySelector("#username").value = v_id;
      document.querySelector("#password").value = pass;
    }

  }
}

chrome.runtime.onMessage.addListener(gotMessage);

