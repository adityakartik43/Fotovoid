import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    url: String,
    public_id: String,
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    }
}, {
    timestamps: true
});

const Image = mongoose.model("Image", imageSchema)

export default Image;