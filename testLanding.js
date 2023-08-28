console.log("Hello World")

const canvas = document.querySelector("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight
canvas.style.backgroundColor = "black"

//let starArray = []

const c = canvas.getContext("2d")

class Stars{
    constructor(){
        this.x = Math.random() * innerWidth
        this.y = Math.random() * innerHeight
        this.colour = `rgba(255,255,255,${Math.random()})`
    }

    draw(){
        c.beginPath()
        c.fillStyle = this.colour
        c.arc(this.x,this.y,1.5,0,360,false)
        c.stroke()
        c.fill()
    }
}

for(let i=0;i<100;i++){
    new Stars().draw()
}

c.beginPath()

c.moveTo(0.6*innerWidth,0.2*innerHeight)
//c.lineTo()