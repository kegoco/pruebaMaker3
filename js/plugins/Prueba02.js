// Ejemplo 1 para crear un objeto en RPG Maker MV.
function personaje(nombre, edad, historial){
    this.nombre = nombre;
    this.edad = edad;
    this.historial = historial;
    this.rol = "Caballero";
    this.juego = "juego1";
    
    // Método interno.
    this.mostrarDatos = function(){
        console.log(this.nombre + " " + this.rol + " - " + this.edad + "\n" + this.historial + " " + this.juego);
    }
}
miPersonaje = new personaje("Dálibor", 21, "Hijo del herrero de Bólidior"); // Finalmente se crea el objeto.
miPersonaje.mostrarDatos();


// Ejemplo 2 para crear un objeto en RPG Maker MV.
function villano(nombre, edad, historial){
    this.nombre = nombre;
    this.edad = edad;
    this.historial = historial;
    this.rol = "Caballero oscuro";
    this.juego = "juego1";
    
    // Método interno.
    this.datos = mostrarDatos;
}

function mostrarDatos(){
        console.log(this.nombre + " " + this.rol + " - " + this.edad + "\n" + this.historial + " " + this.juego);
}
    
miVillano = new villano("Malo", 666, "Malísimo"); // Finalmente se crea el objeto.
miVillano.datos();