var t_rex
var t_reximage
var ground
var groundimage
var invisground
//to load or download the images
function preload()
{
t_reximage=loadAnimation("trex1.png","trex3.png","trex4.png")
groundimage=loadAnimation("ground2.png")
}
//sprite shape color,createSprite,velocity,animation,scale
function setup(){
    createCanvas(1000,400)
t_rex=createSprite(200,200,20,20)
t_rex.addAnimation("running",t_reximage)
t_rex.scale=0.7
ground=createSprite(500,230,50,400)
ground.addAnimation("moving",groundimage)
ground.velocityX=-3
invisground=createSprite(480,250,1000,20)
invisground.visible=false
}

function draw(){
background("black");
fill ("white")
text(mouseX+","+mouseY,mouseX,mouseY)
console.log(t_rex.y)
//making the trex jump
if(keyDown("space")&&t_rex.y>=205){
t_rex.velocityY=-12

}

//making an object countinous
if(ground.x<0){
ground.x=ground.width/2
}

//gravity
t_rex.velocityY=t_rex.velocityY+0.8
t_rex.collide(invisground);
drawSprites()
}