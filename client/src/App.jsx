import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify"
import Footer from "./components/Footer";
import AllHakathons from "./pages/AllHakathons";

const App = () => {
  return (
    <>
    <ToastContainer />
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hackathons" element={<AllHakathons />} />
      </Routes>
    <Footer />
    </>
  )
}

export default App;