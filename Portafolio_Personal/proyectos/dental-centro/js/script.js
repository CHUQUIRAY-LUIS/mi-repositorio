
function llamar(){
    let botonera=document.getElementById("botonera");
    botonera.classList.toggle("botonera-open");
    botonera.style.transition="0.5s";
}


let num = 1;
function mostrarImagen(){
    let imagenes = ["img01.jpg", "cuidados.jpg", "family-home-desktop.jpg", "img04.jpg", "img05.jpg", "img06.jpg", "img07.jpg", "img08.jpg", "img09.jpg"];
    document.getElementById("img").src = "img/" + imagenes[num - 1];
}
function adelante(){
    num++;
    if(num > 9) num = 1;
    mostrarImagen();
}
function atras(){
    num--;
    if(num < 1) num = 9;
    mostrarImagen();
}


//cambiar fondo
window.addEventListener("scroll",Bajar);
function Bajar(){
    let header=document.getElementById("header");
    let posy=window.pageYOffset;
    if(posy>300){
        header.style.background="#103c78";
        header.style.transition="0.5s";
    }else{
        header.style.background="none";
        header.style.transition="0.5s";
    }
}
