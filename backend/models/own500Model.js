import mongoose from "mongoose"

const own500Schema = mongoose.Schema({}, {
    timestamp: true
})

const Own500 = mongoose.model("Own500", own500Schema)

export default Own500