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

let x = 200
let speed = 14
function animate(){
    c.clearRect(0,0,innerWidth,innerHeight)
    requestAnimationFrame(animate)
    c.beginPath()
    c.arc(x,200,50,0,360,false);
    c.stroke();
    if(x+50>=innerWidth || x-50<=0){
        speed *=-1
    }
    x+=speed
}

//animate()