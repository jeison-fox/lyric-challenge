"use client";

import { useState } from "react";
import Image from "next/image";

export default function BandCard({ band }: { band: Band }) {
  const [imageError, setImageError] = useState<boolean | null>(null);
  const fallbackImageSrc = "/assets/bands/default.png";

  return (
    <article className="bg-black rounded-[10px]">
      <picture className="w-full h-[150px] lg:h-[196px] relative block">
        <Image
          src={imageError ? fallbackImageSrc : band.cover_image}
          alt={band.band_name}
          fill
          sizes="auto"
          className="rounded-t-[10px] object-cover"
          onError={() => setImageError(true)}
        />
      </picture>
      <div className="flex flex-col gap-y-2.5 pt-6 px-6 pb-5">
        <h3 className="text-primary text-xl font-bold">{band.band_name}</h3>
        <h4 className="text-gray-light text-[0.813rem] leading-5">{band.album}, 2025</h4>
        <p className="text-gray text-[0.813rem] leading-5">{band.description}</p>
      </div>
    </article>
  );
}
