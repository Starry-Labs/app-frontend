import Link from "next/link";
import { Home, Gift, User, Settings } from "lucide-react";

export function NavBar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-gray-800 bg-gray-950/80 backdrop-blur-md supports-[backdrop-filter]:bg-gray-950/60">
      <div className="flex items-center justify-around h-16">
        <Link
          href="/"
          className="flex flex-col items-center justify-center flex-1 h-full text-gray-400 hover:text-white transition-colors"
        >
          <Home className="w-6 h-6" />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link
          href="/rewards"
          className="flex flex-col items-center justify-center flex-1 h-full text-gray-400 hover:text-white transition-colors"
        >
          <Gift className="w-6 h-6" />
          <span className="text-xs mt-1">Rewards</span>
        </Link>
        <Link
          href="/profile"
          className="flex flex-col items-center justify-center flex-1 h-full text-gray-400 hover:text-white transition-colors"
        >
          <User className="w-6 h-6" />
          <span className="text-xs mt-1">Profile</span>
        </Link>
        <Link
          href="/settings"
          className="flex flex-col items-center justify-center flex-1 h-full text-gray-400 hover:text-white transition-colors"
        >
          <Settings className="w-6 h-6" />
          <span className="text-xs mt-1">Settings</span>
        </Link>
      </div>
    </nav>
  );
}
