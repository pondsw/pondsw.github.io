function validateForm() {
  var str = document.forms["myForm"]["firstname"].value.trim();
  if (!isEmpty(str)) {
    alert("Name must be filled out");
    document.getElementById('resultcheck-fname').innerHTML = ' <img src="http://www.iconsfind.com/wp-content/uploads/2015/12/20151208_56663ec9a70e8.png" alt="Smiley face" height="15" >';
    return false;
  }else if(!isLetter(str)){
    alert("Name must be letter only");
    document.getElementById('resultcheck-fname').innerHTML = ' <img src="http://www.iconsfind.com/wp-content/uploads/2015/12/20151208_56663ec9a70e8.png" alt="Smiley face" height="15" >';
    return false;
  }else{
    document.getElementById('resultcheck-fname').innerHTML = ' <img src="https://cdn3.iconfinder.com/data/icons/simple-web-navigation/165/tick-512.png" alt="Smiley face" height="15" >';
  }

  str = document.forms["myForm"]["lastname"].value.trim();
  if (!isEmpty(str)) {
    alert("Name must be filled out");
    document.getElementById('resultcheck-lname').innerHTML = ' <img src="http://www.iconsfind.com/wp-content/uploads/2015/12/20151208_56663ec9a70e8.png" alt="Smiley face" height="15" >';
    return false;
  }else if(!isLetter(str)){
    alert("Name must be letter only");
    document.getElementById('resultcheck-lname').innerHTML = ' <img src="http://www.iconsfind.com/wp-content/uploads/2015/12/20151208_56663ec9a70e8.png" alt="Smiley face" height="15" >';
    return false;
  }else{
    document.getElementById('resultcheck-lname').innerHTML = ' <img src="https://cdn3.iconfinder.com/data/icons/simple-web-navigation/165/tick-512.png" alt="Smiley face" height="15" >';
  }

  str = document.forms["myForm"]["housenumber"].value.trim();
  if (!isEmpty(str)) {
    alert("House number must be filled out");
    document.getElementById('resultcheck-houseno').innerHTML = ' <img src="http://www.iconsfind.com/wp-content/uploads/2015/12/20151208_56663ec9a70e8.png" alt="Smiley face" height="15" >';
    return false;
  }else if(!isHouseNumber(str)){
    alert("House number must be number only");
    document.getElementById('resultcheck-houseno').innerHTML = ' <img src="http://www.iconsfind.com/wp-content/uploads/2015/12/20151208_56663ec9a70e8.png" alt="Smiley face" height="15" >';
    return false;
  }else{
    document.getElementById('resultcheck-houseno').innerHTML = ' <img src="https://cdn3.iconfinder.com/data/icons/simple-web-navigation/165/tick-512.png" alt="Smiley face" height="15" >';
  }

  str = document.forms["myForm"]["city"].value.trim();
  if (!isEmpty(str)) {
    alert("City must be filled out");
    document.getElementById('resultcheck-city').innerHTML = ' <img src="http://www.iconsfind.com/wp-content/uploads/2015/12/20151208_56663ec9a70e8.png" alt="Smiley face" height="15" >';
    return false;
  }else if(!isLetter(str)){
    alert("City must be letter only");
    document.getElementById('resultcheck-city').innerHTML = ' <img src="http://www.iconsfind.com/wp-content/uploads/2015/12/20151208_56663ec9a70e8.png" alt="Smiley face" height="15" >';
    return false;
  }else{
    document.getElementById('resultcheck-city').innerHTML = ' <img src="https://cdn3.iconfinder.com/data/icons/simple-web-navigation/165/tick-512.png" alt="Smiley face" height="15" >';
  }

  str = document.forms["myForm"]["street"].value.trim();
  if (!isEmpty(str)) {
    alert("Street must be filled out");
    document.getElementById('resultcheck-street').innerHTML = ' <img src="http://www.iconsfind.com/wp-content/uploads/2015/12/20151208_56663ec9a70e8.png" alt="Smiley face" height="15" >';
    return false;
  }else{
    document.getElementById('resultcheck-street').innerHTML = ' <img src="https://cdn3.iconfinder.com/data/icons/simple-web-navigation/165/tick-512.png" alt="Smiley face" height="15" >';
  }

  str = document.forms["myForm"]["provice"].value.trim();
  if (!isEmpty(str)) {
    alert("Provice must be filled out");
    document.getElementById('resultcheck-provice').innerHTML = ' <img src="http://www.iconsfind.com/wp-content/uploads/2015/12/20151208_56663ec9a70e8.png" alt="Smiley face" height="15" >';
    return false;
  }else if(!isLetter(str)){
    alert("Provice must be letter only");
    document.getElementById('resultcheck-provice').innerHTML = ' <img src="http://www.iconsfind.com/wp-content/uploads/2015/12/20151208_56663ec9a70e8.png" alt="Smiley face" height="15" >';
    return false;
  }else{
    document.getElementById('resultcheck-provice').innerHTML = ' <img src="https://cdn3.iconfinder.com/data/icons/simple-web-navigation/165/tick-512.png" alt="Smiley face" height="15" >';
  }

  str = document.forms["myForm"]["zipcode"].value.trim();
  if (!isEmpty(str)) {
    alert("Zipcode must be filled out");
    document.getElementById('resultcheck-zipcode').innerHTML = ' <img src="http://www.iconsfind.com/wp-content/uploads/2015/12/20151208_56663ec9a70e8.png" alt="Smiley face" height="15" >';
    return false;
  }else if(!isNumber(str)){
    alert("Zipcode must be number only");
    document.getElementById('resultcheck-zipcode').innerHTML = ' <img src="http://www.iconsfind.com/wp-content/uploads/2015/12/20151208_56663ec9a70e8.png" alt="Smiley face" height="15" >';
    return false;
  }else{
    document.getElementById('resultcheck-zipcode').innerHTML = ' <img src="https://cdn3.iconfinder.com/data/icons/simple-web-navigation/165/tick-512.png" alt="Smiley face" height="15" >';
  }


  str = document.forms["myForm"]["phoneno"].value.trim();
  if (!isEmpty(str)) {
    alert("Phone number must be filled out");
    document.getElementById('resultcheck-phoneno').innerHTML = ' <img src="http://www.iconsfind.com/wp-content/uploads/2015/12/20151208_56663ec9a70e8.png" alt="Smiley face" height="15" >';
    return false;
  }else if(!isPhoneNumber(str)){
    alert("Phone number must be number only");
    document.getElementById('resultcheck-phoneno').innerHTML = ' <img src="http://www.iconsfind.com/wp-content/uploads/2015/12/20151208_56663ec9a70e8.png" alt="Smiley face" height="15" >';
    return false;
  }else if(str.length < 13 ){
    alert("Phone number must be filled out");
    document.getElementById('resultcheck-phoneno').innerHTML = ' <img src="http://www.iconsfind.com/wp-content/uploads/2015/12/20151208_56663ec9a70e8.png" alt="Smiley face" height="15" >';
    return false;
  }else{
    document.getElementById('resultcheck-phoneno').innerHTML = ' <img src="https://cdn3.iconfinder.com/data/icons/simple-web-navigation/165/tick-512.png" alt="Smiley face" height="15" >';
  }

  str = document.forms["myForm"]["cellphoneno"].value.trim();
  if (!isEmpty(str)) {
    alert("Cell Phone Number must be filled out");
    document.getElementById('resultcheck-cellphoneno').innerHTML = ' <img src="http://www.iconsfind.com/wp-content/uploads/2015/12/20151208_56663ec9a70e8.png" alt="Smiley face" height="15" >';
    return false;
  }else if(!isPhoneNumber(str)){
    alert("Cell Phone Number must be number only");
    document.getElementById('resultcheck-cellphoneno').innerHTML = ' <img src="http://www.iconsfind.com/wp-content/uploads/2015/12/20151208_56663ec9a70e8.png" alt="Smiley face" height="15" >';
    return false;
  }else if(str.length < 13 ){
    alert("Cell Phone number must be filled out");
    document.getElementById('resultcheck-cellphoneno').innerHTML = ' <img src="http://www.iconsfind.com/wp-content/uploads/2015/12/20151208_56663ec9a70e8.png" alt="Smiley face" height="15" >';
    return false;
  }else{
    document.getElementById('resultcheck-cellphoneno').innerHTML = ' <img src="https://cdn3.iconfinder.com/data/icons/simple-web-navigation/165/tick-512.png" alt="Smiley face" height="15" >';
  }

  str = document.forms["myForm"]["bdate"].value.trim();
  if (!isEmpty(str)) {
    alert("Please choose Birthday");
    document.getElementById('resultcheck-bdate').innerHTML = ' <img src="http://www.iconsfind.com/wp-content/uploads/2015/12/20151208_56663ec9a70e8.png" alt="Smiley face" height="15" >';
    return false;
  }else{
    document.getElementById('resultcheck-bdate').innerHTML = ' <img src="https://cdn3.iconfinder.com/data/icons/simple-web-navigation/165/tick-512.png" alt="Smiley face" height="15" >';
  }

  str = document.forms["myForm"]["citizenno"].value.trim();
  if (!isEmpty(str)) {
    alert("Citizen Number Phone Number must be filled out");
    document.getElementById('resultcheck-citizenno').innerHTML = ' <img src="http://www.iconsfind.com/wp-content/uploads/2015/12/20151208_56663ec9a70e8.png" alt="Smiley face" height="15" >';
    return false;
  }else if(!isCitizenNumber(str)){
    alert("Citizen Number Number must be number only");
    document.getElementById('resultcheck-citizenno').innerHTML = ' <img src="http://www.iconsfind.com/wp-content/uploads/2015/12/20151208_56663ec9a70e8.png" alt="Smiley face" height="15" >';
    return false;
  }else if(str.length < 17 ){
    alert("Citizen Number number must be filled out");
    document.getElementById('resultcheck-citizenno').innerHTML = ' <img src="http://www.iconsfind.com/wp-content/uploads/2015/12/20151208_56663ec9a70e8.png" alt="Smiley face" height="15" >';
    return false;
  }else{
    document.getElementById('resultcheck-citizenno').innerHTML = ' <img src="https://cdn3.iconfinder.com/data/icons/simple-web-navigation/165/tick-512.png" alt="Smiley face" height="15" >';
  }

  submitForm();


}

