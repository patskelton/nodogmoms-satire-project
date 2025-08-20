import { Crown, Heart, Calendar, MapPin } from 'lucide-react';
import daisyBeagle from '/nodogmoms-satire-project/assets/daisy-beagle.png';
import rubyBorderCollie from '/nodogmoms-satire-project/assets/ruby-border-collie.png';

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
      litters: 4,
      image: daisyBeagle,
      specialties: ["Patient teaching", "Consistent nurturing", "Multi-generational care"],
      achievements: ["Most Prolific Mother 2024", "Puppy Socialization Expert", "IMCS Research Participant"],
      bio: "Daisy's patient approach to puppy rearing has made her offspring among the most well-adjusted dogs in our database. She exemplifies maternal excellence."
    },
    {
      name: "Bella",
      breed: "Labrador Mix",
      age: "3 years",
      location: "Seattle, WA",
      offspring: 6,
      litters: 1,
      image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400&h=400&fit=crop&crop=face",
      specialties: ["First-time mother excellence", "Natural birthing", "Intuitive care"],
      achievements: ["Rising Star Mother", "Natural Birth Advocate", "Youth Excellence Award"],
      bio: "Despite being a first-time mother, Bella showed remarkable intuitive maternal skills. Her natural approach to puppy care serves as inspiration for others."
    },
    {
      name: "Ruby",
      breed: "Border Collie",
      age: "7 years",
      location: "Denver, CO",
      offspring: 9,
      litters: 2,
      image: rubyBorderCollie,
      specialties: ["Advanced puppy training", "Problem-solving skills", "Educational leadership"],
      achievements: ["Master Trainer Mother", "IMCS Hall of Fame", "Lifetime Achievement Award"],
      bio: "Ruby combines her Border Collie intelligence with exceptional maternal instincts, teaching her puppies advanced skills that set them apart from their peers."
    },
    {
      name: "Rosie",
      breed: "Australian Cattle Dog",
      age: "4 years",
      location: "Phoenix, AZ",
      offspring: 7,
      litters: 2,
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop&crop=face",
      specialties: ["High energy nurturing", "Athletic conditioning", "Adventure preparation"],
      achievements: ["Active Mother of the Year", "Outdoor Skills Educator", "Fitness Role Model"],
      bio: "Rosie ensures her puppies are physically and mentally prepared for active lifestyles, embodying the perfect balance of care and conditioning."
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-government-blue mb-4">
            <Crown className="h-8 w-8" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Excellence Recognition
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-government-navy mb-6">
            The Hall of Dog Moms
          </h1>
          
          <p className="text-xl text-government-gray leading-relaxed max-w-3xl mx-auto">
            Celebrating actual dog mothers—female dogs who have successfully given birth to 
            and raised puppies. These remarkable canines demonstrate true maternal excellence 
            and biological authenticity.
          </p>
        </div>

        {/* Introduction */}
        <div className="clinical-card bg-government-navy text-white mb-12">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Heart className="h-6 w-6 text-alert-red" />
            What Makes a True Dog Mom?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base">
            <div>
              <h3 className="font-semibold mb-2">Biological Requirements:</h3>
              <ul className="space-y-1 text-sm opacity-90">
                • Must be female canine (Canis lupus familiaris)
                • Must have successfully carried pregnancy to term
                • Must have given birth to live puppies
                • Must demonstrate maternal care behaviors
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Recognition Criteria:</h3>
              <ul className="space-y-1 text-sm opacity-90">
                • Verified birth records and documentation
                • Demonstrated exceptional maternal behavior
                • Positive impact on puppy development
                • Nomination by veterinary professionals
              </ul>
            </div>
          </div>
        </div>

        {/* Dog Moms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dogMoms.map((dog, index) => (
            <div className="clinical-card hover:shadow-lg transition-shadow" key={index}>
              {/* Photo */}
              <div className="relative mb-4">
                <img 
                  src={dog.image} 
                  alt={`${dog.name}, a ${dog.breed} and verified dog mom`}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute top-3 right-3 bg-government-navy text-white px-2 py-1 rounded text-xs font-bold">
                  VERIFIED DOG MOM
                </div>
                <div className="absolute bottom-3 left-3 bg-alert-red text-white px-2 py-1 rounded text-xs font-bold transform -rotate-2">
                  IMCS REGISTRY
                </div>
              </div>

              {/* Name and Basic Info */}
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-government-navy mb-1">{dog.name}</h3>
                <p className="text-government-gray font-medium">{dog.breed}</p>
                <div className="flex items-center justify-center gap-4 text-sm text-government-gray mt-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {dog.age}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {dog.location}
                  </div>
                </div>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center p-3 bg-government-blue/10 rounded-lg">
                  <div className="text-2xl font-bold text-government-blue">{dog.offspring}</div>
                  <div className="text-xs text-government-gray uppercase tracking-wider">Puppies</div>
                </div>
                <div className="text-center p-3 bg-government-blue/10 rounded-lg">
                  <div className="text-2xl font-bold text-government-blue">{dog.litters}</div>
                  <div className="text-xs text-government-gray uppercase tracking-wider">Litters</div>
                </div>
              </div>

              {/* Specialties */}
              <div className="mb-4">
                <h4 className="font-semibold text-government-navy mb-2 text-sm">Specialties:</h4>
                <div className="flex flex-wrap gap-1">
                  {dog.specialties.map((specialty, idx) => (
                    <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded" key={idx}>
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-4">
                <h4 className="font-semibold text-government-navy mb-2 text-sm">Achievements:</h4>
                <ul className="space-y-1">
                  {dog.achievements.map((achievement, idx) => (
                    <li className="text-xs text-government-gray-dark flex items-start gap-2" key={idx}>
                      <Crown className="h-3 w-3 text-alert-yellow flex-shrink-0 mt-0.5" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bio */}
              <div className="border-t border-border pt-4">
                <p className="text-sm text-government-gray-dark leading-relaxed italic">
                  {dog.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Nomination Section */}
        <div className="mt-16 clinical-card bg-government-blue/10 border border-government-blue/20">
          <h2 className="text-2xl font-semibold text-government-navy mb-4">
            Nominate a True Dog Mom
          </h2>
          <p className="text-base text-government-gray-dark leading-relaxed mb-6">
            Know a female dog who exemplifies maternal excellence? The IMCS Hall of Dog Moms 
            welcomes nominations from veterinarians, breeders, and dog care professionals. 
            All nominees must meet strict biological and behavioral criteria.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="font-semibold text-government-navy mb-2">Required Documentation:</h3>
              <ul className="space-y-1 text-government-gray-dark">
                • Veterinary birth records
                • Professional behavioral assessment
                • Photographic evidence of maternal care
                • Health clearances and genetic testing
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-government-navy mb-2">Nomination Process:</h3>
              <ul className="space-y-1 text-government-gray-dark">
                • Submit via IMCS professional portal
                • Peer review by veterinary board
                • Site visit and verification process
                • Annual recognition ceremony
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HallOfDogMoms;
