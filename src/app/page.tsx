"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Card, useCards } from "@/hooks/useCards";
import { useState } from "react";

export default function Home() {
  const [tableCard, setTableCard] = useState<Card>("A");
  const order = useCards(tableCard);
  return (
    <main className="flex flex-col gap-4 w-full mt-4">
      <div className="flex gap-4 m-auto">
        <Select
          onValueChange={(value) => setTableCard(value as Card)}
          defaultValue="A"
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Selecione a vira" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4</SelectItem>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="6">6</SelectItem>
              <SelectItem value="7">7</SelectItem>
              <SelectItem value="Q">Q</SelectItem>
              <SelectItem value="J">J</SelectItem>
              <SelectItem value="K">K</SelectItem>
              <SelectItem value="A">A</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <ThemeToggle />
      </div>
      <div className="flex flex-col items-center gap-1 m-auto">
        <p className="text-muted-foreground">Mais fraca</p>
        {order.map((card) => (
          <p key={card}>{card}</p>
        ))}
        <p className="text-muted-foreground">Mais forte</p>
      </div>
    </main>
  );
}
