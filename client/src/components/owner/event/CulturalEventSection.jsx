import Loading from "../../Loading";

export default function CulturalEventSection({
  data,
}) {
  if (!data) return <Loading/>;

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold">
        Cultural Event Details
      </h2>

      <p>
        <strong>Dress Code:</strong>{" "} {data.dressCode?.toUpperCase()}
      </p>

      <div className="mt-6">
        <h3 className="mb-3 font-semibold">
          Performers
        </h3>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data.performers.map(
            (performer, index) => (
              <div
                key={index}
                className="rounded-lg border p-4"
              >
                {/* <img
                  src={performer.image}
                  alt={performer.name}
                  className="mb-3 h-16 w-16 rounded-full object-cover"
                /> */}

                <p className="font-medium">
                  {performer.name}
                </p>

                <p className="text-sm text-gray-500">
                  {performer.role}
                </p>
              </div>
            )
          )}
        </div>
      </div>

      <div className="mt-6">
        <h3 className="mb-3 font-semibold">
          Passes
        </h3>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data.passes.map(
            (pass, index) => (
              <div
                key={index}
                className="rounded-lg border p-4"
              >
                <h4 className="font-semibold">
                  {pass.name}
                </h4>

                <p>₹{pass.price}</p>

                <p>
                  Sold: {pass.soldCount}/
                  {pass.quantity}
                </p>

                {pass.isSoldOut && (
                  <span className="mt-2 inline-block rounded bg-red-100 px-2 py-1 text-xs text-red-600">
                    Sold Out
                  </span>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}