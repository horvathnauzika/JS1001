class Kartya{

    constructor(index, szuloElem){
        this.index=index;
        this.szuloElem=szuloElem;
        this.htmlAlap();
        this.sajatEsemeny(); 
        this.getIndex();    
    }

    htmlAlap(){
        let txt = "";
        txt += `<div class="kartya" id="${this.index}"></div>`; 
        this.szuloElem.append(txt)
    }
    
    szimbolumKirajzol(index, szimbolum){
        let kartya = $(`#${index}`);
        kartya.empty();
        kartya.append(szimbolum)
    }

    sajatEsemeny(){
        const kartyak=$('.kartya:last-child');
        kartyak.on("click", ()=>{
            const myEvent = new CustomEvent("kattint", {detail: { kartya: this } });
            window.dispatchEvent(myEvent);
        })
    }

    getIndex(){
        return this.index;
    }

}
export default Kartya;