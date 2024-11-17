import Image from "next/image";
import LandingPage from "./components/LandingPage";

export default function Home() {
  return (
    <div className="w-full bg-[#F5F0E7] p-4 font-[family-name:var(--font-geist-sans)]">
      <LandingPage />
    </div>
  );
}
