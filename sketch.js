var plr , plrImg;
var C1 , C1Img;
var C2 , C2Img;
var C3 , C3Img;
var C4 , C4Img;
var C5 , C5Img;

var bg, bgImg;

function preload(){
  plrImg = loadImage("images/PC.png");
  C1Img  = loadImage("images/C1.png");
  C2Img  = loadImage("images/C2.png");
  C3Img  = loadImage("images/C3.png");
  C4Img  = loadImage("images/C4.png");
  C5Img  = loadImage("images/C5.png");
  bgImg     = loadImage("images/bg1.png");
}

function setup() {
  createCanvas(1800,800);
  // createSprite(400, 200, 50, 50);
  bg = createSprite(1200,400,5000,400);
  bg.addImage(bgImg)
  bg.scale = 1
 
}

function draw() {
  background("black"); 
  bg.velocityX = -5;
  
   if(bg.x < 0){
    bg.x = width
  }
  drawSprites();
}