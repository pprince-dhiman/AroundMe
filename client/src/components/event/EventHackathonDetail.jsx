// Using in event details page

import { FaClipboardCheck, FaTrophy, FaUserTie } from "react-icons/fa";
import { getRegistrationDeadline } from "../../utils/constant";

const EventHackathonDetail = ({ hackathon }) => {
  return (
    <section className="mt-16 space-y-10">
      <h2 className="text-2xl font-bold">About Hackathon</h2>

      {/* Team Size */}
      <div className="border-2 w-fit px-5 py-2 rounded">
        <h3 className="font-semibold text-xl mb-3">Team Size</h3>

        <p className=" bg-yellow-500/60 px-3 py-2 rounded-2xl font-bold text-gray-800">
          {hackathon.teamSize.min} - {hackathon.teamSize.max} Members
        </p>
      </div>

      {/* Prize Pool */}
      <div>
        <h3 className="font-semibold text-xl mb-3">Prize Pool</h3>

        <div className="grid md:grid-cols-3 gap-4">
          {hackathon.prizes.map((prize, index) => (
            <div key={index} className="border rounded-xl p-5">
              <div className="flex items-center gap-1">
                <FaTrophy className="mb-2 text-xl" />
                <h4 className="font-medium text-xl">{prize.position}</h4>
              </div>
              <p>{prize.reward}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tracks */}
      <div>
        <h3 className="font-semibold text-xl mb-3">Tracks</h3>

        <div className="flex flex-wrap gap-3">
          {hackathon.tracks.map((track) => (
            <span key={track} className="bg-[#DFE9F4] px-4 py-2 rounded-full">
              {track}
            </span>
          ))}
        </div>
      </div>

      {/* Problem Statements */}
      <div>
        <h3 className="font-semibold text-xl mb-3">Problem Statements</h3>

        <ul className="list-disc pl-6 space-y-2">
          {hackathon.problemStatements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Mentors */}
      <div>
        <h3 className="font-semibold text-xl mb-3">Mentors</h3>

        <div className="grid md:grid-cols-3 gap-5">
          {hackathon.mentors.map((mentor) => (
            <div
              key={mentor.name}
              className="border rounded-xl p-4 flex items-center gap-5"
            >
              <FaUserTie />
              <p>{mentor.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Judges */}
      <div>
        <h3 className="font-semibold text-xl mb-3">Judges</h3>

        <div className="grid md:grid-cols-3 gap-5">
          {hackathon.judges.map((judge) => (
            <div
              key={judge.name}
              className="border rounded-xl p-4 flex items-center gap-5"
            >
              <FaClipboardCheck />
              <p>{judge.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-xl mb-3">Submission Deadline</h3>
          {/* same funtion for both submition and registration */}
        <p>{getRegistrationDeadline(hackathon.submissionDeadline)}</p>
      </div>

      {/* Judging Criteria */}
      <div>
        <h3 className="font-semibold text-xl mb-3">Judging Criteria</h3>

        <ul className="list-disc pl-6">
          {hackathon.judgingCriteria.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-xl mb-3">Rules</h3>

        <ul className="list-disc pl-6">
          {hackathon.rules.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default EventHackathonDetail;
