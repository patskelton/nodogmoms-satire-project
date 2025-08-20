import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
          ALERT: CMDD cases have increased 347% since 2019. Seek immediate clarity.
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-background border-b-2 border-government-navy sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="/nodogmoms-satire-project/assets/government-seal.png" 
                alt="Institute for Maternal Canine Studies Official Seal" 
                className="h-10 w-10"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-government-navy">
                  NoDogMoms.com
                </span>
                <span className="text-xs text-government-gray uppercase tracking-wider">
                  Official IMCS Resource
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'bg-government-blue text-white'
                      : 'text-government-gray hover:text-government-navy hover:bg-muted/50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Emergency Button */}
            <div className="hidden lg:block">
              <Button asChild className="bg-alert-red hover:bg-alert-red-dark text-white" size="sm">
                <Link to="/quiz">
                  <AlertTriangle className="mr-2 h-4 w-4" />
                  Get Help
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="border-government-navy text-government-navy"
              >
                {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 border-t border-muted pt-4">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`px-4 py-3 rounded-md text-sm font-medium transition-colors duration-200 ${
                      isActive(item.href)
                        ? 'bg-government-blue text-white'
                        : 'text-government-gray hover:text-government-navy hover:bg-muted/50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-2 border-t border-muted mt-2">
                  <Button asChild className="w-full bg-alert-red hover:bg-alert-red-dark text-white" size="sm">
                    <Link to="/quiz" onClick={() => setIsMenuOpen(false)}>
                      <AlertTriangle className="mr-2 h-4 w-4" />
                      Get Help Now
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Navigation;
