var p;
function preload(){

}

function setup() {
 createCanvas(400,600)
    p = crateSprite(200,300,50,50)
}

function draw() {
 background("black");
    mov();
    drawSprites();

}
function mov(){
if(keyDown("left")){
    p.velocityX = -2
}
if(keyDown("right")){
    p.velocityX = 2
}
}