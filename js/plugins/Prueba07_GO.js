/*:
*
* @param ImagenFinal
* @desc Esta es la imagen que se mostrará cuando muramos.
* @default final
*
* @param SonidoFinal
* @desc Este es el sonido que se reproducirá cuando muramos.
* @default final
*/

var datos = PluginManager.parameters("Prueba07_GO");
var imagen = String(datos["ImagenFinal"] || "final");
var sonido = String(datos["SonidoFinal"] || "final");


function Scene_Muerte() {
    this.initialize.apply(this, arguments);
}

Scene_Muerte.prototype = Object.create(Scene_Base.prototype);
Scene_Muerte.prototype.constructor = Scene_Muerte;

Scene_Muerte.prototype.initialize = function() {
    Scene_Base.prototype.initialize.call(this);
};

// Con esto se ejecuta nada más empezar el juego.
/*Scene_Boot.prototype.start = function() {
    Scene_Base.prototype.start.call(this);
    SoundManager.preloadImportantSounds();
    if (DataManager.isBattleTest()) {
        DataManager.setupBattleTest();
        SceneManager.goto(Scene_Battle);
    } else if (DataManager.isEventTest()) {
        DataManager.setupEventTest();
        SceneManager.goto(Scene_Map);
    } else {
        this.checkPlayerLocation();
        DataManager.setupNewGame();
        SceneManager.goto(Scene_Muerte);
        Window_TitleCommand.initCommandPosition();
    }
    this.updateDocumentTitle();
};*/

Scene_Muerte.prototype.create = function() {
    Scene_Base.prototype.create.call(this);
    this.crearPantallaMuerte();
    this.reproducirMusica();
};

Scene_Muerte.prototype.crearPantallaMuerte = function() {
    this.imagenMuerte = new Sprite();
    this.imagenMuerte.bitmap = ImageManager.loadSystem(imagen);
    this.addChild(this.imagenMuerte);
}

Scene_Muerte.prototype.reproducirMusica = function() {
    AudioManager.stopBgm();
    AudioManager.stopBgs();
    
    // Crear objeto audio.
    var audio = {
        name: sonido,  // Nombre del audio.
        volume: 100,
        pitch: 100,
        pan: 0
    };
    AudioManager.playMe(audio);
};

Scene_Muerte.prototype.update = function() {
    if (this.isActive() && !this.isBusy() && this.isTriggered()) {
        this.gotoTitle();
    }
    Scene_Base.prototype.update.call(this);
};

Scene_Muerte.prototype.gotoTitle = function() {
    SceneManager.goto(Scene_Title);
};

Scene_Muerte.prototype.isTriggered = function() {
    return Input.isTriggered('ok') || TouchInput.isTriggered();
};

Scene_Muerte.prototype.stop = function() {
    Scene_Base.prototype.stop.call(this);
    this.fadeOutAll();
};

Scene_Muerte.prototype.terminate = function() {
    Scene_Base.prototype.terminate.call(this);
};

// Para que nos llebe a esta escena cuando muramos en combate.
BattleManager.updateBattleEnd = function() {
    if (this.isBattleTest()) {
        AudioManager.stopBgm();
        SceneManager.exit();
    } else if ($gameParty.isAllDead()) {
        if (this._canLose) {
            $gameParty.reviveBattleMembers();
            SceneManager.pop();
        } else {
            SceneManager.goto(Scene_Muerte);
        }
    } else {
        SceneManager.pop();
    }
    this._phase = null;
};