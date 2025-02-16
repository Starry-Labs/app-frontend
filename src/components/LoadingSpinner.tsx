"use client";

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[100dvh]">
      <div className="animate-spin rounded-full h-8 w-8 border-2 border-gray-300 border-t-blue-500" />
    </div>
  );
}
