const userHealper = require('../utils/userHealpers');
const Users = require('../models/suggerboxUsers');


/**
 * 
 * @param {*} req 
 * @param {*} res 
 * userCreate method will use to create new user this wil take  user email and password as request 

 */
exports.userCreate = async(req, res) => {
    try {
        // /** checkEmailExists :: use email already exiest or not , i'm already validating email from model */
        let userExist = await userHealper.checkEmailExists(req.body.email);
        if (userExist === 0) {
            let hashPassword = await userHealper.createUserPassword(req.body.password)
            let createNewUser = new Users({
                email: req.body.email,
                password: hashPassword
            })
            await createNewUser.save()
            return res.status(201).json({
                "status_code": 201,
                "success": true,
                'message': "user successfully created",
                'data': {}

            });
        } else {
            return res.status(406).json({
                "status_code": 406,
                "success": false,
                'message': "email alredy exists!",
                'data': {}

            });
        }
    } catch (err) {
        return res.status(500).json({
            "status_code": 500,
            "success": false,
            'message': err.message,
            'data': {}

        });
    }
}


/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.deleteUser = async(req, res) => {
    try {
        let objectId = req.params.id;
        // check user exists or not 
        let userExist = await userHealper.checkUserExists(objectId)
        if (userExist === 0) {
            return res.status(200).json({
                "status_code": 406,
                "success": false,
                'message': "user not found",
                'data': {}
            });
        }
        await Users.deleteOne({ _id: objectId });
        return res.status(406).json({
            "status_code": 200,
            "success": true,
            'message': "user successfully deleted",
            'data': {}
        });
    } catch (err) {
        return res.status(500).json({
            "status_code": 500,
            "success": false,
            'message': err.message,
            'data': {}
        });
    }


}