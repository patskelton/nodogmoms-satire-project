import { Link } from 'react-router-dom';
import { AlertTriangle, Shield, Phone, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '/assets/hero-dog.png';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-government-navy to-government-navy-light text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-alert-yellow">
                <Shield className="h-6 w-6" />
                <span className="text-sm font-semibold uppercase tracking-wider">
                  Public Service Announcement
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                CMDD is on the Rise
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Canine Maternal Delusion Disorder (CMDD) affects thousands. 
                Only dogs can be the moms of dogs. Let's end the confusion.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild className="bg-white text-government-navy hover:bg-white/90" size="lg">
                  <Link to="/quiz">
                    <FileText className="mr-2 h-5 w-5" />
                    Take the Test
                  </Link>
                </Button>
                <Button asChild size="lg" variant="hero">
                  <Link to="/manifesto">
                    Read the Manifesto
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center">
              <img 
                src={heroImage} 
                alt="Professional dog in medical attire representing CMDD awareness campaign" 
                className="max-w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CDC-Style Alert */}
      <section className="py-8 bg-alert-red/10 border-y-2 border-alert-red/20">
        <div className="container mx-auto px-4">
          <div className="alert-banner alert-danger max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">
                  Critical Health Alert from the Institute for Maternal Canine Studies
                </h3>
                <p className="text-base leading-relaxed">
                  "There is no evidence that any human female has ever produced a puppy. 
                  Recent studies show CMDD symptoms manifest primarily through acquisition 
                  of matching sweaters, excessive use of 'fur baby' terminology, and 
                  celebration of non-existent birthdays."
                </p>
                <p className="text-sm mt-3 font-medium">
                  — Dr. Sarah Pawson, Director of Species Clarification, IMCS
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-government-navy mb-4">
              The CMDD Crisis by the Numbers
            </h2>
            <p className="text-government-gray max-w-2xl mx-auto">
              Recent data from the Institute for Maternal Canine Studies reveals alarming trends 
              in maternal species confusion across North America.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="clinical-card text-center">
              <div className="text-4xl font-bold text-government-navy mb-2">347%</div>
              <div className="text-government-gray-dark font-medium">
                Increase in CMDD cases since 2019
              </div>
            </div>
            
            <div className="clinical-card text-center">
              <div className="text-4xl font-bold text-government-navy mb-2">2.3M</div>
              <div className="text-government-gray-dark font-medium">
                Estimated affected individuals nationwide
              </div>
            </div>
            
            <div className="clinical-card text-center">
              <div className="text-4xl font-bold text-government-navy mb-2">0</div>
              <div className="text-government-gray-dark font-medium">
                Documented cases of human-canine reproduction
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-government-navy mb-4">
              Get Help Today
            </h2>
            <p className="text-government-gray max-w-2xl mx-auto">
              If you or someone you know is experiencing CMDD symptoms, immediate action is recommended.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="clinical-card hover:shadow-lg transition-shadow">
              <Phone className="h-8 w-8 text-government-blue mb-4" />
              <h3 className="font-semibold mb-2">Crisis Hotline</h3>
              <p className="text-sm text-government-gray mb-4">
                24/7 support for acute CMDD episodes
              </p>
              <div className="font-mono text-lg font-bold text-government-navy">
                1-800-NOT-A-MOM
              </div>
            </div>
            
            <div className="clinical-card hover:shadow-lg transition-shadow">
              <FileText className="h-8 w-8 text-government-blue mb-4" />
              <h3 className="font-semibold mb-2">Self-Assessment</h3>
              <p className="text-sm text-government-gray mb-4">
                Take our scientifically-designed quiz
              </p>
              <Button asChild className="w-full" variant="outline">
                <Link to="/quiz">Start Quiz</Link>
              </Button>
            </div>
            
            <div className="clinical-card hover:shadow-lg transition-shadow">
              <Shield className="h-8 w-8 text-government-blue mb-4" />
              <h3 className="font-semibold mb-2">Case Studies</h3>
              <p className="text-sm text-government-gray mb-4">
                Learn from documented CMDD cases
              </p>
              <Button asChild className="w-full" variant="outline">
                <Link to="/case-studies">View Cases</Link>
              </Button>
            </div>
            
            <div className="clinical-card hover:shadow-lg transition-shadow">
              <AlertTriangle className="h-8 w-8 text-government-blue mb-4" />
              <h3 className="font-semibold mb-2">Resources</h3>
              <p className="text-sm text-government-gray mb-4">
                Download educational materials
              </p>
              <Button asChild className="w-full" variant="outline">
                <Link to="/resources">Get Resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
