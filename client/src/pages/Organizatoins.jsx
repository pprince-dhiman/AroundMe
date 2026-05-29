import { FaGlobeAsia } from "react-icons/fa";
import useGetAllOrgs from "../hooks/useGetAllOrgs";
import AllOrganizers from "../components/organization/AllOrganizers";
import AllOrganizations from "../components/organization/AllOrganizations";

const Organizatoins = () => {
  useGetAllOrgs();

  return (
    <section className="min-h-screen bg-[#F2F5FF]">
      <div className="w-full h-80 md:h-105 overflow-hidden relative">
        {/* Banner Image */}
        <img
          src="./orgs-banner.png"
          alt="Organization Banner"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* INTRO SECTION  */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* Heading */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <FaGlobeAsia className="text-[#054C73] text-3xl" />

            <h2 className="text-3xl md:text-5xl font-bold text-[#333333]">
              Discover Organizations
            </h2>
          </div>

          <p className="max-w-4xl text-[#666666] text-base md:text-lg leading-8">
            Organizations are communities, institutions, and groups that bring
            people together around shared goals, innovation, and collaboration.
            Explore student clubs, tech communities, cultural groups, NGOs,
            startups, professional networks, and more.
          </p>
        </div>

        {/* all organizers */}
        <AllOrganizers />

        {/* all organizations */}
        <AllOrganizations />
        
      </div>
    </section>
  );
};

export default Organizatoins;
