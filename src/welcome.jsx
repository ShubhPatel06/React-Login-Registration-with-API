import swal from "sweetalert";

import axios from "axios";
import React, { useState, useEffect } from "react";

export const Welcome = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [companies, setCompanies] = useState([]);
  const accessToken = localStorage.getItem("accessToken");

  const handleLogout = () => {
    swal("Success", "Logged Out Successfully", "success", {
      buttons: false,
      timer: 2000,
    }).then(() => (window.location.href = "/"));
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
  };

  useEffect(() => {
    axios
      .get("https://msaasbackend.oaknetbusiness.com/api/users/companies", {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((response) => {
        setCompanies(response.data.data);
      });
  }, []);

  const myCompanies = companies.map((element) => {
    return (
      <div
        className="p-8 bg-slate-100 text-center shadow-xl rounded-lg"
        key={element.company_id}
      >
        <h3 className="mb-4 text-2xl">
          <span className="font-bold">Company:</span> {element.company_name}
        </h3>
        <p className="text-xl">
          <span className="font-bold">Role:</span> {element.company_role}
        </p>
      </div>
    );
  });

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
      <div className="form-container  bg-white p-8 rounded-lg ">
        <h1 className="text-5xl text-center">Welcome {user.name}</h1>
        <h3 className="mt-8 text-2xl font-bold text-center mb-6">
          My companies
        </h3>
        <div className=" grid lg:grid-cols-4">{myCompanies}</div>
      </div>
    </>
  );
};
