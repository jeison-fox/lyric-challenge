"use client";

import Image from "next/image";
import { useCallback, useMemo, useState } from "react";
import { TbBell, TbMessageCircle, TbSettings } from "react-icons/tb";
import BandCard from "@/components/BandCard";
import Filters from "@/components/Filters";
import Sidebar from "@/components/Sidebar";
import { debounce } from "@/utils/client";
import type { DashboardContainerProps } from "@/customTypes/dashboardContainer";

export default function DashboardContainer({ bands, genres }: DashboardContainerProps) {
  const [filteredGenres, setFilteredGenres] = useState<string[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [search, setSearch] = useState("");

  const debouncedSearch = useMemo(() => debounce((value: string) => setSearch(value), 500), []);

  const filteredBands = useMemo(() => {
    return bands.filter((band) => {
      const matchesGenre = filteredGenres.length === 0 || filteredGenres.includes(band.genre);
      const matchesSearch = search.length === 0 || band.band_name.toLowerCase().includes(search.toLowerCase());
      return matchesGenre && matchesSearch;
    });
  }, [bands, filteredGenres, search]);

  const handleFilters = useCallback(
    (genre: string) => {
      if (filteredGenres.includes(genre)) {
        setFilteredGenres(filteredGenres.filter((g) => g !== genre));
      } else {
        setFilteredGenres([...filteredGenres, genre]);
      }
    },
    [filteredGenres],
  );

  const handleSearchChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      debouncedSearch(value);
    },
    [debouncedSearch],
  );

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prev: boolean) => !prev);
  }, [setIsSidebarOpen]);

  return (
    <main
      className={`bg-dark-1 min-h-screen lg:max-w-[1675px] lg:mx-auto py-6 px-5 flex flex-col gap-y-8 lg:flex-row transition-all duration-150 ${isSidebarOpen ? "gap-x-8" : "gap-x-0"}`}
    >
      <div className="flex flex-col gap-y-[30px] grow">
        <header className="bg-dark-2 flex flex-col gap-y-5 lg:gap-y-0 lg:flex-row items-center justify-between lg:h-[89px] w-full rounded-[10px] gap-x-11 p-5 pt-0 lg:pl-2.5 lg:pr-10 lg:py-0 overflow-hidden">
          <Image
            src="/assets/logo.png"
            alt="Lyric Music"
            width={163}
            height={105}
            className="h-20 w-auto lg:h-[inherit] shrink-0"
          />
          <Filters
            genres={genres}
            filters={filteredGenres}
            onFiltersChange={handleFilters}
            onSearchChange={handleSearchChange}
            resetFilters={() => setFilteredGenres([])}
          />
          <div className="flex items-center gap-x-6 shrink-0">
            <TbBell className="text-gray-light text-2xl lg:text-4xl" />
            <TbSettings className="text-gray-light text-2xl lg:text-4xl" />
            <TbMessageCircle className="text-gray-light text-2xl lg:text-4xl" />
          </div>
        </header>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredBands.map((band) => (
            <BandCard key={band.id} band={band} />
          ))}
        </section>
      </div>
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </main>
  );
}
