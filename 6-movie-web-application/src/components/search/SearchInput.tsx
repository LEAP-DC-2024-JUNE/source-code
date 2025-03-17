"use client";

import { cn } from "@/lib";
import { Input } from "../ui";
import { ChangeEvent } from "react";
import { Search } from "lucide-react";

type SearchInputProps = {
  value: string;
  isMobile: boolean;
  handleChange: (_event: ChangeEvent<HTMLInputElement>) => void;
};

export const SearchInput = ({ handleChange, isMobile, value }: SearchInputProps) => {
  return (
    <div className={cn("relative text-muted-foreground", !isMobile && "w-[379px]")}>
      <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2" />
      <Input type="text" value={value} placeholder="Search..." onChange={handleChange} className={cn("pl-[38px]", isMobile && "border-none shadow-none")} />
    </div>
  );
};
