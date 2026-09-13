import { adminUsers } from '../data/mockData';
import { Settings, Users, Globe, Bell, Lock, Save } from 'lucide-react';
import { useState } from 'react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('general');

  const tabs = [
    { id: 'general', label: 'عمومی', icon: Settings },
    { id: 'security', label: 'امنیت', icon: Lock },
    { id: 'admins', label: 'مدیران', icon: Users },
    { id: 'api', label: 'API', icon: Globe },
    { id: 'notifications', label: 'اعلان‌ها', icon: Bell },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">تنظیمات</h1>
        <p className="text-sm text-slate-400 mt-1">پیکربندی سیستم IFIXVPN</p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-700/50 pb-3">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors ${
                activeTab === tab.id
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Content */}
      {activeTab === 'general' && (
        <div className="space-y-4">
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5">
            <h3 className="text-sm font-medium text-slate-200 mb-4">تنظیمات عمومی</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-slate-400 mb-1 block">نام برنامه</label>
                <input defaultValue="IFIXVPN" className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-slate-200 focus:outline-none focus:border-emerald-500/50" />
              </div>
              <div>
                <label className="text-xs text-slate-400 mb-1 block">نام توسعه‌دهنده</label>
                <input defaultValue="IFIX MOBILE" className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-slate-200 focus:outline-none focus:border-emerald-500/50" />
              </div>
              <div>
                <label className="text-xs text-slate-400 mb-1 block">زبان پیش‌فرض</label>
                <select className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-slate-200 focus:outline-none focus:border-emerald-500/50">
                  <option>فارسی</option>
                  <option>English</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-slate-400 mb-1 block">منطقه زمانی</label>
                <select className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-slate-200 focus:outline-none focus:border-emerald-500/50">
                  <option>Asia/Tehran (UTC+3:30)</option>
                  <option>UTC</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'security' && (
        <div className="space-y-4">
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5">
            <h3 className="text-sm font-medium text-slate-200 mb-4">تنظیمات امنیتی</h3>
            <div className="space-y-4">
              <ToggleSetting label="احراز هویت دو مرحله‌ای" description="فعال‌سازی 2FA برای ورود مدیران" defaultChecked={true} />
              <ToggleSetting label="محدودیت IP ورود" description="فقط از IPهای مشخص اجازه ورود" defaultChecked={false} />
              <ToggleSetting label="Rate Limiting" description="محدودیت تعداد درخواست API" defaultChecked={true} />
              <ToggleSetting label="ثبت Audit Log" description="ثبت تمام عملیات حساس" defaultChecked={true} />
              <ToggleSetting label="قفل خودکار" description="قفل شدن بعد از ۵ تلاش ناموفق" defaultChecked={true} />
            </div>
          </div>
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5">
            <h3 className="text-sm font-medium text-slate-200 mb-4">Session</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-slate-400 mb-1 block">مدت اعتبار Token (دقیقه)</label>
                <input type="number" defaultValue={60} className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-slate-200 focus:outline-none focus:border-emerald-500/50" />
              </div>
              <div>
                <label className="text-xs text-slate-400 mb-1 block">مدت اعتبار Refresh Token (ساعت)</label>
                <input type="number" defaultValue={720} className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-slate-200 focus:outline-none focus:border-emerald-500/50" />
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'admins' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-slate-200">مدیران سیستم</h3>
            <button className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg text-xs font-medium transition-colors">
              <Users className="w-3.5 h-3.5" />
              مدیر جدید
            </button>
          </div>
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700/50">
                  <th className="text-right text-xs font-medium text-slate-400 p-4">کاربر</th>
                  <th className="text-right text-xs font-medium text-slate-400 p-4">نقش</th>
                  <th className="text-right text-xs font-medium text-slate-400 p-4">وضعیت</th>
                  <th className="text-right text-xs font-medium text-slate-400 p-4">آخرین ورود</th>
                </tr>
              </thead>
              <tbody>
                {adminUsers.map((admin) => (
                  <tr key={admin.id} className="border-b border-slate-700/30">
                    <td className="p-4">
                      <div>
                        <p className="text-sm text-slate-200">{admin.username}</p>
                        <p className="text-[10px] text-slate-500">{admin.email}</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium border ${
                        admin.role === 'SUPER_ADMIN' ? 'bg-red-500/10 border-red-500/20 text-red-400' :
                        admin.role === 'ADMIN' ? 'bg-violet-500/10 border-violet-500/20 text-violet-400' :
                        admin.role === 'OPERATOR' ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400' :
                        admin.role === 'SUPPORT' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' :
                        'bg-slate-500/10 border-slate-500/20 text-slate-400'
                      }`}>
                        {admin.role === 'SUPER_ADMIN' ? 'مدیر کل' : admin.role === 'ADMIN' ? 'مدیر' : admin.role === 'OPERATOR' ? 'اپراتور' : admin.role === 'SUPPORT' ? 'پشتیبانی' : 'مشاهده‌گر'}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium border ${
                        admin.status === 'ACTIVE' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-red-500/10 border-red-500/20 text-red-400'
                      }`}>
                        {admin.status === 'ACTIVE' ? 'فعال' : 'غیرفعال'}
                      </span>
                    </td>
                    <td className="p-4 text-xs text-slate-400">{admin.lastLogin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'api' && (
        <div className="space-y-4">
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5">
            <h3 className="text-sm font-medium text-slate-200 mb-4">تنظیمات API</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-slate-400 mb-1 block">API Base URL</label>
                <input defaultValue="https://api.ifixvpn.com/api/v1" className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-slate-200 font-mono focus:outline-none focus:border-emerald-500/50" />
              </div>
              <div>
                <label className="text-xs text-slate-400 mb-1 block">Rate Limit (در دقیقه)</label>
                <input type="number" defaultValue={60} className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-slate-200 focus:outline-none focus:border-emerald-500/50" />
              </div>
              <div>
                <label className="text-xs text-slate-400 mb-1 block">Config Version</label>
                <input type="number" defaultValue={105} className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-slate-200 focus:outline-none focus:border-emerald-500/50" />
              </div>
              <div>
                <label className="text-xs text-slate-400 mb-1 block">Subscription Token TTL (ساعت)</label>
                <input type="number" defaultValue={24} className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-slate-200 focus:outline-none focus:border-emerald-500/50" />
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'notifications' && (
        <div className="space-y-4">
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5">
            <h3 className="text-sm font-medium text-slate-200 mb-4">تنظیمات اعلان‌ها</h3>
            <div className="space-y-4">
              <ToggleSetting label="اعلان انقضای لایسنس" description="هشدار ۳ روز قبل از انقضا" defaultChecked={true} />
              <ToggleSetting label="اعلان سرور آفلاین" description="هشدار در صورت قطع سرور" defaultChecked={true} />
              <ToggleSetting label="اعلان تلاش ورود ناموفق" description="هشدار برای تلاش‌های مشکوک" defaultChecked={true} />
              <ToggleSetting label="اعلان مصرف ترافیک" description="هشدار هنگام رسیدن به ۸۰٪ ترافیک" defaultChecked={false} />
            </div>
          </div>
        </div>
      )}

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="flex items-center gap-2 px-6 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg text-sm font-medium transition-colors">
          <Save className="w-4 h-4" />
          ذخیره تنظیمات
        </button>
      </div>
    </div>
  );
}

function ToggleSetting({ label, description, defaultChecked }: { label: string; description: string; defaultChecked: boolean }) {
  const [checked, setChecked] = useState(defaultChecked);
  return (
    <div className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg">
      <div>
        <p className="text-sm text-slate-200">{label}</p>
        <p className="text-[10px] text-slate-500 mt-0.5">{description}</p>
      </div>
      <button
        onClick={() => setChecked(!checked)}
        className={`w-10 h-5 rounded-full transition-colors relative ${checked ? 'bg-emerald-500' : 'bg-slate-600'}`}
      >
        <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all ${checked ? 'right-0.5' : 'right-5'}`} />
      </button>
    </div>
  );
}
