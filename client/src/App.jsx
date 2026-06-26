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
import Organization from "./pages/owner/Organization.jsx";
import CreateOrganization from "./pages/owner/CreateOrganization.jsx";
import OrganizationDetail from "./pages/owner/OrganizationDetail.jsx";
import NotFound from "./pages/NotFound.jsx";
import CreateHackathon from "./pages/owner/CreateHackathon.jsx";
import CreateWorkshop from "./pages/owner/CreateWorkshop.jsx";
import CreateCulturalEvent from "./pages/owner/CreateCulturalEvent.jsx";
import UnderWorking from "./pages/owner/UnderWorking.jsx";
import OrgDetail from "./pages/OrgDetail.jsx";

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
        <Route path="/organizations/:orgId" element={<OrgDetail />} />
        <Route path="/events" element={<AllEvents />} />
        <Route path="/events/:eventId" element={<EventDetail />} />
        <Route path="/organizer" element={<OwnerDashboardLayout />}>
          <Route path="dashboard" element={<DashboardHome />} />
          <Route path="events" element={<Events />} />
          {/* Dashboard event detail page */}
          <Route path="events/:eventId" element={<ViewEvent />} />
          <Route path="organizations" element={<Organization />} />
          <Route path="organizations/new" element={<CreateOrganization />} />
          <Route path="organizations/:orgId" element={ <OrganizationDetail />} />
          <Route path="organizations/:orgId/event/hackathon/new" element={ <CreateHackathon /> } />
          <Route path="organizations/:orgId/event/workshop/new" element={ <CreateWorkshop /> } />
          <Route path="organizations/:orgId/event/cultural-event/new" element={ <CreateCulturalEvent /> } />
          <Route path="*" element={<UnderWorking />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!isOrganizer && <Footer />}
    </>
  );
};

export default App;
