import { FileText, Calendar, MapPin, AlertTriangle } from 'lucide-react';
import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CaseStudies = () => {
  const cases = [
    {
      id: "113",
      date: "March 15, 2024",
      location: "Portland, OR",
      severity: "Moderate",
      claim: "Subject claimed to be pregnant with a litter of Golden Retriever puppies",
      details: "35-year-old female presented to emergency department claiming pregnancy at 8 months gestation with 'at least six puppies.' Patient insisted on ultrasound to show 'her babies.' Physical examination revealed normal human anatomy with no signs of pregnancy.",
      symptoms: ["Excessive nesting behavior", "Prepared whelping box in bedroom", "Consumed prenatal vitamins 'for the puppies'", "Researched dog birthing techniques"],
      diagnosis: "Severe CMDD with pregnancy delusion subtype",
      treatment: "2-week inpatient reality orientation therapy, followed by 6 months outpatient CRT",
      outcome: "Patient achieved full recovery, now works as dog groomer with appropriate species boundaries",
      notes: "Case notable for rapid onset following adoption of pregnant stray dog"
    },
    {
      id: "221",
      date: "January 8, 2024",
      location: "Austin, TX",
      severity: "Mild",
      claim: "Insisted her Chihuahua was her biological daughter reincarnated",
      details: "28-year-old graduate student sought counseling for grief following loss of elderly Chihuahua. When adopting new puppy, became convinced the dog was her deceased pet reborn as her own child.",
      symptoms: ["Called dog by human name (Sarah)", "Enrolled dog in human daycare", "Applied for family health insurance coverage", "Attempted to register dog for kindergarten"],
      diagnosis: "Mild CMDD with reincarnation ideation",
      treatment: "Grief counseling combined with species education workshops",
      outcome: "Symptom reduction within 4 weeks, maintains healthy pet relationship",
      notes: "Quick response to treatment typical of mild cases"
    },
    {
      id: "307",
      date: "November 22, 2023",
      location: "Miami, FL",
      severity: "Severe",
      claim: "Legally attempted to add Pit Bull mix to will as biological heir",
      details: "42-year-old real estate agent consulted attorney to include 'son' Maximus in estate planning. When attorney explained legal impossibility, patient became agitated and sought second opinion from three additional law firms.",
      symptoms: ["Created birth certificate for dog", "Registered dog with fake SSN", "Attempted to claim dog as dependent on taxes", "Built elaborate family tree including dog lineage"],
      diagnosis: "Severe CMDD with legal delusion complex",
      treatment: "Intensive 12-week program including legal education and reality testing",
      outcome: "Ongoing treatment, some progress in accepting legal reality",
      notes: "Case complicated by patient's access to legal resources and documentation tools"
    },
    {
      id: "445",
      date: "September 5, 2023",
      location: "Seattle, WA",
      severity: "Moderate",
      claim: "Organized baby shower for pregnant Labrador, insisted it was her grandchild",
      details: "31-year-old marketing professional threw elaborate baby shower for her dog's first litter, sending invitations describing herself as 'soon-to-be grandmother.' Event included human baby shower games adapted for dogs.",
      symptoms: ["Purchased human baby clothes for puppies", "Set up nursery with cribs instead of whelping box", "Researched human baby care for puppies", "Created birth announcements with family photos"],
      diagnosis: "Moderate CMDD with extended family delusion",
      treatment: "Group therapy with other CMDD patients, education on dog breeding",
      outcome: "Successful treatment, maintained healthy relationship with dog's actual puppies",
      notes: "Positive peer support contributed to recovery success"
    },
    {
      id: "556",
      date: "July 18, 2023",
      location: "Denver, CO",
      severity: "Mild",
      claim: "Insisted on maternity leave from work following dog adoption",
      details: "29-year-old teacher requested 12 weeks maternity leave after adopting rescue puppy, arguing that 'bonding time is essential for new mothers.' HR department consulted IMCS for guidance.",
      symptoms: ["Purchased maternity clothes", "Attended new parent classes with dog", "Created elaborate birth story for adoption day", "Sent birth announcement cards to colleagues"],
      diagnosis: "Mild CMDD with workplace manifestation",
      treatment: "Brief educational intervention and peer counseling",
      outcome: "Full recovery within 6 weeks, returned to work with appropriate boundaries",
      notes: "Employer cooperation facilitated quick resolution"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Mild': return 'text-alert-yellow border-alert-yellow bg-alert-yellow/5';
      case 'Moderate': return 'text-orange-600 border-orange-500 bg-orange-50';
      case 'Severe': return 'text-alert-red border-alert-red bg-alert-red/5';
      default: return 'text-government-gray border-government-gray bg-government-gray/5';
    }
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-government-blue mb-4">
            <FileText className="h-8 w-8" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Clinical Documentation
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-government-navy mb-6">
            CMDD Case Studies
          </h1>
          
          <p className="text-xl text-government-gray leading-relaxed max-w-3xl mx-auto">
            Documented cases from the IMCS Clinical Database, providing insight into 
            the varied presentations and treatment outcomes of Canine Maternal Delusion Disorder.
          </p>
        </div>

        {/* Statistics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="clinical-card text-center">
            <div className="text-3xl font-bold text-government-navy mb-2">847</div>
            <div className="text-government-gray text-sm">Total Documented Cases</div>
          </div>
          <div className="clinical-card text-center">
            <div className="text-3xl font-bold text-government-blue mb-2">89%</div>
            <div className="text-government-gray text-sm">Recovery Rate</div>
          </div>
          <div className="clinical-card text-center">
            <div className="text-3xl font-bold text-alert-green mb-2">3.2</div>
            <div className="text-government-gray text-sm">Avg. Treatment Months</div>
          </div>
          <div className="clinical-card text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">23%</div>
            <div className="text-government-gray text-sm">Severe Cases</div>
          </div>
        </div>

        {/* Case Files */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-government-navy mb-6">
            Clinical Case Files
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {cases.map((caseStudy) => (
              <AccordionItem key={caseStudy.id} value={caseStudy.id} className="case-file border-2">
                <AccordionTrigger className="hover:no-underline p-6">
                  <div className="flex items-start justify-between w-full text-left">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="case-stamp">
                          CASE #{caseStudy.id}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs font-semibold border ${getSeverityColor(caseStudy.severity)}`}>
                          {caseStudy.severity} CMDD
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-government-navy mb-1">
                        {caseStudy.claim}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-government-gray">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {caseStudy.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {caseStudy.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                
                <AccordionContent className="px-6 pb-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Case Details */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-government-navy mb-2 flex items-center gap-2">
                          <FileText className="h-4 w-4" />
                          Case Details
                        </h4>
                        <p className="text-sm text-government-gray-dark leading-relaxed">
                          {caseStudy.details}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-government-navy mb-2 flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4" />
                          Observed Symptoms
                        </h4>
                        <ul className="space-y-1">
                          {caseStudy.symptoms.map((symptom, index) => (
                            <li key={index} className="text-sm text-government-gray-dark flex items-start gap-2">
                              <span className="w-1 h-1 bg-government-gray rounded-full mt-2 flex-shrink-0"></span>
                              {symptom}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {/* Treatment & Outcome */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-government-navy mb-2">Diagnosis</h4>
                        <p className="text-sm text-government-gray-dark">{caseStudy.diagnosis}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-government-navy mb-2">Treatment Protocol</h4>
                        <p className="text-sm text-government-gray-dark">{caseStudy.treatment}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-government-navy mb-2">Clinical Outcome</h4>
                        <p className="text-sm text-government-gray-dark">{caseStudy.outcome}</p>
                      </div>
                      
                      <div className="bg-government-blue/10 border border-government-blue/20 rounded-lg p-3">
                        <h4 className="font-semibold text-government-navy mb-2 text-xs uppercase tracking-wider">
                          Clinical Notes
                        </h4>
                        <p className="text-sm text-government-gray-dark italic">{caseStudy.notes}</p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 clinical-card bg-government-gray-light/20">
          <h3 className="font-semibold text-government-navy mb-3">Research Ethics Notice</h3>
          <p className="text-sm text-government-gray-dark leading-relaxed">
            All case studies have been anonymized and identifying details altered to protect patient privacy. 
            These cases are presented for educational purposes only and represent composite scenarios 
            based on multiple clinical observations. Any resemblance to actual individuals is purely coincidental.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;