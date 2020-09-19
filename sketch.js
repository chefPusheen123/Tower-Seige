const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;

var polygon;

function setup() {
  engine = Engine.create();
	world = engine.world;

  createCanvas(800,400);
  ground=new Ground(200,200,20,20)
  block8 = new Box(330,235,30,40)
  block9 = new Box(360,235,30,40)
  block10 = new Box(390,235,30,40)
  block11 = new Box(420,235,30,40)
  block12= new Box(450,235,30,40)
  block13= new Box(360,235,30,40)
  block14= new Box(390,235,30,40)
  block15= new Box(420,235,30,40)
  block16= new Box(390,235,30,40)
  polygon=createSprite(200,200,20,20)
}

function draw() {
  
  background(255,255,255);  
  drawSprites();
  ground.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
}