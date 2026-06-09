import { useSelector } from "react-redux";
import OrganizationCard from "../card/OrgCard";

const OrganizationList = () => {
  const organizations = useSelector(state => state.dashboard.orgs);
  
  return (
    <div className="space-y-4">
      {organizations?.map((org) => (
        <OrganizationCard
          key={org._id}
          organization={org}
        />
      ))}
    </div>
  );
};

export default OrganizationList;