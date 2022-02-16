import { Component } from "react";
import axios from "axios";
import {toast} from "react-toastify"
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

// for react router 6 programatical navigate can only be doen using useNavigatehook



class Login extends Component {
    user = {}
    constructor() {
        super()
        this.state = {
            errorMessage: null
        }
    }
    getEmail = (event) => {
        this.user.email = event.target.value
    }

    getPassword = (event) => {
        this.user.password = event.target.value

    }

    login = () => {
        console.log("User details are", this.user)
        axios({
            url: "https:/apifromashu.herokuapp.com/api/login",
            method: "post",
            data: this.user
        }).then((response) => {
            console.log("response from api of login is", response.data)
            if (response.data.token) {
                localStorage.token=response.data.token
               this.props.dispatch({
                   type:"LOGIN_SUCCESS"
               })
               this.props.navigate("/")
            }
            else{
                toast.error("Invalid Credentials")
                this.setState({
                    errorMessage: "Invalid Credentials"
                })
            }
        }, (error) => {
            console.log("error from login api", error)
        })
    }
    render() {
        return (
            <div style={{ width: "50%", margin: "auto" }}>
                <h1>Login Here</h1>
                <div className="form-group">
                    <label>Email</label>
                    <input onChange={this.getEmail} class="form-control"></input>
                </div>
                
                <div className="form-group">
                    <label>Password</label>
                    <input onChange={this.getPassword} type="password" class="form-control"></input>
                </div>
                {this.state.errorMessage && <div style={{color:"red"}}>
                    {this.state.errorMessage}
                </div>}
                <div>
                    <Link to="/signup">New User ? Signup Here</Link>
                </div>
                <button onClick={this.login} className="btn btn-primary">Login</button>
            </div>
        )
    }
}

function MyLogin(props){
    var navigate = useNavigate()
    return <Login navigate={navigate} {...props} />
}

export default connect()(MyLogin)

