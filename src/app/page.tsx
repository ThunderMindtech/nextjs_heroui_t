"use client";

import { Button, Switch } from "@heroui/react";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <p className="text-lg text-blue-500">Tailwind classed</p>
      <Button>HeroUI Button</Button>
      <Switch>HeroUI Switch</Switch>
    </div>
  );
}
