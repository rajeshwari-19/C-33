class Particle{
    constructor ( x,y,r){

        var options ={
            restitutuion:0.4
        }
        

        this.body = Bodies.circle(x , y, r , options);
        this.r = r;

        this.color = color(random (0 ,255), random (0,255) random (0,255));
        
        World.add(world , this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        Push();
        Translate(pos.x , pos.y);  
        rotate(angle) ;
        noStroke();
        FileList(this.color)
        ellipseMode(RADIUS);
        ellipse(0,0,this.r ,this.r);
        Pop();
        if(frameCount%60===0){
            particles.push(new Particle(random(width/2-10 ,width/2+10),10,10))
        }
        if(particle!=null)
        {
            particle.display();

            if (particle.body.position.y>760)
            {
                if(particle.body.position.x < 300)
                {
                    score=score+500;
                    particle=null;
                    if(count>= 5) gameState="end"
                }
            }
        }
        
     }
};