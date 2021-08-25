//con esta funcion aparecera el gif de la imagen pasado unos segundos haciendo que desaparezca al pasar el tiempo
function rechazo(){
    document.cookie="Cookies=rechazada";
    document.getElementById("gifs").src="imagenes/rechazar_cookies.gif";    
    document.getElementById("ac").style.display="none";
    document.getElementById("rec").style.display="none";
    document.getElementById("conten-galleta").style.display="none";
    setTimeout(ocultar_galletas,5000);
}
//con esta funcion aparecera el gif de la imagen pasado unos segundos haciendo que desaparezca al pasar el tiempo
function acepto(){  
    document.getElementById("gifs").src="imagenes/galleta.gif";    
    document.getElementById("ac").style.display="none";
    document.getElementById("rec").style.display="none";
    document.getElementById("conten-galleta").style.display="none";   
    setTimeout( document.cookie="Cookies=aceptadas",50000);
    setTimeout(ocultar_galletas,5000);
}
function ocultar_galletas(){
    document.getElementById("galletas").style.display="none";
}
//desaparecera para siempre el div de las galletas hasta cerrar la pagina y volver a abrirla
if(document.cookie=="Cookies=aceptadas"){
    document.getElementById("galletas").style.display="none";}
    document.getElementById("subapartado3").style.display="none";