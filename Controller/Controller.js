import Modell from "../Modell/Modell.js";
import Kartya from "../View/Kartya.js";

class Controller{
    lista=[]
    #modell
    #kartya
    constructor(){
        this.#modell=new Modell()
        this.lista=this.#modell.getLista();
        this.#kartya = new Kartya(this.lista, $('.kartyaElemek'));
        this.kattintEvent();
    }

    kattintEvent(){
        $(window).on("kattint", (event)=>{
            const szimbolum = event.detail;
            this.#kartya.szimbolumKirajzol(this.lista.indexOf(szimbolum), szimbolum);
        })
    }
}
export default Controller;