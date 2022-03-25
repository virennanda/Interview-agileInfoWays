const ApplicationModel = require("../DB/Schema/applicationSchema")

async function addNewApplication (application){
    const newApplication = new ApplicationModel(application);
    await newApplication.save();
    return newApplication;
}
async function getAllApplications(page){
    let limit = 10;
    let skip = limit * page;
    const applications = await ApplicationModel.find().skip(skip).limit(limit);
    return applications;
}
module.exports = {
    addNewApplication,
    getAllApplications
}