import Link from "next/link";
import SerbianFlagAnimation from "./SerbianFlagAnimation";
import MonarhistaFlag from "./MonarhistaFlag";
import Navigation from "./Navigation";
import NewsTicker from "./NewsTicker";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 shadow-md">
      <NewsTicker />
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-2 lg:gap-4 relative">
            {/* Left: Serbian Flag Animation */}
            <Link href="/" className="flex-shrink-0">
              <SerbianFlagAnimation />
            </Link>

            {/* Center: Monarhista Logo/Flag */}
            <Link href="/" className="flex-shrink-0">
              <MonarhistaFlag flag={"/monarhisti.jpg"} />
            </Link>
            <Link href="/" className="flex-shrink-0">
              <MonarhistaFlag flag={"/eu.jpg"} />
            </Link>

            {/* Right: Navigation */}
            <div className="flex-shrink-0">
              <Navigation />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
