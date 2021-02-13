class Rope{
    costructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stifness:1.2,
            length:250,

        };
        this.pointB=pointB;
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }
    attach(body){
        this.rope.bodyA=body;
    }
    fly(){
     this.rope.bodyA=null;
    }
    display(){
        if(this.rope.bodyA){
         var pointA=this.rope.bodyA.position;
         var pointB=pointB;
         push();
         stroke(48,22,8);
         strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
        }
    }
}