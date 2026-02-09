'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAVIGATION_ITEMS } from '@/lib/constants';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex items-center justify-end">
      {/* Desktop Navigation */}
      <div className="hidden lg:flex space-x-6">
        {NAVIGATION_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-royal-gold ${
                isActive
                  ? 'text-royal-gold border-b-2 border-royal-gold'
                  : 'text-gray-700'
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      {/* Mobile Hamburger Button */}
      <button
        className="lg:hidden flex flex-col space-y-1.5 p-2 focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <span
          className={`block w-6 h-0.5 bg-royal-blue transition-transform ${
            isOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-royal-blue transition-opacity ${
            isOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-royal-blue transition-transform ${
            isOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        />
      </button>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full right-0 left-0 bg-white shadow-lg z-50 border-t border-gray-200">
          <div className="flex flex-col py-4">
            {NAVIGATION_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-6 py-3 text-sm font-medium transition-colors hover:bg-royal-gold/10 ${
                    isActive ? 'text-royal-gold bg-royal-gold/5' : 'text-gray-700'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
