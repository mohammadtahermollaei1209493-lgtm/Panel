import { User, License, Plan, Server, Device, Session, AuditLog, RemoteConfig, AppVersion, AdminUser } from '../types';

export const users: User[] = [
  { id: '1', username: 'ali_m', email: 'ali@example.com', status: 'ACTIVE', plan: 'یک ماهه', trafficUsed: 45.2, trafficLimit: 100, deviceCount: 2, maxDevices: 3, lastSeen: '۱۴۰۴/۰۳/۱۵ ۱۴:۳۰', createdAt: '۱۴۰۳/۱۲/۰۱', expiresAt: '۱۴۰۴/۰۴/۰۱' },
  { id: '2', username: 'sara_k', email: 'sara@example.com', status: 'ACTIVE', plan: 'سه ماهه', trafficUsed: 120.5, trafficLimit: 300, deviceCount: 1, maxDevices: 3, lastSeen: '۱۴۰۴/۰۳/۱۵ ۱۲:۰۰', createdAt: '۱۴۰۳/۱۱/۱۵', expiresAt: '۱۴۰۴/۰۵/۱۵' },
  { id: '3', username: 'reza_n', email: 'reza@example.com', status: 'BLOCKED', plan: 'یک ماهه', trafficUsed: 100, trafficLimit: 100, deviceCount: 0, maxDevices: 2, lastSeen: '۱۴۰۴/۰۳/۱۰ ۰۸:۱۵', createdAt: '۱۴۰۴/۰۱/۰۱', expiresAt: '۱۴۰۴/۰۴/۰۱' },
  { id: '4', username: 'maryam_h', email: 'maryam@example.com', status: 'ACTIVE', plan: 'شش ماهه', trafficUsed: 250, trafficLimit: 500, deviceCount: 3, maxDevices: 5, lastSeen: '۱۴۰۴/۰۳/۱۵ ۱۶:۴۵', createdAt: '۱۴۰۳/۰۹/۰۱', expiresAt: '۱۴۰۴/۰۶/۰۱' },
  { id: '5', username: 'hossein_a', email: 'hossein@example.com', status: 'EXPIRED', plan: 'یک ماهه', trafficUsed: 80, trafficLimit: 100, deviceCount: 0, maxDevices: 2, lastSeen: '۱۴۰۴/۰۲/۲۸ ۲۰:۰۰', createdAt: '۱۴۰۴/۰۱/۲۸', expiresAt: '۱۴۰۴/۰۲/۲۸' },
  { id: '6', username: 'fateme_r', email: 'fateme@example.com', status: 'ACTIVE', plan: 'یک ساله', trafficUsed: 800, trafficLimit: 1000, deviceCount: 2, maxDevices: 5, lastSeen: '۱۴۰۴/۰۳/۱۵ ۱۸:۲۰', createdAt: '۱۴۰۳/۰۳/۱۵', expiresAt: '۱۴۰۴/۰۳/۱۵' },
  { id: '7', username: 'amir_t', email: 'amir@example.com', status: 'ACTIVE', plan: 'سه ماهه', trafficUsed: 55, trafficLimit: 300, deviceCount: 1, maxDevices: 3, lastSeen: '۱۴۰۴/۰۳/۱۵ ۱۰:۳۰', createdAt: '۱۴۰۴/۰۱/۱۵', expiresAt: '۱۴۰۴/۰۴/۱۵' },
  { id: '8', username: 'narges_b', email: 'narges@example.com', status: 'ACTIVE', plan: 'شش ماهه', trafficUsed: 180, trafficLimit: 500, deviceCount: 2, maxDevices: 5, lastSeen: '۱۴۰۴/۰۳/۱۴ ۲۲:۱۰', createdAt: '۱۴۰۳/۰۹/۱۵', expiresAt: '۱۴۰۴/۰۳/۱۵' },
];

