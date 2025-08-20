import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import governmentSeal from '@/assets/government-seal.png';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Manifesto', href: '/manifesto' },
    { name: 'About CMDD', href: '/about-cmdd' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Take Quiz', href: '/quiz' },
    { name: 'Hall of Dog Moms', href: '/hall-of-dog-moms' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Resources', href: '/resources' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      {/* Emergency Alert Banner */}
      <div className="bg-alert-red text-white py-2 px-4">
        <div className="container mx-auto flex items-center justify-center gap-2 text-sm font-medium">
          <AlertTriangle className="h-4 w-4 flex-shrink-0" />
          <span>ALERT: CMDD cases have increased 347% since 2019. Seek immediate clarity.</span>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-background border-b-2 border-government-navy sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img 
                src={governmentSeal} 
                alt="Institute for Maternal Canine Studies Seal" 
                className="h-12 w-12"
              />
              <div className="hidden sm:block">
                <div className="font-sans font-bold text-government-navy text-xl">
                  NoDogMoms.com
                </div>
                <div className="text-government-gray text-xs uppercase tracking-wider">
                  Institute for Maternal Canine Studies
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-government-navy text-white'
                      : 'text-government-gray hover:text-government-navy hover:bg-secondary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-border">
              <div className="flex flex-col space-y-1 pt-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'bg-government-navy text-white'
                        : 'text-government-gray hover:text-government-navy hover:bg-secondary'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Navigation;