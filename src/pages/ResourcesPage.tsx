import { Link } from 'react-router-dom';
import { Shield, Sparkles, Clock, Thermometer, Bug, Heart, AlertTriangle, ExternalLink, Calendar } from 'lucide-react';
import { Section, SectionHeader } from '../components/Section';
import { images } from '../data/constants';

const dogConditions = [
  { name: 'Ear Infections', desc: 'Chronic or recurrent otitis is one of our most common cases. We identify root causes — allergies, anatomy, or moisture — and create long-term solutions.', icon: Bug },
  { name: 'Skin Allergies', desc: 'Itching, hot spots, and chronic paw licking often signal environmental or food allergies. We offer testing, immunotherapy, and targeted relief.', icon: Thermometer },
  { name: 'Dental Disease', desc: 'Over 80% of dogs have dental disease by age 3. Watch for bad breath, difficulty eating, or pawing at the mouth.', icon: Sparkles },
  { name: 'Arthritis', desc: 'Joint stiffness, reluctance to jump, and slowing on walks may indicate osteoarthritis. Multi-modal pain management can restore quality of life.', icon: Clock },
  { name: 'Obesity', desc: 'Over 50% of dogs are overweight. We offer nutritional counseling and weight management programs to help your dog reach a healthy weight.', icon: Heart },
  { name: 'Anxiety', desc: 'Separation anxiety, noise phobias, and generalized anxiety are treatable. Behavioral modification combined with medical support brings relief.', icon: AlertTriangle },
];

const catConditions = [
  { name: 'Lower Urinary Tract Disease', desc: 'Straining in the litter box, blood in urine, or urinating outside the box require prompt attention to rule out blockages.', icon: AlertTriangle },
  { name: 'Hyperthyroidism', desc: 'Weight loss despite good appetite, increased thirst, and hyperactivity in older cats may signal thyroid disease. Highly treatable when caught early.', icon: Thermometer },
  { name: 'Kidney Disease', desc: 'The leading cause of illness in senior cats. Regular bloodwork detects early kidney changes when intervention is most effective.', icon: Clock },
  { name: 'Dental Resorption', desc: 'Painful tooth lesions that are invisible to the naked eye. Digital dental x-rays reveal what\'s happening beneath the gumline.', icon: Sparkles },
  { name: 'Diabetes', desc: 'Increased thirst, urination, and weight loss. With proper insulin management and diet changes, diabetic cats can live comfortably for years.', icon: Heart },
  { name: 'Upper Respiratory Infections', desc: 'Sneezing, nasal discharge, and eye inflammation. Early treatment prevents secondary bacterial infections and speeds recovery.', icon: Bug },
];

const seasonalTips = [
  {
    title: 'Spring: Heartworm & Tick Prevention',
    content: 'Ohio\'s spring brings a surge in mosquitoes and ticks. Year-round heartworm prevention is essential — a single missed month leaves your pet vulnerable. Lyme disease is now endemic in Licking County; discuss tick prevention options at your next visit.',
    season: 'spring',
  },
  {
    title: 'Summer: Heat Safety & Outdoor Hazards',
    content: 'Never leave pets in parked cars — interior temperatures reach 120°F in minutes. Watch for signs of heatstroke: excessive panting, drooling, and lethargy. Keep walks to early morning and evening hours. Watch for toxic algae in local ponds and lakes.',
    season: 'summer',
  },
  {
    title: 'Fall: Back-to-School & Rodenticides',
    content: 'As temperatures drop, rodents move indoors — and rodent poisons become a major pet hazard. Use pet-safe pest control or keep all baits in tamper-proof stations inaccessible to pets. Fall is also an excellent time for wellness exams before winter.',
    season: 'fall',
  },
  {
    title: 'Winter: Holiday Dangers & Joint Health',
    content: 'Chocolate, xylitol, lilies, and tinsel are all holiday hazards. Antifreeze is fatally toxic and tastes sweet — clean spills immediately. Cold weather worsens arthritis; maintain exercise routines indoors and consider joint supplements for senior pets.',
    season: 'winter',
  },
];

