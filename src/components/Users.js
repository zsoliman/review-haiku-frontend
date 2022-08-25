import { useState, useEffect } from "react";
import Navbar from "./Navbar";

const Users = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {

        const getUsers = async () => {
            let req = await fetch('http://localhost:3100/users')
            let res = await req.json()
            console.log(res)
            setUsers(res)
        }
        getUsers()
    }, [])

    return (
        <div>
            <Navbar />
            <h1>List of Users</h1>
            <div>
                {users.map((user) => {
                    return (user.user_name)
                })}
            </div>

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