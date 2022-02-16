import React, { useEffect, useState } from "react";
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.min.css';
import './mycss.css';
//import "./App.css";


const api_key = "435c8880fa41fdbe5fba133c47f78d2b";
const BASE_URL = "https://api.themoviedb.org/3";
const getImage = (path) =>`https://image.tmdb.org/t/p/w300/${path}`;

function PoplarMovies() {
  const [data, setData] = useState([]);

  const api = axios.create({ baseURL: BASE_URL });

  const getUpcoming = api.get("movie/popular", { params: { api_key } });
  useEffect(() => {
    getUpcoming.then((res) => {
      setData(res.data.results);
    });
  }, []);

  return (
    <div className="container">
        <h1>Recomended movies</h1>
      <header className="App-header">
        <div>
          {data.map((movie) => (
            <div className='image'>
              <img src={getImage(movie.poster_path)} />
              <p>{movie.original_title}</p>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default PoplarMovies;