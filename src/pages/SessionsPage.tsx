import { sessions } from '../data/mockData';
import { Wifi, ArrowDown, ArrowUp, Clock, MapPin } from 'lucide-react';

export default function SessionsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">نشست‌های فعال</h1>
          <p className="text-sm text-slate-400 mt-1">اتصالات لحظه‌ای کاربران</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-emerald-400">{sessions.length} اتصال فعال</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sessions.map((session) => (
          <div key={session.id} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 hover:border-slate-600/50 transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <Wifi className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{session.username}</p>
                  <p className="text-xs text-slate-400">{session.deviceName}</p>
                </div>
              </div>
              <span className="px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[10px] text-emerald-400">
                متصل
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="flex items-center gap-2 p-2 bg-slate-900/50 rounded-lg">
                <MapPin className="w-3.5 h-3.5 text-violet-400" />
                <div>
                  <p className="text-[10px] text-slate-500">سرور</p>
                  <p className="text-xs text-slate-200">{session.serverName}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-2 bg-slate-900/50 rounded-lg">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <div>
                  <p className="text-[10px] text-slate-500">زمان اتصال</p>
                  <p className="text-xs text-slate-200">{session.connectedAt}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="text-center p-2 bg-slate-900/50 rounded-lg">
                <ArrowDown className="w-3.5 h-3.5 text-emerald-400 mx-auto mb-1" />
                <p className="text-xs font-bold text-white">{session.downloadSpeed} MB/s</p>
                <p className="text-[10px] text-slate-500">دانلود</p>
              </div>
              <div className="text-center p-2 bg-slate-900/50 rounded-lg">
                <ArrowUp className="w-3.5 h-3.5 text-cyan-400 mx-auto mb-1" />
                <p className="text-xs font-bold text-white">{session.uploadSpeed} MB/s</p>
                <p className="text-[10px] text-slate-500">آپلود</p>
              </div>
              <div className="text-center p-2 bg-slate-900/50 rounded-lg">
                <Wifi className="w-3.5 h-3.5 text-violet-400 mx-auto mb-1" />
                <p className="text-xs font-bold text-white">{session.trafficUsed} GB</p>
                <p className="text-[10px] text-slate-500">ترافیک</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
