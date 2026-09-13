import { devices } from '../data/mockData';
import { Laptop, Ban, RefreshCw, Trash2 } from 'lucide-react';

export default function DevicesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">مدیریت دستگاه‌ها</h1>
          <p className="text-sm text-slate-400 mt-1">دستگاه‌های ثبت‌شده کاربران</p>
        </div>
      </div>

      <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700/50">
                <th className="text-right text-xs font-medium text-slate-400 p-4">دستگاه</th>
                <th className="text-right text-xs font-medium text-slate-400 p-4">کاربر</th>
                <th className="text-right text-xs font-medium text-slate-400 p-4">پلتفرم</th>
                <th className="text-right text-xs font-medium text-slate-400 p-4">نسخه اپ</th>
                <th className="text-right text-xs font-medium text-slate-400 p-4">IP</th>
                <th className="text-right text-xs font-medium text-slate-400 p-4">وضعیت</th>
                <th className="text-right text-xs font-medium text-slate-400 p-4">آخرین بازدید</th>
                <th className="text-center text-xs font-medium text-slate-400 p-4">عملیات</th>
              </tr>
            </thead>
            <tbody>
              {devices.map((device) => (
                <tr key={device.id} className="border-b border-slate-700/30 hover:bg-slate-800/50 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-700 flex items-center justify-center">
                        <Laptop className="w-4 h-4 text-slate-300" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-200">{device.name}</p>
                        <p className="text-[10px] text-slate-500 font-mono">{device.deviceId}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-slate-300">{device.username}</td>
                  <td className="p-4 text-xs text-slate-400">{device.platform}</td>
                  <td className="p-4 text-xs text-slate-400">{device.appVersion}</td>
                  <td className="p-4 text-xs text-slate-400 font-mono">{device.ip}</td>
                  <td className="p-4">
                    <span className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-medium border ${
                      device.status === 'ACTIVE' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-red-500/10 border-red-500/20 text-red-400'
                    }`}>
                      {device.status === 'ACTIVE' ? 'فعال' : 'مسدود'}
                    </span>
                  </td>
                  <td className="p-4 text-xs text-slate-400">{device.lastSeen}</td>
                  <td className="p-4">
                    <div className="flex items-center justify-center gap-1">
                      <button className="p-1.5 rounded-lg hover:bg-slate-700 text-slate-400 hover:text-amber-400 transition-colors" title="ریست دستگاه">
                        <RefreshCw className="w-3.5 h-3.5" />
                      </button>
                      <button className="p-1.5 rounded-lg hover:bg-slate-700 text-slate-400 hover:text-red-400 transition-colors" title="مسدود کردن">
                        <Ban className="w-3.5 h-3.5" />
                      </button>
                      <button className="p-1.5 rounded-lg hover:bg-slate-700 text-slate-400 hover:text-red-400 transition-colors" title="حذف">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-white">{devices.length}</p>
          <p className="text-xs text-slate-400 mt-1">کل دستگاه‌ها</p>
        </div>
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-emerald-400">{devices.filter(d => d.status === 'ACTIVE').length}</p>
          <p className="text-xs text-slate-400 mt-1">فعال</p>
        </div>
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-red-400">{devices.filter(d => d.status === 'BLOCKED').length}</p>
          <p className="text-xs text-slate-400 mt-1">مسدود</p>
        </div>
      </div>
    </div>
  );
}
