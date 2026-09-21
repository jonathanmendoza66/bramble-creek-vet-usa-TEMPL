import { Link } from 'react-router-dom';
import { Star, Calendar, ExternalLink, Award, Users, ThumbsUp } from 'lucide-react';
import { Section, SectionHeader } from '../components/Section';
import { images, testimonials, practiceInfo } from '../data/constants';

export function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-64 sm:h-80 lg:h-96 flex items-center overflow-hidden">
        <img src={images.happyDog} alt="Happy pets" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/80 to-primary-900/50" />
        <div className="relative container-app px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-display">Testimonials</h1>
          <p className="text-lg text-primary-100 mt-3 max-w-lg">Real stories from the families who trust us with their pets.</p>
        </div>
      </section>

      {/* Stats */}
      <Section>
        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          {[
            { icon: Star, value: '4.9/5', label: 'Average Rating' },
            { icon: Users, value: '4,800+', label: 'Happy Patients' },
            { icon: ThumbsUp, value: '98%', label: 'Would Recommend' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <stat.icon className="w-6 h-6 mx-auto mb-2 text-secondary-400" />
              <div className="text-2xl sm:text-3xl font-bold text-primary-800 font-display">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* All Testimonials */}
      <Section className="bg-gray-50">
        <SectionHeader title="What Our Clients Say" subtitle="Every review represents a family who trusts us with their beloved pet." />
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map(t => (
            <div key={t.id} className="card p-6 sm:p-8">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary-400 text-secondary-400" />
                ))}
              </div>
              <p className="text-gray-700 italic leading-relaxed text-base mb-5">"{t.text}"</p>
              <div className="border-t border-gray-100 pt-4">
                <span className="font-semibold text-gray-900">{t.name}</span>
                <span className="block text-sm text-gray-500 mt-0.5">{t.pet}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* More Reviews */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { name: 'Patricia Holloway', pet: 'Max (Beagle Mix)', text: 'Dr. Rowan took the time to explain every option for Max\'s treatment. I never felt pressured into anything. The follow-up call the next day was such a nice touch — you don\'t get that at the big chains.' },
              { name: 'Kevin & Lori Stanton', pet: 'Mochi & Biscuit (Siamese Cats)', text: 'As cat owners, we appreciate the separate feline wing more than words can express. Our cats are so much calmer here than at our previous vet. Sarah is amazing with nervous kitties.' },
              { name: 'Deandre Mitchell', pet: 'Koda (German Shepherd)', text: 'Koda needed emergency surgery for a GDV and the team moved so fast. They kept us informed every step of the way and the aftercare instructions were thorough. Koda is fully recovered and back to his playful self.' },
              { name: 'Elaine Xu', pet: 'Whiskers (Maine Coon, age 16)', text: 'At 16, Whiskers has complex health needs. The senior wellness program has been incredible — catching his kidney changes early made all the difference. I feel like the team genuinely loves him.' },
            ].map((t, i) => (
              <div key={i} className="card p-6">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-secondary-400 text-secondary-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic leading-relaxed text-sm mb-4">"{t.text}"</p>
                <div>
                  <span className="font-semibold text-gray-900 text-sm">{t.name}</span>
                  <span className="block text-xs text-gray-500">{t.pet}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Leave a Review */}
      <Section className="bg-secondary-50">
        <div className="max-w-2xl mx-auto text-center">
          <Award className="w-10 h-10 text-secondary-500 mx-auto mb-4" />
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Share Your Experience</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Your feedback helps other pet parents find compassionate care. If you've had a positive experience at Bramble Creek, we'd be grateful for your review.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={practiceInfo.social.google} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white rounded-xl border border-gray-200 font-medium text-gray-700 hover:border-primary-300 hover:shadow-sm transition-all">
              <ExternalLink className="w-4 h-4" />
              Review on Google
            </a>
            <a href={practiceInfo.social.facebook} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white rounded-xl border border-gray-200 font-medium text-gray-700 hover:border-primary-300 hover:shadow-sm transition-all">
              <ExternalLink className="w-4 h-4" />
              Review on Facebook
            </a>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-primary-700 text-center">
        <h2 className="text-3xl font-bold text-white mb-4 font-display">Join Our Growing Family</h2>
        <p className="text-primary-100 mb-8 max-w-md mx-auto">Experience the care that has earned us the trust of thousands of families across Licking County.</p>
        <Link to="/contact" className="btn-warm text-base px-8 py-4">
          <Calendar className="w-5 h-5 mr-2" />
          Book Your First Visit
        </Link>
      </Section>
    </>
  );
}
