import { useState } from "react";
import {
  FaBuilding,
  FaEnvelope,
  FaPhone,
  FaGlobe,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaImage,
} from "react-icons/fa";

const CreateOrganization = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    email: "",
    phone: "",
    website: "",

    location: {
      address: "",
      city: "",
      state: "",
      country: "",
    },

    organizationType: "other",
    foundedYear: "",
    logo: null,
    banner: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (["address", "city", "state", "country"].includes(name)) {
      setFormData((prev) => ({
        ...prev,
        location: {
          ...prev.location,
          [name]: value,
        },
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      if (key === "location") {
        payload.append("location", JSON.stringify(value));
      } else {
        payload.append(key, value);
      }
    });

    console.log("Submit Organization");
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="bg-white rounded-xl shadow-md border p-8">
        <h1 className="text-3xl font-bold text-[#054C73] mb-2">
          Create Organization
        </h1>

        <p className="text-gray-500 mb-8">
          Create an organization profile to publish hackathons, workshops and
          cultural events.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Basic Information</h2>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="font-medium mb-2 block">
                  Organization Name
                </label>

                <div className="relative">
                  <FaBuilding className="absolute left-3 top-4 text-gray-400" />

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border rounded-lg pl-10 p-3 outline-none focus:ring-2 focus:ring-[#054C73]"
                    placeholder="Google Developer Group"
                  />
                </div>
              </div>

              <div>
                <label className="font-medium mb-2 block">
                  Organization Type
                </label>

                <select
                  name="organizationType"
                  value={formData.organizationType}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-[#054C73]"
                >
                  <option value="college">College</option>
                  <option value="company">Company</option>
                  <option value="community">Community</option>
                  <option value="startup">Startup</option>
                  <option value="ngo">NGO</option>
                  <option value="school">School</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="mt-5">
              <label className="font-medium mb-2 block">Description</label>

              <textarea
                rows={5}
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Tell people about your organization..."
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-[#054C73]"
              />
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-4 text-gray-400" />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="organization@email.com"
                  className="w-full border rounded-lg pl-10 p-3 outline-none focus:ring-2 focus:ring-[#054C73]"
                />
              </div>

              <div className="relative">
                <FaPhone className="absolute left-3 top-4 text-gray-400" />

                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full border rounded-lg pl-10 p-3 outline-none focus:ring-2 focus:ring-[#054C73]"
                />
              </div>

              <div className="relative md:col-span-2">
                <FaGlobe className="absolute left-3 top-4 text-gray-400" />

                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://example.com"
                  className="w-full border rounded-lg pl-10 p-3 outline-none focus:ring-2 focus:ring-[#054C73]"
                />
              </div>
            </div>
          </section>

          {/* Location */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Location</h2>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="relative md:col-span-2">
                <FaMapMarkerAlt className="absolute left-3 top-4 text-gray-400" />

                <input
                  type="text"
                  name="address"
                  value={formData.location.address}
                  onChange={handleChange}
                  placeholder="Street Address"
                  className="w-full border rounded-lg pl-10 p-3 outline-none focus:ring-2 focus:ring-[#054C73]"
                />
              </div>

              <input
                type="text"
                name="city"
                value={formData.location.city}
                onChange={handleChange}
                placeholder="City"
                className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-[#054C73]"
              />

              <input
                type="text"
                name="state"
                value={formData.location.state}
                onChange={handleChange}
                placeholder="State"
                className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-[#054C73]"
              />

              <input
                type="text"
                name="country"
                value={formData.location.country}
                onChange={handleChange}
                placeholder="Country"
                className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-[#054C73]"
              />
            </div>
          </section>

          {/* Organization Details */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Organization Details</h2>

            <div className="relative">
              <FaCalendarAlt className="absolute left-3 top-4 text-gray-400" />

              <input
                type="number"
                name="foundedYear"
                value={formData.foundedYear}
                onChange={handleChange}
                placeholder="Founded Year"
                className="w-full border rounded-lg pl-10 p-3 outline-none focus:ring-2 focus:ring-[#054C73]"
              />
            </div>
          </section>

          {/* Media */}
          <section>
            <h2 className="text-xl font-semibold mb-4">
              Organization Branding
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="font-medium block mb-2">Logo</label>

                <div className="border-2 border-dashed rounded-lg p-5">
                  <FaImage className="text-3xl text-gray-400 mb-3" />

                  <input
                    type="file"
                    name="logo"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </div>
              </div>

              <div>
                <label className="font-medium block mb-2">Banner</label>

                <div className="border-2 border-dashed rounded-lg p-5">
                  <FaImage className="text-3xl text-gray-400 mb-3" />

                  <input
                    type="file"
                    name="banner"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
            </div>
          </section>

          <button
            type="submit"
            className="w-full bg-[#054C73] text-white py-4 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Create Organization
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateOrganization;