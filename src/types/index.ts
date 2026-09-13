export interface User {
  id: string;
  username: string;
  email: string;
  status: 'ACTIVE' | 'BLOCKED' | 'EXPIRED';
  plan: string;
  trafficUsed: number;
  trafficLimit: number;
  deviceCount: number;
  maxDevices: number;
  lastSeen: string;
  createdAt: string;
  expiresAt: string;
  note?: string;
}

export interface License {
  id: string;
  code: string;
  status: 'ACTIVE' | 'EXPIRED' | 'SUSPENDED' | 'REVOKED' | 'PENDING';
  userId?: string;
  deviceId?: string;
  planId: string;
  createdAt: string;
  expiresAt: string;
  trafficUsed: number;
  trafficLimit: number;
  maxDevices: number;
  maxConnections: number;
  note?: string;
}

export interface Plan {
  id: string;
  name: string;
  duration: number;
  trafficLimit: number;
  maxDevices: number;
  maxConnections: number;
  speed: string;
  allowedProtocols: string[];
  allowedCountries: string[];
  price: number;
  status: 'ACTIVE' | 'INACTIVE';
}

export interface Server {
  id: string;
  name: string;
  country: string;
  city: string;
  flag: string;
  ip: string;
  domain: string;
  port: number;
  protocol: string;
  transport: string;
  tls: boolean;
  status: 'ONLINE' | 'OFFLINE' | 'DEGRADED' | 'UNKNOWN';
  ping: number;
  cpu: number;
  ram: number;
  traffic: number;
  connections: number;
  uptime: number;
  lastSeen: string;
  priority: number;
  weight: number;
  capacity: number;
  enabled: boolean;
}

export interface Device {
  id: string;
  name: string;
  deviceId: string;
  userId: string;
  username: string;
  platform: string;
  appVersion: string;
  lastSeen: string;
  ip: string;
  status: 'ACTIVE' | 'BLOCKED';
  registeredAt: string;
}

export interface Session {
  id: string;
  userId: string;
  username: string;
  deviceId: string;
  deviceName: string;
  serverId: string;
  serverName: string;
  connectedAt: string;
  ip: string;
  downloadSpeed: number;
  uploadSpeed: number;
  trafficUsed: number;
}

export interface AuditLog {
  id: string;
  admin: string;
  action: string;
  target: string;
  targetType: string;
  ip: string;
  result: 'SUCCESS' | 'FAILED';
  timestamp: string;
  details?: string;
}

export interface RemoteConfig {
  id: string;
  key: string;
  value: string;
  type: 'string' | 'number' | 'boolean' | 'json';
  description: string;
  updatedAt: string;
  updatedBy: string;
}

export interface AppVersion {
  id: string;
  version: string;
  buildNumber: number;
  minSupported: boolean;
  forceUpdate: boolean;
  apkUrl: string;
  changelog: string;
  releasedAt: string;
  platform: string;
}

export interface AdminUser {
  id: string;
  username: string;
  email: string;
  role: 'SUPER_ADMIN' | 'ADMIN' | 'OPERATOR' | 'SUPPORT' | 'VIEWER';
  status: 'ACTIVE' | 'DISABLED';
  lastLogin: string;
  createdAt: string;
}
