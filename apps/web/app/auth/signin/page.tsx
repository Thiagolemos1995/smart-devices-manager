import Link from "next/link";
import SigninForm from "./_components/signinForm";

export default function SigninPage() {
  return (
    <div className="flex flex-col gap-4 p-8 justify-center items-center bg-white rounded-lg shadow-lg w-96">
      <h1 className="text-2xl font-bold text-center mb-4">Sign in</h1>

      <SigninForm />

      <div className="flex justify-between text-sm gap-2">
        <p>Don't have an account?</p>
        <Link
          href="/auth/signup"
          className="text-lime-600 hover:text-lime-700 transition-colors"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}
