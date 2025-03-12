let entrada="";
let codigo=0;
let binario="";
function limpiart1 (){
    entrada = document.getElementById("caracter").value="";
}
function limpiart2 (){
    entrada = document.getElementById("ascci").value="";
}
function limpiart3 (){
    entrada = document.getElementById("binario").value="";
}
function casci(){
    entrada=document.getElementById("caracter").value;
    if(entrada ==""){
        alert("Porf favor, ingrese un caracter antes de convertir");
        return;
    }
    codigo=entrada.charCodeAt(0);
    document.getElementById("rescasci").value="";
    document.getElementById("rescasci").innerText="El caracter "+entrada+" en codigo ASCCI es:"+codigo;
    document.getElementById("ascci").value=codigo;
    
}
function ascbin(){
    let cod = document.getElementById("ascci").value;
    if(cod ==""){
        alert("Porf favor, ingrese un caracter antes de convertir");
        return;
    }
    for (let i = 7; i>=0 ;i--){
        if (2 ** i<= cod){
            binario=binario+"1";
            cod=cod-2**i;            
        }else{
            binario = binario + "0";
        }
    }
    document.getElementById("resbin").value="";
    document.getElementById("resbin").innerText="El caracter "+entrada+" en binario es:" +binario;
    document.getElementById("binario").value=binario;

}
function bincar (){
    let tbin=document.getElementById("binario").value;
    if(tbin ==""){
        alert("Porf favor, ingrese un caracter antes de convertir");
        return;
    }
    let caracter = "";
    let suma =0;
    for (let vc=7;vc>=0;vc--){
        if (tbin[7-vc]=="1")
        suma=suma+2**vc;
    }
    caracter=String.fromCharCode(suma);
    document.getElementById("rescar").value="";
    document.getElementById("rescar").innerText="El binario "+tbin+" en caracter es: "+caracter;
}
