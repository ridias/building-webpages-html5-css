let btnCountries = document.getElementById("btnCountries");
let questions = document.getElementsByClassName('section-question');

btnCountries.addEventListener("click", setVisibility);

for(let i = 0; i < questions.length; i++){
    questions[i].addEventListener("click", openCloseQuestion)
}

function openCloseQuestion(event){
    let parent = event.target

    while(parent.getAttribute("class") != "section-question" && parent.nodeName != "BODY"){
        parent = parent.parentElement
    }

    removeOutline();

    if(parent.getAttribute('class') == "section-question"){
        parent.style.border = "2px solid black";
        if(parent.style.height == "auto"){
            parent.style.height = "25px";
            parent.children[0].children[1].style.transform = "rotate(0deg)";
            parent.children[0].children[1].style.transition = "transform 0.4s";
        }else{
            parent.style.height = "auto";
            parent.children[0].children[1].style.transform = "rotate(180deg)";
            parent.children[0].children[1].style.transition = "transform 0.4s";
        }
    }
}

function removeOutline(){
    for(let i = 0; i < questions.length; i++){
        questions[i].style.border = "none";
    }
}


function setVisibility(event){

    let parent = event.target.parentElement;
    while(parent.nodeName != "DIV" && parent.nodeName != "BODY"){
        parent = parent.parentElement
    }

    if(parent.getAttribute('class') == "button-dropdown"){
        let lastChild = parent.children[parent.children.length - 1];
        if(lastChild.style.visibility == "hidden"){
            lastChild.style.visibility = "visible";
        }else{
            lastChild.style.visibility = "hidden";
        }
    }
}


