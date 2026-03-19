"use client";
import { Button } from "@/components/ui/button";
import { Lightbulb } from "lucide-react";

export default function IdeasClient() {
  return (
    <section className="max-w-2xl mx-auto flex flex-col items-center text-center py-10 gap-8">
      <h1 className="font-bold text-3xl md:text-4xl">
        Startup Ideas
      </h1>
      <p className="text-muted-foreground text-lg">
        No ideas yet. Add your first business idea to get started.
      </p>
      <Button size="lg" className="mt-6">
        <Lightbulb className="inline-block mr-2" />
        Add Idea
      </Button>
    </section>
  );
}