export const licenses: License[] = [
  { id: '1', code: 'IFIX-A1B2-C3D4-E5F6', status: 'ACTIVE', userId: '1', deviceId: 'dev_001', planId: '1', createdAt: '۱۴۰۳/۱۲/۰۱', expiresAt: '۱۴۰۴/۰۴/۰۱', trafficUsed: 45.2, trafficLimit: 100, maxDevices: 3, maxConnections: 5 },
  { id: '2', code: 'IFIX-G7H8-I9J0-K1L2', status: 'ACTIVE', userId: '2', deviceId: 'dev_002', planId: '2', createdAt: '۱۴۰۳/۱۱/۱۵', expiresAt: '۱۴۰۴/۰۵/۱۵', trafficUsed: 120.5, trafficLimit: 300, maxDevices: 3, maxConnections: 5 },
  { id: '3', code: 'IFIX-M3N4-O5P6-Q7R8', status: 'SUSPENDED', userId: '3', deviceId: 'dev_003', planId: '1', createdAt: '۱۴۰۴/۰۱/۰۱', expiresAt: '۱۴۰۴/۰۴/۰۱', trafficUsed: 100, trafficLimit: 100, maxDevices: 2, maxConnections: 3 },
  { id: '4', code: 'IFIX-S9T0-U1V2-W3X4', status: 'ACTIVE', userId: '4', deviceId: 'dev_004', planId: '3', createdAt: '۱۴۰۳/۰۹/۰۱', expiresAt: '۱۴۰۴/۰۶/۰۱', trafficUsed: 250, trafficLimit: 500, maxDevices: 5, maxConnections: 10 },
  { id: '5', code: 'IFIX-Y5Z6-A7B8-C9D0', status: 'EXPIRED', userId: '5', planId: '1', createdAt: '۱۴۰۴/۰۱/۲۸', expiresAt: '۱۴۰۴/۰۲/۲۸', trafficUsed: 80, trafficLimit: 100, maxDevices: 2, maxConnections: 3 },
  { id: '6', code: 'IFIX-E1F2-G3H4-I5J6', status: 'ACTIVE', userId: '6', deviceId: 'dev_006', planId: '4', createdAt: '۱۴۰۳/۰۳/۱۵', expiresAt: '۱۴۰۴/۰۳/۱۵', trafficUsed: 800, trafficLimit: 1000, maxDevices: 5, maxConnections: 10 },
  { id: '7', code: 'IFIX-K7L8-M9N0-O1P2', status: 'PENDING', planId: '1', createdAt: '۱۴۰۴/۰۳/۱۵', expiresAt: '۱۴۰۴/۰۴/۱۵', trafficUsed: 0, trafficLimit: 100, maxDevices: 2, maxConnections: 3 },
  { id: '8', code: 'IFIX-Q3R4-S5T6-U7V8', status: 'ACTIVE', userId: '7', deviceId: 'dev_007', planId: '2', createdAt: '۱۴۰۴/۰۱/۱۵', expiresAt: '۱۴۰۴/۰۴/۱۵', trafficUsed: 55, trafficLimit: 300, maxDevices: 3, maxConnections: 5 },
  { id: '9', code: 'IFIX-W9X0-Y1Z2-A3B4', status: 'REVOKED', planId: '1', createdAt: '۱۴۰۳/۱۰/۰۱', expiresAt: '۱۴۰۴/۰۱/۰۱', trafficUsed: 95, trafficLimit: 100, maxDevices: 2, maxConnections: 3 },
  { id: '10', code: 'IFIX-C5D6-E7F8-G9H0', status: 'ACTIVE', userId: '8', deviceId: 'dev_008', planId: '3', createdAt: '۱۴۰۳/۰۹/۱۵', expiresAt: '۱۴۰۴/۰۳/۱۵', trafficUsed: 180, trafficLimit: 500, maxDevices: 5, maxConnections: 10 },
];

