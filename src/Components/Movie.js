import { Link } from "react-router-dom"
import { useContext } from "react"
import { DiscountContext } from "./Home"

function Movie(props) {
    // props is an object
    var discount =  useContext(DiscountContext)
    return (
        <div class="card col-md-3" style={{ width: "18rem" }}>
            <Link to={`/cake/${props.data.id}`}><img style={{ height: "13rem" }} src={props.data.poster_path} class="card-img-top" alt="..." /></Link>
            <div class="card-body">
                <h5 class="card-title">{props.data.title}</h5>
    {/* <p class="card-text">{discount}</p> */}
            </div>
        </div>
    )
}

export default Movie

//cakeid, image(IMG_URL)