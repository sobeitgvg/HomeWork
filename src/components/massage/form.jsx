import React from "react";
import './massage.css';

export const Form = ({onSubmit}) => {
    const [massage, setMassage] = React.useState('')
    const handleMassage = (e) => {
        setMassage (e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        setMassage ('')
        onSubmit(massage)
    }
    return(
        <div>
        <form onSubmit = {handleSubmit}>
            <input type = 'text' value = {massage} onChange = {handleMassage}/>
            <input type = 'submit' className='btn-sbt'/>
        </form>
        </div>
    )
}
