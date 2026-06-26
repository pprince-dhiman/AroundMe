import axios from "axios";

export const getCoordinates = async (venue) => {
  const fullAddress = `${venue.city}, ${venue.state}, ${venue.country}`;

  const response = await axios.get(
    "https://nominatim.openstreetmap.org/search",
    {
      params: {
        q: fullAddress,
        format: "json",
        limit: 1,
      },
      headers: {
        "User-Agent": "AroundMe",
      },
    },
  );

  if (!response.data.length) {
    throw new Error(
      "Address not found",
    );
  }

  return {
    lat: Number(response.data[0].lat),
    lon: Number(response.data[0].lon),
  };
};
