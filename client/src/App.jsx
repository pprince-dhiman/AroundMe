import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import AllHakathons from "./pages/AllHakathons";
import AllWorkshops from "./pages/AllWorkshops";
import AllCulturalEvents from "./pages/AllCulturalEvents";
import Organizatoins from "./pages/Organizatoins";
import AllEvents from "./pages/AllEvents";
import EventDetail from "./pages/EventDetail";

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
        <Route path="/organizations" element={<Organizatoins />} />
        <Route path="/events" element={<AllEvents />} />
        <Route path="/events/:eventId" element={<EventDetail />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
