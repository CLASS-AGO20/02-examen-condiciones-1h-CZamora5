import App from "../src/main";

test("convertir() a dólar, menor a 2 mil pesos", () => {
  let myApp = new App();
  let pesos = Math.trunc(Math.random() * 2000);
  
  expect(myApp.convertir(pesos).toFixed(2)).toBe((20.5*pesos).toFixed(2));
});

test("convertir() a euro, mayor a 2 mil pesos", () => {
  let myApp = new App();
  let pesos = Math.trunc(Math.random() * 2000) + 2000;
  
  expect(myApp.convertir(pesos).toFixed(2)).toBe((22.7*pesos).toFixed(2));
});

test("convertir() a euro, igual a 2 mil pesos", () => {
  let myApp = new App();
  let pesos = 2000;
  
  expect(myApp.convertir(pesos).toFixed(2)).toBe((22.7*pesos).toFixed(2));
});