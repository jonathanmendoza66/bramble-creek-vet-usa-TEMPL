import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, CheckCircle2, CreditCard, Shield, Clock, Phone, FileText, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Section, SectionHeader } from '../components/Section';
import { images, practiceInfo } from '../data/constants';

const faqItems = [
  { q: 'How soon can I get my first appointment?', a: 'We typically schedule new patient appointments within 5-7 business days of your call. If your pet has an urgent concern, we offer same-day sick appointments when available.' },
  { q: 'Do I need to bring my pet\'s medical records?', a: 'Yes! Please bring or have your previous veterinarian fax any existing records, vaccine history, and current medications. We can also request records on your behalf with a signed release.' },
  { q: 'How long is the first appointment?', a: 'New patient appointments are 45-60 minutes to allow thorough introductions, a complete physical exam, and time for all your questions. No rushing!' },
  { q: 'Do you see cats and dogs only?', a: 'Our primary focus is dogs and cats. Dr. Marlowe has experience with some exotic species — please call to discuss your specific pet.' },
  { q: 'What if my pet is very anxious at the vet?', a: 'We offer pre-visit anxiety medication that can be given at home before the appointment. Call us 3-5 days before your visit to discuss options.' },
  { q: 'Is parking available?', a: 'Yes! We have a large, free parking lot directly in front of our entrance with ground-level access.' },
  { q: 'Do you offer payment plans?', a: 'While we don\'t offer in-house payment plans, we accept CareCredit and Scratchpay, both of which offer interest-free options for qualifying applicants.' },
  { q: 'Can I stay with my pet during procedures?', a: 'You\'re welcome to stay during examinations. For safety during procedures requiring sedation or surgery, our team will keep you informed with regular updates.' },
];

