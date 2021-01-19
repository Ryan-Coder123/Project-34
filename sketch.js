//Create variables here
var Ndog,Hdog
var database
var foodS,foodStock
function preload()
{
  //load images here
  Ndog.loadImage(dog.png);
  Hdog.loadImage(happydog.png)
}

function setup() {
  createCanvas(500,500);
  Ndog=createSprite
  Ndog.loadImage(dog.png)
  
  foodStock=database.ref('Food');
   foodStock.on("value",readStock);
}


function draw() {  
  backGround(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(stock(foodS));
    Ndog.addImage(happydog.png);
  }

  drawSprites();
  //add styles here

  text.textSize(24);
  text.fill(red);
  text.stroke(3.3);

}



