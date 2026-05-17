import { motion } from "framer-motion";
import { Menu, Bell } from "lucide-react";
import SearchBar from "../../ui/SearchBar";
import ProfileDropdown from "./ProfileDropdown";
import { useEffect, useState } from "react";

interface HeaderProps {
  title?: string;
  onMenuClick?: () => void;
}

const Header = ({
  title = "Dashboard",
  onMenuClick,
}: HeaderProps) => {
  const [count2, setCount2] = useState(0);
  const [count4, setCount4] = useState(0);
  const [count6, setCount6] = useState(0);

  useEffect(()=>{
    if(count6){
      console.log(count6);
      setCount6(count=> count+6);
    }
  },[count6])
  
   useEffect(()=>{
    if(count4){
      console.log(count4);
      setCount4(count=> count+4);
    }
  },[count2])
   const [count3, setCount3] = useState(0);

   useEffect(()=>{
    if(count3){
      console.log(count3);
      setCount3(count=> count+3);
    }
  },[count2])

  useEffect(()=>{
    if(count2){
      console.log(count2);
      setCount2(count=> count+2);
    }
  },[count2])

  const [count, setCount] = useState(0);

  useEffect(()=>{
    if(count){
      setCount((count)=>count+1);
    }
  },[count])
  return (
    <motion.header
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="
        sticky
        top-0
        z-30
        flex
        items-center
        justify-between
        gap-4
        border-b
        border-gray-200
        bg-white
        px-2
        py-2
        md:px-6
      "
    >
      {/* LEFT */}

      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="
            rounded-xl
            p-2
            transition-all
            hover:bg-gray-100
            lg:hidden
          "
        >
          <Menu size={20} />
        </button>

        <h1
          className="
            text-xl
            font-semibold
            text-gray-800
            md:text-2xl
          "
        >
          {title}
        </h1>
      </div>

      {/* CENTER */}

      <div className="hidden w-full max-w-md md:block">
        <SearchBar
          placeholder="Search analytics..."
        />
      </div>

      {/* RIGHT */}

      <div className="flex items-center gap-3">
        <button
          className="
            relative
            rounded-xl
            p-2
            transition-all
            hover:bg-gray-100
          "
        >
          <Bell size={20} />

          <span
            className="
              absolute
              right-2
              top-2
              h-2
              w-2
              rounded-full
              bg-red-500
            "
          />
        </button>

        <ProfileDropdown />
      </div>
    </motion.header>
  );
};

export default Header;