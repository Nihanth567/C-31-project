class Plinko{
    constructor(x,y,radius){
        this.body = Bodies.circle(x,y,10,);
        
}
display(){
    var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        //imageMode(CENTER);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
};