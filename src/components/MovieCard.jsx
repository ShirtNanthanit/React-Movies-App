const MovieCard = ({ movie }) => {
  if (!movie) return;

  return (
    <a
      href={`https://www.themoviedb.org/movie/${movie.id}`}
      className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:scale-105 hover:brightness-110 hover:shadow-2xl transition-all duration-300 cursor-pointer"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={movie.original_title}
        className="w-full h-60 object-cover"
      />

      <div className="p-4 flex flex-col gap-2">
        <p className="text-lg font-semibold text-white">
          {movie.original_title}
        </p>
        <p className="text-yellow-400 text-sm">⭐ {movie.vote_average}</p>
        <p className="text-gray-200 text-sm"> {movie.release_date}</p>

        <p className="text-sm text-gray-300 line-clamp-2">{movie.overview}</p>
      </div>
    </a>
  );
};

export default MovieCard;
