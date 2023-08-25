const canvas = document.querySelector("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const c = canvas.getContext("2d")

c.fillRect(50,50,100,100)
c.fillRect(100,100,100,100)

c.beginPath()

c.moveTo(50,50)
c.lineTo(100,100)
c.strokeStyle = "#fff"
c.stroke()

// c.moveTo(150,150)
// c.lineTo(200,200)
// c.strokeStyle = "#fff"
// c.stroke()

c.beginPath()
c.moveTo(150,50)
c.lineTo(200,100)
c.strokeStyle = "#000"
c.stroke()

c.moveTo(50,150)
c.lineTo(100,200)
//c.strokeStyle = "#000"
c.stroke()