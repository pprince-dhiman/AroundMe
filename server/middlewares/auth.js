export const isLoggedIn = (req, res, next) => {
    try {
        const { userId } = req.auth();

        if (!userId) {
            return res.json({ success: false, message: "Please login to get details" });
        }

        next();
    }
    catch (err) {
        console.log("Middleware err: ", err);
        res.json({ success: false, message: err.message });
    }
}