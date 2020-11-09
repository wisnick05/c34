const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground1,box;
var ground2
var box1, box2, box3, box4, box5, box6, box7,box8, box9, box10
var ball1;
var chain;

function setup() {
  createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(500,580,1000,20);
  ground2 = new Ground(100,50,200,20);
 
  box1 = new Box(495,570,100,100);
 box2 = new Box(595,570,100,100);
box3 = new Box(495,470,100,100);
box4 = new Box(595,470,100,100);
box5 = new Box(495,370,100,100);
box6 = new Box(595,370,100,100);
box7 = new Box(495,270,100,100);
box8 = new Box(595,270,100,100);
box9 = new Box(495,370,100,100);
box10 = new Box(595,170,100,100);

ball1 = new Ball(100,100,40,40)

var options = {
  bodyA : ground2.body,
  bodyB : ball1.body,
  stiffness : 0.05,
  length : 100
}

chain = Constraint.create(options);
World.add(world,chain);

}

function draw() {
  background(0);  
  Engine.update(engine);
 ground1.display();
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();
 box9.display();
 box10.display();
ball1.display();
ground2.display();

strokeWeight(5);
stroke("yellow");
line (ground2.body.position.x,ground2.body.position.y,ball1.body.position.x,ball1.body.position.y)
}