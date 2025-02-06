import mongoose from "mongoose"

const manager500Schema = mongoose.Schema({
    user_id : { type: String, required: true},
    total_points: {type: Number},
    rank: {type: Number},
    name: {type:String}
})

const Manager500 = mongoose.model("Manager500", manager500Schema)

export default Manager500