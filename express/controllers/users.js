const { request, response } = require("express")

const getUser = (req = request, res = response) => {
    res.status(200).json({
        msg:"Controller API GET /"
    });
};

const createUser = (req = request, res = response) => {
    res.status(200).json({
        msg:"Controller API POST /"
    });
};

const putUser = (req = request, res = response) => {
    res.status(200).json({
        msg:"Controller API PUT /"
    });
};

const deleteUser = (req = request, res = response) => {
    res.status(200).json({
        msg:"Controller API DELETE /"
    });
};

module.exports = {
    getUser,
    createUser,
    putUser,
    deleteUser
};