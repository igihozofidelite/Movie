import React from 'react'
import Header from './assets/Components/header.jsx'
import Hero from './assets/Components/hero.jsx'
import MovieSection from './assets/Components/movie.jsx'

import { trending, mayLike } from './assets/Data/data.jsx'

function App() {
    const [movies,setMovies] = React.useState([])

    const apiTheMovie = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=39881197b0dbeb20603de7a94f2f6547"
    React.useEffect(() => {
    fetchMovies();
   },[])


    const fetchMovies = async () =>{
        await fetch(apiTheMovie, )
        .then(response => response.json())
        .then((data)=>{
            setMovies(data.results)
            console.log(data.results)
        }).catch((error)=>{
            console.error('Error fetching movies:', error)
        })
    }
  return (
    <>
      <Header />
      <Hero />

      <MovieSection
        heading="🔥 Trending"
        movies={movies.length > 0 ? movies : trending}
      />

      <MovieSection
        heading="YOU MAY LIKE THIS"
        movies={movies.length > 0 ? movies : mayLike}
      />
    </>
  )
}

export default App