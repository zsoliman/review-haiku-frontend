import Navbar from "./Navbar";

const Movies = () => {



    return (
        <div>
            <Navbar />
            <h1>I'm a movie</h1>
            <form>
                <button>Search</button>
                <input placeholder="Search a movie..."></input>

            </form>

        </div>
    )
}

export default Movies;