const joi = require('joi');
const schema = joi.object().keys({
    basicDetails:joi.object().keys({
        name: joi.string().alphanum().min(3).max(30).required(),
        email: joi.string().email().required(),
        address: joi.string().alphanum().min(5).required(),
        gender: joi.string().alphanum().required(),
        Contact: joi.string().min(10).max(10).required()
    }),
    educationDetails:joi.object().keys({
        SSC:{university:joi.string(),year:joi.string(),cgpa:joi.string()},
        HSC:{university:joi.string(),year:joi.string(),cgpa:joi.string()},
        Graduation:{university:joi.string(),year:joi.string(),cgpa:joi.string()},
        MasterDegree:{university:joi.string(),year:joi.string(),cgpa:joi.string()}
    })
})

const validateApplication = (data) =>{
    return schema.validate(data,{
        abortEarly:false,
    })
}

module.exports={
    validateApplication
}
