import { getSession } from "@/lib/session";
import { Button } from "./ui/button";
import Link from "next/link";
import { LogOut } from "lucide-react";

export default async function SigninButton() {
  const session = await getSession();

  return (
    <div className="flex items-center gap-2 ml-auto">
      {!session || !session.user ? (
        <>
          <Link href="/signin">
            <Button>Signin</Button>
          </Link>
          <Link href="/signup">
            <Button>Signup</Button>
          </Link>
        </>
      ) : (
        <>
          <p>{session.user.name}</p>
          <Link href="/api/auth/signout">
            <LogOut className="w-6 h-6 hover:scale-110 transition-all duration-300" />
          </Link>
        </>
      )}
    </div>
  );
}
