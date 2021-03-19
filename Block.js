class Block {
    constructor(x,y) {
        var options = {
            restitution: 0.5,
            isStatic: false
        }

        this.body = Bodies.rectangle(x,y,50,50,options);
        this.x = x;
        this.y = y;
        World.add(world,this.body);
    }

    display() {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        strokeWeight(4);
        stroke("black");
        fill(255,255,255);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,50,50);
        pop();
    }
}
