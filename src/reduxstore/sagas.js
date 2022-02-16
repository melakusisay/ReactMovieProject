import {all , takeEvery , put} from "redux-saga/effects"
import axios from "axios"

function *Moviedetailgenerator(action){
    try {
        var result  = yield axios({
            url :"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=cf2357c9fe7a5db4320834811ec7eab3" + action.payload,
            method:"get"
        })
        console.log("Result from movie details api" , result)
        yield put({
            type:"MOVIE_DETAILS_SUCCESS",
            payload:result.data.data
        })

    }
    catch {
        put({
            type:"MOVIE_DETAILS_ERROR",
        })
    }
    

    
    // Based on the outcome we will further dispatch it reducer
}


function *Moviedetailsaga(){
  yield  takeEvery('GET_MOVIE_DETAILS', Moviedetailgenerator)
}

export default function *RootSaga(){
    yield all([Moviedetailsaga()])
}

// any action for angular was getting handled byMathew 