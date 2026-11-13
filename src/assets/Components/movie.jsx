
import MovieCard from './moviecard'

function MovieSection({ heading, movies }) {
  console.log("Movies received:", movies)

  return (
    <section className="mx-auto p-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">

      {movies?.map((item, index) => {

        console.log("Movie poster:", item.poster_path)

        return (
          <MovieCard
            key={item.id || index}
            imageUrl={
              item.poster_path
                ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                : null
            }
            description={
              item.overview
                ? item.overview.substring(0, 50) + '...'
                : 'No description available'
            }
            releaseYear={
              item.release_date
                ? item.release_date.substring(0, 4)
                : 'Unknown year'
            }
          />
        )
      })}

    </section>
  )
}

export default MovieSection
