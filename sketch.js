var car, wall;
var speed, weight;
var deformation;
var red,red_car, yellow, yellow_car, green, green_car, blue;

function preload() {
  blue = loadImage("car.png");
  red = loadImage("red_car.png");
  yellow = loadImage("yellow_car.png");
  green = loadImage("red_car.png");
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
    deformation = (0.5 * weight * speed * speed / 22500);

    if(deformation < 100){
      car.visible = false;
      green_car = createSprite(1300,200,30,30);
      green_car.addImage("good", green);
     }
     else if(deformation > 100 && deformation < 180){
      car.visible = false;
      yellow_car = createSprite(1300,200,30,30);
      yellow_car.addImage("fine", yellow);
     }
     else if(deformation > 180){
      car.visible = false;
      red_car = createSprite(1300,200,30,30);
      red_car.addImage("bad", red);
     }
  }
  car.collide(wall);

  drawSprites();
}