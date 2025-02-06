import mongoose from "mongoose"

const cap250Schema = mongoose.Schema({}, {
    timestamp: true
})

const Cap250 = mongoose.model("Cap250", cap250Schema)

export default Cap250