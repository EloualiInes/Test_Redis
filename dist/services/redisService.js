"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisService = void 0;
const redis_1 = require("redis");
class RedisService {
    client = (0, redis_1.createClient)();
    constructor() {
        this.client.connect().catch(console.error);
    }
    async cachePermission(userId, permissions) {
        await this.client.set(`permissions:${userId}`, JSON.stringify(permissions), {
            EX: 3600,
        });
    }
    async getPermissions(userId) {
        const cachedPermissions = await this.client.get(`permissions:${userId}`);
        if (cachedPermissions)
            return JSON.parse(cachedPermissions);
        // Simulate database permissions fetch
        const databaseResponsePermission = ["read:patientData", "write:patientData"];
        // const databaseResponsePermission = ["permissionOther"];
        this.cachePermission(userId, databaseResponsePermission);
        return databaseResponsePermission;
    }
}
exports.RedisService = RedisService;
