import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchproducts } from "./rtk/slices/Product-slice";
import { useNavigate, useSearchParams } from "react-router-dom";
import { addtocart } from "./rtk/slices/cart-slice";
import Swal from "sweetalert2";

const Products = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = useSelector((state) => state.products);
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");
  useEffect(() => {
    if (product.status === "default") dispatch(fetchproducts(category));
  }, [category, dispatch, product.status]);

  const chickLogin = (x) => {
    localStorage.getItem("token")
      ? dispatch(addtocart(x.id))
      : Swal.fire({
          title: `You Should Log In To Buy "${x.title}"`,
          icon: "info",
          showCancelButton: true,
        }).then((data) =>
          data.isConfirmed ? navigate("/login") : dispatch(addtocart(x))
        );
  };

  return (
    <>
      <h1 className="text-white text-5xl my-8 border-b-2 border-yellow-500-900 ">
        All Products
      </h1>
      <div className="flex flex-wrap flex-row">
        {product.list.map((x) => (
          <div key={x.id} className=" mx-auto px-5 text-center my-5">
            <div className="max-w-xs min-h-full rounded-lg overflow-hidden shadow-lg bg-white">
              <img
                className="w-52 ml-14 mt-4"
                src={x.image}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{x.title}</div>
                <p className="text-gray-700 text-base">{x.description}</p>
              </div>
              <p className="font-bold">Price: {x.price}$</p>
              <div className="px-6 pt-4 pb-2">
                <button
                  className="inline-block bg-green-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-auto mb-2"
                  onClick={() => chickLogin(x)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
