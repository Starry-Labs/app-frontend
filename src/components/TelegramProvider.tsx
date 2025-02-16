"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { LoadingSpinner } from "./LoadingSpinner";
import { MainApp } from "./MainApp";

export function TelegramProvider() {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const isDevelopment = process.env.NODE_ENV === "development";

  useEffect(() => {
    setIsMounted(true);
    if (isDevelopment) {
      setIsScriptLoaded(true);
    }
  }, [isDevelopment]);

  if (!isMounted) {
    return null;
  }

  if (isDevelopment) {
    return <MainApp />;
  }

  return (
    <>
      <Script
        src="https://telegram.org/js/telegram-web-app.js"
        onLoad={() => setIsScriptLoaded(true)}
        strategy="afterInteractive"
      />
      {isScriptLoaded ? <MainApp /> : <LoadingSpinner />}
    </>
  );
}
