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
    console.log('Checking name');
    var chk = new RegExp('<');
    if (chk.test(document.getElementById("name").value)){
        console.log('check');
        document.getElementById("name").style.backgroundColor = "red";
    } else{
        console.log("it's all good");
        document.getElementById("name").style.backgroundColor = "";
        return true;
    }

}

function checkEmail() {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(document.getElementById('email'))){
        document.getElementById("email").style.backgroundColor = "red";
    }else{
        return true;
    }

}

function checkAge() {
    console.log('Checking age');
    var regEx = new RegExp('^(([0-9][1-9])|([1-9][0-9])|[1-9])$');
    if(!regEx.test(document.getElementById("age").value)){
        document.getElementById("age").style.backgroundColor = "red";
        console.log("age is bad");
    }else{
        document.getElementById("age").style.backgroundColor = "";
        console.log("age is good");
        return true;
    }
}
