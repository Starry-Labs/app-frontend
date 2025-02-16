"use client";

import { useEffect, useState } from "react";
import { LoadingSpinner } from "./LoadingSpinner";
import { WebAppUser } from "@/types/telegram";

import Image from "next/image";

export function TelegramApp() {
  const [isReady, setIsReady] = useState(false);
  const [user, setUser] = useState<WebAppUser | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;

      // Initialize user data
      if (tg.initDataUnsafe?.user) {
        setUser(tg.initDataUnsafe.user);
      }

      // Set up webapp
      tg.ready();
      tg.expand();

      // Apply theme
      if (tg.themeParams) {
        document.documentElement.style.backgroundColor =
          tg.themeParams.bg_color || "#ffffff";
      }

      setIsReady(true);
    }
  }, []);

  if (!isReady) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return (
      <div className="flex min-h-[100dvh] items-center justify-center p-4">
        <div className="text-center">
          <p className="text-lg font-medium">Please open in Telegram</p>
          <p className="mt-2 text-sm text-gray-500">
            This app only works through Telegram
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-[100dvh]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 px-4 py-3">
        <div className="flex items-center gap-3">
          {user.photo_url && (
            <Image
              src={user.photo_url}
              alt={user.first_name}
              className="w-8 h-8 rounded-full"
            />
          )}
          <span className="font-medium truncate">{user.first_name}</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4">
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white rounded-lg shadow-sm p-4 space-y-3"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full" />
                <div>
                  <h3 className="font-medium">User {item}</h3>
                  <p className="text-sm text-gray-500">2h ago</p>
                </div>
              </div>
              <p className="text-gray-700">Sample post content {item}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Navigation */}
      <nav className="sticky bottom-0 bg-white border-t border-gray-200">
        <div className="flex justify-around py-2 px-4">
          {["Home", "Rewards", "Profile", "Settings"].map((item) => (
            <button key={item} className="flex flex-col items-center p-2">
              <div className="w-6 h-6 bg-gray-400 rounded-full mb-1" />
              <span className="text-xs">{item}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
