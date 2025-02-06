import mongoose from "mongoose"

const manager100Schema = mongoose.Schema({
    user_id: { type: String, required: true },
    total_points: { type: Number },
    rank: { type: Number },
    name: { type: String }
}, {
    timestamp: true
})

const Manager100 = mongoose.model("Manager100", manager100Schema)

export default Manager100