const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var backgroundImage;

function preload() {
  backgroundImage = loadImage("images/GamingBackground.png");  
}

function setup() {
  createCanvas(900,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,450,300,100);
  ground1 = new Ground(600,200,10,10);

  superhero = new Superhero(200,400);

  attach = new Throw(superhero.body, {x: 200, y:100});

  monster = new Monster(600,100);

  block1 = new Block(400,375);
  block2 = new Block(400,325);
  block3 = new Block(400,275);
  block4 = new Block(400,225);
  block5 = new Block(400,175);
  block6 = new Block(400,125);
  block7 = new Block(400,75);
  block8 = new Block(450,375);
  block9 = new Block(450,325);
  block10 = new Block(450,275);
  block11 = new Block(450,225);
  block12 = new Block(450,175);
  block13 = new Block(450,125);
  block14 = new Block(450,75);
  block15 = new Block(500,375);
  block16 = new Block(500,325);
  block17 = new Block(500,275);
  block18 = new Block(500,225);
  block19 = new Block(500,175);
  block20 = new Block(500,125);
  block21 = new Block(500,75);  

  Engine.run(engine);
}

function draw() {
  background(backgroundImage);

  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  superhero.display();
  monster.display();
}

function mouseDragged() {
  Matter.Body.setPosition(superhero.body,{x:mouseX,y:mouseY});
}


