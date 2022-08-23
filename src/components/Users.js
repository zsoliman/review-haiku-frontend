import Navbar from "./Navbar";

const Users = () => {
    return (
        <div>
            <Navbar />
            <h1>List of Users</h1>
            <h4>user</h4>
            <h4>user</h4>
            <h4>user</h4>
            <h4>user</h4>
            <h4>user</h4>
            <h4>user</h4>
            <button>create a new user</button>
            <form>
                <input type='text' placeholder="User Name" />
                <input type='text' placeholder="Bio" />
            </form>
        </div>
    )
}

export default Users;

// create new user form will add to the users table