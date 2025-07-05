import User from "../models/user.models.js";
import apiKeysModel from "../models/apikeys.model.js";

const totalUsers = async(req, res) => {
    try {
        const totalUsersInDB = await User.countDocuments();
        return res.status(201).json({
            totalUser: totalUsersInDB,
        })
    } catch (error) {
        console.log(error)
    }
}
const totalApis = async(req, res) => {
    try {
        const totalApisInDB = await apiKeysModel.countDocuments();
        return res.status(201).json({
            totalApi: totalApisInDB,
        })
    } catch (error) {
        console.log(error)
    }
}

export { totalUsers, totalApis }