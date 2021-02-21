const appConfig = require('../config/config.json');

module.exports = (req, res, next) => {
    if (appConfig.client_id == req.headers.client_id) {
        next();
    } else {
        return res.status(401).json({
            error: {
                "status_code": 401,
                "success": false,
                "message": "Invalid Request"
            }
        });
    }
};