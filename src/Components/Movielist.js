import { Component } from "react"
import Movie from "./Movie"
import axios from "axios"
import { connect } from "react-redux"


class Movielist extends Component {
    constructor(){
        super()
    this.state = {
            cakes:[]
        }
    }
    componentDidMount()
      {

        this.props.dispatch({
            type:"GET_MOVIES"
        })
     
    }
    render() {
        return (
            <div className="row">
              {this.props.cakes.map((each,index)=>{
                  return <Movie  key={index} data={each} />
              })}
            </div>

        )
    }
}

export default connect(function(state,props){
    return {
        cakes :state["cakes"] || []
    }
})( Movielist )