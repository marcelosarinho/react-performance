import { useDeferredValue, useState, type ChangeEvent } from 'react'
import './App.css'
import List from './List'

function App() {
  const [value, setValue] = useState('');
  const deferredValue = useDeferredValue(value);

  return (
    <>
      <input onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} type="text" />
      <List value={deferredValue} />
    </>
  )
}

export default App
