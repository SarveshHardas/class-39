var  database;
var form,player,gameState;
var bgImg;
var backgroundImg;
var playerCount;
var canvas;
var c1,c2;
var cImg1,cImg2;
var cars=[];
var allPlayer;
var track;

function preload()
{
  bgImg=loadImage("assets/background.png");
  cImg1=loadImage("assets/car1.png");
  cImg2=loadImage("assets/car2.png");
  track=loadImage("assets/track.jpg");

}

function setup(){
  database = firebase.database();
  canvas=createCanvas(windowWidth,windowHeight);
  game = new Game()
  game.start();
}

function draw(){
  background(bgImg);
  if(playerCount===2){
    game.update(1);
  }
  if(gameState===1){
    game.play();
  }
}
function windowResized()
{
  resizeCanvas(windowWidth,windowHeight);
}