function MelakuReducer(state={
    isuserloggedin:localStorage.token?true:false
}, action){
    switch(action.type){
        case "LOGIN_SUCCESS" :{
            state = {...state}
            state["isuserloggedin"] =  true
            return state
        }

        case "MOVIE_DETAILS_SUCCESS" :{
            state = {...state}
            state["Moviedetails"] = action.payload
            return state
        }
        case "MOVIE_DETAILS_ERROR" :{
            state = {...state}
            state["error"] = "Internal Server Error"
            return state
        }

        case "STORE_MOVIEs" :{
            state = {...state}
            state["cakes"] = action.payload
            return state
        }

        case "STORE_MOVIES_ERROR" :{
            state = {...state}
            state["error"] = "Internal Server Error"
            return state
        }
        default : return state
    }
}

export default MelakuReducer