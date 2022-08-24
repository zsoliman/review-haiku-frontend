import Navbar from "./Navbar";
import MovieCard from './MovieCard'
import { useEffect, useState } from "react";


const baseUrl = 'https://api.themoviedb.org/3/'
const API_KEY = 'efa6aa6cb7278762054859c476be335b'


const Movies = () => {
    const [searchTerm, setSearchTerm] = useState('')

    // const displaySearchMovies = movies.filter((movie) => {
    //     return movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    // })

    const getLocalMovies = async () => {
        let req = await fetch(`http://localhost:3100/${'example.com'/*movie - title - will - go - here*/}`)
        let res = req.json()
        return res
    }

    const getMovie = async (query, pageNum = 1) => {
        console.log(searchTerm)
        let req = await fetch(`${baseUrl}search/movie?api_key=${API_KEY}&page=${pageNum}&query=${encodeURI(query)}`);
        let res = await req.json();
        console.log(res)
        return res
    }

    const handleChange = (e) => {
        setSearchTerm(() => {
            const query = e.target.value
            getMovie(query)
            return query
        })
    }

    return (
        <div>
            <Navbar />
            <h1>Find Haiku Reviews by Movie Title:</h1>
            <form>
                <button>Search</button>
                <input onChange={handleChange} placeholder="Search a movie..." />

            </form>

        </div>
    )
}

export default Movies;

// Make the search bar function
//   - Fetch request on our API to see which movies have reviews
//   - If a movie has no review, click 'add review'
//   - 'add review' should do a separate fetch request to the actual Movie API to add it to our API and allow for a new review to be made