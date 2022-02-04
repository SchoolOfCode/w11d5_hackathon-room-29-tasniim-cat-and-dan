import { useState } from "react";

export default function AddButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={handleClick}>Add 1</button>
      <p>{count}</p>
    </div>
  );
}
