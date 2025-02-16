"use client";

import { useTelegram } from "@/hooks/useTelegram";
import { LoadingSpinner } from "./LoadingSpinner";
import { BirthDetailsForm } from "@/components/birth-details-form";
import { NatalChart } from "@/components/natal-chart";
import { ShareInvite } from "@/components/share-invite";
import { RelationshipPairing } from "@/components/relationship-pairing";
import { Star } from "lucide-react";

export function MainApp() {
  const { user, isLoading, isDevelopment } = useTelegram();

  if (isLoading && !isDevelopment) {
    return <LoadingSpinner />;
  }

  if (!user && !isDevelopment) {
    return (
      <div className="flex min-h-[100dvh] items-center justify-center p-4">
        <div className="text-center">
          <p className="text-lg font-medium">Please open in Telegram</p>
          <p className="mt-2 text-sm text-gray-500">
            This app only works through Telegram
          </p>
          0
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-[100dvh] app-background">
      {/* Header */}
      <main className="flex-1 bg-background">
        <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 border-b">
          <div className="container mx-auto px-4 h-16 flex items-center">
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 text-primary" />
              <h1 className="text-xl font-semibold text-primary">Starry</h1>
            </div>
          </div>
        </header>
        <div className="container mx-auto px-4 py-6">
          <div className="space-y-6">
            <BirthDetailsForm />
            <NatalChart />
            <ShareInvite />
            <RelationshipPairing />
          </div>
        </div>
      </main>

      {/* <Navigation /> */}
    </div>
  );
}
