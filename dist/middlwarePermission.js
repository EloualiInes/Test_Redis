"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkPermissions = void 0;
const redisService_1 = require("./services/redisService");
const redisService = new redisService_1.RedisService();
const checkPermissions = (requiredPermissions) => {
    return async (req, res, next) => {
        try {
            const userId = req.params.userId || req.body.userId;
            if (!userId)
                return res.status(403).send("User ID required");
            const permissions = await redisService.getPermissions(userId);
            const hasPermission = requiredPermissions.every((perm) => permissions.includes(perm));
            if (hasPermission) {
                next();
            }
            else {
                res.status(403).send("Access Denied");
            }
        }
        catch (error) {
            console.error("Permission check error", error);
            res.status(500).send("Internal Server Error");
        }
    };
};
exports.checkPermissions = checkPermissions;
