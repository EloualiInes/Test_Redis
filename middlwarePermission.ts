import { Request, Response, NextFunction } from "express";
import { RedisService } from "./services/redisService";

const redisService = new RedisService();

export const checkPermissions = (requiredPermissions: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId: string = req.params.userId || req.body.userId;
      if (!userId) return res.status(403).send("User ID required");

      const permissions = await redisService.getPermissions(userId);
      const hasPermission = requiredPermissions.every((perm) => permissions.includes(perm));

      if (hasPermission) {
        next();
      } else {
        res.status(403).send("Access Denied");
      }
    } catch (error) {
      console.error("Permission check error", error);
      res.status(500).send("Internal Server Error");
    }
  };
};
