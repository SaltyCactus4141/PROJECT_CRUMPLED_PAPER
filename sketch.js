
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var ground1,ground2,ground3

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;
	ground1 = new Ground(600,650,1200,10);
	ground2 = new Ground(800,575,10,155);
	ground3 = new Ground(1000,575,10,155);
	ball = Bodies.circle(300,100,10);
	World.add(world,ball)
	


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground1.display();
  ground2.display();
  ground3.display();

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,10,10,{density:10});
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(ball,ball.position,{x:50,y:-50});
	}
}



