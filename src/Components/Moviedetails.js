import {useParams, useNavigate} from "react-router"
import { useEffect } from "react"
import axios from "axios"
import { connect } from "react-redux"
    
function Moviedetails(props){
    var params =  useParams()
    var navigate =  useNavigate()
    console.log(",,, props" , params)
    var cake =  props.cake

    useEffect(()=>{
       props.dispatch({
        type:"GET_MOVIE_DETAILS",
        payload:params.cakeid
       })
    } ,[])

    function addToCart(){
      if(localStorage.token){

      
       axios({
         method:"post",
         url:"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=cf2357c9fe7a5db4320834811ec7eab3",
         //const{id, title, vote_average, poster_path,original_title, overview}=movie
         img:'https://image.tmdb.org/t/p/w500 + poster_path',
         data:{

          id:cake.id,
          title:cake.title,
          original_language:cake.original_language,
          vote_average:cake.vote_average,
          poster_path:cake.poster_path,
          popularity:cake.popularity,
          original_title:cake.original_title,
          release_date:cake.release_date,
          overview:cake.overview,
          vote_average:cake.vote_average
         },
         headers:{
           authtoken:localStorage.token
           }
       }).then((response)=>{
         console.log("response form asdd cake to cart api" , response.data)
         if(response.data.data){
           navigate("/cart")
         }
       }, (error)=>{
         console.log("error from add cake to cart api" , error)
       })
      }
      else{
        navigate("/login")
      }
    }
    return (<div className="container mt-4">
      <h1>The movies list</h1>
    <h1>{cake && cake.title}</h1>
    {cake && <section className="cake-details mb-5 pt-4 pb-4">
    <div className="col-md-12 row">
      <div className="col-md-4 mb-4 mb-md-0">
        <div className="mdb-lightbox">
          <div className="row product-gallery mx-1">
            <div className="col-12 mb-0">
              <div className="view overlay rounded z-depth-1 main-img">
                <a href={cake.poster_path} data-size="710x823">
                  <img src={cake.poster_path} alt={cake.title} className="img-fluid z-depth-1" style={{width:"100%"}}/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <h5>{cake.title}</h5>
        <p className="mb-2 text-muted text-uppercase small">{cake.overview} reviews</p>
        <ul className="rating">
          {/* {Array(ratings).fill(0).map((value, index) => <li key={index}><i className="fas fa-star fa-sm text-primary"></i></li>)} */}
          {/* {ratings < cake.ratings && <li key={ratings + 1}><i className="fas fa-star-half-alt fa-sm text-primary"></i></li>} */}
          {/* {Array(Math.floor(5 - cake.ratings)).fill(0).map((value, index) => <li key={ratings + index}><i className="far fa-star fa-sm text-primary"></i></li>)} */}
        </ul>
        <p><span className="mr-1"><strong> {cake.original_title}</strong></span></p>
        <p className="pt-1">{cake.description}</p>
        <div className="table-responsive">
          <table className="table table-sm table-borderless mb-0">
            <tbody>
              <tr>
                <th className="pl-0 w-25" scope="row"><strong>popularity</strong></th>
                <td>{cake.popularity}</td>
              </tr>
              <tr>
                <th className="pl-0 w-25" scope="row"><strong>original_language</strong></th>
                <td>{cake.original_language && cake.original_language.join()}</td>
              </tr>
              <tr>
                <th className="pl-0 w-25" scope="row"><strong>release_date</strong></th>
                <td>{cake.release_date}</td>
              </tr>
              <tr>
                <th className="pl-0 w-25" scope="row"><strong>Voter vote_average</strong></th>
                <td>{cake.vote_average} </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />
        {/* <button type="button" className="btn btn-primary btn-md mr-1 mb-2">Buy now</button> */}
        {!props.isLoading && <button onClick={addToCart}   type="button" className="btn btn-light btn-md mr-1 mb-2"><i
            className="fas fa-shopping-cart pr-2"></i>Add to cart</button>}
        {props.isLoading && <button type="button" className="btn btn-light btn-md mr-1 mb-2" disabled><i
            className="fas fa-shopping-cart pr-2"></i> Please wait... Adding to cart</button>}
      </div>
      <div className="col-md-5">
         
        <img style={{ height:"16em" , width:"30em"}} src="/details.png" />
    </div>
    </div>
   
  
  </section>}
  </div>)
}

export default connect((state,props)=>{
     return {
    cake : state["cakedetails"] || {}
}
})(Moviedetails)

