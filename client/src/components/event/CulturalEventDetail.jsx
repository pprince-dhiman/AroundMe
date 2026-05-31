// Using in event details page

import { FaMicrophone } from "react-icons/fa";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { MdSell } from "react-icons/md";

const CulturalEventDetail = ({ culturalEvent }) => {
  return (
    <section className="mt-16 space-y-10">
      <h2 className="text-3xl font-bold">Cultural Event Details</h2>

      <div>
        <h3 className="font-semibold text-xl mb-3">Performers</h3>

        <div className="grid md:grid-cols-3 gap-5">
          {culturalEvent?.performers?.map((performer) => (
            <div
              key={performer._id}
              className="flex items-center gap-2 border rounded-xl p-4"
            >
              <FaMicrophone />
              <p>
                {performer.name}, {performer.role}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-xl mb-3">Dress Code</h3>

        <p>{culturalEvent.dressCode.toUpperCase()}</p>
      </div>

      <div>
        <h3 className="font-semibold text-xl mb-3">Passes</h3>

        <div className="grid md:grid-cols-3 gap-4">
          {culturalEvent.passes.map((pass, idx) => (
            <div key={idx} className="border rounded-xl p-5">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">{pass.name}</h4>
                {pass.price === 0 ? (
                  <span>FREE</span>
                ) : (
                  <p className="flex items-center">
                    <MdOutlineCurrencyRupee />
                    {pass.price}
                  </p>
                )}
              </div>
              <div className="flex items-center gap-3 mt-2">
                <MdSell />
                <p className="text-gray-800">
                  <span className="font-medium">{pass.soldCount}</span>/
                  {pass.quantity} Sold
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CulturalEventDetail;
