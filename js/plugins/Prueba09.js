// Plugin Commands.

var miComando = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    miComando.apply(this);
    if (command === "escribir") {
        switch(args[0]) {
            case "alert":
                alert(calcular(args));
                break;
            case "console":
                console(calcular(args));
                break;
        }
    }
};

function calcular(args) {
    var texto = "";
    for (var i = 1; i < args.length; i++) {
        if (args[i + 1] != null) {
            texto += args[i] + " ";
        } else {
            texto += args[i];
        }
    }
    return texto;
}