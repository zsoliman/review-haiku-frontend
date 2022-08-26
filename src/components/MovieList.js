import MovieCard from "./MovieCard";

const MovieList = ({ movies, setRefresh }) => {
    return (
        <ul className="movieList">
            {
                movies.map((movie) => {
                    return (
                        <MovieCard
                            key={movie.id}
                            movie={movie}
                            setRefresh={setRefresh}
                        />
                    )
                })
            }
        </ul>
    )
}

export default MovieList;