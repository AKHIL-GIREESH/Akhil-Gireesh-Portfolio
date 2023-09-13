const curve = new IntersectionObserver(elemes => console.log("It is",elemes) )







const canvas = document.querySelector("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const c = canvas.getContext("2d")

// c.fillStyle = `rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},1)`
// c.fillRect(50,50,100,100)
// c.fillRect(100,100,100,100)

// c.beginPath()

// c.moveTo(50,50)
// c.lineTo(100,100)
// c.strokeStyle = "#fff"
// c.stroke()

// c.moveTo(100,100)
// c.lineTo(200,100)
// c.stroke()

// c.moveTo(100,100)
// c.lineTo(100,200)
// c.stroke()

// c.moveTo(50,150)
// c.lineTo(150,150)
// c.stroke()

// c.moveTo(150,50)
// c.lineTo(150,150)
// c.stroke()

// c.moveTo(150,150)
// c.lineTo(200,200)
// c.stroke()

// c.beginPath()
// c.moveTo(150,50)
// c.lineTo(200,100)
// c.strokeStyle = "#000"
// c.stroke()

// c.moveTo(50,150)
// c.lineTo(100,200)
// //c.strokeStyle = "#000"
// c.stroke()
let maxRadius = 100, minRadius = 5

let mouse = {
    x:undefined,
    y:undefined
}

window.addEventListener("mousemove",(event) => {
    mouse.x = event.x
    mouse.y = event.y
    //console.log(mouse)
})

class AnimatedCircles{
    constructor(){
        this.x = (innerWidth-2*minRadius)*Math.random()+minRadius
        this.y = (innerHeight-2*minRadius)*Math.random()+minRadius
        this.xspeed = (Math.random()-0.5)
        this.yspeed = (Math.random()-0.5)
        this.colour = `rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},1)`
        this.radius = minRadius
    }
    
    Animate(){
        c.beginPath()
        c.fillStyle = this.colour
        c.arc(this.x,this.y,this.radius,0,360,false);
        c.stroke();
        c.fill()
        //c.closePath()
        if(this.x+minRadius>innerWidth || this.x-minRadius<0){
            this.xspeed =-(this.xspeed)
            this.colour = `rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},1)`
        }
        if(this.y+minRadius>innerHeight || this.y-minRadius<0){
            this.yspeed = -(this.yspeed)
            this.colour = `rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},1)`
        }

        this.x+=this.xspeed
        this.y+=this.yspeed

        //console.log(mouse)
        if(mouse.x - this.x < 50 && mouse.x-this.x > -50 && this.radius < maxRadius && mouse.y - this.y < 50 && mouse.y-this.y > -50){
            this.radius+=1
        }else if(this.radius>minRadius){
            this.radius-=1
        }
        //this.colour = //`rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},1)`
    }
}

let circleArray = []
// let x = innerWidth*Math.random()
// let y = innerHeight*Math.random()
// let xspeed = (Math.random()-0.5)*10
// let yspeed = (Math.random()-0.5)*10

for(let i =0;i<200;i++){
    circleArray.push(new AnimatedCircles())
}

//new AnimatedCircles().Animate()
//circleArray[1].Animate()

function animate(){
    c.clearRect(0,0,innerWidth,innerHeight)
    requestAnimationFrame(animate)
    for(let i=0;i<200;i++){
        circleArray[i].Animate()
    }
    //circleInstance.Animate()
    // c.beginPath()
    // c.arc(x,y,50,0,360,false);
    // c.stroke();
    // if(x+50>=innerWidth || x-50<=0){
    //     xspeed =-(Math.random()-0.5)*10
    // }
    // if(y+50>=innerHeight || y-50<=0){
    //     yspeed = -(Math.random()-0.5)*10
    // }
    // x+=xspeed
    // y+=yspeed
}

//animate()