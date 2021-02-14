var canvas;
var background;

var gameState =0;
var playerCount ;
var form , game ,player;
var database;
var allPlayers;
var car1,car2,car3,car4;
var cars;

function setup(){
    canvas = createCanvas(displayWidth-20,displayHeight-20);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();

}
function draw(){
if(playerCount == 4){
    game.update(1);
    game.getState();
}
console.log(gameState);
if(gameState == 1){
    var display_position = 130;
    game.play();
}

}

