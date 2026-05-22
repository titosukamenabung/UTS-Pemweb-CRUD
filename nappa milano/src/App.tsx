import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import MAinLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import LoginForm from "./pages/Loginform";
import RegisterForm from "./pages/RegisterEvent";
import DashboardIndex from "./pages/dashboard/DashboardIndex";
import ProtectedRoute from "./routes/ProtectedRoute";
import DashboardLayout from "./layouts/DashboardLayout";
import CategoryIndex from "./pages/dashboard/category/CategoryIndex";
import CategoryCreate from "./pages/dashboard/category/CategoryCreate";
import ProductIndex from "./pages/dashboard/products/ProductIndex";
import ProductCreate from "./pages/dashboard/products/ProductCreate";
import EventIndex from "./pages/dashboard/event/EventIndex";
import EventCreate from "./pages/dashboard/event/EventCreate";
import PembicaraCreate from "./pages/dashboard/pembicara/PembicaraCreate";
import PembicaraIndex from "./pages/dashboard/pembicara/PembicaraIndex";
import Biodata from "./pages/dashboard/biodata/Biodata";
import PembicaraUpdate from "./pages/dashboard/pembicara/PembicaraUpdate";
import EventUpdate from "./pages/dashboard/event/EventUpdate";
import CategoryUpdate from "./pages/dashboard/category/CategoryUpdate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MAinLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<DashboardIndex />} />

            <Route path="/dashboard/category" element={<CategoryIndex />} />
            <Route path="/dashboard/category/create" element={<CategoryCreate />} />

            <Route path="/dashboard/products" element={<ProductIndex />} />
            <Route path="/dashboard/products/create" element={<ProductCreate />} />
            <Route path="/dashboard/category/edit/:id" element={<CategoryUpdate />} />

            <Route path="/dashboard/event" element={<EventIndex />} />
            <Route path="/dashboard/event/create" element={<EventCreate />} />
            <Route path="/dashboard/event/edit/:id" element={<EventUpdate />} />

            <Route path="/dashboard/pembicara" element={<PembicaraIndex />} />
            <Route path="/dashboard/pembicara/create" element={<PembicaraCreate />} />
            <Route path="/dashboard/pembicara/edit/:id" element={<PembicaraUpdate />} />

            <Route path="/dashboard/biodata" element={<Biodata />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;