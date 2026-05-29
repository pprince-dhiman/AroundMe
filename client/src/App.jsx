import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify"
import Footer from "./components/Footer";
import AllHakathons from "./pages/AllHakathons";
import AllWorkshops from "./pages/AllWorkshops";
import AllCulturalEvents from "./pages/AllCulturalEvents";

const App = () => {
  return (
    <>
    <ToastContainer />
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hackathons" element={<AllHakathons />} />
        <Route path="/workshops" element={<AllWorkshops />} />
        <Route path="/cultural-events" element={<AllCulturalEvents />} />
      </Routes>
    <Footer />
    </>
  )
}

export default App;