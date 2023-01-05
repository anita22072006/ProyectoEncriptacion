window.addEventListener("load",inicio,true);
function inicio(){
    document.getElementById("msg").addEventListener("keyup", function(){
        this.value = this.value.toUpperCase();
    },true);

    document.getElementById("encriptar").addEventListener("click",function(){
        let texto = document.getElementById("msg").value;
        var desplazamiento = document.getElementById("desplazamiento").value;
        encriptar(texto, desplazamiento);
    },true)

    document.getElementById("desencriptar").addEventListener("click",function(){
        let texto = document.getElementById("msgCodigo").value;
        var desplazamiento = document.getElementById("desplazamiento").value;
        desencriptar(texto, desplazamiento);
    },true)
}

function encriptar(texto, desplazamiento){
    if(!texto){
        return ""
    }
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    desplazamiento = (desplazamiento % 26 + 26) % 26;
    var msgencriptado= texto.replace(/[A-Z]/ig, c => letras[(letras.indexOf(c)+desplazamiento)%26]);
    document.getElementById("demo1").innerHTML=msgencriptado;
    if(desplazamiento==""){
        document.getElementById("error").innerHTML="No hay desplazamiento";
    }else{
        document.getElementById("error").innerHTML="";
    }
             
}

function desencriptar(texto, desplazamiento){
    if(!texto){
        return ""
    }
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    desplazamiento = (desplazamiento % 26 - 26) % 26;
    var msgdesencriptado = texto.replace(/[A-Z]/ig, c => letras[(letras.indexOf(c)-desplazamiento)%26]);
    document.getElementById("demo2").innerHTML=msgdesencriptado;
    if(desplazamiento==""){
        document.getElementById("error").innerHTML="No hay desplazamiento"
    }else{
        document.getElementById("error").innerHTML="";
    }
}