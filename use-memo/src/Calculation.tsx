import { useMemo, useState, type ChangeEvent } from "react"

export default function Calculation() {
  const [count, setCount] = useState(1);
  const [value, setValue] = useState(1);

  const number = useMemo(
    () => Array.from({ length: 100000 }, () => (Math.floor(Math.random() * value))).reduce((acc, cur) => acc + cur, 0), 
  [value]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <input type="number" onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value as unknown as number)} />
      <button onClick={() => setCount(prev => prev + 1)}>Adicionar</button>
      <p>Resultado: {number}</p>
      <p>Contador: {count}</p>
    </div>
  )
}