import { useState } from "react";
import OrganizationHero from "../../components/owner/organization/OrganizationHero";
import OrganizationAbout from "../../components/owner/organization/OrganizationAbout";
import OrganizationEvents from "../../components/owner/organization/OrganizationEvents";
import EditOrganization from "../../components/owner/organization/EditOrganizatoin";
import { useParams } from "react-router";
import Loading from "../../components/Loading";
import useGetDashboardOrgDetail from "../../hooks/useGetDashboardOrgDetail";
import { useSelector } from "react-redux";
import AdminMap from "../../components/owner/AdminMap";

const OrganizationDetail = () => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const params = useParams();
  const { orgId } = params;

  useGetDashboardOrgDetail(orgId);

  const orgDetails = useSelector((state) => state.dashboard.dashboardOrgDetail);
  const org = orgDetails?.org;
  const events = orgDetails?.orgEvents;

  return org ? (
    <div className="min-h-screen bg-[#F2F5FF]">
      <div className="mx-auto max-w-7xl space-y-6 px-4 py-6">
        <OrganizationHero onEdit={() => setIsEditOpen(true)} org={org} />

        <OrganizationAbout org={org} />

        <OrganizationEvents events={events} org={org} />

        <AdminMap org={org} />

        <EditOrganization
          isOpen={isEditOpen}
          onClose={() => setIsEditOpen(false)}
          org={org}
          events={events}
        />
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default OrganizationDetail;
