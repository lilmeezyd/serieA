import mongoose from "mongoose"

const cap100Schema = mongoose.Schema({}, {
    timestamp: true
})

const Cap100 = mongoose.model("Cap100", cap100Schema)

export default Cap100