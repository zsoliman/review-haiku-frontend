const MovieCard = ({ key, movie }) => {

    const baseImageUrl = "https://image.tmdb.org/t/p/w500";

    return (
        <div className="movieCard">
            <img alt={movie.title} src={`${baseImageUrl}${movie.poster_path}`} />
        </div>
    )
}

export default MovieCard;