import { useState } from 'react'
import './App.css'
import ProductPage from './components/ProductPage';

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <label>
        <input type="checkbox" checked={isDark} onChange={(e) => setIsDark(e.target.checked)} />
        Modo escuro
      </label>
      <hr />
      <ProductPage referrerId="wizard_of_oz" productId={123} theme={isDark ? 'dark' : 'light'} />
    </>
  )
}

export default App