export const plans: Plan[] = [
  { id: '1', name: 'یک ماهه', duration: 30, trafficLimit: 100, maxDevices: 2, maxConnections: 3, speed: 'نامحدود', allowedProtocols: ['VLESS', 'VMess'], allowedCountries: ['DE', 'NL'], price: 49000, status: 'ACTIVE' },
  { id: '2', name: 'سه ماهه', duration: 90, trafficLimit: 300, maxDevices: 3, maxConnections: 5, speed: 'نامحدود', allowedProtocols: ['VLESS', 'VMess', 'Trojan'], allowedCountries: ['DE', 'NL', 'FI', 'TR'], price: 129000, status: 'ACTIVE' },
  { id: '3', name: 'شش ماهه', duration: 180, trafficLimit: 500, maxDevices: 5, maxConnections: 10, speed: 'نامحدود', allowedProtocols: ['VLESS', 'VMess', 'Trojan', 'SS'], allowedCountries: ['DE', 'NL', 'FI', 'TR', 'US'], price: 229000, status: 'ACTIVE' },
  { id: '4', name: 'یک ساله', duration: 365, trafficLimit: 1000, maxDevices: 5, maxConnections: 10, speed: 'نامحدود', allowedProtocols: ['VLESS', 'VMess', 'Trojan', 'SS'], allowedCountries: ['DE', 'NL', 'FI', 'TR', 'US', 'UK'], price: 399000, status: 'ACTIVE' },
  { id: '5', name: 'آزمایشی', duration: 7, trafficLimit: 5, maxDevices: 1, maxConnections: 1, speed: '10 Mbps', allowedProtocols: ['VLESS'], allowedCountries: ['DE'], price: 0, status: 'ACTIVE' },
];

export const servers: Server[] = [
  { id: '1', name: 'Germany-1', country: 'آلمان', city: 'فرانکفورت', flag: '🇩🇪', ip: '185.xxx.xxx.10', domain: 'de1.ifixvpn.com', port: 443, protocol: 'VLESS', transport: 'Reality', tls: true, status: 'ONLINE', ping: 45, cpu: 35, ram: 42, traffic: 1250, connections: 28, uptime: 99.8, lastSeen: '۱۴۰۴/۰۳/۱۵ ۱۸:۳۰', priority: 1, weight: 100, capacity: 500, enabled: true },
  { id: '2', name: 'Netherlands-1', country: 'هلند', city: 'آمستردام', flag: '🇳🇱', ip: '45.xxx.xxx.20', domain: 'nl1.ifixvpn.com', port: 443, protocol: 'VLESS', transport: 'Reality', tls: true, status: 'ONLINE', ping: 52, cpu: 28, ram: 35, traffic: 980, connections: 22, uptime: 99.5, lastSeen: '۱۴۰۴/۰۳/۱۵ ۱۸:۳۰', priority: 2, weight: 80, capacity: 400, enabled: true },
  { id: '3', name: 'Finland-1', country: 'فنلاند', city: 'هلسینکی', flag: '🇫🇮', ip: '91.xxx.xxx.30', domain: 'fi1.ifixvpn.com', port: 443, protocol: 'VLESS', transport: 'WebSocket', tls: true, status: 'ONLINE', ping: 68, cpu: 15, ram: 22, traffic: 450, connections: 12, uptime: 99.9, lastSeen: '۱۴۰۴/۰۳/۱۵ ۱۸:۳۰', priority: 3, weight: 60, capacity: 300, enabled: true },
  { id: '4', name: 'Turkey-1', country: 'ترکیه', city: 'استانبول', flag: '🇹🇷', ip: '78.xxx.xxx.40', domain: 'tr1.ifixvpn.com', port: 443, protocol: 'Trojan', transport: 'TCP', tls: true, status: 'DEGRADED', ping: 32, cpu: 78, ram: 65, traffic: 2100, connections: 85, uptime: 95.2, lastSeen: '۱۴۰۴/۰۳/۱۵ ۱۸:۲۵', priority: 4, weight: 90, capacity: 600, enabled: true },
  { id: '5', name: 'US-1', country: 'آمریکا', city: 'نیویورک', flag: '🇺🇸', ip: '104.xxx.xxx.50', domain: 'us1.ifixvpn.com', port: 443, protocol: 'VLESS', transport: 'gRPC', tls: true, status: 'ONLINE', ping: 120, cpu: 22, ram: 30, traffic: 680, connections: 15, uptime: 99.7, lastSeen: '۱۴۰۴/۰۳/۱۵ ۱۸:۳۰', priority: 5, weight: 50, capacity: 350, enabled: true },
  { id: '6', name: 'UK-1', country: 'انگلستان', city: 'لندن', flag: '🇬🇧', ip: '51.xxx.xxx.60', domain: 'uk1.ifixvpn.com', port: 443, protocol: 'VMess', transport: 'WebSocket', tls: true, status: 'OFFLINE', ping: 0, cpu: 0, ram: 0, traffic: 0, connections: 0, uptime: 0, lastSeen: '۱۴۰۴/۰۳/۱۴ ۰۲:۰۰', priority: 6, weight: 40, capacity: 200, enabled: false },
  { id: '7', name: 'Germany-2', country: 'آلمان', city: 'برلین', flag: '🇩🇪', ip: '185.xxx.xxx.70', domain: 'de2.ifixvpn.com', port: 8443, protocol: 'VLESS', transport: 'Reality', tls: true, status: 'ONLINE', ping: 48, cpu: 40, ram: 48, traffic: 890, connections: 20, uptime: 99.6, lastSeen: '۱۴۰۴/۰۳/۱۵ ۱۸:۳۰', priority: 2, weight: 70, capacity: 350, enabled: true },
];

