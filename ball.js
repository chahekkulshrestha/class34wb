class ball{
    constructor(x, y, width, height) {
        var options = {
            
            'frictionAir':0.005,
            'density':0.04,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        strokeWeight(4);
        stroke("green");
        fill(255);
        ellipse(0,0,this.width,this.height);

        pop();
      }
}