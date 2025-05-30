"use client";

import { useEffect, useState } from "react";

export function ClientComponent() {
  let [greeting, setGreeting] = useState("fetching....");

  useEffect(() => {
    let controller = new AbortController();
    let signal = controller.signal;

    fetch("/api/greet", { signal })
      .then((res) => res.text())
      .then((greeting) => setGreeting(greeting));

    return () => controller.abort();
  }, []);

  return (
    <pre className="h-[300px] w-[75ch] border-2 border-amber-300 rounded-md overflow-auto">
      {greeting}
    </pre>
  );
}
