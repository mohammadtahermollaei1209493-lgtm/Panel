import { useState, createContext, useContext, ReactNode } from 'react';

interface AppContextType {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const AppContext = createContext<AppContextType>({
  sidebarOpen: true,
  setSidebarOpen: () => {},
  currentPage: 'dashboard',
  setCurrentPage: () => {},
});

export function AppProvider({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState('dashboard');

  return (
    <AppContext.Provider value={{ sidebarOpen, setSidebarOpen, currentPage, setCurrentPage }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
