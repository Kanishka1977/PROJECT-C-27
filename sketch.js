var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var ground,ground2;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1= new Bob(220,60,30);
	bobObject2= new Bob(200,60,30);
	bobObject3= new Bob(150,60,30);
	bobObject4= new Bob(110,60,30);
	bobObject5= new Bob(130,60,30);

	ground= new Ground(600,600,1200,20);
	ground2= new Ground(500,50,1200,20);
	
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);

  background("white");
  Engine.update(engine);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  
  ground.display();
  ground2.display();
  
 

  drawSprites();
 
}



