import { memo, useState, type FormEventHandler } from "react"

export const ShippingForm = memo(function ShippingForm({ onSubmit }: any) {
  const [count, setCount] = useState(1);

  console.log('[LENTO ARTIFICIALMENTE] Renderizando <ShippingForm />');
  const startTime = performance.now();
  while (performance.now() - startTime < 500) {
    // Não fazer nada por 500 ms para simular um código extremamente lento
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const orderDetails = {
      ...Object.fromEntries(formData),
      count
    }
    onSubmit(orderDetails);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p><b>OBS: <code>ShippingForm</code> é artificialmente lento!</b></p>
      <label>
        Número de itens:
        <button type="button" onClick={() => setCount(count - 1)}>–</button>
        {count}
        <button type="button" onClick={() => setCount(count + 1)}>+</button>
      </label>
      <label>
        Rua:
        <input name="street" />
      </label>
      <label>
        Cidade:
        <input name="city" />
      </label>
      <label>
        CEP:
        <input name="zipCode" />
      </label>
      <button type="submit">Enviar</button>
    </form>
  )
});