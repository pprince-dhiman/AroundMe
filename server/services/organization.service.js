import Organization from "../models/organization.js";

export const createOrganizationService = async ({ body, userId }) => {
    try {
        const { name, email } = body;

        const existingOrg = await Organization.findOne({
            $or: [{ name }, { email }]
        });

        if (existingOrg) {
            if (existingOrg.name === name) {
                throw new Error("This name was already taken");
            }
            if (existingOrg.email === email) {
                throw new Error("This email was already taken");
            }
        }

        // Add logo and banner through cloudinary

        const organization = await Organization.create({
            name: name,
            email: email,
            description: body.description,
            owner: userId,
            logo: body.logo,
            banner: body.banner,
            phone: body.phone,
            website: body.website,
            location: body.location,
            organizationType: body.organizationType,
            foundedYear: body.foundedYear,
            members: body.members,
            totalWorkshops: body.totalWorkshops,
            totalHackathons: body.totalHackathons,
            totalCulturalEvents: body.totalCulturalEvents
        });

        return organization;
    }
    catch (err) {
        console.log("Error is :", err);
        throw err;
    }
}

export const updateOrganizationService = async ({ body, orgId, userId }) => {
    try {
        const { name, email } = body;

        const organization = await Organization.findById(orgId);
        if (!organization) {
            throw new Error("Organization not found.");
        }

        if (organization.owner !== userId) {
            throw new Error("Permission Denied! Only owner can update an organization.");
        }

        // find other document than the updating one with updated name or email.
        const existingOrg = await Organization.findOne({
            _id: { $ne: orgId },
            $or: [{ name }, { email }]
        });

        if (existingOrg) {
            if (existingOrg.name === name) {
                throw new Error("This name was already taken");
            }
            if (existingOrg.email === email) {
                throw new Error("This email was already taken");
            }
        }

        /* everything is authenticated. now,
        proceede to update */

        // update logo and banner through cloudinary also

        const updatedOrg = await Organization.findByIdAndUpdate(orgId, {
            name: name,
            email: email,
            description: body.description,
            logo: body.logo,
            banner: body.banner,
            phone: body.phone,
            website: body.website,
            location: body.location,
            organizationType: body.organizationType,
            foundedYear: body.foundedYear,
            members: body.members,
        }, { new: true, runValidators: true });

        return updatedOrg;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
}