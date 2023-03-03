import React, { useEffect, useState } from 'react'
const url = 'https://api.github.com/users'


// get the api of all the dog breeds and assign to a variable
// create a useState to store the dog breeds (response)
// useEffect and fetch the api
// map the response in the return

const TestUseEffect = () => {

    const [dogs, setDogs] = useState([])

    useEffect(() => {

        async function fetchBreeds() {
            try {
                const response = await fetch(url)
                const resData = await response.json()
                setDogs(resData)
            }
            catch (err) {
                console.log(err)
            }
        }

        // const fetchBreeds = async () => {
        //     try {
        //         const response = await fetch(url)
        //         const resData = await response.json()
        //         setDogs(resData)
        //     }
        //     catch (err) {
        //         console.log(err)
        //     }
        // }
        fetchBreeds()
    }, [])





    return (
        <div>
            <ul>
                {
                    dogs.map((dog) => {
                        return (
                            <li>
                                <img src={dog.avatar_url} alt='image' />
                                <p>{dog.login}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default TestUseEffect
