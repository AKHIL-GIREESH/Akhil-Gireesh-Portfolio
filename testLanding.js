let myDocument = document.documentElement;
//let btn = document.getElementById("btn");
document.addEventListener("dblclick", ()=>{
    if(!(document.fullscreenElement)){
        if (myDocument.requestFullscreen) {
            myDocument.requestFullscreen();
        }
        else if (myDocument.msRequestFullscreen) {
            myDocument.msRequestFullscreen();
        } 
        else if (myDocument.mozRequestFullScreen) {
            myDocument.mozRequestFullScreen();
        }
        else if(myDocument.webkitRequestFullscreen) {
            myDocument.webkitRequestFullscreen();
        }
        //btn.textContent = "Exit Fullscreen";
    }
    else{
        if(document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if(document.msexitFullscreen) {
            document.msexitFullscreen();
        }
        else if(document.mozexitFullscreen) {
            document.mozexitFullscreen();
        }
        else if(document.webkitexitFullscreen) {
            document.webkitexitFullscreen();
        }
        //btn.textContent = "Go Fullscreen";
    }
});



//////////////////////////////////////////////////////////////

    const canvas = document.querySelector("canvas")
    const ipadCursor = document.querySelector(".ipCursor")
    const glCursor = document.querySelector(".glCursor")


    class scramble{
        constructor(text){
            console("Works")
            this.text = text
            this.array = ["*","^","%","_","@","!","#","$"]
        }
        encoder(){
            this.text = this.text.replace(this.text[Math.random()],this.array[Math.random()])
        }
        decoder(){

        }
    }
    // const Container = document.querySelectorAll(".Container")
    // const curveDiv = document.querySelector(".curve")

    // const curve = new IntersectionObserver(entries => entries.forEach(entry => {
    //     if(entry.intersectionRatio < 0.5 && entry.intersectionRatio){ //Modify after && part
    //         curveDiv.style.height = `${97*2*(entry.intersectionRatio)}px`
    //     }}),
    //     {threshold:0.5})
    
    // Container.forEach(item => curve.observe(item))

    /////////////////////////////////////////////////////////
    // const observer = new IntersectionObserver()
    // for(let i=0;i<5;i++){

    // }


    let tlHome = gsap.timeline()
    gsap.from("#One h1",{
        y:-100,
        opacity:0,
        duration:3,
        scrollTrigger:{
            trigger:"#One h1",
            start:"top center",
            toggleActions:"restart pause restart none"
        }
    })

    let tlAbout = gsap.timeline()
    gsap.from("#Two h1",{
        y:-100,
        opacity:0,
        // delay:2,
        duration:2,
        scrollTrigger:{
            trigger:"#Two h1",
            start:"top center",
            toggleActions:"restart pause restart none"
        }
    })

    let tlExperience = gsap.timeline()
    gsap.from("#Three h1",{
        y:-100,
        // delay:2,
        opacity:0,
        duration:3,
        scrollTrigger:{
            trigger:"#Three h1",
            start:"top center",
            toggleActions:"restart pause restart none"
        }
    })

    let tlAwards = gsap.timeline()
    gsap.from("#Four h1,#Four p",{
        y:-100,
        // delay:2,
        opacity:0,
        duration:3,
        scrollTrigger:{
            trigger:"#Four h1",
            start:"top center",
            toggleActions:"restart pause restart none"
        }
    })

    let tlTestimonials = gsap.timeline()
    gsap.from("#Five h1",{
        y:-100,
        // delay:2,
        opacity:0,
        duration:3,
        scrollTrigger:{
            trigger:"#Five h1",
            start:"top center",
            toggleActions:"restart none restart none"
        }
    })


    /////////////////////////////////////////////////////////


    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    canvas.style.backgroundColor = "#090909"

    window.addEventListener("mousemove",(e) => {
        ipadCursor.style.top = `${e.clientY}px`
        ipadCursor.style.left = `${e.clientX}px`
        //console.log(glCursor)
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
            c.arc(this.x,this.y,2,0,360,false)
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
