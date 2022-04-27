
import './App.css';
import { Fragment } from 'react';
import {Button} from './components/massage/massage'
 


function App() {
    let greet = 'H-A-L-L-O'
    const handleBtn = (text) =>{
    alert(`${text}`)
    }
    
      return (
        <Fragment>
          <Button onButtonClick = {handleBtn} title={greet}/>
        </Fragment>
      ); 
}

export default App;