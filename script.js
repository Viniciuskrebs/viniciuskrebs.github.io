function fazerLogin (){
var usuario = document.getElementById("usuario").value;
var senha = document.getElementById("senha").value;
var mensagem = document.getElementById("mensagem");
 
if (usuario === "admin" && senha === "1234"){
    mensagem.style.color = "green";
    mensagem.innerText = "Login realizado com sucesso!"
}else{
    mensagem.style.color = "red";
    mensagem.innerText = "Usuario ou senha incorreto!"
}
}
function temaClaro(){
    document.body.classList.remove("escuro");
}
function temaEscuro(){
    document.body.classList.add("escuro");

}