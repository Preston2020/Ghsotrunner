var tower,towerImage;
var door,doorImage,doorGroup;
var climber,climberImage,climberGroup;
var ghost,ghostImage;
var invisibleblock,invisibleGroup;


function preload(){
    towerImage = loadImage('tower.png');
    doorImage = loadImage('door.png');
    climberImage = loadImage('climber.png');
    ghostImage = loadImage('ghost-standing.png');

}



function setup(){
    createCanvas(600,600);

    tower = createSprite(300,300);
    tower.addImage(towerImage);
    tower.velocityY = 2;

    ghost = createSprite(200,300,20,20);
    ghost.addImage(ghostImage);
    ghost.scale = 0.5;
     
    doorGroup = new Group();
    climberGroup = new Group();
    invisibleGroup = new Group();


}



function draw(){
    background("black");

if(tower.y>400){
    tower.y=300;
}

if(keyDown("left_Arrow")){
    ghost.x = ghost.x -3;
}

if(keyDown("Right_Arrow")){
    ghost.x = ghost.x +3;
}

if(keyDown("Space")){
    ghost.velocityY = -3;
}

ghost.velocityY = ghost.velocityY +0.5;

if(climberGroup.isTouching(ghost)){
    ghost.velocityY = 0;
}

if(invisibleGroup.isTouching(ghost)){
    ghost.destroy();
}



spawndoor();


drawSprites();
}

function spawndoor(){
    if(frameCount % 60 === 0){
       door= createSprite(40,40,20,20);
       door.addImage(doorImage);
       door.velocityY = 2;
       door.x = Math.round(random(100,400));
       door.lifetime = 400;
       doorGroup.add(door);
       

       climber=createSprite(70,90,20,20);
       climber.addImage(climberImage);
       climber.velocityY = 2;
       climber.x = door.x;
       climber.lifetime = 400;
       climberGroup.add(climber);
       ghost.depth = door.depth;
       ghost.depth = ghost.depth +1;

       invisibleblock=createSprite(70,90,20,20);
       invisibleblock.velocityY = 2;
       invisibleblock.width = climber.width;
       invisibleblock.x = door.x;
       invisibleblock.lifetime = 400;
       invisibleblock.visible = false;
       invisibleGroup.add(invisibleblock);

    }
}

