import { Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";
import Nbar from "./components/Nbar";
import Profile from "./Profile";
import Products from "./Products";
import Cart from "./Cart";

function App() {
  return (
    <div className="App">
      <Nbar />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
