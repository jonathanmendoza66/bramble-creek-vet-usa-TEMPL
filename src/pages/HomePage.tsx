import { Link } from 'react-router-dom';
import {
  Phone, Calendar, ArrowRight, Star, Shield, Heart, Clock,
  Sparkles, MapPin, CreditCard, AlertTriangle,
  Award, PawPrint, CheckCircle2, ChevronRight
} from 'lucide-react';
import { Section, SectionHeader } from '../components/Section';
import { practiceInfo, images, services, testimonials, team } from '../data/constants';
import { useIsOpen } from '../hooks/useInView';

const serviceImages: Record<string, string> = {
  wellness: images.wellness,
  vaccinations: images.puppy,
  surgery: images.surgery,
  dentistry: images.dental,
  diagnostics: images.diagnostics,
  dermatology: images.happyDog,
  seniorCare: images.seniorPet,
  endOfLife: images.happyCat,
};

export function HomePage() {
  const isOpen = useIsOpen();

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={images.hero}
            alt="Bramble Creek Veterinary Hospital"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950/80 via-primary-900/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-950/40 to-transparent" />
        </div>
        <div className="relative container-app px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 mb-6">
              <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`} />
              <span className="text-sm text-white/90">{isOpen ? 'Open Now' : 'Currently Closed'} &middot; Granville, Ohio</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 font-display leading-tight">
              Healthy Pets.<br />
              <span className="text-secondary-300">Trusted Care.</span><br />
              Hometown Compassion.
            </h1>
            <p className="text-lg sm:text-xl text-white/85 mb-8 leading-relaxed max-w-lg">
              Independent, relationship-centered veterinary medicine for dogs and cats in Licking County since 2012.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="btn-warm text-base px-8 py-4">
                <Calendar className="w-5 h-5 mr-2" />
                Book an Appointment
              </Link>
              <Link to="/services" className="btn-secondary !bg-white/10 !text-white !border-white/30 hover:!bg-white/20 text-base px-8 py-4">
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar / Stats */}
      <section className="bg-white border-b border-gray-100">
        <div className="container-app px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { value: practiceInfo.stats.patients, label: 'Active Patients', icon: PawPrint },
              { value: practiceInfo.stats.satisfaction, label: 'Client Satisfaction', icon: Star },
              { value: practiceInfo.stats.years, label: 'Years of Service', icon: Award },
              { value: practiceInfo.stats.sameDayVisits, label: 'Available', icon: Clock },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <stat.icon className="w-5 h-5 mx-auto mb-1.5 text-primary-500" />
                <div className="text-2xl sm:text-3xl font-bold text-primary-800 font-display">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-500 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome / About Preview */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">Welcome to Bramble Creek</span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mt-2 mb-5">
              Where Every Pet Is Family
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              At Bramble Creek Veterinary Hospital, we believe in the power of the human-animal bond. Founded by Dr. Cressida Rowan in 2012, our independent practice provides personalized, compassionate veterinary care that corporate chains simply cannot match.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              From wellness exams and vaccinations to complex surgeries and end-of-life care, we walk alongside you and your pet through every stage of life. Our team knows your pet by name — not by chart number.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors group">
              Learn More About Our Practice
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="relative">
            <img src={images.dogCat} alt="Happy pets at Bramble Creek" className="rounded-2xl shadow-xl w-full h-80 lg:h-96 object-cover" />
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <span className="block text-sm font-semibold text-gray-900">Fear-Free Certified</span>
                <span className="text-xs text-gray-500">Low-stress handling techniques</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Services Overview Grid */}
      <Section className="bg-gray-50">
        <SectionHeader
          title="Comprehensive Care for Every Stage"
          subtitle="From their first puppy visit to their golden years, we provide a full spectrum of veterinary services."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {Object.entries(services).map(([key, service]) => (
            <Link
              key={key}
              to={`/services#${key}`}
              className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={serviceImages[key] || images.wellness}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-gray-900 mb-1.5 group-hover:text-primary-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{service.description}</p>
                <span className="inline-flex items-center gap-1.5 text-xs text-primary-600 font-semibold mt-3 group-hover:gap-2.5 transition-all">
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services" className="btn-primary">
            View All Services
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </Section>

      {/* Fear Free Section */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img src={images.happyCat} alt="Calm cat in fear-free environment" className="rounded-2xl shadow-xl w-full h-72 lg:h-96 object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-sm font-semibold text-accent-600 uppercase tracking-wider">Fear-Free Practice</span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mt-2 mb-5">
              Calm Visits, Happy Pets
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We understand that vet visits can be stressful. That's why we've designed our entire practice around reducing anxiety for both pets and their people.
            </p>
            <div className="space-y-3">
              {[
                'Separate cat and dog waiting areas',
                'Dedicated quiet feline exam room',
                'Calming pheromone diffusers throughout',
                'Non-slip exam table surfaces',
                'Treat-based positive reinforcement',
                'Unhurried appointment scheduling',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <Link to="/facility" className="inline-flex items-center gap-2 text-accent-600 font-semibold hover:text-accent-700 mt-6 transition-colors group">
              Tour Our Facility
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Meet the Team Preview */}
      <Section className="bg-primary-50/50">
        <SectionHeader
          title="Meet Your Care Team"
          subtitle="Experienced, compassionate professionals who treat every pet like their own."
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {team.slice(0, 4).map(member => (
            <Link key={member.id} to="/team" className="group text-center">
              <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden ring-4 ring-white shadow-md mb-3 group-hover:ring-primary-200 transition-all">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{member.name}</h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-0.5">{member.title.split(',')[0]}</p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/team" className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors group">
            Meet the Full Team
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Section>

      {/* Testimonials Carousel */}
      <Section>
        <SectionHeader
          title="What Our Clients Say"
          subtitle="Real stories from the families we serve every day."
        />
        <div className="grid sm:grid-cols-2 gap-5">
          {testimonials.slice(0, 4).map(t => (
            <div key={t.id} className="card p-6 sm:p-8">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary-400 text-secondary-400" />
                ))}
              </div>
              <p className="text-gray-700 italic leading-relaxed mb-4">"{t.text}"</p>
              <div>
                <span className="font-semibold text-gray-900 text-sm">{t.name}</span>
                <span className="block text-xs text-gray-500">{t.pet}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/testimonials" className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors group">
            Read More Reviews
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Section>

      {/* New Patient Welcome */}
      <Section className="bg-secondary-50">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-sm font-semibold text-secondary-600 uppercase tracking-wider">New Patients Welcome</span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mt-2 mb-5">
              Your First Visit Made Easy
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Joining the Bramble Creek family is simple. We accept new patients year-round and strive to schedule first appointments within one week of your call.
            </p>
            <div className="space-y-4">
              {[
                { step: '1', text: 'Call or submit our online form' },
                { step: '2', text: 'Gather your pet\'s medical records' },
                { step: '3', text: 'Arrive 10 minutes early for paperwork' },
                { step: '4', text: 'Meet your veterinarian and care team' },
              ].map(item => (
                <div key={item.step} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-secondary-500 text-white flex items-center justify-center text-sm font-bold shrink-0">
                    {item.step}
                  </div>
                  <span className="text-gray-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
            <Link to="/new-clients" className="inline-flex items-center gap-2 text-secondary-600 font-semibold hover:text-secondary-700 mt-6 transition-colors group">
              New Client Information
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div>
            <img src={images.puppy} alt="Happy puppy at first vet visit" className="rounded-2xl shadow-xl w-full h-72 lg:h-80 object-cover" />
          </div>
        </div>
      </Section>

      {/* Facility Showcase */}
      <Section>
        <SectionHeader
          title="A Modern, Welcoming Hospital"
          subtitle="Designed for comfort, equipped for excellence."
        />
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {[
            { src: images.facilityLobby, label: 'Welcoming Lobby' },
            { src: images.surgery, label: 'Surgical Suite' },
            { src: images.diagnostics, label: 'Diagnostic Lab' },
            { src: images.wellness, label: 'Exam Rooms' },
            { src: images.dental, label: 'Dental Suite' },
            { src: images.facility, label: 'Hospital Exterior' },
          ].map((img, i) => (
            <div key={i} className="relative rounded-xl overflow-hidden group aspect-[4/3]">
              <img src={img.src} alt={img.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <span className="absolute bottom-3 left-3 text-white text-sm font-medium">{img.label}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/facility" className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors group">
            Explore Our Facility
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Section>

      {/* Community Section */}
      <Section className="bg-sage-50">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <img src={images.community} alt="Community pet event" className="rounded-2xl shadow-xl w-full h-72 lg:h-80 object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-sm font-semibold text-sage-600 uppercase tracking-wider">Community</span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mt-2 mb-5">
              Part of the Granville Family
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We're proud to be more than a veterinary hospital — we're an active part of this community. From sponsoring local rescue events to participating in school education programs, we believe in giving back.
            </p>
            <ul className="space-y-2 text-gray-700">
              {[
                'Annual Paws in the Park adoption event',
                'Licking County Humane Society partnership',
                'School visits and career day presentations',
                'Local pet food bank donations',
                'Senior pet adoption program sponsor',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Heart className="w-4 h-4 text-sage-500 mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/about#community" className="inline-flex items-center gap-2 text-sage-700 font-semibold hover:text-sage-800 mt-6 transition-colors group">
              See Our Community Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Service Area */}
      <Section>
        <SectionHeader
          title="Serving Licking County & Beyond"
          subtitle="Conveniently located on Newark-Granville Road, we welcome patients from across the region."
        />
        <div className="flex flex-wrap justify-center gap-3">
          {practiceInfo.serviceArea.map(area => (
            <span key={area} className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200 shadow-sm">
              <MapPin className="w-3.5 h-3.5 inline mr-1.5 text-primary-500" />
              {area}
            </span>
          ))}
        </div>
      </Section>

      {/* Pet Insurance & Payment */}
      <Section className="bg-white">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card p-6 sm:p-8 border-2 border-primary-100">
            <Shield className="w-8 h-8 text-primary-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Pet Insurance Friendly</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              We work with all major pet insurance providers and can help you file claims. Pet insurance can save thousands on unexpected emergencies and chronic conditions.
            </p>
            <Link to="/new-clients#insurance" className="inline-flex items-center gap-1 text-primary-600 font-medium text-sm group">
              Insurance Details <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
          <div className="card p-6 sm:p-8 border-2 border-secondary-100">
            <CreditCard className="w-8 h-8 text-secondary-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Payment Options</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              We accept all major credit cards, CareCredit, and Scratchpay for affordable monthly payment plans. Your pet's care should never be delayed by finances.
            </p>
            <Link to="/new-clients#payment" className="inline-flex items-center gap-1 text-secondary-600 font-medium text-sm group">
              Payment Options <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Emergency Info Banner */}
      <section className="bg-red-50 border-y border-red-100">
        <div className="container-app px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-5 h-5 text-red-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-red-900">Urgent or After-Hours Emergency?</h3>
              <p className="text-sm text-red-700 mt-0.5">
                For life-threatening emergencies outside our hours, contact OSU Veterinary Medical Center at (614) 292-3551 or MedVet Columbus at (614) 891-2323.
              </p>
            </div>
            <a href="tel:6142923551" className="shrink-0 inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors">
              <Phone className="w-4 h-4" />
              Emergency Line
            </a>
          </div>
        </div>
      </section>

      {/* Resources Teaser */}
      <Section>
        <SectionHeader
          title="Pet Health Resources"
          subtitle="Helping you make informed decisions about your pet's health and wellbeing."
        />
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            { title: 'Heartworm Prevention', desc: 'Why year-round prevention is essential in Ohio and what options are available for your pet.', icon: Shield },
            { title: 'Dental Health Tips', desc: 'Signs of dental disease and simple at-home care routines to keep teeth healthy between cleanings.', icon: Sparkles },
            { title: 'Senior Pet Wellness', desc: 'What to watch for as your pet ages and how twice-yearly exams can catch problems early.', icon: Clock },
          ].map((article, i) => (
            <div key={i} className="card p-5 sm:p-6">
              <article.icon className="w-8 h-8 text-primary-500 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">{article.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{article.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/resources" className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors group">
            View All Resources
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Section>

      {/* Office Hours Widget */}
      <Section className="bg-primary-50/50">
        <div className="max-w-md mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className={`w-3 h-3 rounded-full ${isOpen ? 'bg-green-500 animate-pulse' : 'bg-red-400'}`} />
            <span className={`font-semibold ${isOpen ? 'text-green-700' : 'text-red-600'}`}>
              {isOpen ? 'We\'re Open Right Now' : 'We\'re Currently Closed'}
            </span>
          </div>
          <div className="card p-6">
            <Clock className="w-6 h-6 mx-auto text-primary-500 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-3 font-display">Office Hours</h3>
            <div className="space-y-2">
              {practiceInfo.hours.map(h => (
                <div key={h.day} className="flex justify-between text-sm">
                  <span className="text-gray-500">{h.day}</span>
                  <span className="font-medium text-gray-900">
                    {h.close ? `${h.open} – ${h.close}` : h.open}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-700 to-primary-900" />
        <div className="absolute inset-0 opacity-10">
          <img src={images.happyDog} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative container-app px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-display">
            Ready to Join the Bramble Creek Family?
          </h2>
          <p className="text-lg text-primary-100 mb-8 max-w-xl mx-auto">
            We're accepting new patients and would love to meet you and your pet. Schedule your first visit today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${practiceInfo.phone}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-700 rounded-xl font-semibold hover:bg-primary-50 transition-colors shadow-lg">
              <Phone className="w-5 h-5" />
              Call {practiceInfo.phone}
            </a>
            <Link to="/contact" className="btn-warm text-base px-8 py-4">
              <Calendar className="w-5 h-5 mr-2" />
              Book Online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
