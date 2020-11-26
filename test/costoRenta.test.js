import App from "../src/main";

test("costoRenta()  menos de 50 km", () => {
  let myApp = new App();
  let km = Math.trunc(Math.random() * 50);
  
  expect(myApp.costoRenta(km).toFixed(2)).toBe((km*3).toFixed(2));
});

test("costoRenta()  50 - 100 km", () => {
  let myApp = new App();
  let km = Math.trunc(Math.random() * 50) + 50;
  
  expect(myApp.costoRenta(km).toFixed(2)).toBe((km*5).toFixed(2));
});


test("costoRenta()  100 - 200 km", () => {
  let myApp = new App();
  let km = Math.trunc(Math.random() * 100) + 100;
  
  expect(myApp.costoRenta(km).toFixed(2)).toBe((km*6).toFixed(2));
});

test("costoRenta()  más de 200 km", () => {
  let myApp = new App();
  let km = Math.trunc(Math.random() * 1000) + 200;
  
  expect(myApp.costoRenta(km).toFixed(2)).toBe((km*6.5).toFixed(2));
});
