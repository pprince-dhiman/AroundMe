import { FiUploadCloud } from "react-icons/fi";

const ImageUpload = ({ label, preview, onChange }) => {
  return (
    <div>
      <p className="mb-2 font-medium text-[#333333]">{label}</p>

      <label
        className="
          flex
          flex-col
          items-center
          justify-center
          border-2
          border-dashed
          border-gray-300
          rounded-xl
          cursor-pointer
          overflow-hidden
          bg-[#F2F5FF]
          hover:border-[#054C73]
          transition
        "
      >
        {preview ? (
          <img src={preview} alt={label} className="w-full h-52 object-cover" />
        ) : (
          <div className="py-12 text-center">
            <FiUploadCloud size={40} className="mx-auto text-[#054C73]" />

            <p className="mt-2 text-sm text-gray-500">Click to upload image</p>
          </div>
        )}

        <input type="file" accept="image/*" hidden onChange={onChange} />
      </label>
    </div>
  );
};

export default ImageUpload;
