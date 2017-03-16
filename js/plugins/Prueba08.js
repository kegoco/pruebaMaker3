// Cambiar fondo.
Scene_Menu.prototype.createBackground = function() {
    this.imagenFondo = new TilingSprite();
    this.imagenFondo.bitmap = ImageManager.loadParallax("Mountains5");
    this.imagenFondo.move(0, 0, Graphics.width, Graphics.height);
    this.addChild(this.imagenFondo);
};

Scene_Menu.prototype.update = function() {
    Scene_MenuBase.prototype.update.call(this);
    this.imagenFondo.origin.x += 0.5;
};

// Cambiar fondo a item.
Scene_Item.prototype.createBackground = function() {
    this.imagenFondo = new TilingSprite();
    this.imagenFondo.bitmap = ImageManager.loadParallax("Mountains5");
    this.imagenFondo.move(0, 0, Graphics.width, Graphics.height);
    this.addChild(this.imagenFondo);
};

Scene_Item.prototype.update = function() {
    Scene_MenuBase.prototype.update.call(this);
    this.imagenFondo.origin.x += 0.5;
};