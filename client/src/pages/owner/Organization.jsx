import { FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router";
import OrganizationList from "../../components/owner/organization/OrganizationList";
import useGetAllDashboardOrgs from "../../hooks/useGetAllDashboardOrgs";
import { useSelector } from "react-redux";
import Loading from "../../components/Loading";

const Organization = () => {
  useGetAllDashboardOrgs();
  const organizations = useSelector((state) => state.dashboard.orgs);

  const navigate = useNavigate();

  return (
    <div className="h-full flex flex-col gap-4">
      {/* Header */}
      <div className="bg-white border rounded-xl p-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-[#333333]">
          All Organizations
        </h1>

        <button
          onClick={() => navigate("/organizer/organizations/new")}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#054C73] text-white hover:opacity-90"
        >
          <FiPlus />
          New
        </button>
      </div>

      {/* Scrollable List */}
      {organizations ? (
        <div className="flex-1 overflow-y-auto bg-white border rounded-xl p-4">
          {organizations.length === 0 ? (
            <div className="h-full flex items-center justify-center text-[#666666]">
              No organizations found
            </div>
          ) : (
            <OrganizationList />
          )}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Organization;