export const devices: Device[] = [
  { id: '1', name: 'Samsung Galaxy S24', deviceId: 'dev_001', userId: '1', username: 'ali_m', platform: 'Android 14', appVersion: '1.2.0', lastSeen: '۱۴۰۴/۰۳/۱۵ ۱۴:۳۰', ip: '5.120.xx.xx', status: 'ACTIVE', registeredAt: '۱۴۰۳/۱۲/۰۱' },
  { id: '2', name: 'iPhone 15 Pro', deviceId: 'dev_002', userId: '2', username: 'sara_k', platform: 'iOS 17', appVersion: '1.2.0', lastSeen: '۱۴۰۴/۰۳/۱۵ ۱۲:۰۰', ip: '2.180.xx.xx', status: 'ACTIVE', registeredAt: '۱۴۰۳/۱۱/۱۵' },
  { id: '3', name: 'Xiaomi 14', deviceId: 'dev_003', userId: '3', username: 'reza_n', platform: 'Android 14', appVersion: '1.1.0', lastSeen: '۱۴۰۴/۰۳/۱۰ ۰۸:۱۵', ip: '78.100.xx.xx', status: 'BLOCKED', registeredAt: '۱۴۰۴/۰۱/۰۱' },
  { id: '4', name: 'iPad Air', deviceId: 'dev_004', userId: '4', username: 'maryam_h', platform: 'iPadOS 17', appVersion: '1.2.0', lastSeen: '۱۴۰۴/۰۳/۱۵ ۱۶:۴۵', ip: '5.22.xx.xx', status: 'ACTIVE', registeredAt: '۱۴۰۳/۰۹/۰۱' },
  { id: '5', name: 'Pixel 8', deviceId: 'dev_006', userId: '6', username: 'fateme_r', platform: 'Android 14', appVersion: '1.2.0', lastSeen: '۱۴۰۴/۰۳/۱۵ ۱۸:۲۰', ip: '91.100.xx.xx', status: 'ACTIVE', registeredAt: '۱۴۰۳/۰۳/۱۵' },
  { id: '6', name: 'Samsung A54', deviceId: 'dev_007', userId: '7', username: 'amir_t', platform: 'Android 13', appVersion: '1.2.0', lastSeen: '۱۴۰۴/۰۳/۱۵ ۱۰:۳۰', ip: '151.20.xx.xx', status: 'ACTIVE', registeredAt: '۱۴۰۴/۰۱/۱۵' },
];

