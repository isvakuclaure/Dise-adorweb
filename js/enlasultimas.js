
function enlasultimas(){
    var sub=document.getElementById("ultimo");
    var conteni=document.createElement("div");
    var pala=document.createTextNode("");
    conteni.appendChild(pala);
    sub.appendChild(conteni);
    sub.style.background="black";
    var boton=document.createElement("input");
    boton.setAttribute("type","button");
    boton.setAttribute("value","raton");
    boton.setAttribute("onclick","ra()"); 
    boton.setAttribute("class","ahora");   
    sub.appendChild(boton);
    var botons=document.createElement("input");
    botons.setAttribute("type","button");
    botons.setAttribute("value","teclado");
    botons.setAttribute("onclick","te()");  
    botons.setAttribute("class","ahora");   
    sub.appendChild(botons);
}
function ra(){
    document.getElementById("footer-r").style.display="block";
    document.getElementById("ultimo").style.display="none";
}

//eventos de raton onmouseout
function color1(){
    document.getElementById("container").style.background="url('imagenes/foo.jpg')";
    document.getElementById("htres").innerHTML="Adiós humano see you soon";
    
}
//eventos de raton onmouseover
function color2(){
    document.getElementById("container").style.background="url('imagenes/foot.jpg')";
    document.getElementById("htres").innerHTML="Pagina diseñada por GDDISEÑO"
}
//eventos de teclado
function te(){
    document.getElementById("ultimo").style.display="none";
    document.getElementById("footer-t").style.display="block";
}
var t=0;
function comer(event){
    l=event.keyCode;
    var tema=document.getElementById("temas").value;
    if(tema=="perr")
    {
        if(l==38)
        {
            document.getElementById("ft").src='imagenes/hachi.png';

        }
        if(l==37)
        {
            document.getElementById("ft").src='imagenes/f2.jpg';
        }
        if(l==39)
        {
            document.getElementById("ft").src='imagenes/f3.png';   
        }
        if(l==40)
        {
            document.getElementById("ft").src='imagenes/f4.jpg';  
        }
    }
    else if(tema=="esp")
    {
    if(l==38)
    {
        document.getElementById("ft").src='imagenes/clon.jpg';

    }
    if(l==37)
    {
        document.getElementById("ft").src='imagenes/babyyoda.png';
    }
    if(l==39)
    {
        document.getElementById("ft").src='imagenes/babayoda.png';   
    }
    if(l==40)
    {
        document.getElementById("ft").src='imagenes/perrovoladorespacial.jpg'; 
}
    }}