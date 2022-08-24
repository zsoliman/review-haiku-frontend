import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <NavLink to={'/'}>
                <h1 className="App-header" id="Home">Haiku Review</h1>
            </NavLink>
            <NavLink to={'/movies'}>
                <button>Movies</button>
            </NavLink>

            <NavLink to={'/reviews'}>
                <button>Reviews</button>
            </NavLink>

            <NavLink to={'/users'}>
                <button>Users</button>
            </NavLink>
        </div>
    )
}

export default Navbar;


