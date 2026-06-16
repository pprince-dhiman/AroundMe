const positions = ["Winner", "1st Runner Up", "2nd Runner Up"];

const PrizeSection = ({ register, errors }) => {
  return (
    <div className="pt-3">
      <label className="font-medium text-lg">Prizing</label>

      <div className="space-y-3 mt-2">
        {positions.map((position, index) => (
          <div key={position} className="grid grid-cols-6 gap-3">
            {/* Label */}
            <div className="col-span-1 flex items-center">{position}</div>

            {/* Reward Input */}
            <div className="col-span-5">
              <input
                type="text"
                placeholder={`Reward for ${position}`}
                className="w-full border rounded p-2"
                // reward field
                {...register(`prizes.${index}.reward`)}
              />

              {/* hidden position field */}
              <input
                type="hidden"
                value={position}
                {...register(`prizes.${index}.position`)}
              />

              {errors?.prizes?.[index]?.reward && (
                <p className="text-red-500 text-sm">
                  {errors.prizes[index].reward.message}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrizeSection;