const helpfulLinks = [
  { name: 'AVMA Pet Owners', url: 'https://www.avma.org/resources/pet-owners' },
  { name: 'ASPCA Poison Control', url: 'https://www.aspca.org/pet-care/animal-poison-control' },
  { name: 'Pet Poison Helpline', url: 'https://www.petpoisonhelpline.com' },
  { name: 'Fear Free Happy Homes', url: 'https://www.fearfreehappyhomes.com' },
  { name: 'Ohio State Veterinary Hospital', url: 'https://vet.osu.edu' },
  { name: 'Indoor Pet Initiative', url: 'https://indoorpet.osu.edu' },
];

export function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-64 sm:h-80 lg:h-96 flex items-center overflow-hidden">
        <img src={images.resourcesHero} alt="Pet health resources" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/80 to-primary-900/50" />
        <div className="relative container-app px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-display">Pet Health Resources</h1>
          <p className="text-lg text-primary-100 mt-3 max-w-lg">Information to help you make the best decisions for your pet's health.</p>
        </div>
      </section>

      {/* Dog Conditions */}
      <Section>
        <SectionHeader title="Common Dog Conditions" subtitle="Conditions we frequently diagnose and treat at our hospital." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {dogConditions.map((cond, i) => (
            <div key={i} className="card p-5">
              <cond.icon className="w-6 h-6 text-primary-500 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">{cond.name}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{cond.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Cat Conditions */}
      <Section className="bg-gray-50">
        <SectionHeader title="Common Cat Conditions" subtitle="Feline health issues our team manages regularly." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {catConditions.map((cond, i) => (
            <div key={i} className="card p-5">
              <cond.icon className="w-6 h-6 text-accent-500 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">{cond.name}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{cond.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Seasonal Tips */}
      <Section>
        <SectionHeader title="Seasonal Pet Safety" subtitle="Ohio's seasons bring unique challenges for pet owners. Stay informed." />
        <div className="grid sm:grid-cols-2 gap-5">
          {seasonalTips.map((tip, i) => (
            <div key={i} className="card p-6">
              <div className={`inline-flex px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                tip.season === 'spring' ? 'bg-green-100 text-green-700' :
                tip.season === 'summer' ? 'bg-yellow-100 text-yellow-700' :
                tip.season === 'fall' ? 'bg-orange-100 text-orange-700' :
                'bg-blue-100 text-blue-700'
              }`}>
                {tip.season.charAt(0).toUpperCase() + tip.season.slice(1)}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{tip.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{tip.content}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Pharmacy */}
      <Section className="bg-primary-50/50">
        <div className="max-w-3xl mx-auto text-center">
          <Shield className="w-10 h-10 text-primary-500 mx-auto mb-4" />
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">In-House Pharmacy</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our on-site pharmacy stocks common medications, prescription diets, and preventive products so you can take home what your pet needs the same day. For specialty medications, we work with trusted compounding pharmacies for custom formulations.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We also offer prescription diet consultations — our doctors can recommend therapeutic nutrition for conditions like kidney disease, food allergies, weight management, and joint support.
          </p>
        </div>
      </Section>

      {/* Helpful Links */}
      <Section>
        <SectionHeader title="Helpful Links" subtitle="Trusted external resources for pet health information." />
        <div className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-3">
          {helpfulLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-sm transition-all group"
            >
              <span className="text-sm font-medium text-gray-700 group-hover:text-primary-700">{link.name}</span>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary-500" />
            </a>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-primary-700 text-center">
        <h2 className="text-3xl font-bold text-white mb-4 font-display">Have Questions About Your Pet's Health?</h2>
        <p className="text-primary-100 mb-8 max-w-md mx-auto">Our team is always happy to discuss any health concerns. Don't wait — early intervention leads to better outcomes.</p>
        <Link to="/contact" className="btn-warm text-base px-8 py-4">
          <Calendar className="w-5 h-5 mr-2" />
          Schedule a Consultation
        </Link>
      </Section>
    </>
  );
}
