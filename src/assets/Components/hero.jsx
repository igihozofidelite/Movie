
function Hero({ movies = [] }) {

  // Make sure we receive an array
  const movieList = Array.isArray(movies)
    ? movies
    : movies?.results || []

  const posters = movieList
    .filter((movie) => movie.poster_path)
    .slice(0, 5)

  const imageBase = "https://image.tmdb.org/t/p/w500"

  return (
    <section className="hero-section relative overflow-hidden grid grid-cols-2 items-center gap-8 px-[6%] py-16 min-h-[540px] max-[900px]:grid-cols-1">

      {/* Background effects */}
      <div className="hero-light light-one"></div>
      <div className="hero-light light-two"></div>

      {/* LEFT SIDE */}
      <div className="relative z-10">

        <p className="text-purple-300 font-bold tracking-[4px] text-sm mb-6">
          YOUR MOVIE DESTINATION
        </p>

        <h1 className="text-white text-5xl font-extrabold leading-tight max-[600px]:text-4xl">
          FIND MOVIES

          <span className="block animated-heading">
            TV SHOWS AND MORE
          </span>
        </h1>

        <p className="text-gray-200 text-sm leading-7 max-w-[440px] mt-6 mb-8">
          Discover the latest movies, explore amazing TV shows
          and find your next favorite story. Everything you love
          about entertainment in one place.
        </p>

        <a
          href="#movies"
          className="hero-explore inline-block px-8 py-3 rounded-full text-white font-bold"
        >
          Explore Movies →
        </a>

        <div className="flex gap-8 mt-10 text-gray-300 text-sm">

          <div>
            <h3 className="text-white text-xl font-bold">10K+</h3>
            Movies
          </div>

          <div>
            <h3 className="text-white text-xl font-bold">500+</h3>
            TV Shows
          </div>

          <div>
            <h3 className="text-white text-xl font-bold">24/7</h3>
            Entertainment
          </div>

        </div>

      </div>

      {/* RIGHT SIDE - TMDB MOVIES */}
      <div className="relative z-10 flex justify-center items-center min-h-[430px]">

        {posters.length > 0 ? (

          <div className="hero-poster-area">

            {posters.map((movie, index) => (

              <div
                key={movie.id}
                className={`hero-poster hero-poster-${index}`}
              >

                <img
                  src={`${imageBase}${movie.poster_path}`}
                  alt={movie.title || movie.name || "Movie poster"}
                  onError={(e) => {
                    e.currentTarget.style.display = "none"
                  }}
                />

                <div className="hero-poster-info">
                  <p>
                    {movie.title || movie.name}
                  </p>

                  <span>
                    ★ {movie.vote_average
                      ? movie.vote_average.toFixed(1)
                      : "New"}
                  </span>
                </div>

              </div>

            ))}

          </div>

        ) : (

          <div className="text-center text-white">
            <p className="text-xl font-bold">
              
            </p>

            <p className="text-gray-400 text-sm mt-2">
              
            </p>
          </div>

        )}

      </div>

    </section>
  )
}

export default Hero

