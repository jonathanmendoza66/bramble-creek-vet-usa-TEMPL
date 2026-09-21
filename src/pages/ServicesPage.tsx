import { Link } from 'react-router-dom';
import { Heart, Shield, Scissors, Sparkles, Search, Leaf, Clock, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Section, SectionHeader } from '../components/Section';
import { images, services } from '../data/constants';

const iconMap: Record<string, React.ElementType> = { Heart, Shield, Scissors, Sparkles, Search, Leaf, Clock };

export function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-64 sm:h-80 lg:h-96 flex items-center overflow-hidden">
        <img src={images.wellness} alt="Veterinary services" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/80 to-primary-900/50" />
        <div className="relative container-app px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-display">Our Services</h1>
          <p className="text-lg text-primary-100 mt-3 max-w-lg">Comprehensive veterinary care for every stage of your pet's life.</p>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="sticky top-14 lg:top-18 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="container-app px-4 sm:px-6 overflow-x-auto scrollbar-hide">
          <div className="flex gap-1 py-2 min-w-max">
            {Object.entries(services).map(([key, service]) => (
              <a
                key={key}
                href={`#${key}`}
                className="px-3 py-2 rounded-lg text-xs sm:text-sm font-medium text-gray-600 hover:text-primary-700 hover:bg-primary-50 transition-colors whitespace-nowrap"
              >
                {service.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service Sections */}
      {Object.entries(services).map(([key, service], index) => {
        const Icon = iconMap[service.icon] || Heart;
        const isEven = index % 2 === 0;
        return (
          <Section key={key} id={key} className={isEven ? '' : 'bg-gray-50'}>
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">{service.title}</h2>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">{service.description}</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 p-3 bg-white rounded-xl border border-gray-100">
                      <CheckCircle2 className="w-4 h-4 text-primary-500 shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                <ServiceDetail serviceKey={key} />
              </div>
            </div>
          </Section>
        );
      })}

      {/* Additional Services */}
      <Section>
        <SectionHeader title="Additional Services" subtitle="Everyday care and convenience services for your pet." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            'Nail Trimming', 'Ear Cleaning', 'Anal Gland Expression', 'Microchipping',
            'Health Certificates', 'Prescription Diets', 'In-House Pharmacy', 'Referral Coordination',
          ].map((item, i) => (
            <div key={i} className="p-4 bg-white rounded-xl border border-gray-100 text-center">
              <CheckCircle2 className="w-5 h-5 text-primary-500 mx-auto mb-2" />
              <span className="text-sm font-medium text-gray-800">{item}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-primary-700 text-center">
        <h2 className="text-3xl font-bold text-white mb-4 font-display">Questions About Our Services?</h2>
        <p className="text-primary-100 mb-8 max-w-md mx-auto">Our team is happy to discuss which services are right for your pet. Schedule a consultation today.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="btn-warm text-base px-8 py-4">
            <Calendar className="w-5 h-5 mr-2" />
            Book a Consultation
          </Link>
          <Link to="/new-clients" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/30 rounded-xl font-medium hover:bg-white/20 transition-colors">
            New Client Info
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </Section>
    </>
  );
}

function ServiceDetail({ serviceKey }: { serviceKey: string }) {
  const details: Record<string, { text: string; image: string }> = {
    wellness: {
      text: 'Our wellness exams are thorough head-to-tail assessments lasting 30-45 minutes. We evaluate body condition, dental health, heart and lung sounds, abdominal palpation, joint mobility, skin and coat quality, eyes, ears, and lymph nodes. We then create a personalized wellness plan tailored to your pet\'s age, breed, and lifestyle.',
      image: images.wellness,
    },
    vaccinations: {
      text: 'We don\'t believe in one-size-fits-all vaccination. Our doctors assess each pet\'s lifestyle risk factors — indoor vs. outdoor, boarding frequency, travel history, local disease prevalence — to determine exactly which vaccines are needed and when. This prevents over-vaccination while maintaining robust protection.',
      image: images.puppy,
    },
    surgery: {
      text: 'Our surgical suite features advanced multi-parameter monitoring, heated surgical tables, and dedicated recovery space. Every surgical patient receives individualized anesthesia protocols, continuous monitoring by our RVT, and post-operative pain management. We call you personally with updates during and after every procedure.',
      image: images.surgery,
    },
    dentistry: {
      text: 'Dental disease affects over 80% of pets by age three. Our complete dental suite includes digital dental radiography for full-mouth evaluation below the gumline, ultrasonic scaling, high-speed polishing, nerve blocks for pain-free extractions, and detailed oral charting. We\'ll send you home with photos and a dental care plan.',
      image: images.dental,
    },
    diagnostics: {
      text: 'When your pet is sick, speed matters. Our in-house laboratory delivers complete blood counts, chemistry panels, and urinalysis results in under 20 minutes. Combined with digital radiography and ultrasound, we can often diagnose and begin treatment in a single visit — no waiting days for outside lab results.',
      image: images.diagnostics,
    },
    dermatology: {
      text: 'Chronic itching, recurrent ear infections, and hair loss significantly impact your pet\'s quality of life. We offer comprehensive dermatological workups including skin scraping, cytology, fungal cultures, and allergy testing. Treatment plans may include immunotherapy, targeted medications, medicated baths, and dietary management.',
      image: images.happyDog,
    },
    seniorCare: {
      text: 'Pets age faster than we do, and early detection is key to managing age-related conditions. Our senior wellness program includes twice-yearly exams, comprehensive bloodwork, blood pressure monitoring, and quality-of-life assessments. We partner with you to keep your aging pet comfortable, mobile, and enjoying life.',
      image: images.seniorPet,
    },
    endOfLife: {
      text: 'Saying goodbye is the hardest part of pet ownership. We approach end-of-life care with profound respect for the bond you share. Our private comfort room provides a peaceful, unhurried space for families. We offer in-hospital euthanasia, cremation coordination, paw print keepsakes, and grief support resources.',
      image: images.happyCat,
    },
  };

  const detail = details[serviceKey] || details.wellness;

  return (
    <div>
      <img src={detail.image} alt="" className="rounded-2xl shadow-lg w-full h-48 sm:h-64 object-cover mb-5" />
      <p className="text-gray-600 text-sm leading-relaxed">{detail.text}</p>
    </div>
  );
}
