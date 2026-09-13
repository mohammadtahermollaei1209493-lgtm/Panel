import { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Sidebar from './components/Sidebar';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import UsersPage from './pages/UsersPage';
import LicensesPage from './pages/LicensesPage';
import PlansPage from './pages/PlansPage';
import ServersPage from './pages/ServersPage';
import DevicesPage from './pages/DevicesPage';
import SessionsPage from './pages/SessionsPage';
import LogsPage from './pages/LogsPage';
import RemoteConfigPage from './pages/RemoteConfigPage';
import UpdatesPage from './pages/UpdatesPage';
import SettingsPage from './pages/SettingsPage';
import ArchitecturePage from './pages/ArchitecturePage';

function AppContent() {
  const { currentPage, sidebarOpen } = useApp();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <LoginPage onLogin={() => setIsLoggedIn(true)} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard': return <Dashboard />;
      case 'users': return <UsersPage />;
      case 'licenses': return <LicensesPage />;
      case 'plans': return <PlansPage />;
      case 'servers': return <ServersPage />;
      case 'devices': return <DevicesPage />;
      case 'sessions': return <SessionsPage />;
      case 'logs': return <LogsPage />;
      case 'remote-config': return <RemoteConfigPage />;
      case 'updates': return <UpdatesPage />;
      case 'settings': return <SettingsPage />;
      case 'architecture': return <ArchitecturePage />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Sidebar />
      <main className={`transition-all duration-300 ${sidebarOpen ? 'mr-64' : 'mr-0 lg:mr-16'}`}>
        {/* Top Bar */}
        <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-xl border-b border-slate-700/50 px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] text-emerald-400 font-medium">سیستم فعال</span>
              </div>
              <span className="text-[10px] text-slate-500">Config v105</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-400">۱۴۰۴/۰۳/۱۵</span>
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-[10px] font-bold text-white">
                A
              </div>
            </div>
          </div>
        </header>
        <div className="p-6">
          {renderPage()}
        </div>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
