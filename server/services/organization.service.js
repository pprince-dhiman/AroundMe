import Event from "../models/event.js";
import Organization from "../models/organization.js";
import { getDataURI } from "../utils/DataUri.js";
import cloudinary from "../utils/cloudinary.js";

export const createOrganizationService = async ({ body, userId, file }) => {
  try {
    const { name, email } = body;
    const { logo, banner } = file;
    let logoUrl = "";
    let bannerUrl = "";

    if (!logo) {
      throw new Error("Please upload a logo.");
    }
    if (!banner) {
      throw new Error("Please upload banner.");
    }
    // upload logo to cloudinary
    const logoURI = getDataURI(logo[0]);

    logoUrl = await cloudinary.uploader.upload(logoURI.content, {
      resource_type: "image",
      folder: "AroundMe/Orgs/Logo",
    });

    // upload banner to cloudinary
    const bannerURI = getDataURI(banner[0]);

    bannerUrl = await cloudinary.uploader.upload(bannerURI.content, {
      resource_type: "image",
      folder: "AroundMe/Orgs/Banner",
    });

    const existingOrg = await Organization.findOne({
      $or: [{ name }, { email }],
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
      logo: logoUrl.secure_url,
      banner: bannerUrl.secure_url,
      phone: body.phone,
      website: body.website,
      location: body.location,
      organizationType: body.organizationType,
      foundedYear: body.foundedYear,
      members: body.members,
    });

    return organization;
  } catch (err) {
    throw err;
  }
};

export const updateOrganizationService = async ({ body, orgId, userId }) => {
  try {
    const { name, email } = body;

    const organization = await Organization.findById(orgId);
    if (!organization) {
      throw new Error("Organization not found.");
    }

    if (organization.owner !== userId) {
      throw new Error(
        "Permission Denied! Only owner can update an organization.",
      );
    }

    // find other document than the updating one with updated name or email.
    const existingOrg = await Organization.findOne({
      _id: { $ne: orgId },
      $or: [{ name }, { email }],
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

    const updatedOrg = await Organization.findByIdAndUpdate(
      orgId,
      {
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
      },
      { new: true, runValidators: true },
    );

    return updatedOrg;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getOrgEventsServices = async ({ orgId }) => {
  try {
    const events = await Event.find({ organization: orgId });
    return events;
  } catch (err) {
    throw err;
  }
};
