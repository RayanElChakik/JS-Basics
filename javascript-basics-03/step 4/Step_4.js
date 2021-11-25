function testValidation() {
    var password = document.getElementById("password").value;
    var confirmation = document.getElementById("confirmation").value;
    if (password !== confirmation) {
        document.getElementById('confirmation').style.border = "3px solid red";
    }
    
} 