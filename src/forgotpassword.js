import { useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  async function handleForgotPassword(e) {
    e.preventDefault();
    let inputData = { email };
    console.log(inputData);

    let result = await fetch(
      "https://msaasbackend.oaknetbusiness.com/api/password/email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData),
      }
    );
    result = await result.json();
    console.log("Result = ", result);
    swal(
      "Success",
      "Please check your email for the password reset link",
      "success"
    );
  }

  return (
    <div className="App bg-gradient-to-b from-teal-300 to-cyan-400 h-screen flex items-center justify-center">
      <div className="form-container  bg-white p-8 w-96 rounded-lg ">
        <form className="loginForm" onSubmit={handleForgotPassword}>
          <h1 className="text-3xl mb-2 font-bold text-gray-800">
            Forgot Password ?
          </h1>
          <p className="text-red-700 mb-3">Please provide your email</p>

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

          <button
            type="submit"
            id="login-btn"
            className="btn py-2.5 px-5 w-full bg-green-500 rounded-md text-white mt-3 hover:bg-green-400"
          >
            Submit
          </button>
        </form>
        <div className="text-center mt-4">
          <Link to={`/`} className="link text-sm">
            Rembered your Password ?{" "}
            <span className=" text-cyan-600 hover:text-cyan-400 hover:cursor-pointer">
              Sign In
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
