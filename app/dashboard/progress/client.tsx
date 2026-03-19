"use client";
import { Button } from "@/components/ui/button";
import { BarChart4 } from "lucide-react";

export default function ProgressClient() {
  return (
    <section className="max-w-2xl mx-auto flex flex-col items-center text-center py-10 gap-8">
      <h1 className="font-bold text-3xl md:text-4xl">
        Progress
      </h1>
      <p className="text-muted-foreground text-lg">
        No milestones yet. Add milestones to track your startup growth.
      </p>
      <Button size="lg" className="mt-6">
        <BarChart4 className="inline-block mr-2" />
        Add Milestone
      </Button>
    </section>
  );
}