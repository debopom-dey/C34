
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
var canvas,world,engine,mConstraint;
var bob1,bob2,bob3,bob4,bob5,roof,rope,bobDiameter
function preload()
{
	
}

function setup() {
  canvas = createCanvas(500, 800);
  engine = Engine.create();
  world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
    mouse: canvasmouse
  };
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);

  bob1= new Pendulum(150,250,255)
  rope1= new Rope(bob1.body,{x:150,y:250})
  bob2= new Pendulum(210,250,0)
  rope2= new Rope(bob2.body,{x:210,y:250})
  bob3= new Pendulum(270,250,255)
  rope3= new Rope(bob3.body,{x:270,y:250})
  bob4= new Pendulum(330,250,0)
  rope4= new Rope(bob4.body,{x:330,y:250})
  bob5= new Pendulum(390,250,255)
  rope5= new Rope(bob5.body,{x:390,y:250})
	//Engine.run(engine);
  
}


function draw() {
  background(210);
  Engine.update(engine);
  
  bob1.display();
  rope1.display();
  bob2.display();
  rope2.display();
  bob3.display();
  rope3.display();
  bob4.display();
  rope4.display();
  bob5.display();
  rope5.display();
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY})
}


