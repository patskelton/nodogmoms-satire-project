import { Crown, Heart, Calendar, MapPin } from 'lucide-react';

const HallOfDogMoms = () => {
  const dogMoms = [
    {
      name: "Maizie",
      breed: "Golden Retriever",
      age: "4 years",
      location: "Colorado Springs, CO",
      offspring: 12,
      litters: 3,
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=400&fit=crop&crop=face",
      specialties: ["Gentle temperament", "Strong maternal instincts", "Champion bloodline"],
      achievements: ["AKC Good Citizen", "Therapy Dog Certified", "Best Mother 2023"],
      bio: "Maizie has consistently demonstrated exceptional maternal care across three successful litters. Her gentle nature and protective instincts make her a model canine mother."
    },
    {
      name: "Luna",
      breed: "German Shepherd Mix",
      age: "6 years",
      location: "Austin, TX",
      offspring: 8,
      litters: 2,
      image: "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=400&h=400&fit=crop&crop=face",
      specialties: ["Protective nature", "High intelligence", "Strong pack leadership"],
      achievements: ["Rescue Dog Success Story", "Outstanding Mother Award", "Community Service Dog"],
      bio: "Luna transformed from abandoned stray to exemplary mother, showing that maternal instincts transcend circumstances. Her dedication to her puppies is unmatched."
    },
    {
      name: "Daisy",
      breed: "Beagle",
      age: "5 years",
      location: "Portland, OR",
      offspring: 15,
      litters: 3,
      image: "/nodogmoms-satire-project/assets/daisy-beagle.png",
      specialties: ["Exceptional nurturing", "Patient with young", "Natural teacher"],
      achievements: ["Top Breeder Recognition", "Maternal Excellence Award", "Breed Ambassador"],
      bio: "Daisy's patient and nurturing approach has resulted in healthy, well-socialized puppies. Her natural teaching abilities help puppies develop properly."
    },
    {
      name: "Ruby",
      breed: "Border Collie",
      age: "7 years",
      location: "Seattle, WA",
      offspring: 10,
      litters: 2,
      image: "/nodogmoms-satire-project/assets/ruby-border-collie.png",
      specialties: ["High energy care", "Intelligent training", "Protective instincts"],
      achievements: ["Working Dog Excellence", "Best Mother 2022", "Agility Champion"],
      bio: "Ruby combines her working dog intelligence with exceptional maternal care, creating puppies that are both smart and well-adjusted."
    },
    {
      name: "Bella",
      breed: "Labrador Mix",
      age: "5 years",
      location: "Denver, CO",
      offspring: 18,
      litters: 4,
      image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400&h=400&fit=crop&crop=face",
      specialties: ["Multiple successful litters", "Calm demeanor", "Strong maternal bond"],
      achievements: ["Prolific Mother Award", "Community Pet of the Year", "Rescue Success Story"],
      bio: "Bella's calm and patient nature has made her an exceptional mother through four successful litters. She demonstrates unwavering dedication to each puppy."
    },
    {
      name: "Sophie",
      breed: "Australian Cattle Dog",
      age: "4 years",
      location: "Phoenix, AZ",
      offspring: 6,
      litters: 1,
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop&crop=face",
      specialties: ["First-time excellence", "Strong protective instincts", "Active parenting"],
      achievements: ["New Mother Award", "Rising Star 2024", "Breed Representative"],
      bio: "Despite being a first-time mother, Sophie's natural instincts and protective nature have made her an outstanding parent to her first litter."
    }
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <section className="py-12 bg-government-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-3 mb-6">
            <Crown className="h-8 w-8 text-alert-yellow" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Hall of Dog Moms
            </h1>
            <Crown className="h-8 w-8 text-alert-yellow" />
          </div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Celebrating the true mothers of the canine world. These exemplary dogs demonstrate 
            what real maternal care looks like - no human delusions required.
          </p>
          <div className="mt-8 p-4 bg-government-blue/20 rounded-lg max-w-2xl mx-auto">
            <p className="text-sm italic">
              "Only dogs can be the mothers of dogs. These remarkable females prove that 
              maternal excellence comes naturally to the right species."
            </p>
            <p className="text-xs mt-2 text-alert-yellow">
              — Institute for Maternal Canine Studies
            </p>
          </div>
        </div>
      </section>

      {/* Dog Moms Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dogMoms.map((mom, index) => (
              <div className="clinical-card hover:shadow-xl transition-all duration-300" key={index}>
                {/* Header with Crown */}
                <div className="relative">
                  <Crown className="absolute top-4 right-4 h-6 w-6 text-alert-yellow z-10" />
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={mom.image} 
                      alt={`${mom.name}, a ${mom.breed} and exemplary dog mother`}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  
                  {/* Name Badge */}
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3">
                    <h3 className="font-bold text-lg text-government-navy">{mom.name}</h3>
                    <p className="text-sm text-government-gray">{mom.breed}</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <Heart className="h-5 w-5 text-government-blue mx-auto mb-2" />
                      <div className="text-2xl font-bold text-government-navy">{mom.offspring}</div>
                      <div className="text-xs text-government-gray">Puppies</div>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <Calendar className="h-5 w-5 text-government-blue mx-auto mb-2" />
                      <div className="text-2xl font-bold text-government-navy">{mom.litters}</div>
                      <div className="text-xs text-government-gray">Litters</div>
                    </div>
                  </div>

                  {/* Location & Age */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-government-gray">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {mom.location}
                    </div>
                    Age: {mom.age}
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-government-gray-dark mb-4 leading-relaxed">
                    {mom.bio}
                  </p>

                  {/* Specialties */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-government-navy mb-2 text-sm">Maternal Specialties:</h4>
                    <div className="flex flex-wrap gap-1">
                      {mom.specialties.map((specialty, idx) => (
                        <span className="px-2 py-1 bg-government-blue/10 text-government-blue text-xs rounded-full" key={idx}>
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold text-government-navy mb-2 text-sm">Achievements:</h4>
                    <ul className="space-y-1">
                      {mom.achievements.map((achievement, idx) => (
                        <li className="text-xs text-government-gray-dark flex items-start gap-2" key={idx}>
                          <Crown className="h-3 w-3 text-alert-yellow mt-0.5 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="py-12 bg-government-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">The Science is Clear</h2>
          <p className="text-white/90 max-w-2xl mx-auto">
            These remarkable mothers demonstrate the natural maternal behaviors that only 
            occur within the same species. Each represents thousands of years of evolutionary 
            maternal instincts - something no human can replicate or claim.
          </p>
          <div className="mt-6 text-alert-yellow font-mono text-sm">
            Institute for Maternal Canine Studies - Preserving Scientific Accuracy
          </div>
        </div>
      </section>
    </div>
  );
};

export default HallOfDogMoms;
