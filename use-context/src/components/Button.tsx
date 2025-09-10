import { useTheme } from "../hooks/useTheme";


export default function Button() {
  const { theme, setTheme, mainRef } = useTheme();

  function changeTheme() {
    const main = mainRef.current;

    if (main && theme === 'light') {
      main.classList.remove('light');
      main.classList.add('dark');
    }

    if (main && theme === 'dark') {
      main.classList.remove('dark');
      main.classList.add('light');
    }

    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <button onClick={changeTheme}>
      Modo {theme === 'light' ? 'escuro' : 'claro'}
    </button>
  )
}