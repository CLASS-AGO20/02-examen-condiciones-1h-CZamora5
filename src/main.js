export default class App {
    convertir(pesos){
        const DOLAR = 20.5;
        const EURO = 22.7;
        return pesos<2000 ? pesos/DOLAR : pesos/EURO;
    }

    costoRenta(kilometros){
        if(kilometros<50){
            return 3*kilometros;
        }
        else if(kilometros<100){
            return 5*kilometros;
        }
        else if(kilometros<200){
            return 6*kilometros;
        }
        else{
            return 6.5*kilometros;
        }
    }

    puedeCircular(dia, terminacion){
        if(dia>7){
            return false;
        }
        else if(terminacion == 0 && dia == 1){
            return true;
        }
        else if(terminacion == 1 && dia == 2){
            return true;
        }
        else if(terminacion == 2 && (dia == 3 | dia == 4)){
            return true;
        }
        else if(2<terminacion){
            return true;
        }
        else{
            return false;
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

//Pruebas del método costoRenta
let kilometros1 = 34;
let kilometros2 = 67;
console.log(`Probando método costoRenta(kilometros):`);
console.log(`Si conduciste por ${0*kilometros1} kilometros el costo de renta será ${app.costoRenta(0*kilometros1)}`);
console.log(`Si conduciste por ${kilometros1} kilometros el costo de renta será ${app.costoRenta(kilometros1)}`);
console.log(`Si conduciste por ${kilometros2} kilometros el costo de renta será ${app.costoRenta(kilometros2)}`);
console.log(`Si conduciste por ${2*kilometros2} kilometros el costo de renta será ${app.costoRenta(2*kilometros2)}`);
console.log(`Si conduciste por ${3*kilometros1} kilometros el costo de renta será ${app.costoRenta(3*kilometros1)}`);
console.log(`Si conduciste por ${5*kilometros2} kilometros el costo de renta será ${app.costoRenta(5*kilometros2)}`);

//Pruebas del método puedeCircular
let dia = 1;
let terminacion = 1;
console.log(`Probando método puedeCircular(dia, terminacion):`);
console.log(`¿Puedo circular el día ${dia} con terminación ${0*terminacion}? ${app.puedeCircular(dia, 0*terminacion)}`);
console.log(`¿Puedo circular el día ${2*dia} con terminación ${1*terminacion}? ${app.puedeCircular(2*dia, terminacion)}`);
console.log(`¿Puedo circular el día ${3*dia} con terminación ${2*terminacion}? ${app.puedeCircular(3*dia, 2*terminacion)}`);
console.log(`¿Puedo circular el día ${3*dia} con terminación ${2*terminacion}? ${app.puedeCircular(3*dia, 2*terminacion)}`);
console.log(`¿Puedo circular el día ${3*dia} con terminación ${1*terminacion}? ${app.puedeCircular(3*dia, terminacion)}`);
console.log(`¿Puedo circular el día ${4*dia} con terminación ${1*terminacion}? ${app.puedeCircular(4*dia, terminacion)}`);
console.log(`¿Puedo circular el día ${5*dia} con terminación ${3*terminacion}? ${app.puedeCircular(5*dia, 3*terminacion)}`);
console.log(`¿Puedo circular el día ${dia} con terminación ${1*terminacion}? ${app.puedeCircular(dia, terminacion)}`);
console.log(`¿Puedo circular el día ${2*dia} con terminación ${0*terminacion}? ${app.puedeCircular(2*dia, 0*terminacion)}`);
console.log(`¿Puedo circular el día ${2*dia} con terminación ${7*terminacion}? ${app.puedeCircular(2*dia, 7*terminacion)}`);
console.log(`¿Puedo circular el día ${9*dia} con terminación ${0*terminacion}? ${app.puedeCircular(9*dia, 0*terminacion)}`);
