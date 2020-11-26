export default class App {
    convertir(pesos){
        const DOLAR = 20.5;
        const EURO = 22.7;
        return pesos<2000 ? pesos/DOLAR : pesos/EURO;
    }

    costoRenta(kilometros){
        if(kilometros<50){
            return 3;
        }
        else if(kilometros<100){
            return 5;
        }
        else if(kilometros<200){
            return 6;
        }
        else{
            return 6.5;
        }
    }
}

let app = new App();

//Pruebas del método convertir
let pesos1 = 1999;
let pesos2 = 2500;
console.log(`Probando método convertir(pesos):`);
console.log(`${pesos1} pesos equivale a ${app.convertir(pesos1)}`);
console.log(`${pesos1+1} pesos equivale a ${app.convertir(pesos1+1)}`);
console.log(`${pesos2} pesos equivale a ${app.convertir(pesos2)}`);
console.log(`${pesos2/2} pesos equivale a ${app.convertir(pesos2/2)}`);