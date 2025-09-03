import TrendingSection from "../components/TrendingSection";
import EssentialsSection from "../components/EssentialsSection";
import GiftCardSection from "../components/GiftCardSection";
import SignInBanner from "../components/SignInBanner";
import AmazonMusicSection from "../components/AmazonMusicSection";
import ClothingCarousel from "../components/ClothingCarousel";
import ComputersCarousel from "../components/ComputersCarousel";

export default function HomePage() {
  return (
    <main className="bg-gray-100">
      <TrendingSection />
      <EssentialsSection />
      <GiftCardSection />
      <SignInBanner />
      <AmazonMusicSection />
      <ClothingCarousel />
      <ComputersCarousel />
    </main>
  );
}