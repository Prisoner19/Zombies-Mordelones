var cadena_total;
var total_lenght = 0;
var indice_actual = 0;
var cadena_mostrada = false;
var escena_padre;

var Relato = function(game, x, y, ref_escena) 
{  
    var estilo = {
        'font':'14px candara',
        'fill':'white'
    };
    
    Phaser.Text.call(this, game, x, y, "", estilo);
    escena_padre = ref_escena; 
    
    game.add.existing(this);
};

Relato.prototype = Object.create(Phaser.Text.prototype);  
Relato.prototype.constructor = Relato;


Relato.prototype.crear_estilo = function (tam_fuente, nom_fuente, hex_color)
{
    var estilo = {font: ""+tam_fuente + "px " + nom_fuente, fill: hex_color};
    return estilo;
};

Relato.prototype.set_texto = function (texto)
{
    cadena_total = texto;
 
    total_lenght = cadena_total.length; 
    indice_actual = 0;
    cadena_mostrada = false;
};

Relato.prototype.update = function() 
{
    if(indice_actual < total_lenght)
    {
        indice_actual += 0.3;
        this.content = cadena_total.substring(0, Math.round(indice_actual));
    }	
    else if(cadena_mostrada == false)
    {
        cadena_mostrada = true;
        escena_padre.mostrar_botones();
    }
};

Relato.prototype.terminar_mostrar = function()
{
    console.log(cadena_mostrada);
    if(this.cadena_mostrada == false)
    {
        cadena_mostrada = true;
        console.log("aaa");
        indice_actual = total_lenght;
        this.content = cadena_total.substring(0, Math.round(indice_actual));
    }
};
