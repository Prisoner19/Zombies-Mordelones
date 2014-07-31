var load_state =
{
    preload: function ()
    {
        game.stage.backgroundColor = "#3D3632";
        game.load.spritesheet('button', 'Assets/spritesheet.png', 193, 71);  
    },
    
    create: function ()
    {
        game.state.start('menu');
    }
};