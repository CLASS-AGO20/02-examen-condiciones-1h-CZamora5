
![Logo UCOL](img/ucol-logo.jpg)

![Portada](img/cover.jpg)

<span>Photo by <a href="https://unsplash.com/@kellysikkema?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Kelly Sikkema</a> on <a href="https://unsplash.com/s/photos/programming?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

## Título

Examen: Condiciones

## Propósito

Evaluar el uso de condicionales utilizando javascript

## Requerimientos funcionales

1. (3 Puntos) Escribir una función que reciba como parámetro una cantidad de dinero en pesos y la convierta a otro tipo de moneda. Si la cantidad de dinero en pesos es menor que 2mil pesos entonces se convertirá a dólares, si la cantidad es igual o mayor que 2mil pesos entonces se convertirá a euros.
   - El costo de 1 dólar es de 20.5 pesos
   - El costo de 1 euro es de 22.7 pesos
     - `convertir(pesos);`
  
2. (3 Puntos) El costo de renta de un auto depende de el número de kilómetros recorridos. Escribir una función que reciba como parámetro el número de kilómetros recorridos y determine el costo de renta del auto tomando en cuenta lo siguiente:
   - Si recorre menos de 50 km, el costo por kilómetro des de 3 pesos
   - Si recorre 50 o más, pero menos de 100, el costo por kilómetro es de 5 pesos
   - Si recorre 100 o más, pero menos de 200 el costo por kilómetro es de 6 pesos
   - Si recorre 200 o más el costo por kilómetro es de 6.5 pesos
     - `costoRenta(kilometros);`

3. (4 Puntos) Escribir una función que permita determinar si un carro puede circular o no dependiendo del día de la semana y la terminación de su placa. La función, recibirá como parámetro el día de la semana y el número de terminación de su placa. Si el el vehículo puede circular regresará `true`, si no puede circular regresará `false`, si se ingresa un día de la semana no válido la función regresará `false`. Los autos que tienen terminación 0 solamente pueden circular los lunes, los autos que tienen terminación 1 solamente pueden circular los martes, los autos que tienen terminación 2 solamente pueden circular los miércoles y jueves. Todos los demás autos pueden circular cualquier día de la semana. Para los días de la semana utiliza 1 para el Lunes, 2 para el martes, 3 para el miércoles, 4 para el jueves, 5 para el viernes, 6 para el sábado y 7 para el domingo.
   - `puedeCircular(dia, terminacion);`

## Requerimientos no funcionales

- Las funciones deberán tener el nómbre que se indica y el número y tipo de parámetros que se especifica.
- El programa deberá probar y mostrar el correcto funcionamiento de las funciones.
- El programa deberá funcionar en consola
- El examen es individual

## Entregable

- Código fuente en este repositorio
  
## Evaluación

- Para que el examen sea considerado como válido, el repositorio deberá tener por lo menos 1 commit por cada método o función.
- Los repositorios que no tengan una historia de commits considerable NO serán considerados como válidos y tendrán calificación cero
