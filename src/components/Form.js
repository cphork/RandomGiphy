import React from 'react'
import { useState } from 'react'


const Form = (props) => {

    const [formData, setFormData] = useState({


    })



    const handleSubmit = (event) => {
        event.preventDefault()
        props.giphysearch(formData)
    }

    return (

        <div>
            <h1 className='header'>Random Giphy</h1>
            <button className='rando-btn' onClick={handleSubmit}>
                Randomize
        </button>

        </div>
    )
}





export default Form