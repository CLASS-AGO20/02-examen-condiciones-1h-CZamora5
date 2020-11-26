export default class App {
    convertir(pesos){
        const DOLAR = 20.5;
        const EURO = 22.7;
        return pesos<2000 ? pesos/DOLAR : pesos/EURO;
    }

}

let app = new App();
