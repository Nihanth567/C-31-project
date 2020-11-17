var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;




function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);

  ground1 = new Ground(240,720,480,15);

  for(var k=0; k<=innerWidth;k+k +80){
    divisionns.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }
    line1 = new Divisions(10,790,10,400);

    line2 = new Divisions(100,790,10,400);
    line3 = new Divisions(150,790,10,400);
    line4 = new Divisions(200,790,10,400);
    line5 = new Divisions(250,790,10,400);
    line6 = new Divisions(300,790,10,400);
    line7 = new Divisions(50,790,10,400);
    line8 = new Divisions(390,290,10,400);

    for (var j = 40; j<=innerWidth; j=j+50){
      plinkos.push(new Plinko(j,75));
    }

for (var j = 15; j <=width-10; j=j+50){
  plinkos.push(new Plinko(j,175));
}
 
for (var j = 0; j < particles.length; j++){
  particles[j].display();
}

for (var k = 0; k < divisions.length; k++){

  divisions[k].display();
}

  }


function draw() {
  background(255,255,255); 
  
  ground1.display();
  line1.display();
  line2.display();
  line3.display();
  line4.display();
  line5.display();
  line6.display();
  line7.display();
  //line2.display();
  line8.display();
  

  drawSprites();
}