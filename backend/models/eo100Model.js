import mongoose from "mongoose"

const eo100Schema = mongoose.Schema({}, {
    timestamp: true
})

const Eo100 = mongoose.model("Eo100", eo100Schema)

export default Eo100