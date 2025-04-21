import Link from "next/link";
import SigninButton from "../SigninButton";

export default function AppBar() {
  return (
    <div className="p-4 shadow flex gap-3 bg-gradient-to-br from-blue-400 to-cyan-400 text-white text-lg">
      <Link href="/" className="font-bold">
        Home
      </Link>
      <Link href="/dashboard" className="font-bold">
        Dashboard
      </Link>

      <SigninButton />
    </div>
  );
}
