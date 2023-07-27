import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLoginPage from "./pages/auth/AuthLoginPages";
import UserPage from "./pages/user/UserPage";
import UserRegister from "./pages/user/UserRegister";
import BrandsPage from "./pages/brands/BrandsPage";
import BrandsAddPage from "./pages/brands/BrandsAddPage";
import VehiclePage from "./pages/vehicle/VehiclePage";
import VehicleAddPage from "./pages/vehicle/VehicleAddPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserRegister />} />
        <Route path="/login" element={<AuthLoginPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/vehicle" element={<VehiclePage />} />
        <Route path="/vehicle/add" element={<VehicleAddPage />} />
        <Route path="/brands" element={<BrandsPage />} />
        <Route path="/brands/add" element={<BrandsAddPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
