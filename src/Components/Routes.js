import {Routes, Route, BrowserRouter} from "react-router-dom"

import Carousel from "./Carousel";
import Login from "./Login"
import Signup from "./Signup"
import Navbar from "./Navbar"
import Pagenotfound from "./Pagenotfound"
import {ToastContainer} from 'react-toastify'
import Moviedetails from "./Moviedetails"
import Search from "./Search"
import 'bootstrap/dist/css/bootstrap.min.css';
import NearByEvent from "./NearByEvent"
import UpcomingMovis from "./UpcomingMovis"
import PoplarMovies from "./PoplarMovies"
import Cart from "./Cart"


import 'bootstrap/dist/css/bootstrap.min.css';
import './mycss.css';

function MyRoutes(){
    return (
        <div>
            <ToastContainer />
            <BrowserRouter>
            <Navbar />
            <Carousel />
            <Routes>
                    
                    <Route path="/UpcomingMovis" element={<UpcomingMovis />} />  
                    <Route path="/PoplarMovies" element={<PoplarMovies/>} /> 
                    <Route path="/NearByEvent" element={<NearByEvent/>} /> 
                    <Route path="/" element={<PoplarMovies/>} />  
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup x="10" />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/Movie/:id" element={<Moviedetails />} />
                    <Route path="/search" element={<Search />} />  
                    <Route path="/*" element={<Pagenotfound />} />
            </Routes>  
             
            <div className='container'>
			<div className='row'>
				<PoplarMovies  />
			</div>
		    </div>

            </BrowserRouter>
                
        </div>
    )
}

export default MyRoutes