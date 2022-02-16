import {useLocation} from "react-router"
import Movielist from './Movielist';
function Search(){
    var location = useLocation()
    console.log("...................." , location.search)
    return <div>
        <h1>Search Page</h1>
         <Movielist/>
    </div>
}

export default Search