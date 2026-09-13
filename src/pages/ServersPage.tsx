import { useState } from 'react';
import { servers } from '../data/mockData';
import { Search, Plus, Edit, Trash2, Power, AlertTriangle, CheckCircle, XCircle, RefreshCw } from 'lucide-react';

export default function ServersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');

  const filtered = servers.filter(s => {
    const matchSearch = s.name.includes(searchTerm) || s.country.includes(searchTerm) || s.city.includes(searchTerm);
    const matchStatus = statusFilter === 'ALL' || s.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">مدیریت سرورها</h1>
          <p className="text-sm text-slate-400 mt-1">مدیریت Nodeها و سرورهای VPN</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg text-sm font-medium transition-colors">
          <Plus className="w-4 h-4" />
          سرور جدید
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="جستجوی سرور..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pr-10 pl-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/50"
          />
        </div>
        <div className="flex items-center gap-2">
          {['ALL', 'ONLINE', 'OFFLINE', 'DEGRADED'].map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                statusFilter === status
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : 'bg-slate-800 text-slate-400 border border-slate-700 hover:text-slate-200'
              }`}
            >
              {status === 'ALL' ? 'همه' : status === 'ONLINE' ? 'آنلاین' : status === 'OFFLINE' ? 'آفلاین' : 'کند'}
            </button>
          ))}
        </div>
      </div>

      {/* Server Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filtered.map((server) => (
          <div key={server.id} className={`bg-slate-800/50 border rounded-xl p-5 transition-all hover:border-slate-600/50 ${server.enabled ? 'border-slate-700/50' : 'border-red-500/20 opacity-60'}`}>
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{server.flag}</span>
                <div>
                  <h3 className="text-sm font-bold text-white">{server.name}</h3>
                  <p className="text-xs text-slate-400">{server.city}، {server.country}</p>
                </div>
              </div>
              <ServerStatus status={server.status} />
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <InfoItem label="پروتکل" value={server.protocol} />
              <InfoItem label="ترانسپورت" value={server.transport} />
              <InfoItem label="پورت" value={server.port.toString()} />
              <InfoItem label="TLS" value={server.tls ? 'فعال' : 'غیرفعال'} />
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              <MetricItem label="Ping" value={`${server.ping}ms`} color={server.ping < 60 ? 'emerald' : server.ping < 100 ? 'amber' : 'red'} />
              <MetricItem label="CPU" value={`${server.cpu}%`} color={server.cpu < 50 ? 'emerald' : server.cpu < 75 ? 'amber' : 'red'} />
              <MetricItem label="RAM" value={`${server.ram}%`} color={server.ram < 50 ? 'emerald' : server.ram < 75 ? 'amber' : 'red'} />
            </div>

            {/* Traffic & Connections */}
            <div className="flex items-center justify-between mb-4 p-2 bg-slate-900/50 rounded-lg">
              <div className="text-center">
                <p className="text-xs text-slate-400">ترافیک</p>
                <p className="text-sm font-bold text-white">{server.traffic} GB</p>
              </div>
              <div className="w-px h-8 bg-slate-700" />
              <div className="text-center">
                <p className="text-xs text-slate-400">اتصالات</p>
                <p className="text-sm font-bold text-white">{server.connections}</p>
              </div>
              <div className="w-px h-8 bg-slate-700" />
              <div className="text-center">
                <p className="text-xs text-slate-400">Uptime</p>
                <p className="text-sm font-bold text-white">{server.uptime}%</p>
              </div>
            </div>

            {/* Capacity Bar */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] text-slate-500">ظرفیت</span>
                <span className="text-[10px] text-slate-400">{server.connections}/{server.capacity}</span>
              </div>
              <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${server.connections / server.capacity > 0.8 ? 'bg-red-400' : server.connections / server.capacity > 0.5 ? 'bg-amber-400' : 'bg-emerald-400'}`}
                  style={{ width: `${Math.min(100, (server.connections / server.capacity) * 100)}%` }}
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1 pt-3 border-t border-slate-700/50">
              <button className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg text-[10px] text-slate-400 hover:bg-slate-700 hover:text-blue-400 transition-colors">
                <Edit className="w-3 h-3" /> ویرایش
              </button>
              <button className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg text-[10px] text-slate-400 hover:bg-slate-700 hover:text-emerald-400 transition-colors">
                <RefreshCw className="w-3 h-3" /> تست
              </button>
              <button className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg text-[10px] text-slate-400 hover:bg-slate-700 hover:text-amber-400 transition-colors">
                <Power className="w-3 h-3" /> {server.enabled ? 'غیرفعال' : 'فعال'}
              </button>
              <button className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg text-[10px] text-slate-400 hover:bg-slate-700 hover:text-red-400 transition-colors">
                <Trash2 className="w-3 h-3" /> حذف
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-white">{servers.length}</p>
          <p className="text-xs text-slate-400 mt-1">کل سرورها</p>
        </div>
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-emerald-400">{servers.filter(s => s.status === 'ONLINE').length}</p>
          <p className="text-xs text-slate-400 mt-1">آنلاین</p>
        </div>
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-amber-400">{servers.filter(s => s.status === 'DEGRADED').length}</p>
          <p className="text-xs text-slate-400 mt-1">کند</p>
        </div>
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-red-400">{servers.filter(s => s.status === 'OFFLINE').length}</p>
          <p className="text-xs text-slate-400 mt-1">آفلاین</p>
        </div>
      </div>
    </div>
  );
}

function ServerStatus({ status }: { status: string }) {
  const config: Record<string, { icon: any; color: string; label: string }> = {
    ONLINE: { icon: CheckCircle, color: 'text-emerald-400', label: 'آنلاین' },
    OFFLINE: { icon: XCircle, color: 'text-red-400', label: 'آفلاین' },
    DEGRADED: { icon: AlertTriangle, color: 'text-amber-400', label: 'کند' },
    UNKNOWN: { icon: AlertTriangle, color: 'text-slate-400', label: 'نامشخص' },
  };
  const c = config[status] || config.UNKNOWN;
  const Icon = c.icon;
  return (
    <div className={`flex items-center gap-1 ${c.color}`}>
      <Icon className="w-3.5 h-3.5" />
      <span className="text-[10px]">{c.label}</span>
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] text-slate-500">{label}</p>
      <p className="text-xs text-slate-300 font-medium">{value}</p>
    </div>
  );
}

function MetricItem({ label, value, color }: { label: string; value: string; color: string }) {
  const colorMap: Record<string, string> = {
    emerald: 'text-emerald-400',
    amber: 'text-amber-400',
    red: 'text-red-400',
  };
  return (
    <div className="text-center p-2 bg-slate-900/50 rounded-lg">
      <p className="text-[10px] text-slate-500">{label}</p>
      <p className={`text-xs font-bold ${colorMap[color]}`}>{value}</p>
    </div>
  );
}