export function NewClientsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-64 sm:h-80 lg:h-96 flex items-center overflow-hidden">
        <img src={images.puppy} alt="Welcome new clients" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/80 to-primary-900/50" />
        <div className="relative container-app px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-display">New Clients</h1>
          <p className="text-lg text-primary-100 mt-3 max-w-lg">Everything you need to know before your first visit.</p>
        </div>
      </section>

      {/* What to Expect */}
      <Section>
        <SectionHeader title="What to Expect" subtitle="Your first visit, step by step." />
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {[
              { step: '1', title: 'Schedule Your Visit', desc: 'Call us at (740) 587-2255 or submit the form below. We\'ll find a time that works within 5-7 days.' },
              { step: '2', title: 'Gather Records', desc: 'Collect any previous medical records, vaccine history, and a list of current medications or supplements.' },
              { step: '3', title: 'Arrive Early', desc: 'Plan to arrive 10-15 minutes before your appointment to complete new client paperwork and settle in.' },
              { step: '4', title: 'Meet Your Veterinarian', desc: 'Enjoy a thorough 45-60 minute appointment including a full physical exam, health history review, and personalized care plan.' },
              { step: '5', title: 'Go Home with a Plan', desc: 'Leave with a clear understanding of your pet\'s health status, any recommended next steps, and our direct phone line for questions.' },
            ].map(item => (
              <div key={item.step} className="flex gap-4 sm:gap-6">
                <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center text-lg font-bold shrink-0">
                  {item.step}
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* What to Bring */}
      <Section className="bg-gray-50">
        <SectionHeader title="What to Bring" subtitle="Be prepared for the best possible first visit." />
        <div className="max-w-2xl mx-auto">
          <div className="card p-6 sm:p-8">
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Previous vaccination records',
                'Medical history & lab results',
                'Current medication list',
                'Any dietary information',
                'Pet insurance card (if applicable)',
                'List of questions or concerns',
                'Your pet\'s favorite treats',
                'A secure leash or carrier',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0" />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* New Client Form */}
      <Section>
        <SectionHeader title="New Client Registration" subtitle="Get started by sharing a few details about you and your pet." />
        <NewClientForm />
      </Section>

      {/* Payment */}
      <Section className="bg-white" id="payment">
        <SectionHeader title="Payment Options" subtitle="We believe finances should never delay your pet's care." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {practiceInfo.paymentMethods.map((method, i) => (
            <div key={i} className="p-4 bg-gray-50 rounded-xl text-center">
              <CreditCard className="w-5 h-5 text-primary-500 mx-auto mb-2" />
              <span className="text-sm font-medium text-gray-800">{method}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 grid sm:grid-cols-2 gap-5">
          <div className="card p-6 border-2 border-secondary-100">
            <h3 className="font-semibold text-gray-900 mb-2">CareCredit</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Healthcare financing with promotional interest-free periods from 6-24 months for qualifying purchases. Apply online in minutes.
            </p>
          </div>
          <div className="card p-6 border-2 border-primary-100">
            <h3 className="font-semibold text-gray-900 mb-2">Scratchpay</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Simple, friendly payment plans with transparent terms. No hard credit check required to see your options.
            </p>
          </div>
        </div>
      </Section>

      {/* Insurance */}
      <Section className="bg-gray-50" id="insurance">
        <SectionHeader title="Pet Insurance" subtitle="We work with all major providers to maximize your benefits." />
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-gray-600 mb-6">
            We can provide detailed invoices and medical records for any insurance claim. While we don't file claims directly, our team is happy to help you understand your coverage.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              'Trupanion', 'Nationwide', 'Healthy Paws', 'Embrace',
              'Petplan', 'ASPCA', 'Figo', 'Lemonade',
              'Pumpkin', 'Spot', 'MetLife', 'Many more...',
            ].map((provider, i) => (
              <div key={i} className="p-3 bg-white rounded-xl border border-gray-100 text-center">
                <Shield className="w-4 h-4 text-primary-500 mx-auto mb-1" />
                <span className="text-xs font-medium text-gray-700">{provider}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeader title="Frequently Asked Questions" subtitle="Answers to the most common questions from new clients." />
        <div className="max-w-3xl mx-auto">
          <FAQ items={faqItems} />
        </div>
      </Section>

      {/* Service Area */}
      <Section className="bg-primary-50/50">
        <SectionHeader title="Service Area" subtitle="We welcome patients from across Licking County and surrounding communities." />
        <div className="flex flex-wrap justify-center gap-3">
          {practiceInfo.serviceArea.map(area => (
            <span key={area} className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200 shadow-sm">
              {area}
            </span>
          ))}
        </div>
      </Section>

      {/* Hours */}
      <Section>
        <div className="max-w-md mx-auto">
          <div className="card p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-5">
              <Clock className="w-6 h-6 text-primary-500" />
              <h3 className="font-semibold text-gray-900 text-lg font-display">Office Hours</h3>
            </div>
            <div className="space-y-2.5">
              {practiceInfo.hours.map(h => (
                <div key={h.day} className="flex justify-between text-sm">
                  <span className="text-gray-500">{h.day}</span>
                  <span className="font-medium text-gray-900">{h.close ? `${h.open} – ${h.close}` : h.open}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-primary-700 text-center">
        <h2 className="text-3xl font-bold text-white mb-4 font-display">Ready to Get Started?</h2>
        <p className="text-primary-100 mb-8 max-w-md mx-auto">We can't wait to meet you and your pet. Call or book online today.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`tel:${practiceInfo.phone}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-700 rounded-xl font-semibold hover:bg-primary-50 transition-colors">
            <Phone className="w-5 h-5" />
            Call {practiceInfo.phone}
          </a>
          <Link to="/contact" className="btn-warm text-base px-8 py-4">
            <Calendar className="w-5 h-5 mr-2" />
            Book Online
          </Link>
        </div>
      </Section>
    </>
  );
}

function NewClientForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto text-center py-10">
        <div className="w-16 h-16 mx-auto rounded-full bg-primary-100 flex items-center justify-center mb-4">
          <CheckCircle2 className="w-8 h-8 text-primary-600" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-600">We've received your information and will be in touch within 1-2 business days to schedule your first appointment.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
      className="max-w-2xl mx-auto card p-6 sm:p-8"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
          <input type="text" required className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
          <input type="tel" required className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
          <input type="email" required className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Pet's Name *</label>
          <input type="text" required className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Pet Type *</label>
          <select required className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow bg-white">
            <option value="">Select...</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Pet's Age</label>
          <input type="text" placeholder="e.g., 3 years" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow" />
        </div>
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Any concerns or questions?</label>
        <textarea rows={3} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow resize-none" />
      </div>
      <button type="submit" className="btn-primary w-full mt-5">
        <FileText className="w-4 h-4 mr-2" />
        Submit Registration
      </button>
    </form>
  );
}

function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="card overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between p-4 sm:p-5 text-left"
          >
            <span className="font-medium text-gray-900 text-sm sm:text-base pr-4">{item.q}</span>
            {openIndex === i ? (
              <ChevronUp className="w-5 h-5 text-gray-400 shrink-0" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
            )}
          </button>
          {openIndex === i && (
            <div className="px-4 sm:px-5 pb-4 sm:pb-5">
              <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
