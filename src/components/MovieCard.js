const MovieCard = ({ movie }) => {

    const baseImageUrl = "https://image.tmdb.org/t/p/w500";

    console.log(movie)
    return (
        <div className="movieCard">
            <img alt={movie?.title} src={`${baseImageUrl}${movie.poster_path}`} />
            <h1>{movie?.title}</h1>
        </div>
    )
}

export default MovieCard;