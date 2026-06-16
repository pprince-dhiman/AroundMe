
const PriceSection = ({ register, watch, errors }) => {
  // Get current value of pricing.isFree
  const isFree = watch("pricing.isFree");

  return (
    <div className="my-5 border rounded-lg p-5">
      <h2 className="text-lg font-semibold mb-4">Pricing</h2>

      <div className="flex items-center gap-10 my-3">
        {/* Free Checkbox */}
        <label className="flex items-center gap-2">
          <input type="checkbox" {...register("pricing.isFree")} />
          <span>Free Event</span>
        </label>

        <span className="rounded-lg bg-blue-50 p-3 text-sm text-blue-700">
          {isFree
            ? "🎉 Participants can register for free."
            : "💳 Participants must pay the registration fee to join."}
        </span>
      </div>

      {/* Show only when event is paid */}
      {!isFree && (
        <div className="space-y-4 grid grid-cols-3 gap-10">
          {/* Amount */}
          <div>
            <label className="block mb-1">Amount</label>

            <div className="flex items-center border rounded px-3">
              <input
                type="number"
                {...register("pricing.amount")}
                className="w-full p-2 outline-none"
              />
            </div>

            {errors?.pricing?.amount && (
              <p className="text-red-500 text-sm">
                {errors?.pricing?.amount?.message}
              </p>
            )}
          </div>

          {/* Discount */}
          <div>
            <label className="block mb-1">Discount (%)</label>

            <input
              type="number"
              {...register("pricing.discount")}
              className="w-full border rounded p-2"
            />
          </div>

          {/* Currency */}
          <div>
            <label className="block mb-1">Currency</label>

            <select
              {...register("pricing.currency")}
              className="w-full border rounded p-2"
            >
              <option value="INR">INR</option>
              <option value="USD">USD</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceSection;
