import { PropsWithChildren } from "react";

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex bg-gradient-to-br from-gray-400 to-gray-300 h-screen items-center justify-center">
      {children}
    </div>
  );
}
