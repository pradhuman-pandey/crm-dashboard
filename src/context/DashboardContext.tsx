import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface DashboardContextType {
  loading: boolean;
}

const DashboardContext =createContext<DashboardContextType | undefined>(undefined);

export const DashboardProvider = ({children}: {children: React.ReactNode}) => {
  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        loading,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
    const context = useContext(DashboardContext);

    if (!context) {
      throw new Error(
        "useDashboard must be used inside DashboardProvider"
      );
    }

    return context;
  };