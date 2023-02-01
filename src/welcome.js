import swal from "sweetalert";
// import { useState } from "react";

export const Welcome = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  // const [companies, setCompanies] = useState([]);

  const handleLogout = () => {
    swal("Success", "Logged Out Successfully", "success", {
      buttons: false,
      timer: 2000,
    }).then(() => (window.location.href = "/"));
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
  };

  return (
    <>
      <nav className="flex justify-between items-center p-8 bg-slate-200">
        <div className="logo">
          <h5 className=" font-bold text-3xl">COMPANY</h5>
        </div>
        <ul className="flex gap-8">
          <li
            className=" text-red-600 cursor-pointer hover:text-red-500"
            onClick={handleLogout}
          >
            Logout
          </li>
        </ul>
      </nav>
      <div className="form-container  bg-white p-8 rounded-lg text-center">
        <h1 className="text-5xl">Welcome {user.name}</h1>
      </div>
    </>
  );
};
