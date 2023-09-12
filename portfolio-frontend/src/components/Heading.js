import "./Heading.css";
import {useEffect} from "react"

const Heading = () => {
    useEffect(() => {
        console.log("Hello")
        fetch("https://ef37-103-165-20-19.ngrok.io/api/auth",{
                    mode:'cors',
                    method:"POST",                       
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(
                        {
                            username:"sanjay",
                            password:"Sanjay@123"
                        }                  
                    )
            }
        ).then(resp => resp.json())
        .then(data => console.log(data))
        },[])
    return(
        <canvas className="HeaderContainer">
            {/* <div className="HeaderDiv1">Div1</div>
            <div className="HeaderDiv2">Div2</div>
            <div className="HeaderDiv3">Div3</div> */}
            <p>Hi, I'm</p>
            <h1>My Name</h1>
        </canvas>
    )
}

export default Heading