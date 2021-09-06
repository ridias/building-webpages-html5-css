let iconError = document.getElementById('iconError');
let textError = document.getElementById('textError');

let email = document.getElementById("email");

email.addEventListener('keyup', function(event){
    let val = event.target.value;

    if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(val) || val.length == 0){
        iconError.style.display = "none"
        textError.style.display = "none"
    }else{
        iconError.style.display = "inherit"
        textError.style.display = "inherit"
    }
})