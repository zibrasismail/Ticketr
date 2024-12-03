import logo from "@/images/logo.png";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "@/components/SearchBar";

export default function Header() {
  return (
    <header className="flex flex-col lg:flex-row justify-between items-center py-4 px-6 bg-white shadow-md">
      <div className="flex justify-between items-center w-full lg:w-auto">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={logo}
            alt="TicketMaster"
            width={100}
            height={100}
            className="w-24 lg:w-28"
          />
        </Link>
        <div className="lg:hidden">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
      <div className="w-full lg:max-w-2xl mt-4 lg:mt-0">
        <SearchBar />
      </div>
      <div className="hidden lg:block">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
            <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>
      </div>
    </header>
  );
}
