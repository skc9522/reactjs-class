import React, { useState, useEffect } from 'react'
const url = 'https://api.github.com/users'

const CodeFetchApi = () => {
    const [users, setUser] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url)
                const users = await response.json()
                setUser(users)
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchData()
    }, [])


    return (
        <div>
            <h3> These are github users</h3>
            <ul>
                {
                    users.map((user) => {
                        return (
                            <li>
                                <img src={user.avatar_url} alt='avatar' />
                                <h3>{user.login}</h3>
                            </li>
                        )
                    })
                }
            </ul>
            <button></button>
        </div>
    )
}

export default CodeFetchApi
