import { remoteConfigs } from '../data/mockData';
import { Edit, Globe } from 'lucide-react';

export default function RemoteConfigPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">پیکربندی از راه دور</h1>
          <p className="text-sm text-slate-400 mt-1">تنظیمات Remote Config - بدون نیاز به بروزرسانی اپ</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg text-sm font-medium transition-colors">
          <Globe className="w-4 h-4" />
          کلید جدید
        </button>
      </div>

      <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700/50">
                <th className="text-right text-xs font-medium text-slate-400 p-4">کلید</th>
                <th className="text-right text-xs font-medium text-slate-400 p-4">مقدار</th>
                <th className="text-right text-xs font-medium text-slate-400 p-4">نوع</th>
                <th className="text-right text-xs font-medium text-slate-400 p-4">توضیحات</th>
                <th className="text-right text-xs font-medium text-slate-400 p-4">آخرین تغییر</th>
                <th className="text-right text-xs font-medium text-slate-400 p-4">توسط</th>
                <th className="text-center text-xs font-medium text-slate-400 p-4">عملیات</th>
              </tr>
            </thead>
            <tbody>
              {remoteConfigs.map((config) => (
                <tr key={config.id} className="border-b border-slate-700/30 hover:bg-slate-800/50 transition-colors">
                  <td className="p-4">
                    <code className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">{config.key}</code>
                  </td>
                  <td className="p-4">
                    <code className="text-xs font-mono text-slate-300 max-w-[200px] truncate block">{config.value}</code>
                  </td>
                  <td className="p-4">
                    <span className="px-2 py-0.5 bg-slate-700/50 rounded text-[10px] text-slate-300">{config.type}</span>
                  </td>
                  <td className="p-4 text-xs text-slate-400">{config.description}</td>
                  <td className="p-4 text-xs text-slate-400">{config.updatedAt}</td>
                  <td className="p-4 text-xs text-slate-300">{config.updatedBy}</td>
                  <td className="p-4 text-center">
                    <button className="p-1.5 rounded-lg hover:bg-slate-700 text-slate-400 hover:text-blue-400 transition-colors">
                      <Edit className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Config Version */}
      <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5">
        <h3 className="text-sm font-medium text-slate-200 mb-4">نسخه پیکربندی</h3>
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <p className="text-xs text-slate-400 mb-1">نسخه فعلی Config</p>
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-white">105</span>
              <span className="text-xs text-slate-500">آخرین تغییر: ۱۴۰۴/۰۳/۱۵ ۱۸:۰۰</span>
            </div>
          </div>
          <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg text-sm transition-colors">
            افزایش نسخه
          </button>
        </div>
      </div>
    </div>
  );
}
