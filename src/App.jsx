import { useState } from 'react';
import './App.css';

const styles = {
  buttonInfo: {
  backgroundColor: 'skyblue', 
  border: 'none',
  color: 'white',
  padding: '15px 32px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  marginRight: '10px',
  },
  buttonPrimary: {
    backgroundColor: 'green', 
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    marginRight: '10px',
  },
  buttondanger: {
    backgroundColor: 'red', 
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    marginRight: '10px',
  },
  conter: {
    width: '350px',
    padding: '10px',
    border: '1px solid black',
    textAlign: 'center',
    backgroundColor: '#cacaca',
    boxShadow: '10px 10px 8px #888888',
  }
  
}

function App() {
  const [count, setCount] = useState(0);
  const [isDisabled, setDisabled] = useState(false);
  
  const increaseHandler = () => {
    setCount(count + 1);
  }
  const decreaseHandler = () => {
    if (count<=0) {
      setDisabled(true);
    } else {
      setCount(count - 1);
    }
   
  }
  const resetHandler = () => {
    setCount(0)
  }
  
  return (
    <div className="App">
      <p style={styles.conter}> Count : <span> {count} </span></p>
      <button onClick={increaseHandler} style={styles.buttonInfo}> Increase </button>
      <button disabled={isDisabled}onClick={decreaseHandler} style={styles.buttonPrimary}> Decrese </button>
      <button onClick={resetHandler} style={styles.buttondanger}> Reset </button>
    </div>
  )
}

export default App
