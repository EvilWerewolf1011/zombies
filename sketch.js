var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var myEngine,myWorld;
var child,childimage,childimage1;
var zombie,zombie1,zombieimage;
var monster,monsterimage;
var dance,dance1,danceimage;
var pillar1,pillar2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");

	childimage = loadImage("c1.png");
	childimage1 = loadImage("c2.png");

	zombieimage = loadAnimation("z1.png","z2.png","z3.png");
	
    monsterimage = loadAnimation("m1.png","m2.png")

    danceimage = loadAnimation("d1.PNG","d2.png","d3.png");

}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
    myEngine = Engine.create();
	myWorld = myEngine.world;

    dance1 = createSprite(670,580,10,10);
	dance1.addAnimation("dancing",danceimage);
	dance1.scale = 0.4;

    dance = createSprite(720,580,10,10);
	dance.addAnimation("dancing",danceimage);
	dance.scale = 0.4;

    zombie1 = createSprite(125,580,10,10);
	zombie1.addAnimation("walking",zombieimage);
	zombie1.scale = 0.7;

	zombie = createSprite(150,580,10,10);
	zombie.addAnimation("walking",zombieimage);
	zombie.scale = 0.7;
	
	monster = createSprite(120,600,10,10);
	monster.addAnimation("walking",monsterimage);
	monster.scale = 0.7;
	
	child = createSprite(500,580,10,10);
	child.addImage(childimage);
	child.scale = 0.8;

    pillar1 = createSprite(600,540,50,250);

    pillar2 = createSprite(200,540,50,250);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);

	World.add(myWorld,ground);

    World.add(myWorld,packageBody);
  
}


function draw() {

	Engine.update(myEngine);

  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  keyPressed(); 

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    
	Body.setStatic(packageBody, false); 
	
    child.addImage(childimage1);

  }
}


