class Ball {
    constructor(posX,posY,radius)
    {
     var options={restitution:0.6,density:0.8,isStatic:false}
     this.body=Bodies.circle(posX,posY,radius/2,options)
     this.r=radius;
     World.add(world,  this.body)
    }
 
    display()
    {
      var pos = this.body.position ;
     push();
     ellipseMode(RADIUS)
     fill("yellow")
     ellipse(pos.x,pos.y,this.radius)
     pop();
    }
 }