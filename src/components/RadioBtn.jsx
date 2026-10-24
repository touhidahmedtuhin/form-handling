import { useState } from "react";

function RadioBtn() {
  const [paymentMethod, setPaymentMathod] = useState();
  const payments = [
    { id: 1, method: "Gpay", info: "Pay using Gpay" },
    { id: 2, method: "Cash", info: "Cash Payment" },
    { id: 3, method: "COD", info: "Pay after receive" },
  ];
  return (
    <div>
      {payments.map((item) => (
        <label htmlFor={item.method} key={item.id}>
          <input
            type="radio"
            id={item.method}
            name="payments"
            value={item.method}
            checked={paymentMethod === item.method}
            onChange={(e) => setPaymentMathod(e.target.value)}
          />
          {item.method}
        </label>
      ))}
      <div>
        <p>Payment Method : {paymentMethod ? paymentMethod : "Select One"}</p>
        <p>
          Payment Info :{" "}
          {payments.find((p) => p.method === paymentMethod)?.info}
        </p>
      </div>
    </div>
  );
}

export default RadioBtn;
