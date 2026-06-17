const validate = (schema) => {
  // returns a middleware
  return (req, res, next) => {
    try {
      // validate the incoming body
      req.body = schema.parse(req.body);
      next();
    } catch (err) {
      return res.status(400).json({ success: false, message: err });
    }
  };
}; 

// zod schema is passed.
export const validateHackathon = (schema) => {
  // returns a middleware
  return (req, res, next) => {
    try {
      // parse the complex data of incoming body (str -> obj/arr)
      req.body.venue = JSON.parse(req.body.venue);
      req.body.pricing = JSON.parse(req.body.pricing);
      req.body.sponsors = JSON.parse(req.body.sponsors);
      req.body.FAQs = JSON.parse(req.body.FAQs);
      req.body.teamSize = JSON.parse(req.body.teamSize);
      req.body.prizes = JSON.parse(req.body.prizes);
      req.body.tracks = JSON.parse(req.body.tracks);
      req.body.problemStatements = JSON.parse(req.body.problemStatements);
      req.body.mentors = JSON.parse(req.body.mentors);
      req.body.judges = JSON.parse(req.body.judges);
      req.body.judgingCriteria = JSON.parse(req.body.judgingCriteria);
      req.body.submissionDeadline = JSON.parse(req.body.submissionDeadline);
      req.body.rules = JSON.parse(req.body.rules);

      // validate the incoming body
      req.body = schema.parse(req.body);
      next();
    } catch (err) {
      console.log(err.issues);
      return res.status(400).json({ success: false, message: err });
    }
  };
};

export const validateWorkshop = (schema) => {
  // returns a middleware
  return (req, res, next) => {
    try {
      // parse the complex data of incoming body (str -> obj/arr)
      req.body.venue = JSON.parse(req.body.venue);
      req.body.pricing = JSON.parse(req.body.pricing);
      req.body.sponsors = JSON.parse(req.body.sponsors);
      req.body.FAQs = JSON.parse(req.body.FAQs);
      req.body.instructor = JSON.parse(req.body.instructor);
      req.body.skillLevel = JSON.parse(req.body.skillLevel);
      req.body.prerequisites = JSON.parse(req.body.prerequisites);
      req.body.agenda = JSON.parse(req.body.agenda);
       
      // validate the incoming body
      req.body = schema.parse(req.body);
      next();
    } catch (err) {
      console.log("Issues in validation: ",err);
      return res.status(400).json({ success: false, message: err });
    }
  };
};

export default validate;