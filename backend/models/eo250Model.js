import mongoose from "mongoose"

const eo250Schema = mongoose.Schema({}, {
    timestamp: true
})

const Eo250 = mongoose.model("Eo250", eo250Schema)

export default Eo250