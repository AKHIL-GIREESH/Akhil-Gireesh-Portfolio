console.log("Hello")

fetch("https://ef37-103-165-20-19.ngrok.io/api/auth",{
             
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