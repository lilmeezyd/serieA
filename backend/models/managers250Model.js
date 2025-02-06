import mongoose from "mongoose"

const manager250Schema = mongoose.Schema({
    user_id: { type: String, required: true },
    total_points: { type: Number },
    rank: { type: Number },
    name: { type: String }
}, {
    timestamp: true
})

const Manager250 = mongoose.model("Manager250", manager250Schema)

export default Manager250