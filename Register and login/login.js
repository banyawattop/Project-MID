function getParams() {
  	var idx = document.URL.indexOf('?');
  	var params = new Array();
  	if (idx != -1) {
  		var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
  		for (var i=0; i<pairs.length; i++) {
  			nameVal = pairs[i].split('=');
  			params[nameVal[0]] = nameVal[1];
  		}
 	}
  	return params;
 }

window.onload = loginLoad;
function loginLoad(){
	var form = document.getElementById("myLogin");
    form.onsubmit = checkLogin;
}

function checkLogin(){
	var parameter = getParams();
	var come = document.forms["myLogin"] ["username"].value;
	var on = document.forms["myLogin"] ["password"].value;
    

    if(parameter["username"] == come && parameter["username"] == on){
        alert("passs")
        return true
    }
    else{
        alert("notpass");
        
        return false
    }
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
}

			