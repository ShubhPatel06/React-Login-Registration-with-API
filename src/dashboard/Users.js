import React from "react";
import { Link } from "react-router-dom";

export default function Users() {
  return (
    <div>
      <p>Hello Users</p>
      <p className="mt-7">
        <Link to={"/dashboard"}>go to dashboard</Link>
      </p>
    </div>
  );
}
