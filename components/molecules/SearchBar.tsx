"use client";

import { cn } from "@/libs/utils";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

interface Props {
  className?: string;
  placeholder?: string;
}

const SearchBar = ({ className = "", placeholder = "Search" }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") ?? "";
  const sort = searchParams.get("sort") ?? "ASC";
  const params = new URLSearchParams();
  const [search, setSearch] = useState(searchQuery);

  const handleSearch = () => {
    if (search.trim() !== "") {
      params.set("search", search);
      params.set("sort", sort);
      router.push(`/breeds?${params.toString()}`);
    } else {
      router.push(`/breeds?sort=${sort}`);
    }
  };
  return (
    <label className={cn("input rounded-lg", className)}>
      <Search
        className="cursor-pointer active:scale-95 ease-in"
        onClick={handleSearch}
      />
      <input
        type="search"
        required
        placeholder={placeholder}
        className="input-md font-inter"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.code === "Enter") handleSearch();
        }}
      />
    </label>
  );
};

export default SearchBar;
