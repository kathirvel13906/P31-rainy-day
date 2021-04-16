class Umbrella {
    constructor(x,y) {
        var options ={
            isStatic:true,
            friction:1
        }

        this.image = loadAnimation("man/walking_8.png","man/walking_7.png","man/walking_6.png","man/walking_5.png","man/walking_4.png","man/walking_3.png","man/walking_2.png","man/walking_1.png",);

        this.body = Bodies.rectangle(x,y,10,10,options);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

            push();
            translate(pos.x, pos.y);
            rotate(angle);
            imageMode(CENTER);
            animation(this.image,0,0,10,10);
            pop();
    }
}