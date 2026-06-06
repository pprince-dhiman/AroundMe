import { Route, Routes, useMatch } from "react-router";
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
import OwnerDashboardLayout from "./pages/owner/OwnerDashboardLayout.jsx";
import DashboardHome from "./pages/owner/DashboardHome.jsx";
import ViewEvent from "./pages/owner/ViewEvent.jsx";
import Events from "./pages/owner/Events.jsx";

const App = () => {
  const isOrganizer = useMatch("/organizer/*");

  return (
    <>
      <ToastContainer />
      {!isOrganizer && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hackathons" element={<AllHakathons />} />
        <Route path="/workshops" element={<AllWorkshops />} />
        <Route path="/cultural-events" element={<AllCulturalEvents />} />
        <Route path="/organizations" element={<Organizatoins />} />
        <Route path="/events" element={<AllEvents />} />
        <Route path="/events/:eventId" element={<EventDetail />} />
        <Route path="/organizer" element={<OwnerDashboardLayout />}>
          <Route path="dashboard" element={<DashboardHome />} />
          <Route path="events" element={<Events />} />
          <Route path="events/:eventId" element={<ViewEvent />} />
          {/* 
          <Route path="/dashboard/events/:id/edit" element={<EditEvent />} />

          <Route path="/dashboard/organizations" element={<Organizations />} /> */}
        </Route>
      </Routes>
      {!isOrganizer && <Footer />}
    </>
  );
};

export default App;
