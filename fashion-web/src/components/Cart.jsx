import CartProducts from "../layouts/CartProducts"
import { RxCross1 } from "react-icons/rx"

const Cart = ({ setShowCart }) => {
  const getTotal = () => {
    let total = 0
    data.forEach((item) => (total = total + item.price * item.quantity))
    return total
  }
  return (
    <div>
      <div>
        <RxCross1 />
        <h3>Your Cart </h3>

        <div>
          {data?.map((item) => (
            <CartProducts
              key={item.id}
              item={item.id}
              img={item.img}
              title={item.name}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
        </div>

        <div>
          <p>Total:</p>
          <p>${getTotal()}.00</p>
        </div>
        <button>Proceed to Buy</button>
        <button>Go to Cart</button>
      </div>
    </div>
  )
}

export default Cart
