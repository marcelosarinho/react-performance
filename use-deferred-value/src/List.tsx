type Props = {
  value: string
}

export default function List(props: Props) {
  const { value } = props;

  const items: string[] = Array.from({ length: 5000 });

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>Valor do texto: {item} {value}</li>
      ))}
    </ul>
  )
}