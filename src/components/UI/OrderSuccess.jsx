import { ConfettiComponent } from "./Confetti";
import "./OrderSuccess.css";

export default function OrderSuccess() {
  return (
    <div className="address-main">
      <div className="order-success">
        <ConfettiComponent />
        <h2>Order confirmed</h2>
        <p>
          Your order has been placed successfully.You will shortly receive a
          confirmation message with expected delivery date.
        </p>
      </div>
    </div>
  );
}
