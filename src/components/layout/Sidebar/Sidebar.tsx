import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  MessageSquare,
  BarChart3,
  Mail,
  Zap,
  Share2,
  HelpCircle,
  MessageCircle,
  Settings,
  Menu,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useState } from "react";

const navItems = [
  { id: 1, title: "Dashboard", icon: LayoutDashboard },
  { id: 2, title: "Product", icon: Package },
  { id: 3, title: "Order", icon: ShoppingCart },
  { id: 4, title: "Customer", icon: Users },
  { id: 5, title: "Message", icon: MessageSquare },
  { id: 6, title: "Report & Analytics", icon: BarChart3 },
  { id: 7, title: "Email", icon: Mail },
  { id: 8, title: "Automation", icon: Zap },
  { id: 9, title: "Integration", icon: Share2 },
  { id: 10, title: "Help Center", icon: HelpCircle },
  { id: 11, title: "Feedback", icon: MessageCircle },
  { id: 12, title: "Settings", icon: Settings },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-50 flex items-center justify-center rounded-xl bg-white p-2 shadow-md lg:hidden"
      >
        <Menu size={22} />
      </button>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      <motion.aside
        initial={{ x: -100 }}
        animate={{ x: isOpen ? 0 : 0 }}
        transition={{ duration: 0.3 }}
        className={clsx(
          "fixed left-0 top-0 z-50 flex h-screen w-65 flex-col justify-between border-r border-gray-200 bg-white px-5 py-6 shadow-sm transition-all duration-300 lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 rounded-lg p-1 text-gray-500 hover:bg-gray-100 lg:hidden"
        >
          <X size={10} />
        </button>

        <div>
          <div className=" border-b border-gray-200 w-full">
            <div className="mb-1 flex items-center justify-start gap-3">
            <div className="flex h-6 w-6 items-center justify-center rounded-xl bg-indigo-600 font-bold text-white">
              C
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">Cemdash</h2>
            </div>
            </div>
          </div>
          <nav className="mt-3 flex flex-col gap-1 border-lightgrey">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeItem === item.title;

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveItem(item.title);
                  }}
                  className={clsx(
                    "flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-white text-black shadow-xl"
                      : "text-gray-600 hover:bg-gray-100"
                  )}
                >
                  <Icon size={20} />
                  <span>{item.title}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;