export const parseFormDataFields = (req, res, next) => {
  if (req.body.location) {
    req.body.location = JSON.parse(req.body.location);
  }

  if (req.body.members) {
    req.body.members = JSON.parse(req.body.members);
  }

  next();
};