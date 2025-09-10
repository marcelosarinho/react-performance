import { useRef, useState } from 'react';
import './App.css'
import Content from './components/Content'
import { ThemeContext } from './context/ThemeContext';

export type Theme = 'light' | 'dark';

function App() {
  const [theme, setTheme] = useState<Theme>('light');
  
  const mainRef = useRef<HTMLElement | null>(null);

  return (
    <ThemeContext value={{ theme, setTheme, mainRef }}>
      <main style={{ height: 'inherit' }} className="light" ref={mainRef}>
        <Content />
      </main>
    </ThemeContext>
  )
}

export default App
