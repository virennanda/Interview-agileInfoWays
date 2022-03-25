const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema({
    basicDetails: {
        name: String,
        email: String,
        address: String,
        gender: String,
        Contact: String
    },
    educationDetails:{
        SSC:{university:String,year:String,cgpa:String},
        HSC:{university:String,year:String,cgpa:String},
        Graduation:{university:String,year:String,cgpa:String},
        MasterDegree:{university:String,year:String,cgpa:String}
    }
})
const ApplicationModel = mongoose.model('Application', ApplicationSchema )
module.exports = ApplicationModel;