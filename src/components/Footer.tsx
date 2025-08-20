import { Heart, Phone } from 'lucide-react';
import governmentSeal from '@/assets/government-seal.png';

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
                src={governmentSeal} 
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
              <div>🔬 Research Portal</div>
            </div>
          </div>

          {/* Emergency Notice */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-alert-yellow">Emergency Notice</h3>
            <div className="bg-white/10 border border-white/20 rounded-lg p-4 text-sm">
              <p className="mb-2">
                <strong>If you are experiencing acute CMDD symptoms:</strong>
              </p>
              <ul className="space-y-1 text-xs opacity-90">
                <li>• Call the hotline immediately</li>
                <li>• Remove any "dog mom" merchandise</li>
                <li>• Practice saying "I am a dog guardian"</li>
                <li>• Seek support from actual mothers</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Heart className="h-4 w-4 text-alert-red" />
              Important Disclaimer
            </h4>
            <p className="text-sm opacity-90 mb-4">
              This website is a work of <strong>satirical fiction</strong>. CMDD is not a real medical condition. 
              The "Institute for Maternal Canine Studies" does not exist. This site is intended as humorous 
              commentary on language and terminology, not medical advice.
            </p>
            <p className="text-sm opacity-90">
              <strong>We love dogs and the people who care for them.</strong> Whether you call yourself a 
              dog parent, dog guardian, or anything else, what matters most is that you provide loving, 
              responsible care for your pets.
            </p>
          </div>
        </div>

        {/* Adoption Notice */}
        <div className="bg-alert-green/20 border border-alert-green/30 rounded-lg p-4 mb-8">
          <div className="flex items-start gap-3">
            <Heart className="h-5 w-5 text-alert-green flex-shrink-0 mt-0.5" />
            <div className="text-sm">
              <strong className="text-alert-green">Real Talk:</strong> Consider adopting from your local shelter. 
              Real dogs need real homes with real people who will love them unconditionally—regardless of terminology.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm opacity-75">
          <div>
            © 2024 Institute for Maternal Canine Studies (Satirical). All rights reserved.
          </div>
          <div className="flex gap-4">
            <span>Privacy Policy*</span>
            <span>Terms of Service*</span>
            <span>Contact IMCS*</span>
          </div>
        </div>
        <div className="text-xs opacity-50 mt-2 text-center">
          *These links don't actually work because this is a satirical website.
        </div>
      </div>
    </footer>
  );
};

export default Footer;