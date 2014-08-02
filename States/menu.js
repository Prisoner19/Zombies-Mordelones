var menu_state =
{
    create: function ()
    {
        var style = this.crear_estilo(14, "candara", "#ffffff");

        var x = game.world.width/2;
        var y = game.world.height/2;
        
        var text = this.game.add.text(100, 150, "Machuca el botón para empezar", style);
        
        var button = game.add.button(100, 200, 'button', this.on_click, this, 2, 1, 0);
    },
    
    on_click : function ()
    {
       game.state.start('play');
    },
    
    crear_estilo: function (tam_fuente, nom_fuente, hex_color)
    {
        var estilo = {font: ""+tam_fuente + "px " + nom_fuente, fill: hex_color};
        return estilo;
    },
};