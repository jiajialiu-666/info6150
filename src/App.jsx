import './App.css';
import {useState} from 'react'; 
import Reorder from './Reorder';
function App() {
    const [count,setCount] = useState(0);

    const add = () => {
      setCount(count + 1);
    }

    const  reduce = () => {
      setCount(count - 1)
    }

    const onReorder = () => {
      setCount(5);
    }

    return (
      <div class = "app">
        <button type = "button" 
        className = "button1" 
        onClick= {()=>add()} >
          Add+
          </button>
          <p>
           Count: {count}
          </p>
        <button type='button'
        className='button2'
        disabled = {!count}
        onClick={()=>reduce()}>
          Induce-
        </button>
        {
          !count? <Reorder onReorder={onReorder}/>:<p></p>
        }
    </div>
    );

}

export default App;
