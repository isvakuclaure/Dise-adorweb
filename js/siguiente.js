
///mostrara el siguiente a la portada (carrousel o galeria)
function siguiente(){
    var sub=document.getElementById("subapartado0");
    var conteni=document.createElement("div");
    var pala=document.createTextNode("");
    conteni.appendChild(pala);
    sub.appendChild(conteni);
    sub.style.background="black";
    var boton=document.createElement("input");
    boton.setAttribute("type","button");
    boton.setAttribute("id","not");
    boton.setAttribute("value","noticias");
    boton.setAttribute("onclick","noti()");   
    boton.setAttribute("class","ahora");  
    sub.appendChild(boton);
    var botons=document.createElement("input");
    botons.setAttribute("type","button");
    botons.setAttribute("id","not");
    botons.setAttribute("value","tienda");
    botons.setAttribute("onclick","tien()");    
    botons.setAttribute("class","ahora"); 
    sub.appendChild(botons);

    
}
//esto mostrara el carrousel
function car(){
    document.getElementById("empezar").style.display="none";
    document.getElementById("portada1").style.display="block";
    var tema=document.getElementById("temas").value;
    if(tema=="esp")
    {

        document.getElementById("unouno").setAttribute("src","imagenes/boba.gif");
        document.getElementById("unodos").setAttribute("src","imagenes/t3.png");
        document.getElementById("unotres").setAttribute("src","imagenes/t4.jpg");
        document.getElementById("unocuatro").setAttribute("src","imagenes/yoda.gif");
        document.getElementById("dosuno").setAttribute("src","imagenes/zapping.gif");
        document.getElementById("dosdos").setAttribute("src","imagenes/as.jpg");
        document.getElementById("dostres").setAttribute("src","imagenes/os.jpg");
        document.getElementById("doscuatro").setAttribute("src","imagenes/walkspace.gif");
    }
    else if(tema=="perr")
    {
        document.getElementById("unouno").setAttribute("src","imagenes/conperro.gif");
        document.getElementById("unodos").setAttribute("src","imagenes/dogcondinero.png");
        document.getElementById("unotres").setAttribute("src","imagenes/superperro.jpg");
        document.getElementById("unocuatro").setAttribute("src","imagenes/doga.gif");
        document.getElementById("dosuno").setAttribute("src","imagenes/perrosuperelegante.gif");
        document.getElementById("dosdos").setAttribute("src","imagenes/a1.png");
        document.getElementById("dostres").setAttribute("src","imagenes/a2.jpg");
        document.getElementById("doscuatro").setAttribute("src","imagenes/dogwar.gif");

    }
    siguiente();

}
//esto mostrara la galeria
function galer(){
    document.getElementById("empezar").style.display="none";
    document.getElementById("portada").style.display="block";
    var tema=document.getElementById("temas").value;
    if(tema=="esp")
    {

        document.getElementById("pic1").setAttribute("src","imagenes/boba.gif");
        document.getElementById("pic2").setAttribute("src","imagenes/dart.gif");
        document.getElementById("pic3").setAttribute("src","imagenes/ds.gif");
        document.getElementById("pic4").setAttribute("src","imagenes/yoda.gif");
        document.getElementById("pic5").setAttribute("src","imagenes/abuela.gif");
    }
    else if(tema=="perr")
    {
        document.getElementById("pic1").setAttribute("src","imagenes/perroaventurero.gif");
        document.getElementById("pic2").setAttribute("src","imagenes/perroloco.gif");
        document.getElementById("pic3").setAttribute("src","imagenes/perrosuperelegante.gif");
        document.getElementById("pic4").setAttribute("src","imagenes/mujerperro.gif");
        document.getElementById("pic5").setAttribute("src","imagenes/perroelegante.gif");

    }
    siguiente();
}

function noti(){
    var tema=document.getElementById("temas").value;
    document.getElementById("subapartado0").style.display="none";
    if(tema=="esp")
    {
        document.getElementById("subapartado2").style.display="block";
        
    }
    else if(tema="perr")
    {
        document.getElementById("subapartado1").style.display="block";
    }
    enlasultimas()
}
//validar correo de noticias espacio
function fdosnoesa(){
    //EXPRESION REGULAR
    //validara correos que tengan @ y . y despues del punto tengan de 2 a 4 letras
    texto=document.getElementById("cor").value;
    correo=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    nueval=document.createTextNode("Correo invalido")
    if(!correo.test(texto))
    {document.getElementById("valdosnoes").innerHTML = "Correo invalido";}
     else 
    {document.getElementById("valdosnoes").innerHTML = "";}
}
//validar correo de noticias perro
function fdosnopera(){
    texto=document.getElementById("core").value;
    correo=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    nueval=document.createTextNode("Correo invalido")
    if(!correo.test(texto))
    {document.getElementById("valdosnoper").innerHTML = "Correo invalido";}
     else 
    {document.getElementById("valdosnoper").innerHTML = "";}
}


function tien(){

    var tema=document.getElementById("temas").value;
    document.getElementById("subapartado0").style.display="none";
    if(tema=="esp")
    {
        document.getElementById("subapartado3").style.display="block";
        
    }
    else if(tema="perr")
    {
        document.getElementById("subapartado4").style.display="block";
    }
    enlasultimas()
}
