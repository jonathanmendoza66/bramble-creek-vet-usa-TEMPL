import { Link } from 'react-router-dom';
import { Calendar, CheckCircle2, Monitor, Wifi, ThermometerSun, Wind, Volume2, Eye } from 'lucide-react';
import { Section, SectionHeader } from '../components/Section';
import { images } from '../data/constants';

const rooms = [
  { name: 'Exam Rooms (5)', desc: 'Spacious, quiet exam rooms with non-slip tables, calming pheromone diffusers, and treat stations. Each room is temperature-controlled for comfort.' },
  { name: 'Feline Suite', desc: 'A dedicated cat-only wing with separate entrance, feline pheromone environment, elevated perches, and staff trained in cat-specific handling.' },
  { name: 'Surgical Suite', desc: 'State-of-the-art surgical theater with heated tables, multi-parameter monitoring, electrosurgery, and dedicated post-op recovery.' },
  { name: 'Dental Suite', desc: 'Full dental operatory with digital dental radiography, ultrasonic scaler, high-speed drill, and intraoral camera for client education.' },
  { name: 'In-House Laboratory', desc: 'Complete diagnostics lab with CBC, chemistry, urinalysis, cytology, and coagulation testing. Most results in under 20 minutes.' },
  { name: 'Digital Imaging', desc: 'Digital radiography with rapid image processing and ultrasound for non-invasive abdominal and cardiac imaging.' },
  { name: 'Pharmacy', desc: 'On-site pharmacy stocked with common medications, prescription diets, and preventive products for immediate dispensing.' },
  { name: 'Comfort Room', desc: 'Private, home-like space for end-of-life visits, furnished with soft seating, warm lighting, and a separate exit for privacy.' },
];

const equipment = [
  { name: 'Digital Radiography', desc: 'High-resolution imaging with instant results, reducing radiation exposure and wait times.' },
  { name: 'Abdominal Ultrasound', desc: 'Non-invasive imaging for evaluating organs, identifying masses, and guiding biopsies.' },
  { name: 'In-House Blood Analyzers', desc: 'IDEXX Catalyst and ProCyte for comprehensive panels returned in minutes.' },
  { name: 'Dental Digital X-Ray', desc: 'Full-mouth dental radiographs revealing disease hidden below the gumline.' },
  { name: 'Surgical Monitoring', desc: 'Multi-parameter anesthesia monitoring: ECG, SpO2, ETCO2, blood pressure, temperature.' },
  { name: 'Electrosurgery Unit', desc: 'Precision tissue cutting and cautery for faster, safer surgeries with less bleeding.' },
  { name: 'Therapeutic Laser', desc: 'Class IV laser for pain management, wound healing, and arthritis treatment.' },
  { name: 'Tonometry', desc: 'Intraocular pressure measurement for early glaucoma detection.' },
];

const fearFreeFeatures = [
  { icon: Volume2, title: 'Sound Control', desc: 'Sound-dampening materials and species-specific calming music in exam rooms.' },
  { icon: Wind, title: 'Pheromone Therapy', desc: 'Adaptil (dogs) and Feliway (cats) diffusers throughout the hospital.' },
  { icon: Eye, title: 'Visual Barriers', desc: 'Towel draping, visual blockers, and strategic room placement to reduce triggers.' },
  { icon: ThermometerSun, title: 'Climate Control', desc: 'Individual room temperature control for patient comfort during visits.' },
  { icon: Wifi, title: 'Low-Stress Handling', desc: 'All staff trained in minimal-restraint techniques and reading body language.' },
  { icon: Monitor, title: 'Pre-Visit Medication', desc: 'Anxiety-reducing medications available for highly stressed patients.' },
];

export function FacilityPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-64 sm:h-80 lg:h-96 flex items-center overflow-hidden">
        <img src={images.facilityLobby} alt="Bramble Creek facility" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/80 to-primary-900/50" />
        <div className="relative container-app px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-display">Our Facility</h1>
          <p className="text-lg text-primary-100 mt-3 max-w-lg">Modern hospital designed for comfort, equipped for excellence.</p>
        </div>
      </section>

      {/* Facility Overview */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-5">Designed Around Your Pet's Comfort</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our 4,200 square-foot hospital was thoughtfully designed with separate dog and cat zones, sound-dampening construction, and natural light throughout. Every detail — from the non-slip flooring to the calming color palette — was chosen to reduce stress and create a healing environment.
          </p>
        </div>
      </Section>

      {/* Room by Room */}
      <Section className="bg-gray-50">
        <SectionHeader title="Room by Room" subtitle="Every space is purpose-built for patient comfort and clinical excellence." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {rooms.map((room, i) => (
            <div key={i} className="card p-5">
              <h3 className="font-semibold text-gray-900 mb-2 text-sm">{room.name}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{room.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Fear Free Environment */}
      <Section>
        <SectionHeader title="Fear-Free Environment" subtitle="Every element of our hospital is designed to minimize stress and anxiety." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {fearFreeFeatures.map((feature, i) => (
            <div key={i} className="flex items-start gap-4 p-5 bg-accent-50 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-accent-100 flex items-center justify-center shrink-0">
                <feature.icon className="w-5 h-5 text-accent-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{feature.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Equipment & Technology */}
      <Section className="bg-gray-50">
        <SectionHeader title="Equipment & Technology" subtitle="Advanced diagnostics and treatment tools for fast, accurate care." />
        <div className="grid sm:grid-cols-2 gap-4">
          {equipment.map((eq, i) => (
            <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100">
              <CheckCircle2 className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">{eq.name}</h4>
                <p className="text-xs text-gray-600 mt-0.5">{eq.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Gallery */}
      <Section>
        <SectionHeader title="Hospital Gallery" subtitle="Take a virtual look inside our space." />
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {[images.facilityLobby, images.surgery, images.diagnostics, images.dental, images.wellness, images.facility].map((src, i) => (
            <div key={i} className="rounded-xl overflow-hidden aspect-[4/3]">
              <img src={src} alt="Hospital interior" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </Section>

      {/* Accessibility */}
      <Section className="bg-primary-50/50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Accessibility</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our facility is fully ADA-accessible with ground-level entrance, wide doorways, and accessible restrooms. We offer curbside service for clients with mobility challenges. Ample free parking is available directly in front of our entrance.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-primary-700 text-center">
        <h2 className="text-3xl font-bold text-white mb-4 font-display">Come See Us in Person</h2>
        <p className="text-primary-100 mb-8 max-w-md mx-auto">Experience our welcoming environment firsthand. We'd love to give you a tour during your pet's visit.</p>
        <Link to="/contact" className="btn-warm text-base px-8 py-4">
          <Calendar className="w-5 h-5 mr-2" />
          Schedule a Visit
        </Link>
      </Section>
    </>
  );
}
