class ComputerBase
{
    constructor(x,y,width,height)
    {
        var options={
            isStatic:true
        };
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.height=height
        this.width=width
        this.image=loadImage("./assets/base2.png")
        World.add(world,this.body)
    }
    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;

        push()
        translate (this.x,this.y);
        rotate (angle);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.heigth);

        pop()

    }
}