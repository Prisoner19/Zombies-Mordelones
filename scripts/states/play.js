'use strict';

var datos_json;
var escena;

var final = false;

var play_state =
{
    create: function ()
    {
        datos_json = JSON.parse(game.cache.getText('game_data'));
        escena = new Escena(this.game);
        
        escena.cargar_escena("1.1");
    },

    update: function()
    {

    },
	
	on_click: function(button)
    {
		cadena_total = "";
		total_lenght = 0;
		gui_text.destroy;
        
        for(var i = this.buttons.length-1; i >= 0; i--)
        {
            this.buttons[i].destroy();
        }

		this.cargar_escena(button.name);
	}, 
};