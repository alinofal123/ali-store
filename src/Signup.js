import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Background from "./imgs/flower.jpg";

const Signup = () => {
  let navigte = useNavigate();
  let [username, setuserName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [repassword, setRepassword] = useState("");
  let [accept, setAccept] = useState(false);

  if (localStorage.getItem("token")) navigte("/");

  async function formsub(e) {
    let checkInputs = true;
    e.preventDefault();
    setAccept(true);
    if (username === "" || password.length < 8 || repassword !== password) {
      checkInputs = false;
    } else checkInputs = true;
    if (checkInputs) {
      // try {
      //   await axios
      //     .post("http://localhost:5000/register", {
      //       name: username,
      //       email: email,
      //       password: password,
      //     })
      //     .then((data) => console.log(data));
      // } catch (err) {
      //   console.log({ message: err });
      // }
      navigte("/login");
    }
  }

  return (
    <section className=" flex flex-row-reverse h-auto w-auto">
      <div
        className="flex flex-row-reverse items-center m-auto rounded-xl bg-white mt-2"
        style={{ Top: "0", width: "650px" }}
      >
        <img
          src={Background}
          width={"350px"}
          style={{ height: "650px" }}
          className="hidden md:block rounded-xl"
          alt=""
        />
        <form
          onSubmit={formsub}
          className=" flex flex-col text-center m-auto ali h-auto bg-auto w-auto my-6"
          action=""
        >
          <h1 className="text-5xl pb-6 text-black">Sign Up</h1>
          <label className="text-black" htmlFor="username">
            User Name
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setuserName(e.target.value)}
            className="my-4 m-auto rounded-full w-60 text-center py-1 outline-none border border-black"
            autoComplete="off"
            placeholder="Enter Your User Name"
            id="username"
          />
          {username === "" && accept && (
            <p className="text-red-700 font-bold">User Name Is Require !</p>
          )}

          <label className="text-black" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="my-4 rounded-full m-auto w-60 text-center py-1 outline-none border border-black"
            placeholder="Enter Your Email "
            id="email"
            required
          />

          <label className="text-black" htmlFor="password">
            Password
          </label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="my-4 rounded-full m-auto w-60 text-center py-1 outline-none border border-black"
            autoComplete="off"
            placeholder="Enter Your Password"
            id="password"
          />
          {password.length < 8 && accept && (
            <p className="text-red-700 font-bold">
              You Should Have At Least 8 Characters !
            </p>
          )}

          <label className="text-black" htmlFor="repassword">
            Repassword
          </label>
          <input
            type="text"
            value={repassword}
            onChange={(e) => setRepassword(e.target.value)}
            className="my-4 rounded-full m-auto w-60 text-center py-1 outline-none border border-black"
            autoComplete="off"
            placeholder="Repassword Your Password "
            id="repassword"
          />
          {repassword !== password && accept && (
            <p className="text-red-700 font-bold">Password Dosen't Match !</p>
          )}

          <div className="flex flex-row justify-between mt-5 m-auto space-x-5">
            <button
              type="submit"
              className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              submit
            </button>
            <Link
              to={"/login"}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Log in Page
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signup;
