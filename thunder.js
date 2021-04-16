class Thunder {
    constructor() {
        var options ={isStatic:true};

        this.rand = Math.round(random(1,4));
        //console.log(this.rand);
        switch(this.rand) {
            case 1: this.image = loadImage("thunderbolt/1.png");
            break;

            case 2: this.image = loadImage("thunderbolt/2.png");
            break;

            case 3: this.image = loadImage("thunderbolt/3.png");
            break;

            case 4: this.image = loadImage("thunderbolt/4.png");
            break;

            default: break;
        }

        var x = random(0,650);
        console.log(x);

        this.body = Bodies.rectangle(x,85,200,200,options); 

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

            push();
            translate(pos.x, pos.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image,0,0,200,200);
            pop();
    }
}