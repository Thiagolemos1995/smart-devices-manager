import Link from "next/link";
import SignupForm from "./_components/signupForm";

export default function Signup() {
  return (
    <div className="flex flex-col gap-4 p-8 justify-center items-center bg-white rounded-lg shadow-lg w-96">
      <h1 className="text-2xl font-bold text-center mb-4">Sign up</h1>

      <SignupForm />

      <div className="flex justify-between text-sm gap-2">
        <p>Already have an account?</p>
        <Link
          href="/auth/signin"
          className="text-gray-600 hover:text-gray-700 transition-colors font-bold"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
}
