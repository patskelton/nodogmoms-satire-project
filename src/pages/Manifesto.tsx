import { Shield, CheckCircle } from 'lucide-react';

const Manifesto = () => {
  const declarations = [
    {
      number: "I.",
      title: "Species Matters",
      content: "The biological reality of reproduction cannot be ignored. Humans give birth to humans. Dogs give birth to dogs. This is not opinion—this is science."
    },
    {
      number: "II.",
      title: "Affection Does Not Equal Biology",
      content: "Love, care, and emotional attachment to a pet are beautiful things. They do not, however, constitute a maternal biological relationship."
    },
    {
      number: "III.",
      title: "Terminology Saves Dignity",
      content: "Words have meaning. 'Guardian,' 'caretaker,' and 'companion' are dignified terms that respect both the human-animal bond and biological reality."
    },
    {
      number: "IV.",
      title: "Respect for Actual Mothers",
      content: "Human mothers have experienced pregnancy, childbirth, and the unique challenges of raising human children. This experience deserves its own terminology."
    },
    {
      number: "V.",
      title: "Clarity Prevents Confusion",
      content: "Clear, accurate language prevents the kind of species confusion that leads to CMDD and other maternal delusion disorders."
    },
    {
      number: "VI.",
      title: "Love Transcends Labels",
      content: "The bond between humans and their companion animals is profound and meaningful without requiring maternal terminology to validate it."
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-government-blue mb-4">
            <Shield className="h-8 w-8" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Official Declaration
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-government-navy mb-6">
            The No Dog Moms Manifesto
          </h1>
          
          <p className="text-xl text-government-gray leading-relaxed">
            A founding document establishing the principles of species-appropriate terminology 
            in companion animal relationships, as ratified by the Institute for Maternal Canine Studies.
          </p>
        </div>

        {/* Preamble */}
        <div className="clinical-card mb-12">
          <h2 className="text-2xl font-semibold text-government-navy mb-4">Preamble</h2>
          <p className="text-base leading-relaxed text-government-gray-dark">
            We, the researchers and advocates of the Institute for Maternal Canine Studies, 
            in order to form a more perfect understanding of human-canine relationships, 
            establish linguistic justice, ensure domestic tranquility, provide for the common 
            defense against species confusion, promote the general welfare of both humans and 
            dogs, and secure the blessings of biological accuracy to ourselves and our posterity, 
            do ordain and establish this Manifesto for the United States of America and beyond.
          </p>
        </div>

        {/* Declarations */}
        <div className="space-y-8">
          {declarations.map((declaration, index) => (
            <div key={index} className="clinical-card">
              <div className="flex items-start gap-4">
                <div className="government-seal flex-shrink-0">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-2xl font-bold text-government-navy">{declaration.number}</span>
                    <h3 className="text-xl font-semibold text-government-navy">{declaration.title}</h3>
                  </div>
                  <p className="text-base leading-relaxed text-government-gray-dark">
                    {declaration.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pull Quote */}
        <div className="my-16 bg-government-blue/10 border-l-4 border-government-blue rounded-r-lg p-8">
          <blockquote className="text-2xl font-serif italic text-government-navy leading-relaxed">
            "Matching sweaters do not constitute gestation. Shared treats do not constitute nursing. 
            Puppuccinos do not constitute lactation. Birthday parties do not constitute labor and delivery."
          </blockquote>
          <cite className="block text-right text-government-gray mt-4 text-lg">
            — Dr. Woofington P. Barkley, Chief of Maternal Reality Studies, IMCS
          </cite>
        </div>

        {/* Conclusion */}
        <div className="clinical-card bg-government-navy text-white">
          <h2 className="text-2xl font-semibold mb-4">Our Solemn Pledge</h2>
          <p className="text-base leading-relaxed mb-4">
            We pledge to advance these principles through education, research, and compassionate 
            intervention. We commit to supporting both humans and dogs in developing healthy, 
            reality-based relationships built on love, respect, and accurate terminology.
          </p>
          <p className="text-base leading-relaxed">
            Together, we can end the CMDD epidemic and create a world where species boundaries 
            are respected, maternal experiences are honored, and the human-canine bond thrives 
            within the beautiful reality of biological truth.
          </p>
          
          <div className="mt-8 pt-6 border-t border-white/20 text-center">
            <p className="text-sm opacity-90">
              Adopted unanimously by the IMCS Board of Directors<br />
              Effective immediately upon publication<br />
              Revision 2.1 | Document Classification: Public Domain
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manifesto;