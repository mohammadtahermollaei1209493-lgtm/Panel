import { auditLogs } from '../data/mockData';
import { CheckCircle, XCircle } from 'lucide-react';

export default function LogsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">گزارش‌های سیستم</h1>
          <p className="text-sm text-slate-400 mt-1">Audit Log - ثبت تمام عملیات حساس</p>
        </div>
      </div>

      <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700/50">
                <th className="text-right text-xs font-medium text-slate-400 p-4">زمان</th>
                <th className="text-right text-xs font-medium text-slate-400 p-4">مدیر</th>
                <th className="text-right text-xs font-medium text-slate-400 p-4">عملیات</th>
                <th className="text-right text-xs font-medium text-slate-400 p-4">هدف</th>
                <th className="text-right text-xs font-medium text-slate-400 p-4">نوع</th>
                <th className="text-right text-xs font-medium text-slate-400 p-4">IP</th>
                <th className="text-center text-xs font-medium text-slate-400 p-4">نتیجه</th>
              </tr>
            </thead>
            <tbody>
              {auditLogs.map((log) => (
                <tr key={log.id} className="border-b border-slate-700/30 hover:bg-slate-800/50 transition-colors">
                  <td className="p-4 text-xs text-slate-400 whitespace-nowrap">{log.timestamp}</td>
                  <td className="p-4">
                    <span className="text-xs font-medium text-slate-200">{log.admin}</span>
                  </td>
                  <td className="p-4 text-xs text-slate-300">{log.action}</td>
                  <td className="p-4 text-xs text-slate-400 font-mono">{log.target}</td>
                  <td className="p-4">
                    <span className="px-2 py-0.5 bg-slate-700/50 rounded text-[10px] text-slate-300">{log.targetType}</span>
                  </td>
                  <td className="p-4 text-xs text-slate-400 font-mono">{log.ip}</td>
                  <td className="p-4 text-center">
                    {log.result === 'SUCCESS' ? (
                      <CheckCircle className="w-4 h-4 text-emerald-400 mx-auto" />
                    ) : (
                      <XCircle className="w-4 h-4 text-red-400 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-white">{auditLogs.length}</p>
          <p className="text-xs text-slate-400 mt-1">کل گزارش‌ها</p>
        </div>
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-emerald-400">{auditLogs.filter(l => l.result === 'SUCCESS').length}</p>
          <p className="text-xs text-slate-400 mt-1">موفق</p>
        </div>
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-red-400">{auditLogs.filter(l => l.result === 'FAILED').length}</p>
          <p className="text-xs text-slate-400 mt-1">ناموفق</p>
        </div>
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-cyan-400">{new Set(auditLogs.map(l => l.admin)).size}</p>
          <p className="text-xs text-slate-400 mt-1">مدیران فعال</p>
        </div>
      </div>
    </div>
  );
}
