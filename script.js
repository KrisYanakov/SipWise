//alert("ASD")
var accounts = []

function getAccountInfo(){
    let email = document.getElementById("inputEmail").value;
    let password = document.getElementById("inputPassword").value;

    if(email != '' && password != ''){
        alert("Your email is: "+ email + "\nNew Account created")
        accounts.push([email, password])
    }
}

function goToSite(){
    window.location.href = "https://github.com/KrisYanakov/SipWise";
}

function info(){
    for(let i = 0; i < accounts.length; i ++){
        console.log("Username: " + accounts[i][0] + " Password: " + accounts[i][1]+"\n")
    }
}