import App from "../src/main";

test("puedeCircular() terminación 0", () => {
  let myApp = new App();
  let diaRnd = Math.trunc(Math.random() * 50) + 8;

  expect(myApp.puedeCircular(1, 0)).toBe(true);
  expect(myApp.puedeCircular(2, 0)).toBe(false);
  expect(myApp.puedeCircular(3, 0)).toBe(false);
  expect(myApp.puedeCircular(4, 0)).toBe(false);
  expect(myApp.puedeCircular(5, 0)).toBe(false);
  expect(myApp.puedeCircular(6, 0)).toBe(false);
  expect(myApp.puedeCircular(7, 0)).toBe(false);
  expect(myApp.puedeCircular(diaRnd, 0)).toBe(false);
});

test("puedeCircular() terminación 1", () => {
  let myApp = new App();
  let diaRnd = Math.trunc(Math.random() * 50) + 8;

  expect(myApp.puedeCircular(1, 1)).toBe(false);
  expect(myApp.puedeCircular(2, 1)).toBe(true);
  expect(myApp.puedeCircular(3, 1)).toBe(false);
  expect(myApp.puedeCircular(4, 1)).toBe(false);
  expect(myApp.puedeCircular(5, 1)).toBe(false);
  expect(myApp.puedeCircular(6, 1)).toBe(false);
  expect(myApp.puedeCircular(7, 1)).toBe(false);
  expect(myApp.puedeCircular(diaRnd, 1)).toBe(false);
});

test("puedeCircular() terminación 2", () => {
  let myApp = new App();
  let diaRnd = Math.trunc(Math.random() * 50) + 8;

  expect(myApp.puedeCircular(1, 2)).toBe(false);
  expect(myApp.puedeCircular(2, 2)).toBe(false);
  expect(myApp.puedeCircular(3, 2)).toBe(true);
  expect(myApp.puedeCircular(4, 2)).toBe(true);
  expect(myApp.puedeCircular(5, 2)).toBe(false);
  expect(myApp.puedeCircular(6, 2)).toBe(false);
  expect(myApp.puedeCircular(7, 2)).toBe(false);
  expect(myApp.puedeCircular(diaRnd, 2)).toBe(false);
});


test("puedeCircular() otras terminaciones", () => {
  let myApp = new App();
  let diaRnd = Math.trunc(Math.random() * 50) + 8;
  let terminacion = Math.trunc(Math.random() * 5) + 3;

  expect(myApp.puedeCircular(1, terminacion)).toBe(true);
  
  terminacion = Math.trunc(Math.random() * 5) + 3;
  expect(myApp.puedeCircular(2, terminacion)).toBe(true);

  terminacion = Math.trunc(Math.random() * 5) + 3;
  expect(myApp.puedeCircular(3, terminacion)).toBe(true);

  terminacion = Math.trunc(Math.random() * 5) + 3;
  expect(myApp.puedeCircular(4, terminacion)).toBe(true);

  terminacion = Math.trunc(Math.random() * 5) + 3;
  expect(myApp.puedeCircular(5, terminacion)).toBe(true);

  terminacion = Math.trunc(Math.random() * 5) + 3;
  expect(myApp.puedeCircular(6, terminacion)).toBe(true);

  terminacion = Math.trunc(Math.random() * 5) + 3;
  expect(myApp.puedeCircular(7, terminacion)).toBe(true);

  terminacion = Math.trunc(Math.random() * 5) + 3;
  expect(myApp.puedeCircular(diaRnd,terminacion)).toBe(false);
});