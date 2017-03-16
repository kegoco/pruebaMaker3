/*:
*
* @param nombre
* @desc Este es el nombre del protagonista.
* @default Dálibor
* 
* @param edad
* @desc Esta es la edad del protagonista.
* @default 21
* 
* @param historial
* @desc El historial de éste personaje.
* @default Hijo del herrero de Bólidior.
*/

// Recoge los parámetros de éste script y los guarda en un array.
var datos = PluginManager.parameters("Prueba01");

// Creamos una variable y cogemos el dato "nombre" de nuestro array.
// Para acceder a la posición de un array en vez de especificar la posición hay que especificar el nombre del parámetro, en este caso "nombre", que hace referéncia al parámetro que recogemos.
var nombrePj01 = String(datos["nombre"] || "Sin nombre");  // Si no hay nombre se le asigna "Sin nombre".
var edadPj01 = Number(datos["edad"] || 0);
var historialPj01 = String(datos["historial"] || "");

// Ahora que ya tenemos los datos en variables, podemos tratarlos.
console.log("El protagonista se llama " + nombrePj01 + ", tiene " + edadPj01 + " años de edad;\n" + historialPj01);