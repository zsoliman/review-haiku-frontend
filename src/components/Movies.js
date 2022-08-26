import Navbar from "./Navbar";
import MovieList from "./MovieList";
import { useEffect, useState } from "react";
import { set } from "date-fns";


const baseUrl = 'https://api.themoviedb.org/3/'
const API_KEY = 'efa6aa6cb7278762054859c476be335b'


const Movies = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [movies, setMovies] = useState([])
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        const getInitialMovies = async () => {
            const req = await fetch('http://localhost:3100/movies')
            const res = await req.json()
            console.log('res', res)
            setMovies(res)
        }
        if (searchTerm === "") {
            getInitialMovies()
        }
    }, [searchTerm, refresh])

    const getLocalMovies = async (query) => {
        let req = await fetch(`http://localhost:3100/movies/title/${encodeURI(query)}`)
        let res = await req.json()
        console.log(res)
        // if (res.results) {
        //   setMovies(res.results)
        // } else {
        //   setMovies([])
        // }
        setMovies(res)
        console.log(res[0])
        return res
    }
    //     getLocalMovies()
    // }, [])



    const getMovie = async (query, pageNum = 1) => {
        console.log(searchTerm)
        let req = await fetch(`${baseUrl}search/movie?api_key=${API_KEY}&page=${pageNum}&query=${encodeURI(query)}`);
        let res = await req.json();
        console.log(res)
        if (res.results) {
            setMovies(res.results)
        } else {
            setMovies([])
        }
    }

    const handleChange = (e) => {
        setSearchTerm(() => {
            const query = e.target.value
            let arr = getLocalMovies(query)
            //     if (arr == null) {
            //     getMovie(query)
            //   } else {
            //   }

            return query
        })
    }


    const displaySearchMovies = movies.filter((movie) => {
        return movie?.title?.toLowerCase().includes(searchTerm.toLowerCase())
    })


    const [title, setTitle] = useState('')
    const [director, setDirector] = useState('')
    const [genre, setGenre] = useState('')
    const [year, setYear] = useState('')
    const handleMovieSubmit = async () => {
        // e.preventDefault()
        let req = await fetch('http://localhost:3100/postmovie', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                title: title,
                director: director,
                genre: genre,
                year: year

            })

        })
        let res = await req.json()
        console.log(res)
        // setRefresh(prev => !prev)
    }

    return (
        <div >
            <Navbar />
            <h1>Find Haiku Reviews by Movie Title:</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <button>Search</button>
                <input onChange={handleChange} placeholder="Search a movie..." />

            </form>
            <MovieList movies={displaySearchMovies} setRefresh={setRefresh} />

            <form onSubmit={handleMovieSubmit}>
                <label>Can't Find Your Fav Movie? Add it here:</label><br />
                <input onChange={(e) => { setTitle(e.target.value) }} placeholder="Add Title Here..." />
                <input onChange={(e) => { setDirector(e.target.value) }} placeholder="Add Director Here..." />
                <input onChange={(e) => { setGenre(e.target.value) }} placeholder="Add Genre Here..." />
                <input onChange={(e) => { setYear(e.target.value) }} placeholder="Add Year Here..." />

                <input type="submit" />
            </form>
        </div>
    )
}

export default Movies;

// Make the search bar function
//   - Fetch request on our API to see which movies have reviews
//   - If a movie has no review, click 'add review'
//   - 'add review' should do a separate fetch request to the actual Movie API to add it to our API and allow for a new review to be made