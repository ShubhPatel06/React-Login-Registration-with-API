import React from "react";
import { useState } from "react";
import swal from "sweetalert";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function SignIn(inputData) {
    return fetch("https://msaasbackend.oaknetbusiness.com/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputData),
    }).then((data) => data.json());
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      swal("Failed", "Fields cannnot be empty", "error");
    } else {
      const response = await SignIn({
        email,
        password,
      });
      if ("accessToken" in response.data) {
        swal("Success", "Login Successful", "success", {
          buttons: false,
          timer: 1500,
        }).then(() => {
          localStorage.setItem("accessToken", response.data["accessToken"]);
          localStorage.setItem("user", JSON.stringify(response.data["user"]));
          window.location.href = "welcome";
        });
      } else {
        swal("Failed", "Login Failed", "error");
      }
    }
  };

  return (
    <div className="App bg-gradient-to-b from-teal-300 to-cyan-400 h-screen flex items-center justify-center">
      <div className="form-container  bg-white p-8 w-96 rounded-lg ">
        <form className="loginForm" onSubmit={handleSubmit}>
          <h1 className="text-3xl mb-4 font-bold text-gray-800">Login</h1>

          <div className="input-container flex flex-col mb-4">
            <label htmlFor="email" className="mb-2">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              className="rounded-md border-2 p-3 border-gray-300 focus:outline-gray-500"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-container flex flex-col mb-4">
            <label htmlFor="password" className="mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              className="rounded-md border-2 p-3 border-gray-300 focus:outline-gray-500"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            id="login-btn"
            className="btn py-2.5 px-5 w-full bg-green-500 rounded-md text-white mt-3 hover:bg-green-400"
          >
            Sign In
          </button>
        </form>

        <div className="text-center mt-3">
          <Link
            to={`forgotpassword`}
            className="link text-sm text-red-600 hover:text-red-400"
          >
            Forgot Password ?
          </Link>
        </div>
        <div className="text-center mt-2">
          <Link to={"register"} className="link text-sm">
            Don't have an Account?{" "}
            <span className=" text-cyan-600 hover:text-cyan-400 hover:cursor-pointer">
              Sign Up
            </span>
          </Link>
        </div>
        <div className="text-center mt-2">
          <Link to={`dashboard`} className="link text-sm">
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
