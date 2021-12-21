import controlerUserLogin from "./moduloInterface.js";

//Elementos de avisos do bootstrap: Modal, Alert, Toast
var myModal = new bootstrap.Modal(document.getElementById("myModal"))

//Trazendo os botões da DOM em HTML
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
})