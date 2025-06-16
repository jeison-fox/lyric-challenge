export interface FiltersProps {
  genres: string[];
  filters: string[];
  onFiltersChange: (filters: string) => void;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  resetFilters: () => void;
}
