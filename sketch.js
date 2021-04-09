var gameState=0;
var playerCount=0;
var database;
var form;
var game;
var player;
var allPlayers;
var Distance=0;


function setup(){
createCanvas(1600,800);
database=firebase.database();
game=new Game();
game.getState();
game.Start();
}


function draw(){
if (playerCount===4){
game.update(1)
}

if (gameState===1){
clear ();
game.play();
}

}