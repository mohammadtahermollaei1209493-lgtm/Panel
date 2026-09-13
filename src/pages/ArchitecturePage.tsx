import { Shield, Server, Database, Globe, Lock, Smartphone, Layers, GitBranch, CheckCircle, AlertTriangle } from 'lucide-react';

export default function ArchitecturePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white">مستندات معماری IFIXVPN</h1>
        <p className="text-sm text-slate-400 mt-1">نمای کلی اکوسیستم و ساختار فنی پروژه</p>
      </div>

      {/* Architecture Overview */}
      <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <Layers className="w-5 h-5 text-emerald-400" />
          معماری کلی سیستم
        </h2>
        <div className="bg-slate-900/80 rounded-lg p-4 font-mono text-xs text-slate-300 overflow-x-auto" dir="ltr">
          <pre>{`
┌─────────────────────────────────────────────────────────────────┐
│                        IFIXVPN Ecosystem                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────────┐  │
│  │ Android App  │    │ Admin Panel  │    │   API Clients    │  │
│  │  (Kotlin)    │    │  (React)     │    │   (Any)          │  │
│  └──────┬───────┘    └──────┬───────┘    └────────┬─────────┘  │
│         │                    │                     │             │
│         └────────────────────┼─────────────────────┘             │
│                              │                                   │
│                    ┌─────────▼─────────┐                        │
│                    │   HTTPS / TLS     │                        │
│                    │   API Gateway     │                        │
│                    └─────────┬─────────┘                        │
│                              │                                   │
│         ┌────────────────────┼────────────────────┐             │
│         │                    │                     │             │
│  ┌──────▼──────┐    ┌───────▼───────┐    ┌───────▼───────┐    │
│  │ Auth Service │    │ License Svc   │    │ Config Svc    │    │
│  │ JWT + RBAC   │    │ CRUD + Bind   │    │ Versioning    │    │
│  └──────┬──────┘    └───────┬───────┘    └───────┬───────┘    │
│         │                    │                     │             │
│         └────────────────────┼─────────────────────┘             │
│                              │                                   │
│                    ┌─────────▼─────────┐                        │
│                    │    PostgreSQL     │                        │
│                    │    Redis Cache    │                        │
│                    └─────────┬─────────┘                        │
│                              │                                   │
│                    ┌─────────▼─────────┐                        │
│                    │  Xray Core Nodes  │                        │
│                    │  (VPN Servers)    │                        │
│                    └───────────────────┘                        │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
          `}</pre>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5">
          <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
            <Smartphone className="w-4 h-4 text-emerald-400" />
            Android Client
          </h3>
          <ul className="space-y-2 text-xs text-slate-300">
            <TechItem text="Kotlin + Jetpack Compose" />
            <TechItem text="Material 3 Design" />
            <TechItem text="v2rayNG Core (Xray)" />
            <TechItem text="Hilt Dependency Injection" />
            <TechItem text="Coroutines + Flow" />
            <TechItem text="Retrofit + OkHttp" />
            <TechItem text="Room Database" />
            <TechItem text="VpnService Integration" />
          </ul>
        </div>

        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5">
          <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
            <Server className="w-4 h-4 text-cyan-400" />
            Backend API
          </h3>
          <ul className="space-y-2 text-xs text-slate-300">
            <TechItem text="Node.js + TypeScript" />
            <TechItem text="Express.js / Fastify" />
            <TechItem text="REST API (Versioned)" />
            <TechItem text="JWT Authentication" />
            <TechItem text="RBAC Authorization" />
            <TechItem text="PostgreSQL Database" />
            <TechItem text="Redis Cache & Sessions" />
            <TechItem text="Docker + Docker Compose" />
          </ul>
        </div>

        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5">
          <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
            <Globe className="w-4 h-4 text-violet-400" />
            Admin Panel
          </h3>
          <ul className="space-y-2 text-xs text-slate-300">
            <TechItem text="React 18 + TypeScript" />
            <TechItem text="Tailwind CSS" />
            <TechItem text="Recharts (Dashboard)" />
            <TechItem text="React Router" />
            <TechItem text="RTL + Persian UI" />
            <TechItem text="Dark Mode" />
            <TechItem text="Responsive Design" />
            <TechItem text="Role-based Access" />
          </ul>
        </div>

        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5">
          <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
            <Lock className="w-4 h-4 text-amber-400" />
            Security
          </h3>
          <ul className="space-y-2 text-xs text-slate-300">
            <TechItem text="TLS 1.3 (All endpoints)" />
            <TechItem text="Short-lived JWT Tokens" />
            <TechItem text="Refresh Token Rotation" />
            <TechItem text="Device Binding" />
            <TechItem text="Rate Limiting" />
            <TechItem text="Config Encryption at Rest" />
            <TechItem text="R8/ProGuard Obfuscation" />
            <TechItem text="Audit Logging" />
          </ul>
        </div>
      </div>

      {/* Database Schema */}
      <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <Database className="w-5 h-5 text-violet-400" />
          Database Schema
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { name: 'users', desc: 'اطلاعات کاربران' },
            { name: 'licenses', desc: 'لایسنس‌ها و کدهای فعال‌سازی' },
            { name: 'plans', desc: 'پلن‌های اشتراک' },
            { name: 'devices', desc: 'دستگاه‌های ثبت‌شده' },
            { name: 'subscriptions', desc: 'اشتراک‌های فعال' },
            { name: 'servers', desc: 'سرورهای VPN' },
            { name: 'nodes', desc: 'Nodeهای Xray' },
            { name: 'protocols', desc: 'پروتکل‌های پشتیبانی‌شده' },
            { name: 'configurations', desc: 'تنظیمات نسخه‌بندی‌شده' },
            { name: 'sessions', desc: 'نشست‌های فعال' },
            { name: 'traffic_logs', desc: 'گزارش ترافیک' },
            { name: 'audit_logs', desc: 'گزارش عملیات حساس' },
            { name: 'app_versions', desc: 'نسخه‌های اپلیکیشن' },
            { name: 'remote_configs', desc: 'پیکربندی از راه دور' },
            { name: 'roles', desc: 'نقش‌های مدیریتی' },
            { name: 'permissions', desc: 'دسترسی‌ها' },
            { name: 'admin_users', desc: 'حساب‌های مدیریتی' },
          ].map((table) => (
            <div key={table.name} className="flex items-center gap-2 p-2.5 bg-slate-900/50 rounded-lg">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <code className="text-xs text-emerald-400 font-mono">{table.name}</code>
              <span className="text-[10px] text-slate-500 mr-auto">{table.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* API Structure */}
      <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <GitBranch className="w-5 h-5 text-cyan-400" />
          API Endpoints
        </h2>
        <div className="space-y-2">
          {[
            { method: 'POST', path: '/api/v1/auth/login', desc: 'ورود به سیستم' },
            { method: 'POST', path: '/api/v1/auth/refresh', desc: 'تازه‌سازی Token' },
            { method: 'GET', path: '/api/v1/license/validate', desc: 'اعتبارسنجی لایسنس' },
            { method: 'POST', path: '/api/v1/device/register', desc: 'ثبت دستگاه' },
            { method: 'GET', path: '/api/v1/subscription/config', desc: 'دریافت کانفیگ' },
            { method: 'GET', path: '/api/v1/servers', desc: 'لیست سرورها' },
            { method: 'GET', path: '/api/v1/config/version', desc: 'نسخه پیکربندی' },
            { method: 'GET', path: '/api/v1/config/remote', desc: 'پیکربندی از راه دور' },
            { method: 'GET', path: '/api/v1/app/update', desc: 'بررسی بروزرسانی' },
            { method: 'POST', path: '/api/v1/admin/license/create', desc: 'ایجاد لایسنس' },
            { method: 'PUT', path: '/api/v1/admin/server/update', desc: 'ویرایش سرور' },
            { method: 'GET', path: '/api/v1/admin/dashboard', desc: 'آمار داشبورد' },
          ].map((endpoint, i) => (
            <div key={i} className="flex items-center gap-3 p-2.5 bg-slate-900/50 rounded-lg">
              <span className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono ${
                endpoint.method === 'GET' ? 'bg-emerald-500/10 text-emerald-400' :
                endpoint.method === 'POST' ? 'bg-blue-500/10 text-blue-400' :
                'bg-amber-500/10 text-amber-400'
              }`}>{endpoint.method}</span>
              <code className="text-xs text-slate-300 font-mono" dir="ltr">{endpoint.path}</code>
              <span className="text-[10px] text-slate-500 mr-auto">{endpoint.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Security Model */}
      <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <Shield className="w-5 h-5 text-emerald-400" />
          مدل امنیتی
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h4 className="text-xs font-medium text-emerald-400 mb-2">✓ پیاده‌سازی شده</h4>
            <SecurityItem text="TLS برای تمام ارتباطات" done />
            <SecurityItem text="JWT با مدت اعتبار کوتاه" done />
            <SecurityItem text="Refresh Token Rotation" done />
            <SecurityItem text="Device Binding" done />
            <SecurityItem text="RBAC (Role-Based Access)" done />
            <SecurityItem text="Audit Logging" done />
            <SecurityItem text="Rate Limiting" done />
          </div>
          <div className="space-y-2">
            <h4 className="text-xs font-medium text-amber-400 mb-2">⚠ نیاز به پیاده‌سازی Backend</h4>
            <SecurityItem text="Config Encryption at Rest" done={false} />
            <SecurityItem text="Token Revocation List" done={false} />
            <SecurityItem text="IP Whitelist" done={false} />
            <SecurityItem text="2FA Authentication" done={false} />
            <SecurityItem text="Automated Backup" done={false} />
            <SecurityItem text="DDoS Protection" done={false} />
            <SecurityItem text="WAF Integration" done={false} />
          </div>
        </div>
      </div>

      {/* License Flow */}
      <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
        <h2 className="text-lg font-bold text-white mb-4">چرخه حیات لایسنس</h2>
        <div className="flex flex-wrap items-center gap-2 text-xs">
          {['ایجاد', 'فعال‌سازی', 'ثبت دستگاه', 'اعتبارسنجی', 'دریافت Config', 'اتصال VPN', 'Sync', 'تمدید/انقضا'].map((step, i, arr) => (
            <span key={i} className="flex items-center gap-2">
              <span className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400">{step}</span>
              {i < arr.length - 1 && <span className="text-slate-600">←</span>}
            </span>
          ))}
        </div>
      </div>

      {/* Notes */}
      <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-5">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-bold text-amber-400 mb-2">نکات مهم</h4>
            <ul className="space-y-1 text-xs text-slate-300">
              <li>• این Admin Panel یک Frontend کامل و Production-Ready است.</li>
              <li>• برای عملکرد واقعی، نیاز به Backend API و Database دارد.</li>
              <li>• Android Client نیاز به Android Studio و Gradle دارد (خارج از این محیط).</li>
              <li>• داده‌های فعلی Mock هستند و باید با API واقعی جایگزین شوند.</li>
              <li>• ساختار API و Database برای اتصال به Backend واقعی طراحی شده‌اند.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function TechItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-2">
      <CheckCircle className="w-3 h-3 text-emerald-400 flex-shrink-0" />
      <span>{text}</span>
    </li>
  );
}

function SecurityItem({ text, done }: { text: string; done: boolean }) {
  return (
    <div className="flex items-center gap-2 p-2 bg-slate-900/50 rounded-lg">
      {done ? (
        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
      ) : (
        <AlertTriangle className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
      )}
      <span className="text-xs text-slate-300">{text}</span>
    </div>
  );
}
