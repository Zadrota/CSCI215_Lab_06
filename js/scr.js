function validate(){

    if (checkName()==false){
        document.getElementById("name").style.backgroundColor = "red";
    }else if (checkAge()==false){
        document.getElementById("age").style.backgroundColor = "red";
    }else if (checkEmail()==false){
        document.getElementById("email").style.backgroundColor = "red";
    }else{
        document.getElementById("name").value = '';
        document.getElementById("age").value = '';
        document.getElementById("email").value = '';
        alert("Your subscription has been submitted!")

    }
}

function checkName(){
    var chk = new RegExp('<');
    if (chk.test(document.getElementsByName("name").value)){
        console.log('check');
        document.getElementById("name").style.backgroundColor = "red";
    } else{
        return true;
    }

}

function checkEmail() {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(document.getElementsByName('email'))){
        document.getElementById("email").style.backgroundColor = "red";
    }else{
        return true;
    }

}

function checkAge() {
    var regEx = new RegExp('\w');
    if(regEx.test(document.getElementsByName("age")) || document.getElementsByName("age").length > 3){
        document.getElementById("age").style.backgroundColor = "red";
    }else{
        return true;
    }
}

function myAjax(){

}