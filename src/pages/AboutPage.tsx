import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Users, Award, Target, Eye, Handshake, Shield, Calendar } from 'lucide-react';
import { Section, SectionHeader } from '../components/Section';
import { images, practiceInfo } from '../data/constants';

const values = [
  { icon: Heart, title: 'Compassion', desc: 'Every interaction is guided by genuine care for animals and the people who love them.' },
  { icon: Users, title: 'Relationship', desc: 'We build lasting partnerships with our clients, becoming their trusted advisors for life.' },
  { icon: Award, title: 'Excellence', desc: 'We pursue continuing education and evidence-based medicine to provide outstanding care.' },
  { icon: Target, title: 'Individualized Care', desc: 'No two pets are alike. We tailor every treatment plan to your pet\'s unique needs.' },
  { icon: Eye, title: 'Transparency', desc: 'Clear communication about diagnoses, treatment options, and costs — always.' },
  { icon: Handshake, title: 'Community', desc: 'We\'re proud members of the Granville community, giving back whenever we can.' },
];

const milestones = [
  { year: '2012', title: 'Founded', desc: 'Dr. Cressida Rowan opens Bramble Creek with 2 exam rooms and a dream.' },
  { year: '2015', title: 'Expansion', desc: 'Added surgical suite, dental room, and 3 additional exam rooms.' },
  { year: '2017', title: 'Fear-Free Certification', desc: 'Became one of the first fear-free certified practices in Licking County.' },
  { year: '2018', title: 'Dr. Marlowe Joins', desc: 'Dr. Lucien Marlowe brings orthopedic and exotic animal expertise.' },
  { year: '2020', title: 'Digital Upgrade', desc: 'Full digital radiography, ultrasound, and in-house laboratory installed.' },
  { year: '2023', title: 'Community Award', desc: 'Named "Best Veterinary Practice" by Granville Sentinel readers\' poll.' },
  { year: '2024', title: '4,800+ Patients', desc: 'Growing family of loyal patients from across Licking County.' },
];

export function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-64 sm:h-80 lg:h-96 flex items-center overflow-hidden">
        <img src={images.aboutHero} alt="About Bramble Creek" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/80 to-primary-900/50" />
        <div className="relative container-app px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-display">About Us</h1>
          <p className="text-lg text-primary-100 mt-3 max-w-lg">The story behind Granville's trusted independent veterinary hospital.</p>
        </div>
      </section>

      {/* Our Story */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">Our Story</span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mt-2 mb-5">
              Born from a Love of Animals and Community
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              In 2012, Dr. Cressida Rowan left a successful position at a large corporate veterinary group to pursue a different vision: a practice where patients are known by name, where appointments aren't rushed, and where the human-animal bond is celebrated at every turn.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              She chose Granville, Ohio — a community that values local businesses, personal connections, and quality over convenience. Starting with just two exam rooms in a renovated brick building on Newark-Granville Road, Bramble Creek has grown into a full-service hospital serving over 4,800 active patients.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, our team of six dedicated professionals continues that founding vision: delivering medicine that is thorough, compassionate, and always in the best interest of the patient.
            </p>
          </div>
          <img src={images.facility} alt="Bramble Creek Hospital exterior" className="rounded-2xl shadow-xl w-full h-80 object-cover" />
        </div>
      </Section>

      {/* Mission & Values */}
      <Section className="bg-gray-50">
        <SectionHeader
          title="Our Mission & Values"
          subtitle="To provide exceptional veterinary care rooted in compassion, integrity, and community partnership."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v, i) => (
            <div key={i} className="card p-6">
              <v.icon className="w-8 h-8 text-primary-500 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">{v.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Stats */}
      <Section>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: '4,800+', label: 'Active Patients' },
            { value: '12+', label: 'Years of Service' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '6', label: 'Team Members' },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 bg-primary-50 rounded-2xl">
              <div className="text-3xl sm:text-4xl font-bold text-primary-700 font-display">{stat.value}</div>
              <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section className="bg-gray-50">
        <SectionHeader title="Our Journey" subtitle="Key milestones in our growth from a two-room practice to a full-service hospital." />
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-primary-200 sm:-translate-x-px" />
            {milestones.map((m, i) => (
              <div key={i} className={`relative flex items-start gap-6 mb-8 last:mb-0 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                <div className={`hidden sm:block flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className="card p-4 inline-block">
                    <span className="text-xs font-bold text-primary-600">{m.year}</span>
                    <h4 className="font-semibold text-gray-900 text-sm">{m.title}</h4>
                    <p className="text-xs text-gray-600 mt-1">{m.desc}</p>
                  </div>
                </div>
                <div className="absolute left-4 sm:left-1/2 w-3 h-3 rounded-full bg-primary-500 border-2 border-white shadow -translate-x-1.5 mt-2" />
                <div className="sm:hidden ml-10">
                  <span className="text-xs font-bold text-primary-600">{m.year}</span>
                  <h4 className="font-semibold text-gray-900 text-sm">{m.title}</h4>
                  <p className="text-xs text-gray-600 mt-1">{m.desc}</p>
                </div>
                <div className="hidden sm:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Why Independent */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <Shield className="w-10 h-10 text-primary-500 mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-5">Why Choose Independent?</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Unlike corporate veterinary chains, we answer only to our patients and their families — not shareholders. This means:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {[
              'Longer, unhurried appointment times',
              'Consistent care from doctors who know your pet',
              'Treatment decisions based on medicine, not revenue targets',
              'Transparent pricing with no upselling pressure',
              'Local decision-making — we adapt to our community\'s needs',
              'Personal follow-up calls after every procedure',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-primary-50 rounded-xl">
                <Award className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Community Section */}
      <Section className="bg-sage-50" id="community">
        <SectionHeader
          title="Community Involvement"
          subtitle="Giving back to the community that supports us."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { title: 'Paws in the Park', desc: 'Annual adoption event in partnership with Licking County Humane Society. Over 200 pets adopted since 2014.' },
            { title: 'School Education Program', desc: 'Visiting local elementary schools to teach children about responsible pet ownership and veterinary careers.' },
            { title: 'Pet Food Bank', desc: 'Monthly donations to the Newark-area pet food bank ensuring no family\'s pet goes hungry.' },
            { title: 'Senior Adoption Sponsor', desc: 'Covering initial veterinary costs for senior pets adopted from local shelters.' },
            { title: '4-H Partnership', desc: 'Volunteering veterinary services for Licking County 4-H animal projects and competitions.' },
            { title: 'Disaster Response', desc: 'Providing emergency shelter and care for displaced animals during severe weather events.' },
          ].map((item, i) => (
            <div key={i} className="card p-6">
              <Heart className="w-6 h-6 text-sage-500 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-primary-700 text-center">
        <h2 className="text-3xl font-bold text-white mb-4 font-display">Experience the Bramble Creek Difference</h2>
        <p className="text-primary-100 mb-8 max-w-md mx-auto">Schedule your pet's first visit and discover why families across Licking County trust us with their best friends.</p>
        <Link to="/contact" className="btn-warm text-base px-8 py-4">
          <Calendar className="w-5 h-5 mr-2" />
          Schedule an Appointment
        </Link>
      </Section>
    </>
  );
}
