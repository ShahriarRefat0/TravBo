import HeroSection from "@/components/shared/HeroSection";
import FindYourTrip from "@/components/shared/FindYourTrip";
import ExclusiveOffers from "@/components/shared/ExclusiveOffers";
import BestHotels from "@/components/shared/BestHotels";
import TrendingDestinations from "@/components/shared/TrendingDestinations";
import ExploreBangladesh from "@/components/shared/ExploreBangladesh";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FindYourTrip />
      <ExclusiveOffers />
      <BestHotels />
      <TrendingDestinations />
      <ExploreBangladesh />
    </div>
  );
}
