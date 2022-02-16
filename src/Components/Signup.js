import React from "react"
import axios from "axios"

function Signup (props){
    var user={}
    function getEmail(e){
            user.email =  e.target.value
    }
    function getName(e){
        user.name =  e.target.value
    }
    function getPassword(e){
        user.password =  e.target.value
    }

    function signup(){
        console.log("User details " , user)
        // json i need for siging up is {"name","email","password"}
        axios({
            url:"https:/apifromashu.herokuapp.com/api/register",
            method:"post",
            data:user
        }).then((response)=>{
            console.log("response from api of signup is" , response.data)
        } , (error)=>{
            console.log("error from signup api" , error)
        })
    }
    return (
        <React.Fragment>
           <div style={{width:"50%", margin:"auto"}}>
                <h1>Signup Here</h1>
                <div className="form-group">
                    <label>Email</label>
                    <input onChange={getEmail} class="form-control"></input>
                </div>
                <div className="form-group">
                    <label>Name</label>
                    <input onChange={getName} class="form-control"></input>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input onChange={getPassword} type="password" class="form-control"></input>
                </div>
                <button onClick={signup} className="btn btn-primary">Signup</button>
            </div>
        </React.Fragment>
           

    )
}


export default Signup