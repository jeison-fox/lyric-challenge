"use client";

import { BsSearch } from "react-icons/bs";
import type { FiltersProps } from "@/customTypes/filters";

export default function Filters({ genres, filters, onFiltersChange, onSearchChange, resetFilters }: FiltersProps) {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-y-5 lg:gap-y-0 gap-x-[68px] grow w-full lg:w-auto">
      <ul className="flex items-center gap-x-2.5 order-2 lg:order-1 flex-wrap lg:flex-nowrap justify-center lg:justify-start gap-y-2.5 lg:gap-y-0">
        <li>
          <button
            className={`${filters.length === 0 ? "bg-primary" : "bg-dark-1"} text-gray-light flex items-center justify-center rounded-full text-sm lg:text-lg h-[30px] lg:h-[38px] px-5 lg:min-w-[89px] capitalize cursor-pointer transition-colors duration-150`}
            onClick={resetFilters}
            type="button"
          >
            All
          </button>
        </li>
        {genres.map((genre) => (
          <li key={genre}>
            <button
              className={`${filters.includes(genre) ? "bg-primary" : "bg-dark-1"} text-gray-light flex items-center justify-center rounded-full text-sm lg:text-lg h-[30px] lg:h-[38px] px-5 lg:min-w-[89px] capitalize cursor-pointer transition-colors duration-150`}
              onClick={() => onFiltersChange(genre)}
              type="button"
            >
              {genre}
            </button>
          </li>
        ))}
      </ul>
      <div className="relative order-1 lg:order-2">
        <BsSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-mid text-lg" />
        <input
          type="text"
          placeholder="Search"
          className="bg-dark-1 text-gray-light text-lg w-full lg:w-[200px] h-[38px] pl-10 pr-3 rounded-full"
          onChange={onSearchChange}
        />
      </div>
    </div>
  );
}
