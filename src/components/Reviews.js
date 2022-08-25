import { useEffect } from "react";
import Navbar from "./Navbar";

const Reviews = () => {

    useEffect(() => {
        const getReviews = async () => {
            let req = await fetch('http://localhost:3100/reviews')
            let res = await req.json()
            console.log(res)
        }
        getReviews()

    }, [])

    return (
        <div>
            <Navbar />
            <h2>List of Reviews in chronological order</h2>

        </div>
    )
}

export default Reviews

// Show updated list of reviews most recent at the top
// each review will show its user, and you can click to go to that users page
// each movie reviewd will be clickable to go to that movies page to see all of its reviews
// A new review will include the user_name, which should connect to the user_id on the backend 