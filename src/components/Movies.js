import Navbar from "./Navbar";

const Movies = () => {



    return (
        <div>
            <Navbar />
            <h1>Find Haiku Reviews by Movie Title:</h1>
            <form>
                <button>Search</button>
                <input placeholder="Search a movie..." />

            </form>

        </div>
    )
}

export default Movies;

// Make the search bar function
//   - Fetch request on our API to see which movies have reviews
//   - If a movie has no review, click 'add review'
//   - 'add review' should do a separate fetch request to the actual Movie API to add it to our API and allow for a new review to be made