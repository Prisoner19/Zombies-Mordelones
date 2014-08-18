var Panel = function(game, x, y, frame) 
{  
    Phaser.Sprite.call(this, game, x, y, 'panel', frame);
    game.add.existing(this);
};

Panel.prototype = Object.create(Phaser.Sprite.prototype);  
Panel.prototype.constructor = Panel;

Panel.prototype.update = function() 
{
    
};