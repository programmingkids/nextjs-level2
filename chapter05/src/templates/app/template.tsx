"use client";

import { getRandom } from "@/app/_lib/functions";

// export const dynamic = "force-dynamic";

export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 50%確率でエラーが発生する
  const result = getRandom(1, 2);
  if (result === 1) {
    throw new Error("this is root template error");
  }

  return <>{children}</>;
}