function isEmpty(str) {
    return (str || 0 !== str.length);
}
function isNumber(num){
  // alert("In number "+num);
  return /^\d+$/.test(num);
}
function isPhoneNumber(num){
  // alert("In number "+num);
  return /^[0-9\+\-]+$/.test(num);
}
function isCitizenNumber(num){
  // alert("In number "+num);
  return /^[0-9\-]+$/.test(num);
}
function isLetter(str){
  return /^[A-Za-z]+$/.test(str);
}
function isHouseNumber(num){
  return /^[0-9\\]+$/.test(num);
}

function submitForm(){
  setCookie("type", "submit");
  setFormCookie();
  alert("Submit information of "+document.forms["myForm"]["firstname"].value+" "+document.forms["myForm"]["lastname"].value+" by cookie success!");
}


function saveForm() {
  // document.getElementById("myForm").reset();
  setCookie("type", "save");
  setFormCookie();
  alert("Save information of "+document.forms["myForm"]["firstname"].value+" "+document.forms["myForm"]["lastname"].value+" by cookie success!");

}

function setFormCookie() {
  setCookie("firstname", document.forms["myForm"]["firstname"].value);
  setCookie("lastname", document.forms["myForm"]["lastname"].value);
  setCookie("housenumber", document.forms["myForm"]["housenumber"].value);
  setCookie("city", document.forms["myForm"]["city"].value);
  setCookie("street", document.forms["myForm"]["street"].value);
  setCookie("provice", document.forms["myForm"]["provice"].value);
  setCookie("zipcode", document.forms["myForm"]["zipcode"].value);
  setCookie("phoneno", document.forms["myForm"]["phoneno"].value);
  setCookie("cellphoneno", document.forms["myForm"]["cellphoneno"].value);
  setCookie("bdate", document.forms["myForm"]["bdate"].value);
  setCookie("citizenno", document.forms["myForm"]["citizenno"].value);
  setCookie("zodiacsign", document.forms["myForm"]["zodiacsign"].value);
  setCookie("zodiacyear", document.forms["myForm"]["zodiacyear"].value);
  setCookie("bday", document.forms["myForm"]["bday"].value);
}



