import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [startTime, setStartTime] = useState(0);
  const [now, setNow] = useState(0);
  const intervalRef = useRef<number | null>(null);

  function start() {
    setStartTime(Date.now());
    setNow(Date.now());

    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function stop() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }

  let secondsPassed = 0;

  if (startTime !== 0 && now !== 0) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <main>
      <h3>Tempo: {secondsPassed.toFixed(3)}</h3>

      <button onClick={start}>Começar</button>
      <button onClick={stop}>Parar</button>
    </main>
  )
}

export default App
