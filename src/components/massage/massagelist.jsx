import React from "react";
import {Form} from "./form"
import { Persons } from "../../tools/persons";

export const Massagelist = () =>{
    const [massageBlog, setMassageBlog] = React.useState([])
    const addMassage = (newMassage) => { 
        setMassageBlog((prevMassageList)=>[...prevMassageList, newMassage])
    }
    const handleSubmit = (massage) =>{
        const newMassage = {massage, author:Persons.Human}
        addMassage(newMassage)
    }

    React.useEffect(()=>{
        let timeout;
        if (massageBlog[massageBlog.length-1]?.author === Persons.Human){
            timeout = setTimeout(() =>{
            addMassage({massage: `I'm Bot`, author:Persons.Bot})
            }, 1000)}
            return () => {
                clearTimeout(timeout)
            }
            }, [massageBlog])

    return(
        <div>
            <Form onSubmit = {handleSubmit} />
            {massageBlog.map(({massage, author})=>
            <div className= {author === Persons.Human ? 'msg-human' : 'msg-bot'}>
                {author}:{massage}
            </div>
            )}
        </div>
    )
}