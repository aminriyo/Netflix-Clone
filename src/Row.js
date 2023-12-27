import React, { useEffect, useState } from 'react'
import "./Row.css"
import axios from './axios.js'
import Youtube from "react-youtube"
import movieTrailer from "movie-trailer"
const base_url="https://image.tmdb.org/t/p/original/"
function Row({ title, fetchUrl,islargerRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');
  useEffect(() => {
   async function fetchData() {
     const request = await axios.get(fetchUrl)
     console.log(request.data.results)
     setMovies(request.data.results)
     return request
    }
    fetchData()
  }, [fetchUrl]);
  console.log(movies)

  const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        autoplay: 1,
      },
    };

  const handleClick = (movie) => {
if (trailerUrl) {
  setTrailerUrl('')
} else {
  movieTrailer(movie?.title || movie?.name || movie.original_name)
        .then((url)=> {
    const urlParams = new URLSearchParams(new URL(url).search)
    setTrailerUrl(urlParams.get('v'))
        })
    .catch((error) => {
    console.log(error)
  })
}
  
}

  return (
    <div className='row'>

      <h1 className="title">{title}</h1>

      <div className="row-posters">
        {
          movies.map((movie) => {
            return (
              <img onClick={()=>handleClick(movie)} className={`row_poster ${islargerRow && 'row_large'} `} src={`${base_url}${islargerRow ? movie.poster_path : movie.backdrop_path}`} alt="movie.name" />

            )
          })


        }
      </div>

      <div className="row_youtube">
        {trailerUrl && <Youtube videoId={trailerUrl} opts={ opts}
        />}
      </div>
  
     
    </div>
  )
}

export default Row
