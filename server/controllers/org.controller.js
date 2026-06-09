import Event from "../models/event.js";
import Organization from "../models/organization.js";
import {
  createOrganizationService,
  getOrgEventsServices,
  updateOrganizationService,
} from "../services/organization.service.js";

export const createOrganizationController = async (req, res) => {
  try {
    const { userId } = req;
    const file = req.files;

    const result = await createOrganizationService({
      body: req.body,
      userId,
      file,
    });

    res.json({
      success: true,
      org: result,
      message: `${req.body.name} registered as organization.`,
    });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
};

export const getAllOrganization = async (req, res) => {
  try {
    const orgs = await Organization.find({}).populate("owner");

    res.json({ success: true, organizations: orgs });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
};

export const getMyOrganizations = async (req, res) => {
  try {
    const { userId } = req;
    const myOrgs = await Organization.find({ owner: userId }).sort({
      createdAt: -1,
    });

    res.json({ success: true, myOrgs });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.messgae });
  }
};

export const getOrgById = async (req, res) => {
  try {
    const { orgId } = req.params;

    const organization = await Organization.findById(orgId);
    if (!organization) {
      return res.json({
        success: false,
        messge: "Organization does not found.",
      });
    }

    res.json({ success: true, organization });
  } catch (err) {
    console.log(err);
    res.json({ success: false, messge: err.message });
  }
};

export const updateOrg = async (req, res) => {
  try {
    // owner update -> only self created orgs, not others
    const { orgId } = req.params;
    const { userId } = req;
    const file = req.files;

    const result = await updateOrganizationService({
      body: req.body,
      orgId,
      userId,
      file,
    });

    res.json({
      success: true,
      message: "Organization updated successfully,",
      updatedOrg: result,
    });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
};

export const getOrgEventsController = async (req, res) => {
  try {
    const { orgId } = req.params;

    const result = await getOrgEventsServices({ orgId });

    res.json({ success: true, orgEvents: result });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
};

export const getDashboardOrgDetail = async (req, res) => {
  try {
    const { userId } = req;
    const { orgId } = req.params;

    const org = await Organization.findById(orgId);
    if (!org) {
      return res.json({ success: false, message: "Organizatoin no found." });
    }

    if (org.owner !== userId) {
      return res.json({
        success: false,
        message: "Access denied, You are not owner of this organization.",
      });
    }

    const orgEvents = await Event.find({
      organization: orgId,
      organizer: userId,
    });

    res.json({ success: true, orgDetails: { org, orgEvents } });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
};
