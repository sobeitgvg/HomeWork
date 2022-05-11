
import './App.css';
import {Fragment } from 'react';
import {Button} from './components/massage/massage'
import {Massagelist} from './components/massage/massagelist'



function App() {
    let greet = 'H-A-L-L-O'
    const handleBtn = (text) =>{
    alert(`${text}`)
    }
    
      return (
        <Fragment>
          <Button onButtonClick = {handleBtn} title={greet}/>
          <Massagelist/>
        </Fragment>
      ); 
}

export default App;