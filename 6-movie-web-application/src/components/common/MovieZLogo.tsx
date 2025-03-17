import { cn } from "@/lib";
import Link from "next/link";
import { ClassValue } from "clsx";
import { Film } from "lucide-react";

type MovieZLogoProps = { className?: ClassValue };

export const MovieZLogo = ({ className }: MovieZLogoProps) => {
  return (
    <Link href="/" className={cn("flex items-center gap-x-2", className)}>
      <Film size={20} />
      <h4 className="italic font-bold">Movie Z</h4>
    </Link>
  );
};
