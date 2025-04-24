//cambia el contenido "hello word" del primer h1
//document= abre un libreria de metodos
//queryselector es un metodo para seleccionar una etiqueta (html)
//textcontent= sirve para cambiar el texto de la etiqueta seleccionada
document.querySelector("h1").textContent ="GoodBye";

//Cambiar el color de texto del header(en este caso h3) por naranjo
//style.color= es funcion js para cambiar color
document.querySelector("h3").style.color = "orange";

//adicionar un cambio de color del texto al clickearlo
// deleccionar el id de (h5 en este caso) y cambiarlo a color marrón 
//get= obtener
const h5 = document.getElementById("cambia-color")
//addeventlistener permite esperar a una acción para que suceda otra acción(en este caso el click lo cambia de color a marrón) 
//"()" es el listener osea espera a que haga un click y actua (=>) para "style.color"(convertirlo) en marrón 
h5.addEventListener("click",() => { 
    h5.style.color = "brown";
});
