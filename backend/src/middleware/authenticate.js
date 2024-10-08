import jwt from 'jsonwebtoken';

export const authenticateToken = (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({
                message: "Access denied, no token provided",
                success: false
            });
        }

        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                return res.status(403).json({
                    message: "Invalid token",
                    success: false
                });
            }

            req.user = user;
            next();
        });
    } catch (error) {
        return res.status(500).json({
            message: "Failed to authenticate token",
            success: false
        });
    }
};
