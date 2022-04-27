import './massage.css';
import React from "react";

export const Button = ({title, onButtonClick})=> {
return <button onClick = {()=> onButtonClick('Доброго вам времени суток')} className="btn-main">{title}</button>
}