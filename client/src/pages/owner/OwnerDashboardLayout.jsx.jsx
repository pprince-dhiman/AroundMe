import { Outlet } from "react-router";
import { useState } from "react";

import Sidebar from "../../components/owner/Sidebar";
import MobileSidebar from "../../components/owner/MobileSidebar";
import Header from "../../components/owner/Header";
import useGetDashboardData from "../../hooks/useGetDashboardData";
import Footer from "../../components/owner/Footer";

const OwnerDashboardLayout = () => {
  useGetDashboardData();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const organizations = [];
  const currentOrg = null;

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      <Sidebar organizations={organizations} currentOrg={currentOrg} />

      <MobileSidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      <div className="flex-1 flex flex-col min-w-0">
        <Header setSidebarOpen={setSidebarOpen} />

        <main className="flex-1 p-6">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default OwnerDashboardLayout;
