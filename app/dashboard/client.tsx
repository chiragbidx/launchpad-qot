"use client";
import { Button } from "@/components/ui/button";
import { Lightbulb } from "lucide-react";

type ClientProps = {
  greeting: string;
  firstName: string;
};

export default function Client({ greeting, firstName }: ClientProps) {
  return (
    <section className="max-w-2xl mx-auto flex flex-col items-center text-center py-10 gap-8">
      <h1 className="font-bold text-3xl md:text-4xl">
        Welcome to LaunchBoard
      </h1>
      <p className="text-muted-foreground text-lg">
        Your startup command center. Track ideas, manage tasks, and launch successfully.
      </p>
      <Button size="lg" className="mt-6" asChild>
        <a href="/dashboard/ideas">
          <Lightbulb className="inline-block mr-2" />
          Add Your First Idea
        </a>
      </Button>
    </section>
  );
}