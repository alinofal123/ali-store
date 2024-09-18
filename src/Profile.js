import { Link, useNavigate } from "react-router-dom";
import Guestlogo from "./imgs/Guest.png";
import Profileheader from "./imgs/profileheader.svg";
import { useEffect, useState } from "react";
import Cart from "./imgs/shopping_cart_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png";
import Swal from "sweetalert2";

const Profile = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState();

  useEffect(() => {
    setUsername("ali");
  }, []);

  return (
    <>
      {!JSON.parse(localStorage.getItem("token")) ? (
        <div>
          <img
            src={Guestlogo}
            alt="Guest"
            width={"200px"}
            className="bg-gray-600 rounded-full m-auto mt-16"
          />
          <h1 className="font-bold text-4xl text-white mt-6">Guest</h1>

          <div className="mt-16">
            <Link
              to={"/login"}
              className="outline outline-offset-2 outline-blue-500 hover:bg-blue-500  text-white font-bold py-2 px-4 rounded"
            >
              Log In
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div>
            <img
              src={Profileheader}
              width={"600px"}
              className="m-auto mt-8"
              alt="logo"
            />
            <div className="flex flex-col m-auto w-52">
              <label htmlFor="username" className="text-white">
                User Name
              </label>
              <input
                autoComplete="off"
                type="text"
                id="username"
                className="my-6 outline-none p-1 text-center rounded-lg"
                placeholder="username"
              />

              <label htmlFor="email" className="text-white">
                Email
              </label>
              <input
                type="text"
                id="email"
                disabled
                className="my-5 outline-none p-1 text-center rounded-lg"
                placeholder="Email"
              />

              <button className="bg-blue-600 w-40 m-auto rounded-full hover:bg-slate-600 text-white p-1 my-3">
                Edit User Name
              </button>
              <Link
                to={"/cart"}
                className="bg-blue-600 w-40 m-auto rounded-full flex flex-row-reverse hover:bg-slate-600 text-white p-1 my-3"
              >
                <img className="px-2 mx-2" width={"35px"} src={Cart} alt="" />
                Your Cart
              </Link>
              <button
                className="bg-red-600 w-40 m-auto hover:bg-red-700 rounded-full text-white p-1 my-3 mb-10"
                onClick={() => {
                  Swal.fire({
                    title: "Are You Sure You Want To Sign Out ?",
                    icon: "question",
                    showCancelButton: true,
                  }).then((data) =>
                    data.isConfirmed
                      ? (localStorage.removeItem("token"), navigate("/login"))
                      : null
                  );
                }}
              >
                Sign Out
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
