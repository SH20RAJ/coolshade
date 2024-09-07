"use client";
import { Stats } from "./stats";

export default function PerformanceStats() {
  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-background">
      <div className="w-full space-y-6 px-4">
          <h1 className="text-4xl font-bold text-center">Performance Stats</h1>
        <Stats />
      </div>
    </div>
  );
}
