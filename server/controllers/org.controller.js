import Organization from "../models/organization.js";

export const createOrganization = async (req, res) => {
    try {
        const { userId } = req;
        const { name, description, email, phone, location, foundedYear, website, organizationType, members } = req.body;

        if (!name || !description || !email || !phone || !location || !location.address || !location.city || !location.state || !location.country || !foundedYear) {
            return res.json({ success: false, message: "Fill all the required fields" });
        }

        const existingOrg = await Organization.findOne({
            $or: [{ name }, { email }]
        });

        if(existingOrg){
            if(existingOrg.name === name){
                return res.json({ success: false, message: "This name was already taken"});
            }
            if(existingOrg.email === email){
                return res.json({ success: false, message: "This email was already taken"});
            }
        }

        const dbLocation = {
            address: location.address,
            city: location.city,
            state: location.state,
            country: location.country
        }

        const newOrgData = {
            name, description, email, phone, location: dbLocation, owner: userId, foundedYear
        }

        if (website) {
            newOrgData.website = website;
        }
        if (organizationType) {
            newOrgData.organizationType = organizationType;
        }

        // Add logo and banner through cloudinary

        const org = await Organization.create(newOrgData);
        res.json({ success: true, org, message: `${name} registered as organization.` });
    }
    catch (err) {
        console.log(err);
        res.json({ success: false, message: err.message });
    }
}