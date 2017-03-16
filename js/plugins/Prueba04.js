var alias_Comandos = Scene_Title.prototype.createCommandWindow;

Scene_Title.prototype.createCommandWindow = function() {
    alias_Comandos.call(this);  // Ejecutamos el plugin original en "rpg_scenes".
    
    this._commandWindow.opacity = 0;  // Le quitamos la opacidad a la ventana de comandos de la escena de título.
    
};