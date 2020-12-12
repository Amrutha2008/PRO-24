
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(900, 800);


	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	groundSprite=createSprite(width/2, 650, width,10);
	groundSprite.shapeColor=color(255)

	

	dustbin1 = createSprite(750, 610, 20,100);
	dustbin1.shapeColor=color("red")

	dustbin2 = createSprite(550,610, 20,100);
	dustbin2.shapeColor=color("red")

	dustbin3 = createSprite(650,650, 200,20);
	dustbin3.shapeColor=color("red")
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	dustbin1 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, dustbin1);
	 
	dustbin2 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, dustbin2);
	 
	dustbin3 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world,  dustbin3);
	 ball=new Paper(50,600,10)
	 Engine.run(engine);
}

	
	


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  
  
  ball.display();
  
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		console.log("up")
	   Matter.Body.applyForce(ball.body,ball.body.position,{x:15,y:-15});
	}}