function setCookie(cname,cvalue) {
  var today = new Date();
  var expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000); // plus 30 days
    var expires = "expires=" + expiry.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    // alert(cname + "=" + cvalue + ";" + expires + ";path=/");
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {

            return c.substring(name.length, c.length);

        }
    }
    return "";
}



function checkCookie() {
    // alert(document.cookie);
    if(getCookie("type") == "save"){
      document.forms["myForm"]["firstname"].value = getCookie("firstname");
      document.forms["myForm"]["lastname"].value = getCookie("lastname");
      document.forms["myForm"]["housenumber"].value = getCookie("housenumber");
      document.forms["myForm"]["city"].value = getCookie("city");
      document.forms["myForm"]["street"].value = getCookie("street");
      document.forms["myForm"]["provice"].value = getCookie("provice");
      document.forms["myForm"]["zipcode"].value = getCookie("zipcode");
      document.forms["myForm"]["phoneno"].value = getCookie("phoneno");
      document.forms["myForm"]["cellphoneno"].value = getCookie("cellphoneno");
      document.forms["myForm"]["bdate"].value = getCookie("bdate");
      document.forms["myForm"]["citizenno"].value = getCookie("citizenno");
      document.forms["myForm"]["zodiacsign"].value = getCookie("zodiacsign");
      document.forms["myForm"]["zodiacyear"].value = getCookie("zodiacyear");
      document.forms["myForm"]["bday"].value = getCookie("bday");
    }else if(getCookie("type") == "submit"){
      // // var htmlStr = "<table>"+
      document.getElementById('inputForm').innerHTML ="";;

      var body = document.getElementById('inputForm');
      var tbl = document.createElement('table');
      // tbl.style.width = '100%';
      tbl.setAttribute('border', '1');
      var tbdy = document.createElement('tbody');

      var arr   = document.cookie.split(";");
      // alert(arr);
      for (var i = 1; i < arr.length; i++) {
        var tr = document.createElement('tr');
        // tr.style.text-align = 'center';
        var childarr = arr[i].split("=");
        var th = document.createElement('th');
        // th.style.text-align = 'left';
        th.appendChild(document.createTextNode(childarr[0]+" : "));
        tr.appendChild(th);
        var td = document.createElement('td');
        td.appendChild(document.createTextNode(childarr[1]));
        tr.appendChild(td);
        tbdy.appendChild(tr);
      }
      tbl.appendChild(tbdy);
      body.appendChild(tbl)


      var bk = document.getElementById('inputForm').innerHTML;
      // document.getElementById('inputForm').innerHTML = bk + "test";
      //
      // document.getElementById('inputForm').innerHTML ="test";
    }


    // alert("load finish");

}

