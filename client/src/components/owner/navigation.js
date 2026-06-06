import {
  FiHome,
  FiCalendar,
  FiUsers,
  FiBarChart2,
  FiBriefcase,
  FiSettings,
  FiUser,
} from "react-icons/fi";
import { FaTicket } from "react-icons/fa6";

export const navigation = [
  {
    title: "MAIN",
    items: [
      {
        name: "Dashboard",
        icon: FiHome,
        path: "/organizer/dashboard",
      },
      {
        name: "Events",
        icon: FiCalendar,
        path: "/organizer/events",
      },
      {
        name: "Bookings",
        icon: FaTicket,
        path: "/organizer/bookings",
      },
      {
        name: "Analytics",
        icon: FiBarChart2,
        path: "/organizer/analytics",
      },
    ],
  },

  {
    title: "MANAGE",
    items: [
      {
        name: "Organizations",
        icon: FiBriefcase,
        path: "/organizer/organizations",
      },
      {
        name: "Team Members",
        icon: FiUsers,
        path: "/organizer/team",
      },
    ],
  },

  {
    title: "SETTINGS",
    items: [
      {
        name: "Profile",
        icon: FiUser,
        path: "/organizer/profile",
      },
      {
        name: "Settings",
        icon: FiSettings,
        path: "/organizer/settings",
      },
    ],
  },
];
