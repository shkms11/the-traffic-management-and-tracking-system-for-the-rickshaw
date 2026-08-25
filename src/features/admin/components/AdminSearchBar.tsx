import { Search } from "lucide-react";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export type SearchType =
  | "All"
  | "Drivers"
  | "Owners"
  | "Location"
  | "Complaints";

type AdminSearchBarProps = {
  onSearch?: (query: string, type: SearchType) => void;
};

const filters: SearchType[] = [
  "All",
  "Drivers",
  "Owners",
  "Location",
  "Complaints",
];

export default function AdminSearchBar({ onSearch }: AdminSearchBarProps) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState<SearchType>("All");

  const handleSearch = () => {
    const trimmedQuery = query.trim();

    if (!trimmedQuery) return;

    onSearch?.(trimmedQuery, type);
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div>
        <h2 className="text-lg font-semibold">Global Search</h2>

        <p className="text-sm text-muted-foreground">
          Search users, drivers, trips, payments and complaints.
        </p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search
          className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />

        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleSearch();
            }
          }}
          placeholder="Search..."
          aria-label="Search admin data"
          className="h-11 pl-9"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => {
          const isActive = type === filter;

          return (
            <Button
              key={filter}
              type="button"
              size="sm"
              variant={isActive ? "default" : "outline"}
              onClick={() => setType(filter)}
              className={isActive ? "bg-emerald-700 hover:bg-emerald-800" : ""}
            >
              {filter}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
