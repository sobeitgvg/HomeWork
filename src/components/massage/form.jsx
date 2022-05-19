import React from "react";
import './massage.css';
import { TextField, Button } from '@mui/material';


export const Form = ({onSubmit}) => {

    const inputRef = React.useRef(null);
    const [massage, setMassage] = React.useState('')
    const handleMassage = (e) => {
        setMassage (e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        setMassage ('')
        onSubmit(massage)
        
    }
    React.useEffect(()=>{
        inputRef.current.focus();
    }, []);

    return(
        <div>
        <form  onSubmit = {handleSubmit}>
            <TextField ref={inputRef} label = 'Сообщение' variant="outlined" type = 'text' value = {massage} onChange = {handleMassage} autoFocus = 'true'/>
            <Button sx={{height:55}} variant="contained" type = 'submit'>Отправить</Button>
        </form>
        </div>
    )
}
