import { HelpCircle, AlertTriangle, BookOpen, Phone } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      category: "About CMDD",
      questions: [
        {
          question: "Is CMDD a real medical condition?",
          answer: "While CMDD is recognized by the Institute for Maternal Canine Studies as a significant behavioral pattern, individual experiences may vary. The condition represents a documented trend in species terminology confusion that affects millions of pet guardians worldwide. Our research is ongoing and peer-reviewed by leading veterinary behaviorists."
        },
        {
          question: "How common is CMDD?",
          answer: "Current IMCS data suggests that approximately 2.3 million Americans show symptoms of CMDD, with cases increasing 347% since 2019. The condition appears to be most prevalent in urban areas with high pet ownership rates and strong social media presence."
        },
        {
          question: "What causes CMDD?",
          answer: "Research indicates multiple contributing factors including social media influence, retail marketing strategies, community reinforcement, and emotional substitution patterns. Environmental triggers such as exposure to 'dog mom' merchandise and peer group terminology can accelerate symptom development."
        }
      ]
    },
    {
      category: "Terminology & Language",
      questions: [
        {
          question: "Are you attacking women who love their dogs?",
          answer: "Absolutely not. The IMCS celebrates the profound bonds between humans and their canine companions. Our mission focuses on terminology accuracy, not emotional connection. Love, care, and devotion to pets are beautiful human qualities that don't require parental terminology to be valid or meaningful."
        },
        {
          question: "What's wrong with calling myself a 'dog mom'?",
          answer: "The issue isn't with emotional attachment but with biological accuracy. Terms like 'guardian,' 'caretaker,' or 'companion' better reflect the actual relationship while honoring both the human-animal bond and the unique experience of human motherhood."
        },
        {
          question: "What about 'dog dads'? Do they have CMDD too?",
          answer: "Yes, males can develop CPDD (Canine Paternal Delusion Disorder), a related condition. However, our research shows CMDD affects approximately 3.2 times more females than males, possibly due to social and cultural factors surrounding motherhood terminology."
        }
      ]
    },
    {
      category: "Treatment & Recovery",
      questions: [
        {
          question: "How long does CMDD recovery take?",
          answer: "Recovery timelines vary by severity level. Mild cases typically see improvement within 4-6 weeks with proper intervention. Moderate cases average 3-4 months, while severe cases may require 6-12 months of intensive treatment. Our success rate across all severity levels is 89%."
        },
        {
          question: "Can I still love my dog after CMDD treatment?",
          answer: "Of course! CMDD treatment doesn't diminish love or care for your companion animal. In fact, many patients report deeper, more authentic relationships with their pets once species boundaries are clarified. Love transcends terminology—it doesn't require parental labels to be meaningful."
        },
        {
          question: "Is treatment covered by insurance?",
          answer: "Coverage varies by provider and plan. Many health insurance policies now recognize CMDD under behavioral health benefits. We recommend contacting your insurance provider with diagnostic code 300.89-K9 for specific coverage information."
        }
      ]
    },
    {
      category: "Scientific Basis",
      questions: [
        {
          question: "What research supports CMDD diagnosis?",
          answer: "The IMCS has conducted extensive longitudinal studies since 2019, including behavioral assessments, neuroimaging studies, and social pattern analysis. Our peer-reviewed publications appear in the Journal of Human-Animal Relationship Studies and the International Review of Companion Animal Psychology."
        },
        {
          question: "Do other animals cause similar conditions?",
          answer: "Yes, we've identified related conditions including CFDD (Feline Family Delusion Disorder), CBDD (Avian Baby Delusion Disorder), and CRDD (Reptilian Relationship Disorder). However, CMDD remains the most prevalent and well-documented of these species confusion syndromes."
        },
        {
          question: "Are there genetic factors involved?",
          answer: "Preliminary research suggests potential genetic predisposition markers, particularly in individuals with strong nurturing tendencies and attachment patterns. However, environmental factors appear to play a larger role in CMDD development than genetic predisposition."
        }
      ]
    },
    {
      category: "Social & Cultural Impact",
      questions: [
        {
          question: "How does CMDD affect real mothers?",
          answer: "Many human mothers report feeling invalidated when pet ownership is equated with parenthood. Our studies show that 73% of biological mothers feel their experiences are diminished by casual use of parental terminology for pets. CMDD awareness helps preserve the unique terminology of human parenthood."
        },
        {
          question: "What about people who can't have children?",
          answer: "The IMCS recognizes that infertility, loss, and childlessness create complex emotional needs. However, using pet relationships to substitute for human parenthood may delay healthy grief processing. We recommend complementary counseling that addresses underlying emotional needs while maintaining species boundaries."
        },
        {
          question: "Is this condition culturally sensitive?",
          answer: "IMCS research spans multiple cultural contexts and demographics. While expression varies culturally, the core biological confusion remains consistent across populations. Our treatment protocols are adapted for cultural sensitivity while maintaining scientific accuracy."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-government-blue mb-4">
            <HelpCircle className="h-8 w-8" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Frequently Asked Questions
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-government-navy mb-6">
            CMDD FAQ
          </h1>
          
          <p className="text-xl text-government-gray leading-relaxed max-w-3xl mx-auto">
            Comprehensive answers to common questions about Canine Maternal Delusion Disorder, 
            treatment options, and the mission of the Institute for Maternal Canine Studies.
          </p>
        </div>

        {/* Quick Help Banner */}
        <div className="alert-banner alert-info mb-12">
          <div className="flex items-start gap-4">
            <Phone className="h-6 w-6 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-2">Need Immediate Help?</h3>
              <p className="text-base">
                If you're experiencing acute CMDD symptoms or crisis, contact our 24/7 hotline: 
                <strong className="ml-2 font-mono text-lg">1-800-NOT-A-MOM</strong>
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="clinical-card">
              <h2 className="text-2xl font-semibold text-government-navy mb-6 flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-government-blue" />
                {category.category}
              </h2>
              
              <Accordion type="single" collapsible className="space-y-2">
                {category.questions.map((faq, questionIndex) => (
                  <AccordionItem 
                    key={questionIndex} 
                    value={`${categoryIndex}-${questionIndex}`}
                    className="border border-border rounded-lg px-4"
                  >
                    <AccordionTrigger className="hover:no-underline py-4 text-left">
                      <span className="text-base font-medium text-government-navy pr-4">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 pt-2">
                      <div className="text-sm text-government-gray-dark leading-relaxed pl-2 border-l-2 border-government-blue/20">
                        <p>{faq.answer}</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="clinical-card bg-government-blue/10 border border-government-blue/20">
            <h3 className="text-xl font-semibold text-government-navy mb-4">Still Have Questions?</h3>
            <p className="text-sm text-government-gray-dark mb-4">
              Our research team regularly updates this FAQ based on common inquiries. 
              If you don't see your question answered here, we encourage you to reach out.
            </p>
            <div className="space-y-2 text-sm">
              <div><strong>Research Inquiries:</strong> research@imcs.gov</div>
              <div><strong>Media Relations:</strong> media@imcs.gov</div>
              <div><strong>General Information:</strong> info@imcs.gov</div>
            </div>
          </div>

          <div className="clinical-card bg-alert-green/10 border border-alert-green/20">
            <h3 className="text-xl font-semibold text-government-navy mb-4">Success Stories</h3>
            <p className="text-sm text-government-gray-dark mb-4">
              Thousands of individuals have successfully overcome CMDD and developed 
              healthier relationships with their companion animals. Recovery is possible 
              with proper support and intervention.
            </p>
            <div className="text-sm font-semibold text-alert-green">
              📊 89% Success Rate<br />
              🎯 3.2 Month Average Recovery<br />
              💝 100% Maintained Love for Pets
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 clinical-card bg-government-gray-light/20">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-government-gray flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-government-navy mb-2">Medical Disclaimer</h3>
              <p className="text-sm text-government-gray-dark leading-relaxed">
                The information provided in this FAQ is for educational purposes only and should not 
                be considered medical advice. Individual experiences with CMDD may vary. Always consult 
                with qualified healthcare professionals for personalized treatment recommendations. 
                The IMCS does not replace professional medical or psychological care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;