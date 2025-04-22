import Link from "next/link";
import SigninButton from "../SigninButton";
import { Home, LayoutDashboard } from "lucide-react";

export default function AppBar() {
  return (
    <div className="py-4 px-2 shadow flex flex-col gap-6 bg-gradient-to-br from-gray-600 to-gray-500 text-white text-lg w-fit">
      <Link
        href="/"
        className="font-bold flex items-center gap-2 text-sm hover:scale-105 transition-all duration-300"
      >
        <Home className="w-4 h-4" />
        Home
      </Link>
      <Link
        href="/dashboard"
        className="font-bold flex items-center gap-2 text-sm hover:scale-105 transition-all duration-300"
      >
        <LayoutDashboard className="w-4 h-4" />
        Dashboard
      </Link>

      <SigninButton />
    </div>
  );
}
