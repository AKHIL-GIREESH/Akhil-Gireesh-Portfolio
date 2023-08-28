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

class AnimatedCircles{
    constructor(){
        this.x = (innerWidth-100)*Math.random()+50
        this.y = (innerHeight-100)*Math.random()+50
        this.xspeed = (Math.random()-0.5)*10
        this.yspeed = (Math.random()-0.5)*10
    }
    
    Animate(){
        c.beginPath()
        //c.fillStyle = `rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},1)`
        c.arc(this.x,this.y,50,0,360,false);
        c.stroke();
        if(this.x+50>innerWidth || this.x-50<0){
            c.fillStyle = `rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},1)`
            this.xspeed =-(this.xspeed)
            c.fill()
        }
        if(this.y+50>innerHeight || this.y-50<0){
            c.fillStyle = `rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},1)`
            this.yspeed = -(this.yspeed)
            c.fill()
        }
        this.x+=this.xspeed
        this.y+=this.yspeed
    }
}

let circleArray = []
// let x = innerWidth*Math.random()
// let y = innerHeight*Math.random()
// let xspeed = (Math.random()-0.5)*10
// let yspeed = (Math.random()-0.5)*10

for(let i =0;i<40;i++){
    circleArray.push(new AnimatedCircles())
}

//new AnimatedCircles().Animate()
//circleArray[1].Animate()

function animate(){
    c.clearRect(0,0,innerWidth,innerHeight)
    requestAnimationFrame(animate)
    for(let i=0;i<40;i++){
        circleArray[i].Animate()
        console.log(circleArray[i])
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

animate()