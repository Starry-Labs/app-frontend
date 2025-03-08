"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, User, UserPlus } from "lucide-react";
import { cn } from "@/lib/utils";

export function NavBar() {
  const pathname = usePathname();

  // Don't show navbar on onboarding page
  if (pathname === "/") return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center justify-around h-16">
        <Link
          href="/me"
          className={cn(
            "flex flex-col items-center justify-center flex-1 h-full text-muted-foreground hover:text-primary transition-colors",
            pathname === "/me" && "text-primary"
          )}
        >
          <User className="w-6 h-6" />
          <span className="text-xs mt-1">Me</span>
        </Link>
        <Link
          href="/relationships"
          className={cn(
            "flex flex-col items-center justify-center flex-1 h-full text-muted-foreground hover:text-primary transition-colors",
            pathname === "/relationships" && "text-primary"
          )}
        >
          <Heart className="w-6 h-6" />
          <span className="text-xs mt-1">Relationships</span>
        </Link>
        <Link
          href="/invite"
          className={cn(
            "flex flex-col items-center justify-center flex-1 h-full text-muted-foreground hover:text-primary transition-colors",
            pathname === "/invite" && "text-primary"
          )}
        >
          <UserPlus className="w-6 h-6" />
          <span className="text-xs mt-1">Invite Friend</span>
        </Link>
      </div>
    </nav>
  );
}
