class Throw{
    constructor(bodyA,bodyB){
        var options = {
            bodyA:bodyB,
            pointB: pointB,
            stiffness:0.01,
            length:10
        }

        this.pointB = pointB;
        this.throw = constraint.create(options);
        World.add(world,this.throqw);
    }

    fly(){
        this.throw.bodyA = null;
    }

    launch(bodyA){
        this.throw.bodyA = bodyA;
    }

    display(){

    }
}