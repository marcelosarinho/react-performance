import type { ComponentProps } from "react"
import Header from "./Header"

export default function Content(props: ComponentProps<'div'>) {
  return (
    <div style={{ height: 'inherit' }} {...props}>
      <Header />
    </div>
  )
}