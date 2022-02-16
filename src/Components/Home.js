import Movielist from "./Movielist";
import Carousel from "./Carousel";
import React from "react"

export var DiscountContext =  React.createContext()

function Home(){
    return <div>
        <Carousel />
        <DiscountContext.Provider value="10">
        <Movielist />
        </DiscountContext.Provider>
    </div>
}

export default Home