import React, { useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");

  async function SignUp(inputData) {
    return fetch("https://msaasbackend.oaknetbusiness.com/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputData),
    }).then((data) => data.json());
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      name === "" ||
      email === "" ||
      password === "" ||
      password_confirmation === "" ||
      phone === ""
    ) {
      swal("Failed", "Fields cannnot be empty", "error");
    } else if (password === password_confirmation) {
      const response = await SignUp({
        name,
        email,
        password,
        password_confirmation,
        phone,
      });

      console.log(response);
      if ("id" in response.data) {
        swal("Success", "Registration Successful", "success", {
          buttons: false,
          timer: 1500,
        }).then(() => {
          window.location.href = "/";
        });
      } else {
        swal("Failed", "Registration Failed", "error");
      }
    } else {
      swal("Failed", "Registration Failed", "error");
    }
  };

  return (
    <div className="App bg-gradient-to-b from-teal-300 to-cyan-400 h-screen flex items-center justify-center">
      <div className="form-container bg-white p-8 w-96 rounded-lg">
        <form className="registerForm" onSubmit={handleSubmit}>
          <h1 className="text-3xl mb-4 font-bold text-gray-800">Register</h1>
          <div className="input-container flex flex-col mb-4">
            <label htmlFor="name" className="mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              className="rounded-md border-2 p-3 border-gray-300 focus:outline-gray-500"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
          <div className="input-container flex flex-col mb-4">
            <label htmlFor="confirmPassword" className="mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={password_confirmation}
              className="rounded-md border-2 p-3 border-gray-300 focus:outline-gray-500"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="input-container flex flex-col mb-4">
            <label htmlFor="phone" className="mb-2">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={phone}
              className="rounded-md border-2 p-3 border-gray-300 focus:outline-gray-500"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <button
            type="submit"
            id="register-btn"
            className="btn py-2.5 px-5 w-full bg-green-500 rounded-md text-white mt-3 hover:bg-green-400"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center mt-4">
          <Link to={`/`} className="link text-sm">
            Already have an Account?{" "}
            <span className=" text-cyan-600 hover:text-cyan-500 hover:cursor-pointer">
              Sign In
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
