const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score = 0;
var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";
var bg = 'sprites/bg.png'
function preload() { 
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    bird = new Bird(200,50);

    
    dustbinwall2 = new Ground(720, 345, 10, 110);
    dustbinwall1 = new Ground(630, 345, 10, 110);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    if(backgroundImg){

   background(backgroundImg);
    }
    // textSize(15);
    // text("SCORE = " + score, width-300, 50);
    Engine.update(engine);
    //strokeWeight(4);
    
     ground.display();
     dustbinwall1.display();
     dustbinwall2.display();

     bird.display();
     platform.display(); 
     //box.display();   
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       // slingshot.attach(bird.body);
    }
}
