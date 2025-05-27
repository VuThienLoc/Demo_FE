import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import AppLayout from "./components/layout/AppLayout";
import Consultant from "./pages/Consultant";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/consultant" element={<Consultant />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