function checkPhone(n) {
  var str = document.forms["myForm"][n].value;
  // alert(str.length);
  if(str.length == 1 && str != "+"){
    str = "+"+str
    document.forms["myForm"][n].value = str
  }
  if(str.length == 4 || str.length == 8){
    str += "-";
    document.forms["myForm"][n].value = str
    // alert("press mor "+str);
  }

}
function checkCellPhone(n) {
  var str = document.forms["myForm"][n].value;
  if(str.length == 1 && str != "+"){
    str = "+"+str
    document.forms["myForm"][n].value = str
  }
  if(str.length == 5 || str.length == 9){
    str += "-";
    document.forms["myForm"][n].value = str
  }

}
function checkCitizenID() {
  var str = document.forms["myForm"]["cellphoneno"].value;
  if(str.length == 1 && str != "+"){
    str = "+"+str
    document.forms["myForm"]["cellphoneno"].value = str
  }
  if(str.length == 4 || str.length == 8){
    str += "-";
    document.forms["myForm"]["cellphoneno"].value = str
  }
}
function checkCitizenNo() {
  var str = document.forms["myForm"]["citizenno"].value;
  if(str.length == 1 || str.length == 6 || str.length == 12 || str.length == 15){
    str += "-";
    document.forms["myForm"]["citizenno"].value = str
  }
}
function checkBirthday(){
    var str = document.forms["myForm"]["bdate"].value;
    var yearStr = str.substring(0, 4);
    var monthStr = str.substring(5, 7);
    var dayStr = str.substring(8, 10);
    var month = parseInt(monthStr);
    var day = parseInt(dayStr);
    var year = parseInt(yearStr);

    var zodiacyears = ["Monkey", "Rooster", "Dog","Pig","Rat","Ox","Tiger","Rabbit","Dragon","Snake","Horse","Goat"];
    var zodiacyear = zodiacyears[year%12];
    document.forms["myForm"]["zodiacyear"].value = zodiacyear;
// alert("sdsd");
    var zodiacsign = "";

      // alert("sdsd");
    switch(month) {
      case 12: zodiacsign = (day >= 22) ? "Capricorn" : "Sagittarius";
        break;
      case 11: zodiacsign = (day >= 23) ? "Sagittarius" : "Scorpio";
        break;
      case 10: zodiacsign = (day >= 23) ? "Scorpio" : "Libra";
        break;
      case 9:  zodiacsign = (day >= 23) ? "Libra" : "Virgo";
        break;
      case 8:  zodiacsign = (day >= 23) ? "Virgo" : "Leo";
        break;
      case 7:  zodiacsign = (day >= 23) ? "Leo" : "Cancer";
        break;
      case 6:  zodiacsign = (day >= 22) ? "Cancer" : "Gemini";
        break;
      case 5:  zodiacsign = (day >= 22) ? "Gemini" : "Taurus";
        break;
      case 4:  zodiacsign = (day >= 21) ? "Taurus" : "Aries";
        break;
      case 3:  zodiacsign = (day >= 21) ? "Aries" : "Pisces";
        break;
      case 2:  zodiacsign = (day >= 20) ? "Pisces" : "Aquarius";
        break;
      case 1:  zodiacsign = (day >= 21) ? "Aquarius" : "Capricorn";
        break;
    }
    // alert(month+" : "+zodiacyear+" || "+day+" : "+zodiacsign);
    document.forms["myForm"]["zodiacsign"].value = zodiacsign;
    // alert(zodiacsign);

    var d = new Date();
    d.setMonth(month);
    d.setDate(day);
    d.setFullYear(year);

    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var n = weekday[d.getDay()];

    document.forms["myForm"]["bday"].value = n;

}
