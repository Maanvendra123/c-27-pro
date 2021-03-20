class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        var option={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:1,
            angularStiffness:1,
            length:220
        }
        this.bodyB=bodyB;
        this.pointX=bodyA.x;
        this.pointY=bodyA.y-250;
        this.rope=Constraint.create(option)
        World.add(world,this.rope)
        
    
    }display  (){
        var pointa=this.rope.bodyA.position
        var pointb=this.rope.bodyB.position
        Push();
        strokeWeight(3.5)
        line (pointa.x,pointa.y,pointb.x,pointb.y)
        pop();
    }
}