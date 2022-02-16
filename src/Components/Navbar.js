import { Link } from "react-router-dom"
import { Component } from "react"
import { connect } from "react-redux"


class Navbar extends Component {

    constructor() {
        super()
        this.state = {
            searchtext: ""
        }
    }

    getSearchText = (e) => {
        console.log("......", e.target.value)
        this.setState({
            searchtext: e.target.value
        })
    }

    signout() {
        localStorage.clear()
        window.location.href = "/"
    }
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid" style= {{backgroundColor:"darkgray"}}  >
                            <div style={{border: '1px solid rgba(0, 0, 0, 0.7)'}} ><Link class="navbar-brand" to="/PoplarMovies">Latest Movies</Link></div>    
                            <div style={{border: '1px solid rgba(0, 0, 0, 0.7)'}}><Link class="navbar-brand" to="/UpcomingMovis">Upcoming Movies</Link></div>
                            <div style={{border: '1px solid rgba(0, 0, 0, 0.7)'}}><Link class="navbar-brand" to="/NearByEvent">Near by Event</Link></div>
                                                                 
                     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                            <form class="d-flex">
                                <input onChange={this.getSearchText} class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <Link to={`/search?q=${this.state.searchtext}`}> <button class="btn btn-outline-success" type="button">Search</button></Link>
                            </form>


                        </ul>
                        
                        <form class="d-flex">
                            {!this.props.isloggedin && <Link to="/login"><button class="btn btn-primary" type="button">SignIn</button> </Link>}
                            {this.props.isloggedin && <Link to="/cart"><button class="btn btn-warning" type="button">Cart</button></Link>}

                            {this.props.isloggedin && <button onClick={this.signout} class="btn btn-danger" type="button">SignOut</button>}

                        </form>
                       
                    </div>
                    
                </div>
            
            </nav>
        )
    }
}

export default connect(function (state, props) {
    return {
        isloggedin: state["isuserloggedin"]
    }
})(Navbar) 