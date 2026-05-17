import { useState, useRef, useEffect } from "react";

import {
  User,
  Settings,
  LogOut,
  ChevronDown,
} from "lucide-react";

const ProfileDropdown = () => {
  const [open, setOpen] =
    useState(false);

  const dropdownRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (
      event: MouseEvent
    ) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(
          event.target as Node
        )
      ) {
        setOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative border-2"
    >

      <button
        onClick={() =>
          setOpen(!open)
        }
        className="
          flex
          items-center
          gap-2
          rounded-xl
          border
          border-gray-200
          bg-white
          px-2
          py-1.5
          transition-all
          hover:bg-gray-50
        "
      >

        <div
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            bg-indigo-100
            text-sm
            font-semibold
            text-indigo-700
          "
        >
          PP
        </div>

        <ChevronDown
          size={16}
          className={`
            text-gray-500
            transition-transform
            ${
              open
                ? "rotate-180"
                : ""
            }
          `}
        />
      </button>

      {open && (
        <div
          className="
            absolute
            right-0
            top-12
            z-50
            w-52
            overflow-hidden
            rounded-2xl
            border
            border-gray-200
            bg-white
            shadow-xl
          "
        >

          <div
            className="
              border-b
              border-gray-100
              px-4
              py-3
            "
          >
            <p
              className="
                text-sm
                font-semibold
                text-gray-800
              "
            >
              Pradhuman
              Pandey
            </p>

            <p
              className="
                mt-1
                text-xs
                text-gray-500
              "
            >
              pradhuman@gmail.com
            </p>
          </div>

          <div className="p-2">
            <button
              className="
                flex
                w-full
                items-center
                gap-3
                rounded-xl
                px-3
                py-2
                text-sm
                text-gray-700
                transition-all
                hover:bg-gray-100
              "
            >
              <User size={16} />

              Profile
            </button>

            <button
              className="
                flex
                w-full
                items-center
                gap-3
                rounded-xl
                px-3
                py-2
                text-sm
                text-gray-700
                transition-all
                hover:bg-gray-100
              "
            >
              <Settings
                size={16}
              />

              Settings
            </button>

            <button
              className="
                flex
                w-full
                items-center
                gap-3
                rounded-xl
                px-3
                py-2
                text-sm
                text-red-600
                transition-all
                hover:bg-red-50
              "
            >
              <LogOut size={16} />

              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;