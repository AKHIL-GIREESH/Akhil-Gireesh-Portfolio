//console.log("Hello World")


    const canvas = document.querySelector("canvas")
    const ipadCursor = document.querySelector(".ipCursor")
    const glCursor = document.querySelector(".glCursor") 

    console.log(ipadCursor)

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    canvas.style.backgroundColor = "black"

    window.addEventListener("mousemove",(e) => {
        ipadCursor.style.top = `${e.clientY}px`
        ipadCursor.style.left = `${e.clientX}px`
        console.log(glCursor)
        glCursor.animate({
            top : `${e.clientY}px`,
            left : `${e.clientX}px`
        },{
            duration : 1000,
            fill : "both"
        })
        
    })

    //let starArray = []

    const c = canvas.getContext("2d")

    class Stars{
        constructor(){
            this.x = Math.random() * window.innerWidth
            this.y = Math.random() * window.innerHeight
            this.colour = `rgba(255,255,255,${Math.random()})`
            this.speed = 0.1
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
    // c.beginPath()
    // c.fillStyle="#fff"
    // c.arc(100,100,50,0,360,false)
    // c.stroke()
    // c.fill()

    c.beginPath()
    c.strokeStyle = "#fff"
    c.lineWidth = 3
    c.moveTo(0.6*innerWidth,0.2*innerHeight)
    c.lineTo(0.62*innerWidth,0.26*innerHeight)
    c.lineTo(0.625*innerWidth,0.32*innerHeight)
    c.moveTo(0.62*innerWidth,0.26*innerHeight)
    c.lineTo(0.56*innerWidth,0.32*innerHeight)
    c.lineTo(0.535*innerWidth,0.33*innerHeight)
    c.lineTo(0.52*innerWidth,0.37*innerHeight)
    c.lineTo(0.495*innerWidth,0.50*innerHeight)
    c.lineTo(0.51*innerWidth,0.65*innerHeight)
    c.lineTo(0.48*innerWidth,0.68*innerHeight)
    c.stroke()
