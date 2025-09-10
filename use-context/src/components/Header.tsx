import type { ComponentProps } from "react";
import Button from "./Button";

export default function Header(props: ComponentProps<'header'>) {
  return (
    <header {...props}>
      <h4 style={{ margin: 0 }}>Escolha o tema</h4>
      <Button />
    </header>
  )
}