const OrganizationAbout = ({ org}) => {
  return (
    <section className="rounded-3xl bg-white p-6 shadow-sm">
      <h2 className="mb-3 text-xl font-semibold text-[#333333]">
        About Organization
      </h2>

      <p className="leading-relaxed text-[#666666]">
        {org.description}
      </p>
    </section>
  );
};

export default OrganizationAbout;