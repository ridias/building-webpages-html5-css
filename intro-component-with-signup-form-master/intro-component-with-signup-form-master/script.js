let firstName = document.getElementById("firstName")
let lastName = document.getElementById("lastName")
let email = document.getElementById("email")
let password = document.getElementById("password")

let inputs = document.getElementsByClassName("container-content-form-input")
let textErrors = document.getElementsByClassName("container-content-form-error")

let map = {
    "firstName": 0,
    "lastName": 1,
    "email": 2,
    "password": 3
}

for(let i = 0; i < inputs.length; i++){

    inputs[i].children[0].addEventListener("keyup", function(event){
        let id = event.target.id;
        let val = event.target.value;
        let parent = event.target.parentElement;
        if(val.length == 0){
            textErrors[map[id]].setAttribute("class", "container-content-form-error show");
            parent.children[1].style.display = "block";
        }else{
            textErrors[map[id]].setAttribute("class", "container-content-form-error");
            parent.children[1].style.display = "none";
        }
    })
}