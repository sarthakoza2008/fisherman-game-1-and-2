var playerp, compp, sore, ball;
var gameState = play;

function setup(){
 createCanvas(1500, 600);

 
 playerp = createSprite(120, 200, 50, 50);
 playerp.shapeColor = ("blue");

 boat = createSprite(120, 260, 150, 110);
 boat.shapeColor = ("red");

 fish1 = createSprite(600, 350, 15, 15);
 fish1.velocityX = -5;

 fish2 = createSprite(500, 350, 15, 15);

 fish3 = createSprite(700, 400, 15, 15);
 fish4 = createSprite(400, 450, 15, 15);
 fish5 = createSprite(300, 500, 15, 15);
 fish6 = createSprite(800, 600, 15, 15);
 fish7 = createSprite(800, 450, 15, 15);
 
 edges = createEdgeSprites();
}

function draw(){
 background(0);
// playerp.y = World.mouseY;


fish1.bounceOff(edges);
//fish1.bounceOff(edges[2]);
//fish1.bounceOff(edges[3]);
//fish1.bounceOff(edges[4]);


 
 drawSprites();
}