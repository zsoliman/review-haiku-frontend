import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
    return (
        <ul className="movieList">
            {
                movies.map((movie) => {
                    return (
                        <MovieCard
                            key={movie.id}
                            movie={movie}
                        />
                    )
                })
            }
        </ul>
    )
}

export default MovieList;