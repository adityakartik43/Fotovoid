import mongoose from "mongoose";

const apiKeysSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    key: {
        type: String,
        required: true
    }, 
    expireAt: {
        type: Date,
        default: ()=> new Date(Date.now() + 1000*60*60*24*30)
    },
    isActive: {
        type: Boolean,
        default: true
    }
},{
    timestamps: true
})

const apiKeysModel = mongoose.model('apiKeysModel', apiKeysSchema);

export default apiKeysModel;