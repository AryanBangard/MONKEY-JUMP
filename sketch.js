

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
bananaImage=loadImage("banana.png")
  obstacleImage=loadImage("obstacle.png")
}



function setup() {
  createCanvas(450,450)

  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=.1
  
   ground=createSprite(400,350,900,10)
  ground.velocityX=-4
  ground.x=ground.width/2;
  console.log(ground.x)
  

 
}


function draw() {
background(200)
 
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  
  
  
  
  
  
  
  if(keyDown("space")&& monkey.y >= 140){
        monkey.velocityY = -12;
  }
  
      monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground)
  
  spawnBanana();
  spawnObstacle()
  
  drawSprites()
}

function spawnBanana(){
  if (frameCount % 70===0){
    var banana=createSprite(380,10,20,20)
  banana.addImage(bananaImage)
  banana.velocityX=-4
  banana.scale=.1
    banana.setLifetime=100
    banana.y = Math.round(random(80,120));
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1; 
  }
}

function spawnObstacle(){
  if (frameCount % 70===0){
    var obstacle=createSprite(350,305,20,20)
    obstacle.addImage(obstacleImage)
    obstacle.scale=.2
    obstacle.velocityX=-4
    
  }
  
}


