var pie = document.getElementById("foot");
var fechaactual = new Date();

pie.innerHTML = "Gracis por visitar la pagina 2021 - " + fechaactual.getFullYear();
var boton = document.getElementsByTagName("button");


var bb = document.querySelectorAll("button");
bb.forEach((boton)=>{
    boton.addEventListener("click", (e)=>{
            document.getElementById("chemenu").checked = false;
    });
});

