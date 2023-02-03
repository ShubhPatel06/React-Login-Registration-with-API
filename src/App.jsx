import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./login";
import { Register } from "./register";
import { Welcome } from "./welcome";
import Dashboard from "./dashboard/dashboard";
import Layout from "./dashboard/shared/layout";
import Users from "./dashboard/users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="welcome" element={<Welcome />}></Route>
        <Route path="dashboard" element={<Layout />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="/dashboard/users" element={<Users />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
