export const createHackathonDefaultValues = {
  title: "",
  description: "",
  mode: "",
  venue: {
    address: "",
    city: "",
    state: "",
    country: "",
  },
  onlineLink: "",
  startDateTime: "",
  endDateTime: "",
  registrationDeadline: "",
  maxParticipants: 0,
  pricing: {
    isFree: true,
    amount: 0,
    discount: 0,
    currency: "INR",
  },
  sponsors: [],
  FAQs: [
    {
      question: "",
      answer: "",
    },
  ],
  teamSize: {
    min: "",
    max: "",
  },
  // "Winner", "1st Runner Up", "2nd Runner Up"
  prizes: [
    { position: "Winner", reward: "" },
    { position: "1st Runner Up", reward: "" },
    { position: "2nd Runner Up", reward: "" },
  ],
  tracks: [""],
  problemStatements: [""],
  mentors: [
    {
      name: "",
      role: "",
    },
  ],
  judges: [
    {
      name: "",
      role: "",
    },
  ],
  judgingCriteria: [""],
  submissionDeadline: "",
  rules: [""],
};

export const createWorkshopDefaultValues = {
  title: "",
  description: "",
  mode: "",
  venue: {
    address: "",
    city: "",
    state: "",
    country: "",
  },
  onlineLink: "",
  startDateTime: "",
  endDateTime: "",
  registrationDeadline: "",
  maxParticipants: 0,
  pricing: {
    isFree: true,
    amount: 0,
    discount: 0,
    currency: "INR",
  },
  sponsors: [],
  FAQs: [
    {
      question: "",
      answer: "",
    },
  ],
  instructor: {
    name: "",
    image: "",
    bio: "",
  },
  skillLevel: "beginner",
  prerequisites: [],
  agenda: [
    {
      title: "",
      startTime: "",
      endTime: "",
    },
  ]
};
