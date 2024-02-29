const jwt = require('jsonwebtoken');
const jwtSecret = 'eeca557f5623e420aec719bdea48493fb584f14c2636016ee2c938a91836757fddc25d';


exports.adminAuth = (req, res, next) => {
    const token = req.cookies.jwt
    if (token) {
        jwt.verify(token, jwtSecret, (err, decodedToken) => {
            if (err) {
                return res.status(401).json({ message: 'Not authorized' })
            } else {
                if (decodedToken.role !== 'admin') {
                    return res.status(401).json({ message: 'Not authorized' })
                } else {
                    next()
                }
            }
        })
    } else {
        return res.status(401).json({ message: 'Not authorized, token not available' })
    }
}

exports.userAuth = (req, res, next) => {
    const token = req.cookies.jwt
    if (token) {
        jwt.verify(token, jwtSecret, (err, decodedToken) => {
            if (err) {
                return res.status(401).json({ message: 'Not authorized' })
            } else {
                if (decodedToken.role !== 'Basic' && decodedToken.role !== 'admin') {
                    return res.status(401).json({ message: 'Not authorized' })
                } else {
                    next()
                }
            }
        })
    } else {
        return res.status(401).json({ message: 'Not authorized, token not available' })
    }
}