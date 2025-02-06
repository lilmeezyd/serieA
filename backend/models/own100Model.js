import mongoose from "mongoose"

const own100Schema = mongoose.Schema({}, {
    timestamp: true
})

const Own100 = mongoose.model("Own100", own100Schema)

export default Own100