import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertTriangle, Navigation } from 'lucide-react';
import { Section, SectionHeader } from '../components/Section';
import { images, practiceInfo } from '../data/constants';
import { useIsOpen } from '../hooks/useInView';

export function ContactPage() {
  const isOpen = useIsOpen();

  return (
    <>
      {/* Hero */}
      <section className="relative h-64 sm:h-80 lg:h-96 flex items-center overflow-hidden">
        <img src={images.contactHero} alt="Contact us" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/80 to-primary-900/50" />
        <div className="relative container-app px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-display">Contact Us</h1>
          <p className="text-lg text-primary-100 mt-3 max-w-lg">We'd love to hear from you. Reach out anytime.</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a href={`tel:${practiceInfo.phone}`} className="card p-5 text-center hover:shadow-md transition-shadow">
            <Phone className="w-6 h-6 text-primary-500 mx-auto mb-2" />
            <h3 className="font-semibold text-gray-900 text-sm">Phone</h3>
            <p className="text-primary-600 font-medium mt-1">{practiceInfo.phone}</p>
          </a>
          <a href={`mailto:${practiceInfo.email}`} className="card p-5 text-center hover:shadow-md transition-shadow">
            <Mail className="w-6 h-6 text-primary-500 mx-auto mb-2" />
            <h3 className="font-semibold text-gray-900 text-sm">Email</h3>
            <p className="text-primary-600 font-medium mt-1 text-xs">{practiceInfo.email}</p>
          </a>
          <div className="card p-5 text-center">
            <MapPin className="w-6 h-6 text-primary-500 mx-auto mb-2" />
            <h3 className="font-semibold text-gray-900 text-sm">Address</h3>
            <p className="text-gray-600 text-xs mt-1">{practiceInfo.address.full}</p>
          </div>
          <div className="card p-5 text-center">
            <Clock className="w-6 h-6 text-primary-500 mx-auto mb-2" />
            <h3 className="font-semibold text-gray-900 text-sm">Status</h3>
            <p className={`font-medium mt-1 text-sm ${isOpen ? 'text-green-600' : 'text-red-600'}`}>
              {isOpen ? 'Open Now' : 'Currently Closed'}
            </p>
          </div>
        </div>
      </Section>

      {/* Map + Form */}
      <Section className="bg-gray-50">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-5">Send Us a Message</h2>
            <ContactForm />
          </div>
          {/* Map */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-5">Find Us</h2>
            <div className="rounded-2xl overflow-hidden shadow-lg h-80 lg:h-full min-h-[300px]">
              <iframe
                title="Bramble Creek Veterinary Hospital Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48700.36!2d-82.54!3d40.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88388a0c0000000%3A0x0!2sGranville%2C+OH+43023!5e0!3m2!1sen!2sus!4v1"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Hours */}
      <Section>
        <SectionHeader title="Office Hours" />
        <div className="max-w-md mx-auto card p-6 sm:p-8">
          <div className="space-y-3">
            {practiceInfo.hours.map(h => (
              <div key={h.day} className="flex justify-between items-center py-1.5 border-b border-gray-100 last:border-0">
                <span className="text-gray-600">{h.day}</span>
                <span className="font-medium text-gray-900">{h.close ? `${h.open} – ${h.close}` : h.open}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Emergency Info */}
      <Section className="bg-red-50">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-red-900 mb-2">After-Hours Emergencies</h2>
              <p className="text-red-700 leading-relaxed mb-4">
                For life-threatening emergencies outside our regular hours, please contact one of these 24-hour emergency hospitals:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl border border-red-100">
                  <h4 className="font-semibold text-gray-900 text-sm">OSU Veterinary Medical Center</h4>
                  <a href="tel:6142923551" className="text-red-600 font-medium text-sm">(614) 292-3551</a>
                  <p className="text-xs text-gray-500 mt-1">Columbus, OH (45 min)</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-red-100">
                  <h4 className="font-semibold text-gray-900 text-sm">MedVet Columbus</h4>
                  <a href="tel:6148912323" className="text-red-600 font-medium text-sm">(614) 891-2323</a>
                  <p className="text-xs text-gray-500 mt-1">Worthington, OH (35 min)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Directions */}
      <Section>
        <SectionHeader title="Directions" subtitle="Easy to find on Newark-Granville Road." />
        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { from: 'From Newark', desc: 'Head west on OH-16/Newark-Granville Road for approximately 6 miles. We\'re on the right, just past the Denison University entrance.' },
            { from: 'From Columbus', desc: 'Take I-70 East to OH-37 North, then OH-16 East toward Granville. Turn right on Newark-Granville Road. We\'re 1 mile ahead on the left.' },
            { from: 'From Pataskala', desc: 'Take OH-16 East for approximately 15 miles. Continue through Granville and we\'re on the right side of Newark-Granville Road.' },
          ].map((dir, i) => (
            <div key={i} className="card p-5">
              <Navigation className="w-5 h-5 text-primary-500 mb-2" />
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{dir.from}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{dir.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-primary-700 text-center">
        <h2 className="text-3xl font-bold text-white mb-4 font-display">Prefer to Call?</h2>
        <p className="text-primary-100 mb-8 max-w-md mx-auto">Our team is available during business hours to answer questions and schedule appointments.</p>
        <a href={`tel:${practiceInfo.phone}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-700 rounded-xl font-semibold hover:bg-primary-50 transition-colors shadow-lg">
          <Phone className="w-5 h-5" />
          Call {practiceInfo.phone}
        </a>
      </Section>
    </>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="card p-8 text-center">
        <div className="w-14 h-14 mx-auto rounded-full bg-primary-100 flex items-center justify-center mb-4">
          <CheckCircle2 className="w-7 h-7 text-primary-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
        <p className="text-gray-600 text-sm">Thank you for reaching out. We'll respond within 1 business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="card p-6 sm:p-8">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
          <input type="text" required className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input type="tel" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow" />
        </div>
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
        <input type="email" required className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow" />
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
        <select required className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow bg-white">
          <option value="">Select a topic...</option>
          <option value="appointment">Schedule an Appointment</option>
          <option value="question">General Question</option>
          <option value="records">Medical Records Request</option>
          <option value="billing">Billing Inquiry</option>
          <option value="feedback">Feedback</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
        <textarea rows={4} required className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow resize-none" />
      </div>
      <button type="submit" className="btn-primary w-full mt-5">
        <Send className="w-4 h-4 mr-2" />
        Send Message
      </button>
    </form>
  );
}
