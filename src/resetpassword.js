import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import swal from "sweetalert";

export const ResetPassword = () => {
  const { token, email } = useParams();
  const [password, setPassword] = useState("");
  const [password_confirmation, setConfirmPassword] = useState("");

  async function passwordReset(inputData) {
    return fetch("https://msaasbackend.oaknetbusiness.com/api/password/reset", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputData),
    }).then((data) => data.json());
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password === "" || password_confirmation === "") {
      swal("Failed", "Fields cannnot be empty", "error");
    } else if (password === password_confirmation) {
      const response = await passwordReset({
        email,
        password,
        password_confirmation,
        token,
      });
      console.log(response);
      if ("data" in response) {
        swal("Success", "Password Reset Successfully", "success", {
          buttons: false,
          timer: 1500,
        }).then(() => {
          window.location.href = "/";
        });
      } else {
        swal("Failed", "Password Reset Failed", "error");
      }
    } else {
      swal("Failed", "Password Reset Failed", "error");
    }
  };
  return (
    <div className="App bg-gradient-to-b from-teal-300 to-cyan-400 h-screen flex items-center justify-center">
      <div className="form-container  bg-white p-8 w-96 rounded-lg ">
        <form className="loginForm" onSubmit={handleSubmit}>
          <h1 className="text-3xl mb-4 font-bold text-gray-800">
            Reset Password
          </h1>

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

          <button
            type="submit"
            id="reset-btn"
            className="btn py-2.5 px-5 w-full bg-green-500 rounded-md text-white mt-3 hover:bg-green-400"
          >
            Reset
          </button>
        </form>

        <div className="text-center mt-4">
          <Link to={`/`} className="link text-sm">
            <span className=" text-cyan-600 hover:text-cyan-500 hover:cursor-pointer">
              Sign In
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
