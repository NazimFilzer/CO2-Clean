const mongoose = require("mongoose");


const emissionSchema = {
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    material: String,
    co2: Number
};

const Emission = mongoose.model("Emission", emissionSchema);

module.exports= Emission;