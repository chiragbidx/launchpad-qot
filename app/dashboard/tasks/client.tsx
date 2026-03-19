"use client";
import { Button } from "@/components/ui/button";
import { ListChecks } from "lucide-react";

export default function TasksClient() {
  return (
    <section className="max-w-2xl mx-auto flex flex-col items-center text-center py-10 gap-8">
      <h1 className="font-bold text-3xl md:text-4xl">
        Tasks
      </h1>
      <p className="text-muted-foreground text-lg">
        No tasks created. Organize your next steps and assign tasks to your team.
      </p>
      <Button size="lg" className="mt-6">
        <ListChecks className="inline-block mr-2" />
        Add Task
      </Button>
    </section>
  );
}