import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
// import Home from "./components/Home";
import Footer from "./components/Footer";
import Cart from "./components/Cart"
// import RegisterPage from "./components/Register";
// import LoginPage from "./components/Login";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <Navbar />
      {/*<Home /> */}
      {/*<RegisterPage /> */}
      {/*<LoginPage /> */}
      <Cart />
      <Footer />
    </>
  );
}

export default App;
