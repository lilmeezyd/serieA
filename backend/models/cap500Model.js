import mongoose from "mongoose"

const cap500Schema = mongoose.Schema({}, {
    timestamp: true
})

const Cap500 = mongoose.model("Cap500", cap500Schema)

export default Cap500