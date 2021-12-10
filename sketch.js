var path,rocket,coin,diamonds,jwellery,sword;
var pathImg,rocketImg,coinImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var coinG,diamondsG,jwelleryG,swordGroup;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("space.jpg");
  rocketImg = loadImage("rocket.png");
  coinImg = loadImage("fuel.png");
  diamondsImg = loadImage("food.png");
  jwelleryImg = loadImage("water.png");
  swordImg = loadImage("meteor.png");
  endImg =loadAnimation("game_over.png");
}

function setup(){
  

 createCanvas(windowWidth,windowHeight);


path=createSprite(width/2,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale = 2.5;

rocket = createSprite(width/2,height-20,20,20);
rocket.addImage("rocket.png",rocketImg);
rocket.scale=1;
  
  
coinG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  rocket.x = World.mouseX;
  
  edges= createEdgeSprites();
  rocket.collide(edges);
  


   if(path.y > height ){
     path.y = height/2;
   }
  
    createCoin();
    createDiamonds();
    createJwellery();
    createSword();

    if (coinG.isTouching(rocket)) {
      coinG.destroyEach();
      treasureCollection=treasureCollection + 50;
    }
    else if (diamondsG.isTouching(rocket)) {
      diamondsG.destroyEach();
      treasureCollection=treasureCollection + 100;
      
    }
    else if(jwelleryG.isTouching(rocket)) {
      jwelleryG.destroyEach();
      treasureCollection= treasureCollection + 150;
      
    }
    else{
      if(swordGroup.isTouching(rocket)) {
        gameState=END;
        
        rocket.addImage("rocket.png",endImg);
        rocket.x=width/2;
        rocket.y=height/2;
        rocket.scale=0.6;
        
        coinG.destroyEach();
        diamondsG.destroyEach();
        jwelleryG.destroyEach();
        swordGroup.destroyEach();
        
        coinG.setVelocityYEach(0);
        diamondsG.setVelocityYEach(0);
        jwelleryG.setVelocityYEach(0);
        swordGroup.setVelocityYEach(0);
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Space Score: "+ treasureCollection,width-200,30);
  }

}

function createCoin() {
  if (World.frameCount % 200 == 0) {
  var coin = createSprite(Math.round(random(50, width-50),40, 10, 10));
  coin.addImage(coinImg);
  coin.scale=0.2;
  coin.velocityY = 5;
  coin.lifetime = 200;
  coinG.add(coin);
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(50, width-50),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.3;
  diamonds.velocityY = 5;
  diamonds.lifetime = 200;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 410 == 0) {
  var jwellery = createSprite(Math.round(random(50, width-50),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.2;
  jwellery.velocityY = 5;
  jwellery.lifetime = 200;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 530 == 0) {
  var sword = createSprite(Math.round(random(50, width-50),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.15;
  sword.velocityY = 4;
  sword.lifetime = 200;
  swordGroup.add(sword);
  }
}
