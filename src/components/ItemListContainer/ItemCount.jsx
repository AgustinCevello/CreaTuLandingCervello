import { useState } from "react";

export default function ItemCount({ max, min, onAddToCart }) {
  const [count, setCount] = useState(1);

  const handleSubtract = () => { if (count > min) setCount(count - 1) }
  const handleAdd = () => { if (count < max) setCount(count + 1) }

  return (
    <div>
      <button onClick={handleSubtract}>-</button>
      <span style={{ color: 'black' }}>{count}</span>
      <button onClick={handleAdd}>+</button>
      <button onClick={() => onAddToCart(count)}>Agregar</button>
    </div>
  );
}