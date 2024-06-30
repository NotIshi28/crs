var car, wall;
var speed, weight;
var deformation;
var blue;

function preload() {
  blue = loadImage("car.png");
}

function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50,200,30,30);
  car .addImage("normal", blue);
  wall = createSprite(1500,200,60,200);

  car.velocityX = speed;
  
}

function draw() {
  background(255,255,255);
  
  if(car.isTouching(wall)){
    deformation = (0.2 * weight * speed * speed * speed/ 500);

    //add different 
  }
  car.collide(wall);

  drawSprites();
}