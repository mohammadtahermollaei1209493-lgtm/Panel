import { useState } from 'react';
import { licenses } from '../data/mockData';
import { Search, Plus, Copy, RefreshCw, Ban, CheckCircle, Trash2, Key, Download, Upload } from 'lucide-react';

export default function LicensesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [showCreate, setShowCreate] = useState(false);

  const filtered = licenses.filter(l => {
    const matchSearch = l.code.includes(searchTerm);
    const matchStatus = statusFilter === 'ALL' || l.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">مدیریت لایسنس‌ها</h1>
          <p className="text-sm text-slate-400 mt-1">ایجاد، ویرایش و مدیریت لایسنس‌ها</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-3 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg text-sm transition-colors">
            <Upload className="w-4 h-4" />
            ورود دسته‌ای
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg text-sm transition-colors">
            <Download className="w-4 h-4" />
            خروجی
          </button>
          <button onClick={() => setShowCreate(true)} className="flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg text-sm font-medium transition-colors">
            <Plus className="w-4 h-4" />
            لایسنس جدید
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="جستجوی کد لایسنس..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pr-10 pl-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/50"
          />
        </div>
        <div className="flex items-center gap-2">
          {['ALL', 'ACTIVE', 'EXPIRED', 'SUSPENDED', 'REVOKED', 'PENDING'].map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                statusFilter === status
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : 'bg-slate-800 text-slate-400 border border-slate-700 hover:text-slate-200'
              }`}
            >
              {status === 'ALL' ? 'همه' : status === 'ACTIVE' ? 'فعال' : status === 'EXPIRED' ? 'منقضی' : status === 'SUSPENDED' ? 'تعلیق' : status === 'REVOKED' ? 'لغو' : 'در انتظار'}
            </button>
          ))}
        </div>
      </div>

      {/* License Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filtered.map((license) => (
          <div key={license.id} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 hover:border-slate-600/50 transition-colors">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                  <Key className="w-4 h-4 text-violet-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">کد لایسنس</p>
                  <p className="text-sm font-mono text-slate-200">{license.code}</p>
                </div>
              </div>
              <LicenseStatus status={license.status} />
            </div>

            <div className="grid grid-cols-2 gap-3 mb-3">
              <div>
                <p className="text-[10px] text-slate-500">ترافیک</p>
                <p className="text-xs text-slate-300">{license.trafficUsed} / {license.trafficLimit} GB</p>
              </div>
              <div>
                <p className="text-[10px] text-slate-500">دستگاه</p>
                <p className="text-xs text-slate-300">{license.maxDevices} دستگاه مجاز</p>
              </div>
              <div>
                <p className="text-[10px] text-slate-500">تاریخ ایجاد</p>
                <p className="text-xs text-slate-300">{license.createdAt}</p>
              </div>
              <div>
                <p className="text-[10px] text-slate-500">تاریخ انقضا</p>
                <p className="text-xs text-slate-300">{license.expiresAt}</p>
              </div>
            </div>

            {/* Progress */}
            <div className="mb-3">
              <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${license.trafficUsed / license.trafficLimit > 0.8 ? 'bg-red-400' : license.trafficUsed / license.trafficLimit > 0.5 ? 'bg-amber-400' : 'bg-emerald-400'}`}
                  style={{ width: `${Math.min(100, (license.trafficUsed / license.trafficLimit) * 100)}%` }}
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1 pt-2 border-t border-slate-700/50">
              <button className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg text-[10px] text-slate-400 hover:bg-slate-700 hover:text-slate-200 transition-colors">
                <Copy className="w-3 h-3" /> کپی
              </button>
              <button className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg text-[10px] text-slate-400 hover:bg-slate-700 hover:text-blue-400 transition-colors">
                <RefreshCw className="w-3 h-3" /> تمدید
              </button>
              <button className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg text-[10px] text-slate-400 hover:bg-slate-700 hover:text-amber-400 transition-colors">
                <Ban className="w-3 h-3" /> تعلیق
              </button>
              <button className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg text-[10px] text-slate-400 hover:bg-slate-700 hover:text-red-400 transition-colors">
                <Trash2 className="w-3 h-3" /> حذف
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Create Modal */}
      {showCreate && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 w-full max-w-md">
            <h3 className="text-lg font-bold text-white mb-4">ایجاد لایسنس جدید</h3>
            <div className="space-y-4">
              <div>
                <label className="text-xs text-slate-400 mb-1 block">پلن</label>
                <select className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-slate-200 focus:outline-none focus:border-emerald-500/50">
                  <option>یک ماهه - 100GB</option>
                  <option>سه ماهه - 300GB</option>
                  <option>شش ماهه - 500GB</option>
                  <option>یک ساله - 1000GB</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-slate-400 mb-1 block">تعداد دستگاه مجاز</label>
                <input type="number" defaultValue={2} className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-slate-200 focus:outline-none focus:border-emerald-500/50" />
              </div>
              <div>
                <label className="text-xs text-slate-400 mb-1 block">تعداد</label>
                <input type="number" defaultValue={1} className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-slate-200 focus:outline-none focus:border-emerald-500/50" />
              </div>
              <div>
                <label className="text-xs text-slate-400 mb-1 block">یادداشت (اختیاری)</label>
                <input className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-slate-200 focus:outline-none focus:border-emerald-500/50" placeholder="توضیحات..." />
              </div>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <button onClick={() => setShowCreate(false)} className="flex-1 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg text-sm font-medium transition-colors">
                ایجاد لایسنس
              </button>
              <button onClick={() => setShowCreate(false)} className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg text-sm font-medium transition-colors">
                انصراف
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function LicenseStatus({ status }: { status: string }) {
  const config: Record<string, { bg: string; text: string; label: string }> = {
    ACTIVE: { bg: 'bg-emerald-500/10 border-emerald-500/20', text: 'text-emerald-400', label: 'فعال' },
    EXPIRED: { bg: 'bg-amber-500/10 border-amber-500/20', text: 'text-amber-400', label: 'منقضی' },
    SUSPENDED: { bg: 'bg-orange-500/10 border-orange-500/20', text: 'text-orange-400', label: 'تعلیق' },
    REVOKED: { bg: 'bg-red-500/10 border-red-500/20', text: 'text-red-400', label: 'لغو' },
    PENDING: { bg: 'bg-blue-500/10 border-blue-500/20', text: 'text-blue-400', label: 'در انتظار' },
  };
  const c = config[status] || config.ACTIVE;
  return (
    <span className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-medium border ${c.bg} ${c.text}`}>
      {c.label}
    </span>
  );
}
