export const parseFormDataFields = (req, res, next) => {
  try {
    if (req.body.location) {
      req.body.location = JSON.parse(req.body.location);
    }

    if (req.body.members) {
      req.body.members = JSON.parse(req.body.members);
    }

    next();
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
};
