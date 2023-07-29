let userlog;
let us = document.getElementsByTagName('input')[0];
let ps = document.getElementsByTagName('input')[1];
let s1 = document.getElementById("s1");
let s2 = document.getElementById("s2");
let regxuser = /^[a-zA-Z\s]+$/;
var regxpass = /^[0-9]*$/;

let user = new XMLHttpRequest();
user.open("get", "log.json");
user.send();
user.addEventListener("readystatechange", function () {
  if (user.readyState === 4) {
    if (user.status === 200)
      userlog = JSON.parse(user.response);
  }
})

var muform = document.getElementsByTagName("form")[0];
muform.addEventListener("submit", function (e) {
  if (us.value == "") {
    e.preventDefault();
    s1.textContent = "Enter Your Name!";
  }
  else if (!regxuser.test(us.value)) {
    e.preventDefault();
    s1.textContent = "Enter Correct Name!"
  }
  if (ps.value == "") {
    e.preventDefault();
    s2.textContent = "Enter Your Password!";
  }
  else if (!regxpass.test(ps.value)) {
    e.preventDefault();
    s2.textContent = "Enter Correct Password!"
  }
})


function myFunctionName(e) { 

  for (var i = 0; i < userlog.length; i++) {
    if ((us.value == userlog[i]['user']) && (ps.value == userlog[i]['pass'])) {
      window.open("info.html")
      location.replace("https://www.google.com/")
      
    }
  }  
 
}