"use client";

import { useEffect, useState } from "react";
import type { TelegramWebApp, WebAppUser } from "@/types/telegram";
import { mockTelegramWebApp } from "@/lib/telegram";

export const useTelegram = () => {
  const [webApp, setWebApp] = useState<TelegramWebApp | null>(null);
  const [user, setUser] = useState<WebAppUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initTelegram = () => {
      // Check if we're in development mode
      const isDevelopment = process.env.NODE_ENV === "development";
      const tg = isDevelopment ? mockTelegramWebApp : window.Telegram?.WebApp;

      if (tg) {
        setWebApp(tg as TelegramWebApp);
        if (tg.initDataUnsafe?.user) {
          setUser(tg.initDataUnsafe.user);
        }
        tg.ready();
        setIsLoading(false);
      } else if (!isDevelopment) {
        // Only retry in production
        setTimeout(initTelegram, 100);
      }
    };

    initTelegram();
  }, []);

  return {
    webApp,
    user,
    isLoading,
    isDevelopment: process.env.NODE_ENV === "development",
  };
};
