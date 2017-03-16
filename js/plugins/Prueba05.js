/*:
*
* @param imagen
* @desc Imagen de prueba.
* @default destellos
*/

var datos = PluginManager.parameters("Prueba05");
var imagen = String(datos["imagen"] || "destellos");  // Cogemos la imagen como String.
var _Scene_Title_Create = Scene_Title.prototype.create;
var _Scene_Title_Update = Scene_Title.prototype.update;
Scene_Title.prototype.estrellas;

Scene_Title.prototype.create = function() {
    _Scene_Title_Create.call(this);
    this.crearEstrellas();
};

Scene_Title.prototype.crearEstrellas = function() {
    this.estrellas = new TilingSprite();
    this.estrellas.bitmap = ImageManager.loadPicture(imagen);
    this.estrellas.move(0, 0, Graphics.width, Graphics.height); // Inicializar imagen.
    this.addChild(this.estrellas);
}

Scene_Title.prototype.update = function() {
    _Scene_Title_Update.call(this);
    this.estrellas.opacity = 175;
    this.estrellas.origin.x -= 0.5;
    this.estrellas.origin.y += 1;
};