import { useState, useEffect } from "react";
import Navbar from "./Navbar";

const Reviews = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {

        const getReviews = async () => {
            let req = await fetch('http://localhost:3100/reviews')
            let res = await req.json()
            // console.log(res)
            setReviews(res)
        }
        getReviews()
    }, [])



    return (
        <div>
            <Navbar />
            <h2>List of Reviews</h2>

            <div>{reviews.map((review) => {
                console.log(review.line_1)
                return (review.line_1)
            })}</div>

        </div>
    )
}

export default Reviews

// Show updated list of reviews most recent at the top
// each review will show its user, and you can click to go to that users page
// each movie reviewd will be clickable to go to that movies page to see all of its reviews
// A new review will include the user_name, which should connect to the user_id on the backend 