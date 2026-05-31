import defaultUserProfileImg from "../assets/defaultProfileImg.webp";

export const USER_BACKEND_API = "http://localhost:8000/api/v1/users";
export const EVENT_BACKEND_API = "http://localhost:8000/api/v1/events";
export const ORG_BACKEND_API = "http://localhost:8000/api/v1/orgs";

export const calculateAmount = ({ amount, discount }) => {
  return Math.floor(amount - (amount * discount) / 100);
};

export const getStartDateTime = ({ startDateTime }) => {
  // Create Date object
  const dateObj = new Date(startDateTime);

  // Date -> 27/05/2026
  const formattedDate = dateObj.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  // Time -> 05:46 AM
  const formattedTime = dateObj.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return `${formattedDate}, ${formattedTime}`;
};

export const getEndDateTime = ({ endDateTime }) => {
  // Create Date object
  const dateObj = new Date(endDateTime);

  // Date -> 27/05/2026
  const formattedDate = dateObj.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  // Time -> 05:46 AM
  const formattedTime = dateObj.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return `${formattedDate}, ${formattedTime}`;
};

export const getRegistrationDeadline = (deadline) => {
  // Create Date object
  const dateObj = new Date(deadline);

  // Date -> 27/05/2026
  const formattedDate = dateObj.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  // Time -> 05:46 AM
  const formattedTime = dateObj.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return `${formattedDate}, ${formattedTime}`;
};

export const getTotalEvents = ({
  totalCulturalEvents,
  totalHackathons,
  totalWorkshops,
}) => {
  return totalCulturalEvents + totalHackathons + totalWorkshops;
};

export const profileImg = defaultUserProfileImg;