import { PropsWithChildren } from "react";

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex bg-gradient-to-br from-lime-400 to-cyan-400 h-screen items-center justify-center">
      {children}
    </div>
  );
}
