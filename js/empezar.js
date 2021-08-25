function empezar(){
    if(document.cookie=="Cookies=aceptadas")
    {
        ////expresiones regulares
        var validnomemp= /^\D/;
        validarempresa=validnomemp.test(document.getElementById("nom").value)
        if(validarempresa)
        {
            var nomemp=document.getElementById("nom").value;
            
            var tema=document.getElementById("temas").value;
                                   
            document.getElementById("formu").style.display="none";
            document.getElementById("tit").innerHTML="";
            
            if(tema=="esp")
            {
                ///DOM CREACION DE NODOS esto es para cear las paginas dinamicamente
                titulitis=document.getElementById("todosti");
                var ti=document.createElement("h1");
                var contenido=document.createTextNode(nomemp);               
                titulitis.appendChild(ti);
                ti.appendChild(contenido);
                document.getElementsByTagName("h1")[1].id="retro";            
                document.body.style.background="Url('imagenes/espacio.jpg')";
 
            }
            else if(tema=="perr")
            {
                titulitis=document.getElementById("todosti");
                var ti=document.createElement("h1");
                var contenido=document.createTextNode(nomemp);               
                titulitis.appendChild(ti);
                ti.appendChild(contenido);
                document.getElementsByTagName("h1")[1].id="granja";            
                document.body.style.background="Url('imagenes/fondo.jpg')";
                
            }
            var em=document.getElementById("empezar");
            var emp=document.createElement("div");
            var empe=document.createTextNode("");
            em.appendChild(emp);
            emp.appendChild(empe);
            em.style.background="black";
            
            em.style.color="white";
            var botones=document.createElement("input");
            botones.setAttribute("type","button");
            botones.setAttribute("id","carro");
            botones.setAttribute("onclick","car()");
            botones.setAttribute("value","carrousel");
            botones.setAttribute("class","ahora");
            em.appendChild(botones);
            var botone=document.createElement("input");
            botone.setAttribute("type","button");
            botone.setAttribute("id","gal");
            botone.setAttribute("onclick","galer()");
            botone.setAttribute("value","galeria");
            botone.setAttribute("class","ahora");
            em.appendChild(botone);
        }
        else
        document.getElementById("ctr-nom").innerHTML="Nombre debe tener al menos algo escrito y solo letras";

    }
    else
    { 
        alert("Debemos aceptar las cookies para seguir");                     
    }
}