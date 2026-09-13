import { Users, Key, Server, Activity, TrendingUp, TrendingDown, Wifi } from 'lucide-react';
import { users, licenses, servers, sessions } from '../data/mockData';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const trafficData = [
  { name: 'شنبه', download: 45, upload: 12 },
  { name: 'یکشنبه', download: 52, upload: 15 },
  { name: 'دوشنبه', download: 48, upload: 13 },
  { name: 'سه‌شنبه', download: 61, upload: 18 },
  { name: 'چهارشنبه', download: 55, upload: 16 },
  { name: 'پنجشنبه', download: 67, upload: 20 },
  { name: 'جمعه', download: 72, upload: 22 },
];

const connectionData = [
  { name: 'آلمان', value: 35 },
  { name: 'هلند', value: 25 },
  { name: 'فنلاند', value: 15 },
  { name: 'ترکیه', value: 20 },
  { name: 'آمریکا', value: 5 },
];

const COLORS = ['#10b981', '#06b6d4', '#8b5cf6', '#f59e0b', '#ef4444'];

const hourlyData = [
  { hour: '۰۰', users: 12 }, { hour: '۰۲', users: 8 }, { hour: '۰۴', users: 5 },
  { hour: '۰۶', users: 10 }, { hour: '۰۸', users: 25 }, { hour: '۱۰', users: 38 },
  { hour: '۱۲', users: 45 }, { hour: '۱۴', users: 52 }, { hour: '۱۶', users: 48 },
  { hour: '۱۸', users: 55 }, { hour: '۲۰', users: 42 }, { hour: '۲۲', users: 28 },
];

