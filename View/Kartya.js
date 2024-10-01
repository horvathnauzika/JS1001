class Kartya{

    lista = []

    constructor(lista, szuloElem){
        this.lista=lista;
        this.szuloElem=szuloElem;
        this.htmlOsszerak();
        this.sajatEsemeny();     
    }

    htmlOsszerak(){
        let txt = "";
        for (let i = 0; i < this.lista.length; i++) {
            txt += `<div class="kartya" id="${i}"></div>`;  
        }
        this.szuloElem.append(txt)
    }
    
    szimbolumKirajzol(index, szimbolum){
        let kartya = $(`#${index}`);
        kartya.append(szimbolum)
    }

    sajatEsemeny(){
        const kartyak=$('.kartya');
        kartyak.on("click", (event)=>{
            const kattintott = $(event.currentTarget).attr('id');
            const kattintottSzimbolum = this.lista[kattintott];
            const myEvent = new CustomEvent("kattint", {detail: { event: kattintottSzimbolum }});
            window.dispatchEvent(myEvent);
        })
    }

}
export default Kartya;