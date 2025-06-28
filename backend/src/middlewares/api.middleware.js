import apiKeysModel from "../models/apikeys.model.js";

const validateApiKey = async (req, res, next) => {
  try {
    const apikey = req.header("x-api-key");
  
    if (!apikey) {
      return res.status(401).json({
        success: false,
        message: "API key is required",
      });
    }
  
    const keyDoc = await apiKeysModel.findOne({ key: apikey, isActive: true });
  
    if (!keyDoc) {
      return res.status(403).json({
        success: false,
        message: "Invalid or inactive api key",
      });
    }
  
    if (keyDoc.expireAt && keyDoc.expireAt < new Date()) {
      return res
        .status(403)
        .json({ success: false, message: "API key has expired" });
    }
  
    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
};

export default validateApiKey;