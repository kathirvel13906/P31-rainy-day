const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var canvas, engine, world;
var man;
var ground;
var thunde1r,thunde2r,thunde3r;
var drops = [];
var maxDrops=150;

function preload() {
    
}

function setup() {
    canvas = createCanvas(650,800);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(325,770,650,15);

    man = new Umbrella(325,420);

    if(frameCount % 150 === 0) {
        for(var i=0; i<maxDrops; i++){
            drops.push(new createDrop(random(0,650), random(0,100)));
        }
    }

    thunde1r = new Thunder();
    thunde2r = new Thunder();
    thunde3r = new Thunder();
}

function draw() {
    background(0);
    drawSprites();

    Engine.update(engine);

    ground.display();
    man.display();

    if(frameCount % 63 === 0) {
        thunde1r.display();
    }
    if(frameCount % 81 === 0) {
        thunde2r.display();
    }
    if(frameCount % 101 === 0) {
        thunde3r.display();
    }

    for(var i = 0; i<maxDrops; i++){
        drops[i].showDrop();
        drops[i].updateY()        
    }
}   

