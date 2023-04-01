import { useState } from "react";
function Amount() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Amount : {count}</h1>
      <button onClick={() => setCount(count + 100)}>DEPOSIT 100</button>
      <button onClick={() => setCount(count - 100)}>WITHDRAW 100</button>
    </div>
  );
}
export default Amount;
