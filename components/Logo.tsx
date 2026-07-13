import Image from "next/image";
import { cn } from "@/lib/cn";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/brand/logo-mark.png"
      alt="R and B Global Security"
      width={460}
      height={551}
      priority
      className={cn("h-11 w-auto sm:h-12", className)}
    />
  );
}
