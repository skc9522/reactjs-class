const fetchData = async () => {
    try {
        const response = await fetch(url)
        const users = await response.json
        setUser(users)
    }

    catch (err) {
        console.log(err)
    }
}