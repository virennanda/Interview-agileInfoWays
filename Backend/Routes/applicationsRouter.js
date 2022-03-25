const express = require('express');
const Router = express.Router();
const { addNewApplication, getAllApplications } = require('../Services/applicationService');
const { authenticateToken } = require('../utils/auth');
const { handleBadRequest, handleServerError } = require('../utils/responseHandlers');
const { validateApplication } = require('../utils/validation');

Router.post('/', async (req, res) => {
    try {

        const data = req.body;
        const { value, error } = validateApplication(data);

        if (error) {
            return handleBadRequest(res, error)
        }
        let result = await addNewApplication(value);
        return res.status(201).json({data:result})
    } catch (err) {
        return handleServerError(err);
    }
});

Router.get('/', authenticateToken, async (req, res) => {
    try {
        let page = parseInt(req.body.page) || 0;
        const data = await getAllApplications(page)
        return res.status(200).json({ data })

    } catch (err) {
        return handleServerError(err);
    }
})

module.exports = Router