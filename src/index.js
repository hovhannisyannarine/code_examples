import {useState} from "react";
import ReactDOM from "react-dom/client";

// Styles
import './App.css';

// Components
import Header from './Components/Header';

 function Counter() {
     const [countOne, setCountOne] = useState(0)
     const [countTwo, setCountTwo] = useState(0);
     const [updated, setUpdated] = useState(countTwo);
     const [changed, setChanged] = useState(countOne);
     const [answer, setAnswer] = useState(0);

     const reset =() => {
         setCountTwo(0)
         setCountOne(0)
         setUpdated(0)
         setChanged(0)
         setAnswer(0)
     }
     const changeFirstValue = (event) => {
         setCountTwo(event.target.value);
     }
     const changeSecondValue = (event) => {
         setCountOne(event.target.value);
     }
     const firstClick = () => {
         setUpdated(+countTwo);
     };
     const secondClick = () => {
         setChanged(+countOne);
     };
     const sumNumbers = () => {
         setAnswer(updated + changed)
     }
     const minusNumbers = () => {
         setAnswer(updated - changed)
     }
     const divideNumbers = () => {
         setAnswer(updated * changed)
     }
     const multiplyNumbers = () => {
         setAnswer(updated / changed)
     }
     return (
         <div className="counter">
             <Header text='Calculator' color='pourple' />
             {/*first input*/}
             <input
                 type = "number"
                 name="countTwo"
                 onChange={changeFirstValue}
                 value={countTwo}
             />
             {/*second input*/}
             <input
                 type = "number"
                 name="countOne"
                 onChange={changeSecondValue}
                 value={countOne}
             />

             <h2>Number one: {updated} <br/> Number two: {changed}</h2>
             <span className="counter__output">{answer}</span>
             <div className="btn__container">
                 <button className="control__btn"  onClick={firstClick}>get first number</button>
                 <button className="control__btn"  onClick={secondClick}>get second number</button>
                 <button className="control__btn"  onClick={sumNumbers}>+</button>
                 <button className="control__btn"  onClick={minusNumbers}>-</button>
                 <button className="control__btn"  onClick={divideNumbers}>*</button>
                 <button className="control__btn"  onClick={multiplyNumbers}>/</button>
                 <button className="reset" onClick={reset}>Reset</button>
             </div>
         </div>
     )
 }
 const root = ReactDOM.createRoot(document.getElementById('calculator'));
 root.render(<Counter/>);


