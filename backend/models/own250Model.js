import mongoose from "mongoose"

const own250Schema = mongoose.Schema({}, {
    timestamp: true
})

const Own250 = mongoose.model("Own250", own250Schema)

export default Own250