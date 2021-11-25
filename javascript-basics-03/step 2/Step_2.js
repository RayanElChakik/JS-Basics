var showText = document.querySelector("#show");
var hideText = document.querySelector("#hide");
var toggleText = document.querySelector("#texte");

var change = (id)=>{
    if(id == "show"){
        toggleText.style.display = 'block';
    }
    if(id == "hide"){
        toggleText.style.display = 'none';
    }
};

showText.addEventListener("click", ()=>{change("show");});
hideText.addEventListener("click", ()=>{change("hide");});