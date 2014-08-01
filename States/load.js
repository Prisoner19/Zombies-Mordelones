var load_state =
{
    preload: function ()
    {
        game.stage.backgroundColor = "#3D3632";
        game.load.spritesheet('button', 'Resources/Graphics/spritesheet.png', 193, 71); 
        game.load.text('game_data', 'Resources/JSON/Escenas.json');
    },
    
    create: function ()
    {
        game.state.start('menu');
    }
};