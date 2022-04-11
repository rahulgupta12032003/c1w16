import React from 'react';
import "../App.css"

// keep the add to cart component here
const CartButton = () => {
    //manage state of the count 
    const [count, setCounter] = React.useState(0);

    const handleCount = (value) => {
      setCounter(count + value);
    }


  return <>
  {/* add to cart button */}
  {/* count with - and  + button */}
  <div className="Button">
      <div className = "B1">
        <button onClick = {() => handleCount(-1)}>-</button>
      </div>
      <div className="B2">
        <p className="count-item">{count}</p>
      </div>
      <div className="B3">
        <button onClick = {() => handleCount(1)}>+</button>
      </div>
  </div>
  </>;
};
export default CartButton;
