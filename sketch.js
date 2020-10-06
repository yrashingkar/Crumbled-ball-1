
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	binR = new Dustbin(1310, 610, 20, 100);
	binL = new Dustbin(1090, 610, 20, 100);
	binB = new Dustbin(1200, 650, 200, 20);
	ground = new Ground(width/2,670,1600,20);
	paperball = new Paper(200,665,25);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
 	binR.display();
	binL.display();
	binB.display();
	ground.display();
	paperball.display();
 
}


 function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperball.body,paperball.body.position,{x:35,y:-35})
	}
}
