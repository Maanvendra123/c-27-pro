
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse;
const Constraint=Matter.Constraint;
const MouseConstraint=Matter.MouseConstraint;

var world,engine,canvas;
var pendulum1,pendulum2,pendulum3,pendulum4,pendulum5;
var rope1,rope2,rope3,rope4,rope5;
var mConstraint;



	


function setup() {
createCanvas(800,700)


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	
pendulum1=new Pendulum(200,450,50)
pendulum2=new Pendulum(300,450,50)
pendulum3=new Pendulum(400,450,50)
pendulum4=new Pendulum(500,450,50)
pendulum5=new Pendulum(600,450,50)
roof=new Roof(400,100,530,50)
rope1=new Rope(pendulum1.body,roof.body,-50*4,0)
rope2=new Rope(pendulum2.body,roof.body,-50*2,0)
rope3=new Rope(pendulum3.body,roof.body,0,0)
rope4=new Rope(pendulum4.body,roof.body,50*2,0)
rope5=new Rope(pendulum5.body,roof.body,50*4,0)
}


function draw() {
  background(0);
  Engine.update(engine);
  roof.display();
  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 drawSprites();
 
}
function keyPressed(){
  if(keyCode===UP_ARROW){
	Matter.Body.applyForce(pendulum1.body,pendulum1.body.position,{x:-250,y:75});
}
}


