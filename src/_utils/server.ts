import path from "path";
import { readFile } from "fs/promises";
import bandsData from "@/mocks/bands.json";

/**
 * Fetches and enriches band data with descriptions from individual detail files.
 * Falls back to a default description if the detail file cannot be read.
 * @returns {Promise<Array>} Array of band objects with added descriptions
 */
export async function getBandsData(): Promise<Band[]> {
  const enrichedBandsData = await Promise.all(
    bandsData.map(async (band) => {
      let bandDescription =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ve";

      const detailsPath = path.join(process.cwd(), "src", "_mocks", "details", `${band.id}.json`);

      try {
        const raw = await readFile(detailsPath, "utf8");
        const { description } = JSON.parse(raw);
        bandDescription = description;
      } catch (error) {
        console.warn(`Error fetching details for band ${band.id}:`, error);
      }

      return {
        ...band,
        description: bandDescription,
        cover_image: `/assets/bands/im${band.id}.png`,
      };
    }),
  );

  return enrichedBandsData;
}
