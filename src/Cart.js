import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./rtk/slices/cart-slice";

const Cart = () => {
  const CartProduct = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  console.log(CartProduct);
  return (
    <>
      {CartProduct.length === 0 && <h1>No Products Yet !</h1>}

      <div>
        <table
          className="table-auto m-auto mt-40 bg-slate-500 border  text-white"
          width={"90%"}
        >
          <thead className="border border-b-black">
            <tr>
              <th className="border-r-2 border-black">Id</th>
              <th className="border-r-2 border-black">Product Name</th>
              <th className="border-r-2 border-black">Image</th>
              <th className="border-r-2 border-black">Quantiti</th>
              <th className="border-r-2 border-black">Delete</th>
            </tr>
          </thead>
          <tbody>
            {CartProduct.map((x) => (
              <tr key={x.id} className="text-center">
                <td className="border-r-2 border-black">{x.id}</td>
                <td className="border-r-2 border-black">{x.title}</td>
                <td className="border-r-2 border-black">
                  <img src={x.image} width={"100px"} alt="" />
                </td>
                <td className="border-r-2 border-black">{x.quantiti}</td>
                <td>
                  <button className="bg-red-600 hover:bg-red-700 text-xs p-2 rounded-xl my-3">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {CartProduct.length >= 1 && (
          <button
            className="bg-red-600 hover:bg-red-700 my-10 p-2 rounded-xl text-white"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart !
          </button>
        )}
      </div>
    </>
  );
};

export default Cart;
