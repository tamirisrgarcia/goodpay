import controlerUserLogin from "./moduloControlerLogin.js";
import controlerRotasApp from "./moduloControlerRotas.js";

//Elementos de avisos do bootstrap: Modal, Alert, Toast
var myModal = new bootstrap.Modal(document.getElementById("myModal"))

//Ordem para executar e validar login
const entrarUsuario = document.getElementById("btnEntrar");
entrarUsuario.addEventListener("click", (event) => {
    let user = document.getElementById("usuario").value,
    senha = document.getElementById("senha").value;
    let alertModal = controlerUserLogin.loginInfo(user, senha);
    
    document.getElementById("titleModal").innerHTML=alertModal.title;
    document.getElementById("bodyModal").innerHTML=alertModal.bodyModal;
    document.getElementById("btnModalClose").innerHTML=alertModal.bt1;
    document.getElementById("btnModalSave").innerHTML=alertModal.bt2;

    myModal.show();
    setTimeout(carregarPagina, 5000);
    function carregarPagina (){
        window.location.href = controlerRotasApp.validaRota(localStorage.status, alertModal.idModal);
    }
});

//Ordem para criar um novo usuário
const novoUsuario = document.getElementById("btnNovoUsuario");
novoUsuario.addEventListener("click", (event) => {
    window.location.href = controlerRotasApp.validaRota("false", "usuarioNaoExiste1");
})