export default function Dashboard() {
  const activeUsers = users.filter(u => u.status === 'ACTIVE').length;
  const activeLicenses = licenses.filter(l => l.status === 'ACTIVE').length;
  const onlineServers = servers.filter(s => s.status === 'ONLINE').length;
  const totalTraffic = sessions.reduce((acc, s) => acc + s.trafficUsed, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">داشبورد</h1>
          <p className="text-sm text-slate-400 mt-1">نمای کلی سیستم IFIXVPN</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-emerald-400">سیستم فعال</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="کاربران فعال"
          value={activeUsers.toString()}
          subtitle={`از ${users.length} کاربر`}
          icon={Users}
          color="emerald"
          trend="+12%"
          trendUp={true}
        />
        <StatCard
          title="لایسنس‌های فعال"
          value={activeLicenses.toString()}
          subtitle={`از ${licenses.length} لایسنس`}
          icon={Key}
          color="cyan"
          trend="+8%"
          trendUp={true}
        />
        <StatCard
          title="سرورهای آنلاین"
          value={`${onlineServers}/${servers.length}`}
          subtitle="سرور فعال"
          icon={Server}
          color="violet"
          trend=""
          trendUp={true}
        />
        <StatCard
          title="ترافیک لحظه‌ای"
          value={`${totalTraffic.toFixed(1)} GB`}
          subtitle="مصرف امروز"
          icon={Activity}
          color="amber"
          trend="+23%"
          trendUp={true}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Traffic Chart */}
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-slate-200">ترافیک هفتگی (GB)</h3>
            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-400" />دانلود</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-cyan-400" />آپلود</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={trafficData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="name" stroke="#64748b" fontSize={11} />
              <YAxis stroke="#64748b" fontSize={11} />
              <Tooltip contentStyle={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '8px', direction: 'rtl' }} />
              <Area type="monotone" dataKey="download" stroke="#10b981" fill="#10b981" fillOpacity={0.1} strokeWidth={2} />
              <Area type="monotone" dataKey="upload" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.1} strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Server Distribution */}
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5">
          <h3 className="text-sm font-medium text-slate-200 mb-4">توزیع اتصال بر اساس سرور</h3>
          <div className="flex items-center gap-6">
            <ResponsiveContainer width="50%" height={180}>
              <PieChart>
                <Pie data={connectionData} cx="50%" cy="50%" innerRadius={45} outerRadius={70} dataKey="value" strokeWidth={0}>
                  {connectionData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '8px', direction: 'rtl' }} />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2">
              {connectionData.map((item, i) => (
                <div key={item.name} className="flex items-center gap-2 text-xs">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: COLORS[i] }} />
                  <span className="text-slate-400">{item.name}</span>
                  <span className="text-slate-200 font-medium mr-auto">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Hourly Users */}
        <div className="lg:col-span-2 bg-slate-800/50 border border-slate-700/50 rounded-xl p-5">
          <h3 className="text-sm font-medium text-slate-200 mb-4">کاربران آنلاین (۲۴ ساعت اخیر)</h3>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={hourlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="hour" stroke="#64748b" fontSize={11} />
              <YAxis stroke="#64748b" fontSize={11} />
              <Tooltip contentStyle={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '8px', direction: 'rtl' }} />
              <Bar dataKey="users" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Sessions */}
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5">
          <h3 className="text-sm font-medium text-slate-200 mb-4">اتصالات فعال</h3>
          <div className="space-y-3">
            {sessions.slice(0, 5).map((session) => (
              <div key={session.id} className="flex items-center gap-3 p-2 rounded-lg bg-slate-900/50">
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <Wifi className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-slate-200 truncate">{session.username}</p>
                  <p className="text-[10px] text-slate-500">{session.serverName}</p>
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-emerald-400">↓ {session.downloadSpeed} MB/s</p>
                  <p className="text-[10px] text-cyan-400">↑ {session.uploadSpeed} MB/s</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* System Status */}
      <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5">
        <h3 className="text-sm font-medium text-slate-200 mb-4">وضعیت سیستم</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          <SystemStatus label="API" status="online" />
          <SystemStatus label="Database" status="online" />
          <SystemStatus label="Redis" status="online" />
          <SystemStatus label="Xray Core" status="online" />
          <SystemStatus label="Subscription" status="online" />
          <SystemStatus label="CDN" status="online" />
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, subtitle, icon: Icon, color, trend, trendUp }: {
  title: string; value: string; subtitle: string; icon: any; color: string; trend: string; trendUp: boolean;
}) {
  const colorMap: Record<string, string> = {
    emerald: 'from-emerald-500/20 to-emerald-500/5 border-emerald-500/20 text-emerald-400',
    cyan: 'from-cyan-500/20 to-cyan-500/5 border-cyan-500/20 text-cyan-400',
    violet: 'from-violet-500/20 to-violet-500/5 border-violet-500/20 text-violet-400',
    amber: 'from-amber-500/20 to-amber-500/5 border-amber-500/20 text-amber-400',
  };

  return (
    <div className={`bg-gradient-to-br ${colorMap[color]} border rounded-xl p-4`}>
      <div className="flex items-center justify-between mb-3">
        <Icon className="w-5 h-5" />
        {trend && (
          <span className={`flex items-center gap-0.5 text-[10px] ${trendUp ? 'text-emerald-400' : 'text-red-400'}`}>
            {trendUp ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            {trend}
          </span>
        )}
      </div>
      <p className="text-2xl font-bold text-white">{value}</p>
      <p className="text-xs text-slate-400 mt-1">{title}</p>
      <p className="text-[10px] text-slate-500 mt-0.5">{subtitle}</p>
    </div>
  );
}

function SystemStatus({ label, status }: { label: string; status: 'online' | 'offline' | 'degraded' }) {
  const colors = {
    online: 'bg-emerald-400',
    offline: 'bg-red-400',
    degraded: 'bg-amber-400',
  };
  const labels = {
    online: 'فعال',
    offline: 'قطع',
    degraded: 'کند',
  };

  return (
    <div className="flex items-center gap-2 p-2.5 bg-slate-900/50 rounded-lg">
      <div className={`w-2 h-2 rounded-full ${colors[status]} ${status === 'online' ? 'animate-pulse' : ''}`} />
      <span className="text-xs text-slate-300">{label}</span>
      <span className={`text-[10px] mr-auto ${status === 'online' ? 'text-emerald-400' : status === 'offline' ? 'text-red-400' : 'text-amber-400'}`}>
        {labels[status]}
      </span>
    </div>
  );
}
