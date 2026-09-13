import { appVersions } from '../data/mockData';
import { Download, Plus, AlertTriangle, CheckCircle, Smartphone } from 'lucide-react';

export default function UpdatesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">مدیریت بروزرسانی</h1>
          <p className="text-sm text-slate-400 mt-1">کنترل نسخه‌های اپلیکیشن IFIXVPN</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg text-sm font-medium transition-colors">
          <Plus className="w-4 h-4" />
          نسخه جدید
        </button>
      </div>

      {/* Current Version Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-slate-800/50 border border-emerald-500/20 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-xs text-slate-400">آخرین نسخه</p>
              <p className="text-lg font-bold text-white">v1.2.0</p>
            </div>
          </div>
          <p className="text-xs text-slate-400">منتشر شده: ۱۴۰۴/۰۳/۱۰</p>
        </div>
        <div className="bg-slate-800/50 border border-amber-500/20 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
              <Smartphone className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <p className="text-xs text-slate-400">حداقل نسخه پشتیبانی</p>
              <p className="text-lg font-bold text-white">v1.0.0</p>
            </div>
          </div>
          <p className="text-xs text-slate-400">نسخه‌های قدیمی‌تر مسدود می‌شوند</p>
        </div>
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center">
              <Download className="w-5 h-5 text-violet-400" />
            </div>
            <div>
              <p className="text-xs text-slate-400">Force Update</p>
              <p className="text-lg font-bold text-white">غیرفعال</p>
            </div>
          </div>
          <p className="text-xs text-slate-400">اجبار به بروزرسانی فعال نیست</p>
        </div>
      </div>

      {/* Version History */}
      <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden">
        <div className="p-4 border-b border-slate-700/50">
          <h3 className="text-sm font-medium text-slate-200">تاریخچه نسخه‌ها</h3>
        </div>
        <div className="divide-y divide-slate-700/30">
          {appVersions.map((version) => (
            <div key={version.id} className="p-4 hover:bg-slate-800/50 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    version.forceUpdate ? 'bg-red-500/10' : 'bg-emerald-500/10'
                  }`}>
                    <Download className={`w-4 h-4 ${version.forceUpdate ? 'text-red-400' : 'text-emerald-400'}`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-white">v{version.version}</h4>
                      <span className="text-[10px] text-slate-500">Build {version.buildNumber}</span>
                      {version.forceUpdate && (
                        <span className="px-1.5 py-0.5 bg-red-500/10 border border-red-500/20 rounded text-[10px] text-red-400">اجباری</span>
                      )}
                    </div>
                    <p className="text-xs text-slate-400">{version.platform} • {version.releasedAt}</p>
                  </div>
                </div>
              </div>
              <div className="pr-11">
                <p className="text-xs text-slate-300 whitespace-pre-line">{version.changelog}</p>
                <p className="text-[10px] text-slate-500 mt-2 font-mono truncate">{version.apkUrl}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
