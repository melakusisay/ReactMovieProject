import React, { useEffect, useState } from "react";
import axios from "axios";
//import "./App.css";

const api_key = "435c8880fa41fdbe5fba133c47f78d2b";
const BASE_URL = "https://api.themoviedb.org/3";
const getImage = (path) =>`https://image.tmdb.org/t/p/w300/${path}`;

function LatestMovies() {
  const [data, setData] = useState([]);

  const api = axios.create({ baseURL: BASE_URL });

  const getUpcoming = api.get("movie/upcoming", { params: { api_key } });
  
  useEffect(() => {
    getUpcoming.then((res) => {
      setData(res.data.results);
    });
  }, []);

  return (
    <div className="App">
        <h1>The latest movies</h1>
      <header className="App-header">
        <div className="grid">
          {data.map((movie) => (
            <div className="image-container">
              <img src={getImage(movie.poster_path)} />
              <p>{movie.original_title}</p>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default LatestMovies;