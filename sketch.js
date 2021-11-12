var canvas,database;
var backgroundImage;
var form, player,game;
//Declare variables for gameState & playerCount
var gameState,playerCount;
//Declare variables for loading car & track Images
var car1_img, car2_img, track;
//Declare variable for creating sprite for cars
var allPlayers, car1, car2;
//Declare cars array
var cars = [];

function preload() 
{
  backgroundImage = loadImage("assets/background.png");
  car1_img = loadImage("assets/car1.png");
  car2_img = loadImage("assets/car2.png");
  track = loadImage("assets/track.jpg");
}

function setup() 
{
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  //Call getState function
  game.getState();
  game.start();
 
}

function draw() 
{
  background(backgroundImage);
  //Write if condition to change the player count when gamestate will be 2
 if(playerCount===2){
   game.update(1)
 }
  //Write if condition to change the player count when gamestate will be 1
  if(gameState===1){
    game.play()
  }
}

function windowResized() 
{
  resizeCanvas(windowWidth, windowHeight);
}
