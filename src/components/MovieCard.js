const MovieCard = ({ movie, setRefresh }) => {

    const baseImageUrl = "https://image.tmdb.org/t/p/w500";

    const handleDeleteClick = async () => {
        let req = await fetch(`http://localhost:3100/deletemovie/${movie.id}`, {
            method: "DELETE",
        })
        setRefresh(prev => !prev)
    }

    console.log(movie)
    return (
        <div>
            {/* <img alt={movie?.title} src={`${baseImageUrl}${movie.poster_path}`} /> */}
            <h2>{movie?.title}</h2>
            <p>{movie?.director} </p>
            <p>{movie?.genre}</p>
            <p>{movie?.year}</p>

            <button className="deleteButton" onClick={handleDeleteClick} >X</button>
        </div>
    )
}

export default MovieCard;