import rotaApp from "./moduloRotas.js";

class ControlerRotasApp {
    constructor(status, idRota, tela, linkUrl) {
        this.status = status;
        this.idRota = idRota;
        this.tela = tela;
        this.linkUrl = linkUrl;
    }

    validaRota(status, idRota) {
        if(status === "true") {
            return (rotaApp.find((rotaApp) => rotaApp.idRota === idRota).linkUrl);
        } else {
            return (rotaApp.find((rotaApp) => rotaApp.idRota === idRota).linkUrl);
        }
    }
}

const controlerRotasApp = new ControlerRotasApp();
export default controlerRotasApp;