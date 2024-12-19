import { Route, Routes } from "react-router-dom";
import Signup from "../Components/Signup";
import Login from "../Components/Login";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default MainRoutes;