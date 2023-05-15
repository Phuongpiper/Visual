function signup(e){
    event.preventDefault();
    var userName = document.getElementById("userName").value;
    var userPass = document.getElementById("userPass").value;
    var emailAddress = document.getElementById("emailAddress").value;
    var userList = new Array();
    var user ={
        userName : userName,
        userPass : userPass,
        userEmail : emailAddress,
    }
   
    userList.push(user);
    localStorage.setItem("userList", JSON.stringify(userList));
   
        alert("Ban da dang ky thanh cong!!!");
        window.location.href("http://127.0.0.1:5500/login.html");
    
}

$("#submitLogin").click(function(event){

    var userPass = document.getElementById("userPass").value;
    var emailAddress = document.getElementById("emailAddress").value;
    var user = localStorage.getItem("userList");
    var data = JSON.parse(user);
    for( let i = 0 ; i <data.length;i++){
        // alert(data[i].userEmail);
        if(data[i].userEmail == emailAddress && data[i].userPass == userPass){
            sessionStorage.setItem("userName" ,data[i].userName);
            alert("dang nhap thanh cong!!");
            window.location ="http://127.0.0.1:5500/index.html" ;
        }else{
            alert("dang nhap that bai!!!");
            window.location= "http://127.0.0.1:5500/login.html";
        }
    }
    event.preventDefault();
 
});
logout();
function logout(e){
    var check = document.getElementById("login");
    var user = sessionStorage.getItem("userName");
    if(user){
        check.innerHTML = user;
        check.onclick = function () {
            sessionStorage.removeItem("userName");
            check.href = "login.html";
            alert("Dang xuat thanh cong!!!");
        }
    }else{
        check.href = "login.html";
    }
       
    }

	