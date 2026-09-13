import { useApp } from '../context/AppContext';
import {
  LayoutDashboard, Users, Key, CreditCard, Server, Laptop,
  Activity, FileText, Settings, Globe, Download, Shield,
  ChevronRight, Wifi, LogOut, Menu, BookOpen
} from 'lucide-react';

const menuItems = [
  { id: 'dashboard', label: 'داشبورد', icon: LayoutDashboard },
  { id: 'users', label: 'کاربران', icon: Users },
  { id: 'licenses', label: 'لایسنس‌ها', icon: Key },
  { id: 'plans', label: 'پلن‌ها', icon: CreditCard },
  { id: 'servers', label: 'سرورها', icon: Server },
  { id: 'devices', label: 'دستگاه‌ها', icon: Laptop },
  { id: 'sessions', label: 'نشست‌ها', icon: Activity },
  { id: 'logs', label: 'گزارش‌ها', icon: FileText },
  { id: 'remote-config', label: 'پیکربندی', icon: Globe },
  { id: 'updates', label: 'بروزرسانی', icon: Download },
  { id: 'settings', label: 'تنظیمات', icon: Settings },
  { id: 'architecture', label: 'مستندات', icon: BookOpen },
];

export default function Sidebar() {
  const { currentPage, setCurrentPage, sidebarOpen, setSidebarOpen } = useApp();

  return (
    <aside className={`fixed top-0 right-0 h-full bg-slate-900 border-l border-slate-700/50 transition-all duration-300 z-50 ${sidebarOpen ? 'w-64' : 'w-0 overflow-hidden lg:w-16'}`}>
      {/* Header */}
      <div className="flex items-center gap-3 p-4 border-b border-slate-700/50">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center flex-shrink-0">
          <Shield className="w-5 h-5 text-slate-900" />
        </div>
        {sidebarOpen && (
          <div className="overflow-hidden">
            <h1 className="text-lg font-bold text-white">IFIXVPN</h1>
            <p className="text-[10px] text-slate-400">پنل مدیریت</p>
          </div>
        )}
      </div>

      {/* Menu */}
      <nav className="p-2 space-y-1 overflow-y-auto h-[calc(100%-140px)]">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
                isActive
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              {sidebarOpen && <span>{item.label}</span>}
              {sidebarOpen && isActive && <ChevronRight className="w-4 h-4 mr-auto rotate-180" />}
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-slate-700/50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0">
            <Wifi className="w-4 h-4 text-emerald-400" />
          </div>
          {sidebarOpen && (
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-slate-200 truncate">admin</p>
              <p className="text-[10px] text-slate-500">مدیر کل</p>
            </div>
          )}
          {sidebarOpen && (
            <button className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-red-400 transition-colors">
              <LogOut className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="absolute -left-3 top-20 w-6 h-6 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-colors"
      >
        <Menu className="w-3 h-3" />
      </button>
    </aside>
  );
}
