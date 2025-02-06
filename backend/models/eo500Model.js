import mongoose from "mongoose"

const eo500Schema = mongoose.Schema({}, {
    timestamp: true
})

const Eo500 = mongoose.model("Eo500", eo500Schema)

export default Eo500