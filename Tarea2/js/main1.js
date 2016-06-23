var usuario = "araceli.anaya.9@comunidad.unam";
var password = "Araceli";

$(document).on("ready", enviar);

function enviar(){
	$("#envio").on("click", login);
}

function login(){
correo = $("#usuario").val();
contra = $("#pass").val();

console.log(correo);
if(correo==usuario && contra == password){
alert("INICIO CORRECTO!");
window.location.href = 'http://www.google.com';
}else{
alert("INICIO INCORREPTO!");
 }
}