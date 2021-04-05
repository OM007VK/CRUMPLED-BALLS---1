
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1, dustbin2, dustbin3;
var ball;
var ground1

function preload()
{
	
}

function setup() {
	createCanvas(1500, 400);
    engine = Engine.create();
	world = engine.world;
	
    ground1 = new ground(750,375,1500,15)

	dustbin1= new Box (900,310,17,125);
	dustbin1.shapeColor = "white"
	dustbin2= new Box(1100,310,17,125);
	dustbin2.shapeColor = "white"
	dustbin3= new Box(1000,370,200,17);
	dustbin3.shapeColor = "white"

	ball = new Ball(250,250,20)

	Engine.run(engine); 
}


function draw() {
  rectMode(CENTER);
  background(0);

	ground1.display();
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
    ball.display();

}

function keyPressed() 
{
	console.log(ball)
	if (keyCode === UP_ARROW) 
	{
	Matter.Body.applyForce(ball.body,ball.body.position,{x:1,y:-10});
	}
}