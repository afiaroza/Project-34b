class Throw {
    constructor(bodyA, pointB) {
      var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.04,
        length: 10
      }
  
      this.pointB = pointB;
      this.throw = Constraint.create(options);
      World.add(world, this.throw);
    }
  
    display() {
      var pointA = this.throw.bodyA.position;
      var pointB = this.pointB;
      strokeWeight(4);
      stroke(48,22,8);
      line(pointA.x,pointA.y,pointB.x,pointB.y);
    }   
  }  