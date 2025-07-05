import Image from "../models/image.model.js"

const getTotalImage = async(req, res) => {
    try {
        const count = await Image.countDocuments();
        return res.status(201).json({
            totalImage: count,
        })
    } catch (error) {
        console.log(error)
    }
}


export { getTotalImage }