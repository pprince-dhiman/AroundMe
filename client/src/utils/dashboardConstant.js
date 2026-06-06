export const calulateAllHackathons = (allOrgs) => {
  if (!allOrgs) return 0;

  const allHackathons = allOrgs.reduce((total, org) => {
    return total + org.totalHackathons;
  }, 0);

  return allHackathons;
};

export const calulateAllWorkshops = (allOrgs) => {
  if (!allOrgs) return 0;

  const allWorkshops = allOrgs.reduce((total, org) => {
    return total + org.totalWorkshops;
  }, 0);

  return allWorkshops;
};

export const calulateAllCulturalEvents = (allOrgs) => {
  if (!allOrgs) return 0;

  const allCulturalEvents = allOrgs.reduce((total, org) => {
    return total + org.totalCulturalEvents;
  }, 0);

  return allCulturalEvents;
};

export const calculateRevenue = ( allOrgs ) => {
  if (!allOrgs) return 0;

  const totalRev = allOrgs.reduce((total, org)=>{
    return total + org.totalRevenue;
  }, 0);

  return totalRev;
}