export const sessions: Session[] = [
  { id: '1', userId: '1', username: 'ali_m', deviceId: 'dev_001', deviceName: 'Samsung Galaxy S24', serverId: '1', serverName: 'Germany-1', connectedAt: '۱۴۰۴/۰۳/۱۵ ۱۴:۰۰', ip: '5.120.xx.xx', downloadSpeed: 12.5, uploadSpeed: 3.2, trafficUsed: 2.4 },
  { id: '2', userId: '2', username: 'sara_k', deviceId: 'dev_002', deviceName: 'iPhone 15 Pro', serverId: '2', serverName: 'Netherlands-1', connectedAt: '۱۴۰۴/۰۳/۱۵ ۱۱:۳۰', ip: '2.180.xx.xx', downloadSpeed: 8.7, uploadSpeed: 2.1, trafficUsed: 5.8 },
  { id: '3', userId: '4', username: 'maryam_h', deviceId: 'dev_004', deviceName: 'iPad Air', serverId: '3', serverName: 'Finland-1', connectedAt: '۱۴۰۴/۰۳/۱۵ ۱۶:۰۰', ip: '5.22.xx.xx', downloadSpeed: 15.3, uploadSpeed: 4.5, trafficUsed: 1.2 },
  { id: '4', userId: '6', username: 'fateme_r', deviceId: 'dev_006', deviceName: 'Pixel 8', serverId: '7', serverName: 'Germany-2', connectedAt: '۱۴۰۴/۰۳/۱۵ ۱۷:۴۵', ip: '91.100.xx.xx', downloadSpeed: 10.1, uploadSpeed: 2.8, trafficUsed: 3.5 },
  { id: '5', userId: '7', username: 'amir_t', deviceId: 'dev_007', deviceName: 'Samsung A54', serverId: '1', serverName: 'Germany-1', connectedAt: '۱۴۰۴/۰۳/۱۵ ۱۰:۰۰', ip: '151.20.xx.xx', downloadSpeed: 6.2, uploadSpeed: 1.5, trafficUsed: 8.1 },
];

export const auditLogs: AuditLog[] = [
  { id: '1', admin: 'admin', action: 'ایجاد لایسنس', target: 'IFIX-K7L8-M9N0-O1P2', targetType: 'License', ip: '192.168.1.1', result: 'SUCCESS', timestamp: '۱۴۰۴/۰۳/۱۵ ۱۸:۰۰' },
  { id: '2', admin: 'admin', action: 'ویرایش سرور', target: 'Turkey-1', targetType: 'Server', ip: '192.168.1.1', result: 'SUCCESS', timestamp: '۱۴۰۴/۰۳/۱۵ ۱۷:۳۰' },
  { id: '3', admin: 'admin', action: 'مسدود کردن کاربر', target: 'reza_n', targetType: 'User', ip: '192.168.1.1', result: 'SUCCESS', timestamp: '۱۴۰۴/۰۳/۱۵ ۱۶:۰۰' },
  { id: '4', admin: 'operator1', action: 'تمدید اشتراک', target: 'IFIX-S9T0-U1V2-W3X4', targetType: 'License', ip: '192.168.1.2', result: 'SUCCESS', timestamp: '۱۴۰۴/۰۳/۱۵ ۱۵:۰۰' },
  { id: '5', admin: 'admin', action: 'حذف سرور', target: 'UK-Backup', targetType: 'Server', ip: '192.168.1.1', result: 'SUCCESS', timestamp: '۱۴۰۴/۰۳/۱۵ ۱۴:۰۰' },
  { id: '6', admin: 'support1', action: 'ریست دستگاه', target: 'dev_003', targetType: 'Device', ip: '192.168.1.3', result: 'SUCCESS', timestamp: '۱۴۰۴/۰۳/۱۵ ۱۳:۰۰' },
  { id: '7', admin: 'admin', action: 'تغییر Remote Config', target: 'maintenance_mode', targetType: 'Config', ip: '192.168.1.1', result: 'SUCCESS', timestamp: '۱۴۰۴/۰۳/۱۵ ۱۲:۰۰' },
  { id: '8', admin: 'admin', action: 'ورود به پنل', target: 'Admin Panel', targetType: 'Auth', ip: '192.168.1.1', result: 'SUCCESS', timestamp: '۱۴۰۴/۰۳/۱۵ ۱۰:۰۰' },
  { id: '9', admin: 'unknown', action: 'تلاش ورود ناموفق', target: 'Admin Panel', targetType: 'Auth', ip: '45.xxx.xxx.100', result: 'FAILED', timestamp: '۱۴۰۴/۰۳/۱۵ ۰۹:۰۰' },
  { id: '10', admin: 'admin', action: 'ایجاد پلن جدید', target: 'آزمایشی', targetType: 'Plan', ip: '192.168.1.1', result: 'SUCCESS', timestamp: '۱۴۰۴/۰۳/۱۴ ۲۰:۰۰' },
];

