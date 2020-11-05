var PLAY =1
var END  =0
var gameState = PLAY
var bg_img , bg
var tl , tl_img;
var back , back_img ;
var pickachu , picka_img;
var mangoimg , obstacleimg;
var obstacleGroup , mangoGroup;
var score
var invground;
var wall1 , wall2;
var go_img , go;
var re_img , re;
var s_img , a,a_img , s;
var ball,ball_img;

  function  preload(){
    picka_img = loadImage("pika.png");

  bg_img = loadImage("grass.jpg");
  //tl_img = loadImage("hut.png")
  back_img = loadImage("road2.jpg");
  mangoimg = loadImage("current.png");
  obstacleimg = loadImage("obstacle.png");
  diamondimg = loadImage("diamond.png");
  go_img = loadImage("gameo.png");
  re_img = loadImage("start.png");
  s_img = loadImage("end.jpg");
  a_img = loadImage("current.png")
  ball_img = loadImage("ball.png");

  }

function setup() { 
  createCanvas(800,700);
  bg = createSprite(0,350,100,1400);
  bg.addImage(bg_img);
bg.scale = 3
  back = createSprite(900,800,800,2000);
  back.addImage(back_img);
  back.scale = 3.4;
  back.y= back.height/2;
  back.velocityY = -12;



  invground = createSprite(300,650,800,20);
  invground.visible = false;
  pickachu = createSprite(300,500,20,20);
  pickachu.addImage(picka_img);
  pickachu.scale = 0.3
 pickachu.velocityX = 0;
 pickachu.velocityY = 0;
wall1 = createSprite(200,0,20,1400);
wall2 = createSprite(750,0,20,1400);

s = createSprite(210,120);
s.addImage(s_img);
s.scale = 1.6
s.visible = false;

go = createSprite(400,400);
go.addImage(go_img);
go.scale =0.2
go.visible = false

re = createSprite(400 , 550);
re.addImage(re_img);
re.scale = 0.5
re.visible = false

a = createSprite(80,90);
a.addImage(a_img);
a.scale = 0.25

ballGroup = new Group();
obstacleGroup =new Group();
mangoGroup =new Group();
diamondGroup = new Group();

score = 0
wall1.visible = false;
wall2.visible = false;
}

function draw() {
  background(0);
  
  if(gameState === PLAY){

   if(keyDown("space")){
     pickachu.velocityY = -20
   }
   pickachu.velocityY = pickachu.velocityY+1
  if(back.y<0){
 back.y = back.height/2;
  } 

  if(keyDown("left")){
  pickachu.velocityX = -12;
  pickachu.velocityY = 0;
  }
  if(keyDown("right")){
    pickachu.velocityX = 12;
    pickachu.velocityY = 0;
    }
    
    if(pickachu.x<200){
      pickachu.velocityX = 4;
    }

    if(pickachu.x>570){
      pickachu.velocityX = -4;
    }
    
    
    spawnballs();
    spawnMangos();
    spawnObstacles();
    pickachu.collide(invground);
  
  if(pickachu.isTouching(mangoGroup)){
    //mangoimg.visible = false;
    score = score+1
    mangoGroup.destroyEach();
    }
   if(obstacleGroup.isTouching(pickachu)){
  gameState = END;

 // pickachu.visible = false;
   } 
  }
  else if(gameState === END){
  //invground.velocityX = 0
 // pickachu.velocityY = 0
 s.visible = true;
 go.visible = true;
 re.visible = true;
 
 back.visible = false
  obstacleGroup.destroyEach();
 mangoGroup.destroyEach(); 
 ballGroup.destroyEach();
  obstacleGroup.setVelocityXEach(0)
 mangoGroup.setVelocityXEach(0)
 ballGroup.setVelocityXEach(0)
}
if(mousePressedOver(re)){
reset();



 

  }
  drawSprites();
 textSize(35);
 fill("yellow");
 text(" : "+score ,100 ,100);
}


function spawnObstacles() {
  if(frameCount % 150 === 0) {
    var obstacle = createSprite(400,50,10,40);
    obstacle.x = Math.round(random(300,700));

    obstacle.addImage(obstacleimg);
    obstacle.velocityY = 4;
    obstacle.scale = 0.5;
   // obstacle.lifetime = 150;
    obstacleGroup.add(obstacle);
  }
}


function spawnballs() {
  if(frameCount % 350 === 0) {
    var ball = createSprite(600,50,10,40);
    ball.x = Math.round(random(450,650));

    ball.addImage(ball_img);
    ball.velocityY = 4;
    ball.scale = 0.2;
   // obstacle.lifetime = 150;
    ballGroup.add(ball);
  }
}
//global function for banana
function spawnMangos() {
  if (frameCount % 250 === 0) {
    var mango = createSprite(300,60,40,10);
    mango.x = Math.round(random(300,600));
    mango.addImage(mangoimg);
    mango.scale = 0.36;
   mango.velocityY = 3;
    //mango.lifetime = 200;
    mangoGroup.add(mango);
  }
}



 //  pickachu.visible = true;
 function reset(){
  back.visible = true;
  gameState = PLAY;
  score = 0;
  
  s.visible = false;
  go.visible = false;
  re.visible = false;
 

    }
