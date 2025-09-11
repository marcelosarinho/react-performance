import { useCallback } from "react";
import { ShippingForm } from "./ShippingForm";


export default function ProductPage({ productId, referrerId, theme }: any) {
  const handleSubmit = useCallback((orderDetails: any) => {
    post('/product/' + productId + '/buy', {
      referrerId,
      orderDetails
    });
  }, [productId, referrerId]);

  return (
    <div className={theme}>
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  )
}

function post(url: any, data: any) {
  console.log('POST /' + url);
  console.log(data);
}