var car,wall;
var speed,weight;

function setup()
{  
    createCanvas(1600,400);
    speed=random(55,90);
    weight=random(400,1500);
    car=createSprite(50,200,50,50);
    car.velocityX=speed;
    wall=createSprite(1500,200,60,800);
    wall.shapeColor=blue(80,80,80);
}

function draw()
{
    background(0);
    drawSprites;

    if(wall.x-car.x<(car.width+wall.width)/2)
    
        car.velocityX=0;
        var d=0.5*60*60/22509*2260;
        if(d>180)
        {
            car.shapeColor=red(225,0,0);
        }
        var l=0.5*50*50/22509*1522;
        if(l<180 && l>100)
          {
            car.shapeColor=yellow(230,230,0);
          }
          var m=0.5*45*45/22509*3000;
        if(m<100)
          {
            car.shapeColor=green(0,225,0);
          }
        }
