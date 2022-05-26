import { useEffect, useRef, useState } from "react";
import { TextField, Button } from '@mui/material';

export const Form = ({ onSubmit }) => {
  const [value, setValue] = useState("");
  const inputRef = useRef();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e?.preventDefault && e.preventDefault();

    setValue("");
    onSubmit(value);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <TextField type="text" ref={inputRef} value={value} onChange={handleChange} />
      <Button sx={{height:55}} variant="contained" type = 'submit'>Отправить</Button>
    </form>
  );
};