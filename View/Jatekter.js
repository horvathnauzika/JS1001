import Kartya from "./Kartya.js";

class Jatekter{

    constructor(szuloElem, hossz){
        this.szuloElem=szuloElem;
        this.htmlOsszerak(hossz);
    }

    htmlOsszerak(hossz){
        for (let i = 0; i < hossz; i++) {
            new Kartya(i, this.szuloElem);
        }
    }
}
export default Jatekter;