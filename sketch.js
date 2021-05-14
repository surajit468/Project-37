const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



function preload() {
    backgroundIMG=loadImage("GamingBackground.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    hero= new Hero(180,220,200);
    slingShot = new Fly(hero.body,{x:100,y:200});
}

function draw(){
  background(backgroundIMG);
 
    
    Engine.update(engine);
    text(mouseX + ',' + mouseY, 30, 45);
    ground.display();
    hero.display();


}

function mouseDragged(){
    Matter.Body.setPosition(hero.body, {x:mouseX,y:mouseY});
  }
  function mouseReleased(){
    slingShot.fly();
  }
