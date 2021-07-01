import React from 'react'
import {useState} from 'react'


const Form = (props) => {

    const[formData, setFormData]=useState ({
            

    })

    

    const handleSubmit = (event) => {
        event.preventDefault()
        props.giphysearch(formData)
    }

    return(

    <div>
        <h1>Giphy</h1>
        <button onClick={handleSubmit}>
       Random
        </button>
        
    </div>
    )
}





export default Form