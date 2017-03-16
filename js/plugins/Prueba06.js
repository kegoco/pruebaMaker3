// Crear ventana.

function Window_Sencilla() {
    this.initialize.apply(this, arguments);
}

Window_Sencilla.prototype = Object.create(Window_Base.prototype);
Window_Sencilla.prototype.constructor = Window_Sencilla;

Window_Sencilla.prototype.initialize = function(x, y) {
    var width = this.windowWidth();
    var height = this.windowHeight();
    Window_Base.prototype.initialize.call(this, x, y, width, height);
    this.refresh();
};

Window_Sencilla.prototype.windowWidth = function() {
    return 400;
};

Window_Sencilla.prototype.windowHeight = function() {
    return 400; //this.fittingHeight(1);
};

Window_Sencilla.prototype.refresh = function() {
    var x = this.textPadding();
    var width = this.contents.width - this.textPadding() * 2;
    this.contents.clear();
    this.drawIcon(1, 0, 0);
    this.drawTextEx("Muerte", 50, 0);
};

Window_Sencilla.prototype.open = function() {
    this.refresh();
    Window_Base.prototype.open.call(this);
};


// Creamos la escena.
function Scene_Sencilla() {
    this.initialize.apply(this, arguments);
}

Scene_Sencilla.prototype = Object.create(Scene_MenuBase.prototype);
Scene_Sencilla.prototype.constructor = Scene_Sencilla;

Scene_Sencilla.prototype.initialize = function() {
    Scene_MenuBase.prototype.initialize.call(this);
};

Scene_Sencilla.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
    // Crear aquí la ventana.
    this._windowSencilla = new Window_Sencilla(0, 0);
    this._windowSencilla.x = 208;
    this._windowSencilla.y = 112;
    this.addWindow(this._windowSencilla);
};

Scene_Sencilla.prototype.start = function() {
    Scene_MenuBase.prototype.start.call(this);
};

Scene_Sencilla.prototype.update = function() {
    Scene_MenuBase.prototype.update.call(this);
    
    // Si cancelamos nos lleba de nuevo al mapa.
    if (Input.isTriggered('cancel')) {
        SceneManager.goto(Scene_Map);
        SoundManager.playCancel();  // Reproduce el sonido de cancelar.
    }
}