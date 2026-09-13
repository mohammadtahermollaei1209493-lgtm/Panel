import { useState } from 'react';
import { users } from '../data/mockData';
import { Search, Edit, Trash2, Ban, Eye, UserPlus, Filter } from 'lucide-react';

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [showModal, setShowModal] = useState(false);

  const filtered = users.filter(u => {
    const matchSearch = u.username.includes(searchTerm) || u.email.includes(searchTerm);
    const matchStatus = statusFilter === 'ALL' || u.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">مدیریت کاربران</h1>
          <p className="text-sm text-slate-400 mt-1">مدیریت کاربران و اشتراکات</p>
        </div>
        <button onClick={() => setShowModal(true)} className="flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg text-sm font-medium transition-colors">
          <UserPlus className="w-4 h-4" />
          کاربر جدید
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="جستجوی کاربر..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pr-10 pl-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/50"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-slate-500" />
          {['ALL', 'ACTIVE', 'BLOCKED', 'EXPIRED'].map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                statusFilter === status
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : 'bg-slate-800 text-slate-400 border border-slate-700 hover:text-slate-200'
              }`}
            >
              {status === 'ALL' ? 'همه' : status === 'ACTIVE' ? 'فعال' : status === 'BLOCKED' ? 'مسدود' : 'منقضی'}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700/50">
                <th className="text-right text-xs font-medium text-slate-400 p-4">کاربر</th>
                <th className="text-right text-xs font-medium text-slate-400 p-4">وضعیت</th>
                <th className="text-right text-xs font-medium text-slate-400 p-4">پلن</th>
                <th className="text-right text-xs font-medium text-slate-400 p-4">ترافیک</th>
                <th className="text-right text-xs font-medium text-slate-400 p-4">دستگاه</th>
                <th className="text-right text-xs font-medium text-slate-400 p-4">آخرین بازدید</th>
                <th className="text-right text-xs font-medium text-slate-400 p-4">انقضا</th>
                <th className="text-center text-xs font-medium text-slate-400 p-4">عملیات</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((user) => (
                <tr key={user.id} className="border-b border-slate-700/30 hover:bg-slate-800/50 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-xs font-bold text-white">
                        {user.username.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-200">{user.username}</p>
                        <p className="text-[10px] text-slate-500">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <StatusBadge status={user.status} />
                  </td>
                  <td className="p-4 text-sm text-slate-300">{user.plan}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${user.trafficUsed / user.trafficLimit > 0.8 ? 'bg-red-400' : 'bg-emerald-400'}`}
                          style={{ width: `${Math.min(100, (user.trafficUsed / user.trafficLimit) * 100)}%` }}
                        />
                      </div>
                      <span className="text-[10px] text-slate-400">{user.trafficUsed}/{user.trafficLimit} GB</span>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-slate-300">{user.deviceCount}/{user.maxDevices}</td>
                  <td className="p-4 text-xs text-slate-400">{user.lastSeen}</td>
                  <td className="p-4 text-xs text-slate-400">{user.expiresAt}</td>
                  <td className="p-4">
                    <div className="flex items-center justify-center gap-1">
                      <button className="p-1.5 rounded-lg hover:bg-slate-700 text-slate-400 hover:text-slate-200 transition-colors">
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                      <button className="p-1.5 rounded-lg hover:bg-slate-700 text-slate-400 hover:text-blue-400 transition-colors">
                        <Edit className="w-3.5 h-3.5" />
                      </button>
                      <button className="p-1.5 rounded-lg hover:bg-slate-700 text-slate-400 hover:text-amber-400 transition-colors">
                        <Ban className="w-3.5 h-3.5" />
                      </button>
                      <button className="p-1.5 rounded-lg hover:bg-slate-700 text-slate-400 hover:text-red-400 transition-colors">
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

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-white">{users.length}</p>
          <p className="text-xs text-slate-400 mt-1">کل کاربران</p>
        </div>
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-emerald-400">{users.filter(u => u.status === 'ACTIVE').length}</p>
          <p className="text-xs text-slate-400 mt-1">فعال</p>
        </div>
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-red-400">{users.filter(u => u.status === 'BLOCKED').length}</p>
          <p className="text-xs text-slate-400 mt-1">مسدود</p>
        </div>
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-amber-400">{users.filter(u => u.status === 'EXPIRED').length}</p>
          <p className="text-xs text-slate-400 mt-1">منقضی</p>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 w-full max-w-md">
            <h3 className="text-lg font-bold text-white mb-4">ایجاد کاربر جدید</h3>
            <div className="space-y-4">
              <div>
                <label className="text-xs text-slate-400 mb-1 block">نام کاربری</label>
                <input className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-slate-200 focus:outline-none focus:border-emerald-500/50" placeholder="username" />
              </div>
              <div>
                <label className="text-xs text-slate-400 mb-1 block">ایمیل</label>
                <input className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-slate-200 focus:outline-none focus:border-emerald-500/50" placeholder="email@example.com" />
              </div>
              <div>
                <label className="text-xs text-slate-400 mb-1 block">پلن</label>
                <select className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-slate-200 focus:outline-none focus:border-emerald-500/50">
                  <option>یک ماهه</option>
                  <option>سه ماهه</option>
                  <option>شش ماهه</option>
                  <option>یک ساله</option>
                </select>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <button onClick={() => setShowModal(false)} className="flex-1 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg text-sm font-medium transition-colors">
                ایجاد کاربر
              </button>
              <button onClick={() => setShowModal(false)} className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg text-sm font-medium transition-colors">
                انصراف
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const config: Record<string, { bg: string; text: string; label: string }> = {
    ACTIVE: { bg: 'bg-emerald-500/10 border-emerald-500/20', text: 'text-emerald-400', label: 'فعال' },
    BLOCKED: { bg: 'bg-red-500/10 border-red-500/20', text: 'text-red-400', label: 'مسدود' },
    EXPIRED: { bg: 'bg-amber-500/10 border-amber-500/20', text: 'text-amber-400', label: 'منقضی' },
  };
  const c = config[status] || config.ACTIVE;
  return (
    <span className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-medium border ${c.bg} ${c.text}`}>
      {c.label}
    </span>
  );
}
