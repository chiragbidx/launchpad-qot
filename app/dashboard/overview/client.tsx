"use client";
import { Button } from "@/components/ui/button";
import { Lightbulb } from "lucide-react";

export default function OverviewClient() {
  return (
    <section className="max-w-2xl mx-auto flex flex-col items-center text-center py-10 gap-8">
      <h1 className="font-bold text-3xl md:text-4xl">
        Overview
      </h1>
      <p className="text-muted-foreground text-lg">
        Set up your startup workspace to get a complete overview of your progress.
      </p>
      <Button size="lg" className="mt-6" asChild>
        <a href="/dashboard/ideas">
          <Lightbulb className="inline-block mr-2" />
          Add Idea
        </a>
      </Button>
    </section>
  );
}