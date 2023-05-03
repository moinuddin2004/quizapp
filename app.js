function signup(){
    var email = document.getElementById('exampleInputEmail1').value
    var pass = document.getElementById('exampleInputPassword1').value
    localStorage.setItem('email',email)
    localStorage.setItem('pass',pass)
    if(email==""&& pass==""){
        alert("please enter your email")
    }
    else{
    alert('Data inserted Successfully')
    window.location="signin.html"}
 }
 


 function signin(){
     var email = document.getElementById('exampleInputEmail1').value
     var pass = document.getElementById('exampleInputPassword1').value
     var getemail = localStorage.getItem('email')
     var getpass = localStorage.getItem('pass')
     if(email === getemail && pass === getpass ){
         alert('Login Success')
        window.location='quiz.html'
     }
     else{
         alert('User not found please signup')
         window.location= 'signup.html'
     }
 }
 