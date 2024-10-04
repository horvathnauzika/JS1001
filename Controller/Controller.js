import Modell from "../Modell/Modell.js";
import Jatekter from "../View/Jatekter.js";

class Controller{
    #modell
    #jatekter
    constructor(){
        this.#modell=new Modell()
        this.kattintEvent();
        this.#jatekter=new Jatekter($('.kartyaElemek'), this.#modell.getLista().length);
        
    }

    kattintEvent(){
        $(window).on("kattint", (event)=>{
            const kartya=event.detail.kartya;
            const index=kartya.getIndex();
            const szimbolum=this.#modell.getLista()[index];
            kartya.szimbolumKirajzol(kartya.getIndex(), szimbolum)
            
        })
    }
}
export default Controller;

