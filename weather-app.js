const btn = document.getElementById("toogler");
const btn_icon = document.getElementById("toogler-icon");
const contain = document.getElementById("contain");
const wind = document.getElementById("wind");

btn.onclick = function(){ 
    if(contain.getAttribute("data-theme")!="dark"){ 
        contain.setAttribute("data-theme", "dark");
        btn_icon.setAttribute("class", "bx bxs-sun");
        wind.setAttribute("style", "color : orange; font-size: 50px;");
    }else{ 
        contain.setAttribute("data-theme", "");
        btn_icon.setAttribute("class", "bx bxs-solid bxs-moon");
        wind.setAttribute("style", "color : #0f345fe3; font-size: 40px;");
    }
}