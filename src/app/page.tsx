import DashboardContainer from "@/components/DashboardContainer";
import { getBandsData } from "@/utils/server";

export default async function Dashboard() {
  const genres = new Set<string>();
  const bandsData = await getBandsData();

  bandsData.forEach((band) => {
    genres.add(band.genre);
  });

  return <DashboardContainer bands={bandsData} genres={Array.from(genres)} />;
}
