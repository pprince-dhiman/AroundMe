
// zod schema is passed.
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
    }
}

export default validate;