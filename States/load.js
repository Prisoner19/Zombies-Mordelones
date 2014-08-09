var load_state =
{
    preload: function ()
    {
        game.stage.backgroundColor = "#3D3632";
        game.load.spritesheet('button', 'Resources/Graphics/spritesheet.png', 333, 36); 
        game.load.text('game_data', 'Resources/JSON/Escenas.json');
        game.load.audio('zombie', "Resources/Sounds/zombie.ogg");
		game.load.audio('bite', "Resources/Sounds/bite.wav");
    },
    
    create: function ()
    {
        game.state.start('menu');
    }
};