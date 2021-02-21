const bcrypt = require('bcrypt');
const Users = require('../models/suggerboxUsers');


exports.createUserPassword = (pwd) => {
    return new Promise(async(resolve, reject) => {
        try {
            bcrypt.hash(pwd, 10, (err, hash) => {
                if (err) reject(new Error(err));
                else resolve(hash);
            })
        } catch (error) {
            reject(new Error(error))
        }

    })
}

//check user email exist or not

exports.checkEmailExists = (emailId) => {
    return new Promise(async(resolve, reject) => {
        try {
            let userCount = await Users.count({ email: emailId })
            resolve(userCount)
        } catch (error) {
            reject(new Error(error))
        }
    })
}


//check user email exist or not

exports.checkUserExists = (id) => {
    return new Promise(async(resolve, reject) => {
        try {
            let userCount = await Users.count({ _id: id })
            resolve(userCount)
        } catch (error) {
            reject(new Error(error))
        }
    })
}