import "./App.css";
import Navbar from "./components/Navbar";
import { publicRoute } from "./routes/publicRoute";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./Authentication/PrivateRoute";
import Services from "./pages/Services";
import AdminRoute from "./Authentication/AdminRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddAdmin from "./pages/Dashboard/AddAdmin";
import AddService from "./pages/Dashboard/AddService";

function App() {
  return (
    <Navbar>
      <Routes>
        {publicRoute.map(({ path, Component }, index) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        {/* privateRoute */}
        <Route element={<PrivateRoute />}>
          <Route path="/services" element={<Services />} />
        </Route>
        {/* admin route */}
        <Route element={<AdminRoute />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="add-admin" element={<AddAdmin />} />
            <Route path="add-service" element={<AddService />} />
          </Route>
        </Route>
      </Routes>
    </Navbar>
  );
}

export default App;
