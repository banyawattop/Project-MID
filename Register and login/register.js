
window.onload = pageLoad;
function pageLoad(){
    var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}

function validateForm() {
    var pass = document.forms["myForm"] ["password"].value;
    var press = document.forms["myForm"] ["pressword"].value;

    if(pass == press){
        alert("passs")
        return true
    }
    else{
        var erortext =document.getElementById("errormsg");
        erortext.innerHTML ="!!1รหัสผ่านของคุณไม่ถูกต้องกรุณาพิมใหม่อีกครั้ง!!!";
        
        return false
    }
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
}
function myFunction(){
       
}
function myFormfunction(){
    s
}