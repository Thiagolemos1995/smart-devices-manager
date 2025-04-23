import Link from "next/link";
import SigninButton from "../SigninButton";
import { Home, LayoutDashboard, Smartphone } from "lucide-react";
import { Separator } from "./separator";

export default function AppBar() {
  return (
    <div className="p-4 shadow flex flex-col gap-6 bg-gradient-to-br from-gray-600 to-gray-500 text-white text-lg w-fit">
      <div className="flex flex-col items-center gap-2 py-4">
        <div className="flex items-center justify-center gap-2 w-full whitespace-nowrap pb-2">
          <Smartphone className="w-6 h-6" />
          <h3 className="text-xl font-bold">Smart Home</h3>
        </div>
        <Separator className="w-4 h-4" />
      </div>

      <div className="flex flex-col gap-2">
        <Link
          href="/"
          className="font-bold flex items-center gap-2 text-sm hover:bg-gray-500 hover:scale-105 transition-all duration-300 rounded-full p-2"
        >
          <Home className="w-4 h-4" />
          Home
        </Link>
        <Link
          href="/dashboard"
          className="font-bold flex items-center gap-2 text-sm hover:bg-gray-500 hover:scale-105 transition-all duration-300 rounded-full p-2"
        >
          <LayoutDashboard className="w-4 h-4" />
          Dashboard
        </Link>
      </div>

      <SigninButton />
    </div>
  );
}
