import { Phone, FileText, Download, Users, BookOpen, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Resources = () => {
  const resources = [
    {
      title: "Understanding CMDD: A Comprehensive Guide",
      type: "PDF Pamphlet",
      description: "Complete overview of Canine Maternal Delusion Disorder, including symptoms, causes, and treatment options.",
      size: "2.3 MB",
      pages: "24 pages",
      language: "Available in English, Spanish, French"
    },
    {
      title: "Species Terminology Quick Reference",
      type: "Pocket Guide",
      description: "Handy reference card for appropriate human-animal relationship terminology.",
      size: "450 KB",
      pages: "4 pages",
      language: "Multiple languages"
    },
    {
      title: "CMDD Recovery Workbook",
      type: "Interactive PDF",
      description: "Step-by-step exercises for overcoming species confusion and developing healthy pet relationships.",
      size: "1.8 MB",
      pages: "32 pages",
      language: "English only"
    }
  ];

  const supportGroups = [
    {
      name: "Recovering Dog Parents Anonymous",
      location: "National (Online)",
      schedule: "Tuesdays & Thursdays, 7 PM EST",
      description: "Peer support group for individuals recovering from CMDD.",
      contact: "rdpa@imcs.gov"
    },
    {
      name: "Species Clarity Support Circle",
      location: "Major Cities",
      schedule: "Weekly meetings",
      description: "In-person support groups in 47 major metropolitan areas.",
      contact: "local@imcs.gov"
    },
    {
      name: "Pet Guardian Transition Group",
      location: "Online",
      schedule: "24/7 Forum Access",
      description: "Online community for those learning appropriate pet terminology.",
      contact: "forum@imcs.gov"
    }
  ];

  const professionals = [
    {
      name: "Dr. Sarah Pawson",
      title: "Director of Species Clarification",
      specialty: "CMDD Diagnosis & Treatment",
      location: "Available via telehealth nationwide",
      credentials: "PhD Veterinary Psychology, IMCS Certified"
    },
    {
      name: "Dr. Marcus Barkwell",
      title: "Chief of Behavioral Intervention",
      specialty: "Severe CMDD Cases",
      location: "Regional treatment centers",
      credentials: "MD Psychiatry, Animal Behavior Specialization"
    },
    {
      name: "Dr. Lisa Fetchworth",
      title: "Research Director",
      specialty: "CMDD Prevention Programs",
      location: "Educational institutions",
      credentials: "PhD Social Psychology, IMCS Fellow"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-government-blue mb-4">
            <BookOpen className="h-8 w-8" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Support Resources
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-government-navy mb-6">
            CMDD Resources & Support
          </h1>
          
          <p className="text-xl text-government-gray leading-relaxed max-w-3xl mx-auto">
            Comprehensive resources for individuals, families, and professionals dealing with 
            Canine Maternal Delusion Disorder. All materials are evidence-based and developed 
            by certified IMCS specialists.
          </p>
        </div>

        {/* Crisis Hotline Banner */}
        <div className="clinical-card bg-alert-red text-white mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
              <Phone className="h-8 w-8" />
              24/7 Crisis Hotline
            </h2>
            <div className="text-5xl font-mono font-bold mb-4">1-800-NOT-A-MOM</div>
            <p className="text-xl mb-6">
              Immediate support for acute CMDD episodes • Confidential • Free • Available nationwide
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <strong>Crisis Intervention</strong><br />
                Immediate support for severe symptoms
              </div>
              <div>
                <strong>Treatment Referrals</strong><br />
                Connect with certified CMDD professionals
              </div>
              <div>
                <strong>Family Support</strong><br />
                Guidance for concerned loved ones
              </div>
            </div>
          </div>
        </div>

        {/* Educational Materials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-government-navy mb-8 flex items-center gap-2">
            <FileText className="h-8 w-8 text-government-blue" />
            Educational Materials
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="clinical-card">
                <div className="mb-4">
                  <span className="inline-block bg-government-blue text-white px-2 py-1 rounded text-xs font-semibold uppercase tracking-wider">
                    {resource.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-government-navy mb-3">
                  {resource.title}
                </h3>
                
                <p className="text-sm text-government-gray-dark mb-4 leading-relaxed">
                  {resource.description}
                </p>
                
                <div className="space-y-2 text-xs text-government-gray mb-6">
                  <div><strong>File Size:</strong> {resource.size}</div>
                  <div><strong>Length:</strong> {resource.pages}</div>
                  <div><strong>Languages:</strong> {resource.language}</div>
                </div>
                
                <Button className="w-full" disabled>
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
                <p className="text-xs text-government-gray text-center mt-2">
                  *Download links would be functional in a real implementation
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Support Groups */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-government-navy mb-8 flex items-center gap-2">
            <Users className="h-8 w-8 text-government-blue" />
            Support Groups
          </h2>
          
          <div className="space-y-6">
            {supportGroups.map((group, index) => (
              <div key={index} className="clinical-card">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-government-navy mb-2">
                      {group.name}
                    </h3>
                    <p className="text-sm text-government-gray-dark">
                      {group.description}
                    </p>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div><strong>Location:</strong> {group.location}</div>
                    <div><strong>Schedule:</strong> {group.schedule}</div>
                    <div><strong>Contact:</strong> {group.contact}</div>
                  </div>
                  
                  <div className="flex items-center">
                    <Button variant="outline" disabled className="w-full">
                      Join Group
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Directory */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-government-navy mb-8">
            IMCS Certified Professionals
          </h2>
          
          <div className="space-y-6">
            {professionals.map((professional, index) => (
              <div key={index} className="clinical-card">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-government-navy">
                      {professional.name}
                    </h3>
                    <p className="text-sm text-government-blue font-medium">
                      {professional.title}
                    </p>
                  </div>
                  
                  <div className="text-sm">
                    <div><strong>Specialty:</strong></div>
                    <div className="text-government-gray-dark">{professional.specialty}</div>
                  </div>
                  
                  <div className="text-sm">
                    <div><strong>Location:</strong></div>
                    <div className="text-government-gray-dark">{professional.location}</div>
                  </div>
                  
                  <div className="text-xs text-government-gray">
                    {professional.credentials}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-government-navy mb-8">
            Additional Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="clinical-card">
              <h3 className="text-xl font-semibold text-government-navy mb-4">Research & Publications</h3>
              <ul className="space-y-2 text-sm text-government-gray-dark">
                <li className="flex items-start gap-2">
                  <ExternalLink className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  "Species Confusion in Urban Pet Ownership" - Journal of Human-Animal Studies
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  "Maternal Terminology and Pet Attachment Disorders" - International Review
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  "CMDD Treatment Outcomes: A 5-Year Study" - IMCS Research Quarterly
                </li>
              </ul>
            </div>
            
            <div className="clinical-card">
              <h3 className="text-xl font-semibold text-government-navy mb-4">Partner Organizations</h3>
              <ul className="space-y-2 text-sm text-government-gray-dark">
                <li>• American Veterinary Medical Association</li>
                <li>• International Association of Animal Behavior Consultants</li>
                <li>• National Association of Professional Pet Sitters</li>
                <li>• Society for the Prevention of Species Confusion</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Emergency Contact Card */}
        <div className="clinical-card bg-government-navy text-white text-center">
          <h3 className="text-2xl font-semibold mb-4">Keep This Information Handy</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <strong className="block mb-2">Crisis Hotline</strong>
              <div className="text-2xl font-mono">1-800-NOT-A-MOM</div>
            </div>
            <div>
              <strong className="block mb-2">Text Support</strong>
              <div>Text "CMDD" to 555-0123</div>
            </div>
            <div>
              <strong className="block mb-2">Online Chat</strong>
              <div>imcs.gov/crisis-chat</div>
            </div>
          </div>
          <p className="text-xs opacity-75 mt-6">
            *Contact information is fictional for this satirical website
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resources;