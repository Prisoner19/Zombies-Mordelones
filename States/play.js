
var datos_json;
var gui_text;

var cadena_total;
var total_lenght;

var indice_actual = 0;

var play_state =
{
    create: function ()
    {
        var style = this.crear_estilo(14, "candara", "#ffffff");

        var x = game.world.width/2;
        var y = game.world.height/2;

        gui_text = this.game.add.text(100, 100, "", style);
        
        datos_json = JSON.parse(game.cache.getText('game_data'));
        
        this.cargar_escena(3);
        
    },

    crear_estilo: function (tam_fuente, nom_fuente, hex_color)
    {
        var estilo = {font: ""+tam_fuente + "px " + nom_fuente, fill: hex_color};
        return estilo;
    },
    
    update: function()
    {
        if(indice_actual < total_lenght)
        {
            indice_actual += 0.3;
            gui_text.content = cadena_total.substring(0, Math.round(indice_actual));
        }
    },
    
    cargar_escena: function (id_escena)
    {
        cadena_total = datos_json.Escenas[id_escena].texto;
        total_lenght = cadena_total.length;       
        
        indice = 0;
    }
};