export const remoteConfigs: RemoteConfig[] = [
  { id: '1', key: 'maintenance_mode', value: 'false', type: 'boolean', description: 'حالت تعمیرات - فعال/غیرفعال', updatedAt: '۱۴۰۴/۰۳/۱۵ ۱۲:۰۰', updatedBy: 'admin' },
  { id: '2', key: 'min_app_version', value: '1.0.0', type: 'string', description: 'حداقل نسخه پشتیبانی‌شده', updatedAt: '۱۴۰۴/۰۳/۱۰ ۱۰:۰۰', updatedBy: 'admin' },
  { id: '3', key: 'recommended_app_version', value: '1.2.0', type: 'string', description: 'نسخه پیشنهادی', updatedAt: '۱۴۰۴/۰۳/۱۰ ۱۰:۰۰', updatedBy: 'admin' },
  { id: '4', key: 'announcement', value: 'سرور جدید آلمان اضافه شد! 🎉', type: 'string', description: 'اعلان نمایشی در اپلیکیشن', updatedAt: '۱۴۰۴/۰۳/۱۴ ۱۵:۰۰', updatedBy: 'admin' },
  { id: '5', key: 'force_update', value: 'false', type: 'boolean', description: 'اجبار به بروزرسانی', updatedAt: '۱۴۰۴/۰۳/۰۱ ۱۰:۰۰', updatedBy: 'admin' },
  { id: '6', key: 'banner_url', value: 'https://cdn.ifixvpn.com/banner.jpg', type: 'string', description: 'آدرس بنر تبلیغاتی', updatedAt: '۱۴۰۴/۰۳/۱۲ ۱۸:۰۰', updatedBy: 'admin' },
];

export const appVersions: AppVersion[] = [
  { id: '1', version: '1.2.0', buildNumber: 12, minSupported: true, forceUpdate: false, apkUrl: 'https://cdn.ifixvpn.com/apk/ifixvpn-1.2.0.apk', changelog: '• بهبود عملکرد اتصال\n• اضافه شدن سرور جدید\n• رفع باگ‌های جزئی', releasedAt: '۱۴۰۴/۰۳/۱۰', platform: 'Android' },
  { id: '2', version: '1.1.0', buildNumber: 11, minSupported: true, forceUpdate: false, apkUrl: 'https://cdn.ifixvpn.com/apk/ifixvpn-1.1.0.apk', changelog: '• بهبود UI\n• پشتیبانی از Reality', releasedAt: '۱۴۰۴/۰۲/۱۵', platform: 'Android' },
  { id: '3', version: '1.0.0', buildNumber: 10, minSupported: true, forceUpdate: true, apkUrl: 'https://cdn.ifixvpn.com/apk/ifixvpn-1.0.0.apk', changelog: '• انتشار اولیه', releasedAt: '۱۴۰۴/۰۱/۰۱', platform: 'Android' },
];

export const adminUsers: AdminUser[] = [
  { id: '1', username: 'admin', email: 'admin@ifixvpn.com', role: 'SUPER_ADMIN', status: 'ACTIVE', lastLogin: '۱۴۰۴/۰۳/۱۵ ۱۰:۰۰', createdAt: '۱۴۰۳/۰۱/۰۱' },
  { id: '2', username: 'operator1', email: 'op1@ifixvpn.com', role: 'OPERATOR', status: 'ACTIVE', lastLogin: '۱۴۰۴/۰۳/۱۵ ۱۵:۰۰', createdAt: '۱۴۰۳/۰۳/۰۱' },
  { id: '3', username: 'support1', email: 'support@ifixvpn.com', role: 'SUPPORT', status: 'ACTIVE', lastLogin: '۱۴۰۴/۰۳/۱۵ ۱۳:۰۰', createdAt: '۱۴۰۳/۰۶/۰۱' },
  { id: '4', username: 'viewer1', email: 'viewer@ifixvpn.com', role: 'VIEWER', status: 'DISABLED', lastLogin: '۱۴۰۴/۰۲/۲۰ ۱۰:۰۰', createdAt: '۱۴۰۳/۰۹/۰۱' },
];
