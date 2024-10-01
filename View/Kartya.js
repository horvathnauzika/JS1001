class Kartya{

    lista = []

    constructor(lista, szuloElem){
        this.lista=lista;
        this.szuloElem=szuloElem;
        this.htmlOsszerak();
        this.sajatEsemeny();    
        console.log("3")    
    }

    htmlOsszerak(){
        this.lista.forEach(elem => {
            this.szuloElem.append(
                `
                <div class="kartya">${elem}</div>
                `
            )
        });
    }

    sajatEsemeny(){
        const kartyak=$('.kartya');
        kartyak.on("click", (event)=>{
            const kattintott = $(event.currentTarget).text();
            const myEvent = new CustomEvent("kattint", {detail: { event: kattintott }});
            window.dispatchEvent(myEvent);
        })
    }

}
export default Kartya;