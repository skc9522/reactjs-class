import React, { useState, useEffect } from 'react'

const CodeExample = () => {

    const [value, setValue] = useState(0)
    const [secondValue, setSecondeValue] = useState(0)

    useEffect(() => {
        console.log('Hello im 1st useEffect')
    }, [value])

    useEffect(() => {
        console.log('Hello im 2nd useEffect')
    }, [secondValue])


    return (
        <div>
            <h1> TEST VALUE: {value}</h1>
            <button onClick={() => setValue(value + 1)}>Click Me</button>

            <h1> Value: {secondValue}</h1>
            <button onClick={() => setSecondeValue(secondValue + 1)}>Click Me</button>
        </div>
    )
}

export default CodeExample
