import { useState, useEffect } from "react";
import Navbar from "./Navbar";

const Reviews = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        const getMovies = async () => {
            let req = await fetch('http://localhost:3100/movies/reviews/all')
            let res = await req.json()
            setMovies(res)
        }
        getMovies()
    }, [])
    console.log(movies)


    const [movieName, setMovieName] = useState('')
    const [lineOne, setLineOne] = useState('')
    const [lineTwo, setLineTwo] = useState('')
    const [lineThree, setLineThree] = useState('')
    const [userName, setUserName] = useState('')
    const [stars, setStars] = useState('')
    const handleSubmit = async () => {
        let req = await fetch('http://localhost:3100/post', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                movie_name: movieName,
                line_1: lineOne,
                line_2: lineTwo,
                line_3: lineThree,
                user_name: userName,
                star_num: stars
            })

        })
        let res = await req.json()
        console.log(res)
    }

    return (
        <div>
            <Navbar />
            <br /><br />

            <form onSubmit={handleSubmit}>
                <p>Submit Your Own Haiku Review</p>
                <input onChange={(e) => { setMovieName(e.target.value) }} name="movieName" type='text' placeholder='Movie Name...' /><br />
                <input onChange={(e) => { setLineOne(e.target.value) }} name="line_one" type='text' placeholder='five syllables...' /><br />
                <input onChange={(e) => { setLineTwo(e.target.value) }} name="line_two" type='text' placeholder='seven syllables...' /><br />
                <input onChange={(e) => { setLineThree(e.target.value) }} name="line_three" type='text' placeholder='five syllables...' /><br />
                <input onChange={(e) => { setUserName(e.target.value) }} name="userName" type='text' placeholder='UserName...' /><br />
                <input onChange={(e) => { setStars(e.target.value) }} name="stars" type='number' min='0' max='10' placeholder="stars..." /><br />
                <input type='submit' />
            </form>
            <h2>List of Reviews</h2>

            <div>
                {
                    movies.map(movie => {
                        return (
                            <div key={movie.id} >
                                <h3>{movie.title}</h3>
                                <p>{movie.reviews.map(review => { return <div key={review.id} > <p>{review.line_1}</p> <p>{review.line_2}</p> <p>{review.line_3}</p> <p>{review.star_num}/10 stars</p>... </div> })}</p>

                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Reviews

// Show updated list of reviews most recent at the top
// each review will show its user, and you can click to go to that users page
// each movie reviewd will be clickable to go to that movies page to see all of its reviews
// A new review will include the user_name, which should connect to the user_id on the backend 