import crypto from "crypto";
import apikeysModel from "../models/apikeys.model.js";

// Get all API keys
const getAllApiKeys = async (req, res) => {
  try {
    const userId = req.user.id; // ✅ extracted from token by middleware
    const apiKeys = await apikeysModel.find({ userId }); // 🔍 filter by userId
    return res.status(200).json({ success: true, data: apiKeys });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

// Create a new API key (secure random)
const generateApiKey = async (req, res) => {
  try {
    const userId = req.user.id;

    const apiKey = crypto.randomBytes(32).toString("hex");

    await apikeysModel.create({
      userId,
      key: apiKey,
    });

    return res.status(201).json({
      success: true,
      apiKey,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete an API key
const deleteApiKey = async (req, res) => {
  try {
    const userId = req.user.id;
    const { key } = req.body;

    const apiKey = await apikeysModel.findOne({ userId, key });

    if (!apiKey) {
      return res.status(404).json({
        success: false,
        message: "API Key not found",
      });
    }

    await apikeysModel.deleteOne({ _id: apiKey._id });

    return res.status(201).json({
      success: true,
      message: "API Key deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export { generateApiKey, getAllApiKeys, deleteApiKey };
