import HeroSlider from "../components/HeroSlider";
import LuxurySections from "../components/LuxurySections";

export default function Home() {
  return (
    <div className="pt-20 bg-luxuryBg min-h-screen">
      <HeroSlider />
      <LuxurySections />
    </div>
  );
}