import { Heart, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-government-navy text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/nodogmoms-satire-project/assets/government-seal.png"
                alt="IMCS Seal" 
                className="h-10 w-10 brightness-0 invert"
              />
              <div>
                <div className="font-bold text-lg">IMCS</div>
                <div className="text-sm opacity-90">Est. 2019</div>
              </div>
            </div>
            <p className="text-sm opacity-90">
              The Institute for Maternal Canine Studies is dedicated to advancing 
              scientific understanding of proper species-specific terminology in 
              pet guardianship contexts.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Actions</h3>
            <div className="space-y-2 text-sm">
              <div>📞 Crisis Hotline: 1-800-NOT-A-MOM</div>
              <div>📧 Report Cases: cmdd@imcs.gov</div>
              <div>📋 Download Pamphlet</div>
              <div>🔍 Take Assessment</div>
            </div>
          </div>
          
          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Legal</h3>
            <div className="space-y-2 text-sm">
              <div>Privacy Policy</div>
              <div>Terms of Service</div>
              <div>FOIA Requests</div>
              <div>Accessibility</div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm opacity-90">
              © 2025 Institute for Maternal Canine Studies. All rights reserved.
            </div>
            <div className="flex items-center gap-2 text-sm">
              Made with <Heart className="h-4 w-4 text-red-400" /> for scientific accuracy
            </div>
          </div>
        </div>
        
        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-white/20">
          <p className="text-xs text-white/70 text-center leading-relaxed">
            This website is a satirical public service announcement about proper pet terminology. 
            The Institute for Maternal Canine Studies is a fictional organization created for educational purposes. 
            All statistics and claims are fabricated for comedic effect. Please treat your pets with love and respect, 
            regardless of what you call yourself.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
