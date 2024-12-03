"use client";

import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

export default function Home() {
  const events = useQuery(api.events.get);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {events?.map(({ _id, name }) => <div key={_id}>{name}</div>)}
    </main>
  );
}
