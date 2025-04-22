import Link from "next/link";
import SigninButton from "../SigninButton";
import { Home, LayoutDashboard } from "lucide-react";

export default function AppBar() {
  return (
    <div className="py-4 px-6 shadow flex gap-6 bg-gradient-to-br from-blue-400 to-cyan-400 text-white text-lg w-full">
      <Link href="/" className="font-bold flex items-center gap-2">
        <Home className="w-4 h-4" />
        Home
      </Link>
      <Link href="/dashboard" className="font-bold flex items-center gap-2">
        <LayoutDashboard className="w-4 h-4" />
        Dashboard
      </Link>

      <SigninButton />
    </div>
  );
}
