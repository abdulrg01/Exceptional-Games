import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="pt-32 pb-16 bg-background">{children}</div>;
}
