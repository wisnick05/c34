class Ball {
    constructor(x, y, radius,angle) {
      var options = {
          'frictionAir':0.005,
          'density':1.0
      }
      this.body = Bodies.circle(x, y,radius, options);
      this.radius = radius; 
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(6);
      stroke("white")
      ellipseMode(CENTER);
      fill("red");
      ellipse(0,0, this.radius, this.radius);
      pop();
    }
  };
  