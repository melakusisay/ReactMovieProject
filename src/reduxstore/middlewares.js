
import axios from "axios"
// Custom Middleware or User Defined Middleware
function Watson(store){
    return function (next){
        return function (action){
            console.log("actions will be executed here first and then passed to reducer ")
            if(action.type=="GET_CAKES"){
                // make an api call and call next function based on response
                axios({
                    url:'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=cf2357c9fe7a5db4320834811ec7eab3',
                    method:"get"
                }).then((response)=>{
                    console.log("response from all cakes api")
                    console.log(response.data)
                    if(response.data.data){
                        next({
                            type:"STORE_CAKES",
                            payload:response.data.data
                        })
                    }
                } , (error)=>{
                    next({
                        type:"STORE_CAKES_ERROR"
                    })
                })
            }
            else{
                next(action)
            }
        }
    }
}

export default Watson