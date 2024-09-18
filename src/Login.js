import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "./imgs/flower.jpg";
import axios from "axios";
import Swal from "sweetalert2";

const Login = () => {
  let navigte = useNavigate();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [accept, setAccept] = useState(false);

  if (localStorage.getItem("token")) navigte("/");

  async function formsub(e) {
    let checkInputs = true;
    e.preventDefault();
    setAccept(true);
    if (password.length < 8) {
      checkInputs = false;
    } else checkInputs = true;
    if (checkInputs) {
      try {
        const response = await axios.post("http://localhost:5000/login", {
          email: email,
          password: password,
        });
        const token = response.data.token;
        localStorage.setItem("token", JSON.stringify(token));
        await axios.post("http://localhost:5000/user", { token });
        navigte("/products");
      } catch (err) {
        console.log(err);
        Swal.fire({
          title: "You Should Sign Up First !",
          showCancelButton: true,
        }).then((data) => {
          data.isConfirmed && navigte("/signup");
        });
      }
    }
  }

  return (
    <section className=" flex bg-auto h-auto w-auto ">
      <div
        className="flex flex-row-reverse items-center m-auto rounded-xl bg-white mt-5"
        style={{ Top: "0", width: "700px", height: "620px" }}
      >
        <img
          src={img}
          style={{ width: "370px", height: "100%" }}
          className="rounded-xl"
          alt="logo"
        />
        <form onSubmit={formsub} className=" flex flex-col m-auto" action="">
          <h1 className="text-5xl pb-6 text-black">Log In</h1>

          <label className="text-black" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="my-4 m-auto outline-none rounded-full w-60 text-center py-1 border border-black"
            placeholder="Enter Your Email "
            id="email"
            required
          />

          <label className="text-black" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="my-4 outline-none m-auto rounded-full w-60 text-center py-1 border border-black"
            placeholder="Enter Your Password"
            id="password"
          />
          {password < 8 && accept && (
            <p className="text-red-700 font-bold">
              You Should Have At Least 8 Charactars !
            </p>
          )}

          <div className="flex flex-row justify-between m-auto space-x-5 mt-5">
            <button
              type="submit"
              className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Log In
            </button>
            <Link
              to={"/signup"}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Sign Up Page
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
