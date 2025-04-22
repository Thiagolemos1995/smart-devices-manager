import { getSession } from "@/lib/session";
import { Button } from "./ui/button";
import Link from "next/link";
import { LogOut } from "lucide-react";

export default async function SigninButton() {
  const session = await getSession();

  return (
    <div className="flex items-center gap-2 mt-auto">
      {!session || !session.user ? (
        <div className="flex flex-col items-center gap-2">
          <Link href="/signin">
            <Button className="cursor-pointer">Signin</Button>
          </Link>
          <Link href="/signup">
            <Button className="cursor-pointer">Signup</Button>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm">{session.user.name}</p>
          <Link
            href="/api/auth/signout"
            className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-all duration-300"
          >
            Logout
            <LogOut className="w-6 h-6" />
          </Link>
        </div>
      )}
    </div>
  );
}
