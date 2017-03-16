function Personaje(nombre, edad, rol) {
    this.nombre = nombre;
    this.edad = edad;
    this.rol = rol;
}

// Variable común.
Personaje.prototype.videojuego = "PruebaJS";
Personaje.prototype.mostrarDatos = function() {
    console.log(this.nombre + " - " + this.rol + "\nPertenece al juego: " + this.videojuego);
}

personaje = new Personaje("Dálibor", 21, "Caballero");
//personaje.mostrarDatos();
// Se puede llamar desde el juego (Buscar evento "001").

/*Game_System.prototype.miVariable = 666;
Game_System.prototype.verMiVariable = function() {
    console.log("Mi variable es " + this.miVariable);
}*/