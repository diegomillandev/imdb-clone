'use client';
import { useTheme } from "next-themes";
import { IoMdSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";

export default function SwitchDarkMode() {
    const { theme, setTheme, systemTheme} = useTheme();

    return (
    <div>
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center gap-1 p-2 bg-gray-200 dark:bg-gray-800 rounded-md transition-all delay-75"
        >
            {theme === "dark" ? ( <IoMdSunny size={22} /> ) : ( <FaMoon size={22} /> )}
        </button>
    </div>
  )
}
