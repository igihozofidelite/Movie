
function MovieCard({ imageUrl, description, releaseYear }) {
  return (
    <div className="bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg">

      <img
        src={imageUrl || '/placeholder.png'}
        alt="Movie poster"
        className="w-full h-72 object-cover"
        onError={(e) => {
          e.currentTarget.src = '/placeholder.png'
        }}
      />

      <div className="p-3">
        <p className="text-sm">{releaseYear}</p>

        <p className="black text-sm mt-2">
          {description}
        </p>
      </div>

    </div>
  )
}

export default MovieCard
