import { createClient } from "redis";

export class RedisService {
  private client = createClient();

  constructor() {
    this.client.connect().catch(console.error);
  }

  async cachePermission(userId: string, permissions: string[]) {
    await this.client.set(`permissions:${userId}`, JSON.stringify(permissions), {
      EX: 3600,
    });
  }

  async getPermissions(userId: string): Promise<string[]> {
    const cachedPermissions = await this.client.get(`permissions:${userId}`);
    if (cachedPermissions) return JSON.parse(cachedPermissions);

    // Simulate database permissions fetch
    const databaseResponsePermission = ["read:patientData", "write:patientData"];
    // const databaseResponsePermission = ["permissionOther"];
    this.cachePermission(userId, databaseResponsePermission);
    return databaseResponsePermission;
  }
}
