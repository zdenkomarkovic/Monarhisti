import Link from 'next/link';
import SerbianFlagAnimation from './SerbianFlagAnimation';
import MonarhistaFlag from './MonarhistaFlag';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white shadow-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4 lg:gap-8 relative">
          {/* Left: Serbian Flag Animation */}
          <Link href="/" className="flex-shrink-0">
            <SerbianFlagAnimation />
          </Link>

          {/* Center: Monarhista Logo/Flag */}
          <Link href="/" className="flex-grow lg:flex-grow-0 flex justify-center">
            <MonarhistaFlag />
          </Link>

          {/* Right: Navigation */}
          <div className="flex-shrink-0">
            <Navigation />
          </div>
        </div>
      </div>
    </header>
  );
}
