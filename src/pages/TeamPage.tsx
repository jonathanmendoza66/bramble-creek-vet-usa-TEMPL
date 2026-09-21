import { Link } from 'react-router-dom';
import { GraduationCap, Award, Heart, Calendar } from 'lucide-react';
import { Section, SectionHeader } from '../components/Section';
import { images, team } from '../data/constants';

export function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-64 sm:h-80 lg:h-96 flex items-center overflow-hidden">
        <img src={images.teamGroup} alt="Our veterinary team" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/80 to-primary-900/50" />
        <div className="relative container-app px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-display">Our Team</h1>
          <p className="text-lg text-primary-100 mt-3 max-w-lg">Dedicated professionals who treat every pet like their own.</p>
        </div>
      </section>

      {/* Team Intro */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-5">Meet the People Behind the Care</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our team is united by a shared passion for animal welfare and a commitment to continuous learning. We invest heavily in ongoing education, fear-free training, and team development to ensure your pet receives the best possible care.
          </p>
        </div>
      </Section>

      {/* Featured: Dr. Rowan */}
      <Section className="bg-primary-50/50">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <img src={team[0].image} alt={team[0].name} className="rounded-2xl shadow-xl w-full h-96 object-cover object-top" />
          </div>
          <div>
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">Medical Director</span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mt-2 mb-2">{team[0].name}</h2>
            <p className="text-primary-600 font-medium mb-4">{team[0].title}</p>
            <p className="text-gray-600 leading-relaxed mb-5">{team[0].bio}</p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
                <span className="text-gray-700 text-sm">{team[0].education}</span>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
                <span className="text-gray-700 text-sm">{team[0].experience}</span>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
                <span className="text-gray-700 text-sm">{team[0].pets}</span>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {team[0].specialties.map(s => (
                <span key={s} className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Featured: Dr. Marlowe */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="lg:order-2">
            <img src={team[1].image} alt={team[1].name} className="rounded-2xl shadow-xl w-full h-96 object-cover object-top" />
          </div>
          <div className="lg:order-1">
            <span className="text-sm font-semibold text-accent-600 uppercase tracking-wider">Associate Veterinarian</span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mt-2 mb-2">{team[1].name}</h2>
            <p className="text-accent-600 font-medium mb-4">{team[1].title}</p>
            <p className="text-gray-600 leading-relaxed mb-5">{team[1].bio}</p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-accent-500 mt-0.5 shrink-0" />
                <span className="text-gray-700 text-sm">{team[1].education}</span>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-accent-500 mt-0.5 shrink-0" />
                <span className="text-gray-700 text-sm">{team[1].experience}</span>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-accent-500 mt-0.5 shrink-0" />
                <span className="text-gray-700 text-sm">{team[1].pets}</span>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {team[1].specialties.map(s => (
                <span key={s} className="px-3 py-1 bg-accent-100 text-accent-700 text-xs font-medium rounded-full">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Support Staff */}
      <Section className="bg-gray-50">
        <SectionHeader title="Support Staff" subtitle="The skilled professionals who make every visit exceptional." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.slice(2).map(member => (
            <div key={member.id} className="card p-6 text-center">
              <div className="w-28 h-28 mx-auto rounded-full overflow-hidden ring-4 ring-primary-50 mb-4">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-gray-900">{member.name}</h3>
              <p className="text-sm text-primary-600 mb-3">{member.title}</p>
              <p className="text-xs text-gray-600 leading-relaxed mb-3">{member.bio}</p>
              <div className="flex flex-wrap gap-1 justify-center">
                {member.specialties.map(s => (
                  <span key={s} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] font-medium rounded-full">{s}</span>
                ))}
              </div>
              <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-gray-500">
                <Heart className="w-3 h-3" />
                <span>{member.pets}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Careers */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Join Our Team</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We're always interested in hearing from passionate veterinary professionals. If you share our commitment to compassionate, relationship-centered care, we'd love to connect.
          </p>
          <a href={`mailto:careers@bramblecreekvet.com`} className="btn-primary">
            Send Your Resume
          </a>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-primary-700 text-center">
        <h2 className="text-3xl font-bold text-white mb-4 font-display">Ready to Meet Us in Person?</h2>
        <p className="text-primary-100 mb-8 max-w-md mx-auto">Schedule your pet's appointment and experience our personalized care firsthand.</p>
        <Link to="/contact" className="btn-warm text-base px-8 py-4">
          <Calendar className="w-5 h-5 mr-2" />
          Book an Appointment
        </Link>
      </Section>
    </>
  );
}
