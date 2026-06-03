import multer from "multer";

const storage = multer.memoryStorage();

// Allow only images
const imageFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true); // Accepted
  } else {
    cb(new Error("Only images are allowed."), false); // file rejected
  }
};

export const uploadOrgImages = multer({
  storage,
  imageFilter,
  limits: { fileSize: 5 * 1024 * 1024 },
}).fields([{ name: "logo", maxCount: 1 }, { name: "banner", maxCount: 1 }]);
