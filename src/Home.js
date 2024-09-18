import { Link } from "react-router-dom";
import HomeLogo from "./imgs/undraw_web_shopping_re_owap.svg";
import { useDispatch } from "react-redux";
import { clear } from "./rtk/slices/Product-slice";

const Home = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col text-white justify-center space-x-7 mt-40 font-bold items-center md:flex-row">
      <div className="flex justify-center ">
        <img src={HomeLogo} alt="logo" width={"500px"} />
      </div>
      <div className="pt-16 md:pt-0">
        <h1 className="text-3xl">
          Welcome To Ali <span className="text-blue-300">Store</span>
        </h1>
        <p className="mt-7">Hi I'm Ali And This Is My Store, </p>
        <p className="my-5 pb-5">
          Please Click Get Started To See All Products We Have !
        </p>

        <div className="space-x-5 pb-32">
          <Link
            onClick={() => dispatch(clear())}
            to={"/products"}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Get Started
          </Link>
          {!localStorage.getItem("token") && (
            <Link
              to={"/signup"}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Sign Up
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
