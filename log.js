let entrada="";
let codigo=0;

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
    codigo=entrada.charCodeAt(0);
    document.getElementById("rescasci").value="";
    document.getElementById("rescasci").innerText="El caracter "+entrada+" en codigo ASCCI es:"+codigo;
    document.getElementById("ascci").value=codigo;
    
}
function ascbin(){
    let binario="";
    let cod = document.getElementById("ascci").value;
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
