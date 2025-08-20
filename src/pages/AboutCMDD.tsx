import { Brain, AlertTriangle, Stethoscope, Heart } from 'lucide-react';

const AboutCMDD = () => {
  const symptoms = [
    "Referring to oneself as a 'dog mom' or 'dog parent'",
    "Celebrating non-existent dog birthdays",
    "Purchasing matching outfits for human and canine",
    "Using baby talk consistently with adult dogs",
    "Introducing dogs as 'children' to strangers",
    "Creating social media accounts 'from' the dog's perspective",
    "Excessive use of terms like 'fur baby' or 'pupper'",
    "Comparing pet ownership to human parenthood"
  ];

  const causes = [
    {
      title: "Social Media Influence",
      description: "Exposure to pet parent culture online reinforces delusional thinking patterns"
    },
    {
      title: "Retail Marketing",
      description: "Pet industry deliberately promotes 'parent' terminology to increase spending"
    },
    {
      title: "Emotional Substitution",
      description: "Using pets to fulfill unmet maternal or paternal desires"
    },
    {
      title: "Community Reinforcement",
      description: "Friend groups that normalize and encourage species confusion"
    }
  ];

  const treatments = [
    {
      title: "Cognitive Reality Therapy (CRT)",
      description: "Structured sessions focusing on species distinction and biological facts"
    },
    {
      title: "Terminology Replacement Program",
      description: "Gradual replacement of 'parent' language with 'guardian' alternatives"
    },
    {
      title: "Support Group Participation",
      description: "Weekly meetings with other recovering CMDD individuals"
    },
    {
      title: "Educational Intervention",
      description: "Intensive biology courses focusing on mammalian reproduction"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-government-blue mb-4">
            <Brain className="h-8 w-8" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Medical Information
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-government-navy mb-6">
            Understanding CMDD
          </h1>
          
          <p className="text-xl text-government-gray leading-relaxed max-w-3xl mx-auto">
            Canine Maternal Delusion Disorder is a behavioral condition characterized by 
            the persistent belief that one has given birth to or shares a biological 
            maternal relationship with a domestic dog.
          </p>
        </div>

        {/* Official Definition */}
        <div className="clinical-card bg-government-navy text-white mb-12">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Stethoscope className="h-6 w-6" />
            Official Medical Definition
          </h2>
          <div className="text-base leading-relaxed">
            <p className="mb-4">
              <strong>Canine Maternal Delusion Disorder (CMDD)</strong> is classified under 
              DSM-VI code 300.89-K9 as a specific delusional disorder characterized by the 
              fixed, false belief that an individual shares biological maternal or paternal 
              relationships with canine companions.
            </p>
            <p>
              First identified by the Institute for Maternal Canine Studies in 2019, CMDD 
              affects an estimated 2.3 million Americans and continues to spread through 
              social media exposure and retail marketing influences.
            </p>
          </div>
        </div>

        {/* Symptoms Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-semibold text-government-navy mb-6 flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-alert-red" />
              Diagnostic Symptoms
            </h2>
            <div className="space-y-3">
              {symptoms.map((symptom, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-alert-red/5 border border-alert-red/20 rounded-lg">
                  <div className="w-2 h-2 bg-alert-red rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-government-gray-dark">{symptom}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-government-navy mb-6 flex items-center gap-2">
              <Brain className="h-6 w-6 text-government-blue" />
              Contributing Causes
            </h2>
            <div className="space-y-4">
              {causes.map((cause, index) => (
                <div key={index} className="clinical-card">
                  <h3 className="font-semibold text-government-navy mb-2">{cause.title}</h3>
                  <p className="text-sm text-government-gray-dark">{cause.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Severity Levels */}
        <div className="clinical-card mb-12">
          <h2 className="text-2xl font-semibold text-government-navy mb-6">Severity Classifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border-l-4 border-alert-yellow bg-alert-yellow/5">
              <h3 className="font-semibold text-alert-yellow mb-2">MILD CMDD</h3>
              <p className="text-sm text-government-gray-dark">
                Occasional use of 'dog mom' terminology, primarily on social media. 
                Individual maintains awareness of biological reality in most contexts.
              </p>
            </div>
            
            <div className="p-4 border-l-4 border-orange-500 bg-orange-50">
              <h3 className="font-semibold text-orange-600 mb-2">MODERATE CMDD</h3>
              <p className="text-sm text-government-gray-dark">
                Regular use of parental terminology, celebration of dog birthdays, 
                matching outfits. Some resistance to correction.
              </p>
            </div>
            
            <div className="p-4 border-l-4 border-alert-red bg-alert-red/5">
              <h3 className="font-semibold text-alert-red mb-2">SEVERE CMDD</h3>
              <p className="text-sm text-government-gray-dark">
                Complete belief in maternal relationship, introduction of dogs as children, 
                potential for aggressive defense of delusion.
              </p>
            </div>
          </div>
        </div>

        {/* Treatment Options */}
        <div className="clinical-card">
          <h2 className="text-2xl font-semibold text-government-navy mb-6 flex items-center gap-2">
            <Heart className="h-6 w-6 text-alert-green" />
            Evidence-Based Treatment Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {treatments.map((treatment, index) => (
              <div key={index} className="p-4 bg-alert-green/5 border border-alert-green/20 rounded-lg">
                <h3 className="font-semibold text-government-navy mb-2">{treatment.title}</h3>
                <p className="text-sm text-government-gray-dark">{treatment.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-6 bg-government-blue/10 border border-government-blue/20 rounded-lg">
            <h3 className="font-semibold text-government-navy mb-3">Treatment Success Rates</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-government-blue">89%</div>
                <div className="text-sm text-government-gray">Complete Recovery</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-government-blue">94%</div>
                <div className="text-sm text-government-gray">Significant Improvement</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-government-blue">3.2 mo</div>
                <div className="text-sm text-government-gray">Average Treatment Duration</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCMDD;