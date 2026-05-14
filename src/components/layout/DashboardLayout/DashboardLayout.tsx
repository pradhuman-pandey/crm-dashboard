import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {

  return (
    <div className="h-screen bg-white">
      <Sidebar />

      <div
        className="flex h-screen flex-col lg:ml-65">
        <Header/>
        <main
          className="
          flex-1 p-3 md:p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
