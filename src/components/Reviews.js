import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import Navbar from "./Navbar";

const Reviews = () => {

  const [movies, setMovies] = useState([])

 useEffect(()=> {
    const getMovies = async () => {
      let req = await fetch('http://localhost:3100/movies/reviews/all')
      let res = await req.json()
      setMovies(res)
    }
    getMovies()
 }, [])
 console.log(movies)
  return (
    <div>
      <Navbar />
      <h2>List of Reviews</h2>

      <div>
        {
          movies.map(movie => {
            return (
              <div key={movie.id} >
                <h3>{movie.title}</h3>
                <p>{movie.reviews.map(review => { return <div key={review.id} > <p>{review.line_1}</p> <p>{review.line_2}</p> <p>{review.line_3}</p> ... </div> })}</p>

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