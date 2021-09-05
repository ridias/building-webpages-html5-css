let btnMenu = document.getElementById("btnMenu")

btnMenu.addEventListener("click", function(event) {
    
    if(btnMenu.children[1].style.display == "none"){
        btnMenu.children[1].style.display = "inherit";
    }else{
        btnMenu.children[1].style.display = "none";
    }
})