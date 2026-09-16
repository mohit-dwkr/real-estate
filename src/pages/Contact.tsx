import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { properties } from '@/data/properties';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', interest: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', phone: '', email: '', interest: '', message: '' });
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Our advisors are ready to help you buy, sell, or explore. Reach out to begin a conversation."
        image="https://images.pexels.com/photos/8143671/pexels-photo-8143671.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        breadcrumb="Home / Contact"
      />

      <section className="section-pad bg-cream">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <Reveal variant="left">
              <p className="text-gold text-sm font-sans uppercase tracking-widest mb-4">Get In Touch</p>
              <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6 leading-tight">
                Let's Begin a Conversation
              </h2>
              <p className="text-stone-custom text-lg mb-10 leading-relaxed">
                Whether you are buying, selling, or simply exploring the market, we welcome the opportunity to speak with you. Every inquiry is treated with the utmost discretion.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-charcoal mb-1">Visit Our Office</h3>
                    <p className="text-stone-custom text-sm">150 Madison Avenue, New York, NY 10016</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-charcoal mb-1">Call Us</h3>
                    <p className="text-stone-custom text-sm">+1 (212) 555-0100</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-charcoal mb-1">Email Us</h3>
                    <p className="text-stone-custom text-sm">info@meridian.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-charcoal mb-1">Working Hours</h3>
                    <p className="text-stone-custom text-sm">Monday – Friday: 9:00 AM – 7:00 PM</p>
                    <p className="text-stone-custom text-sm">Saturday – Sunday: 10:00 AM – 5:00 PM</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="#"
                className="inline-flex items-center gap-3 mt-8 px-6 py-3 bg-charcoal text-white text-sm uppercase tracking-wider hover:bg-gold transition-all duration-300"
              >
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>

              {/* Map placeholder */}
              <div className="mt-10 relative h-[300px] bg-gray-100 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={48} className="text-gold mx-auto mb-4" />
                    <p className="font-serif text-xl text-charcoal">150 Madison Avenue</p>
                    <p className="text-stone-custom text-sm mt-1">New York, NY 10016</p>
                  </div>
                </div>
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: 'linear-gradient(0deg, #ccc 1px, transparent 1px), linear-gradient(90deg, #ccc 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }}
                />
              </div>
            </Reveal>

            {/* Contact form */}
            <Reveal variant="right">
              <div className="bg-white p-8 md:p-10 card-shadow">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center h-full text-center py-20">
                    <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                      <CheckCircle size={40} className="text-gold" />
                    </div>
                    <h3 className="font-serif text-3xl text-charcoal mb-4">Thank You</h3>
                    <p className="text-stone-custom mb-8 max-w-md">
                      Your enquiry has been received. One of our advisors will contact you within 24 hours to discuss your needs.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-outline-dark"
                    >
                      <span>Send Another Enquiry</span>
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="font-serif text-3xl text-charcoal mb-2">Make an Enquiry</h3>
                    <p className="text-stone-custom text-sm mb-8">All fields marked with * are required.</p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-stone-custom mb-1">Name *</label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="input-luxury"
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs uppercase tracking-wider text-stone-custom mb-1">Phone *</label>
                          <input
                            type="tel"
                            required
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            className="input-luxury"
                            placeholder="Your phone number"
                          />
                        </div>
                        <div>
                          <label className="block text-xs uppercase tracking-wider text-stone-custom mb-1">Email *</label>
                          <input
                            type="email"
                            required
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="input-luxury"
                            placeholder="Your email address"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-stone-custom mb-1">Property Interest</label>
                        <select
                          value={form.interest}
                          onChange={(e) => setForm({ ...form, interest: e.target.value })}
                          className="input-luxury bg-white"
                        >
                          <option value="">Select a property (optional)</option>
                          {properties.map((p) => (
                            <option key={p.id} value={p.title}>{p.title} — {p.location}</option>
                          ))}
                          <option value="general">General enquiry</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-stone-custom mb-1">Message *</label>
                        <textarea
                          required
                          rows={5}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="input-luxury resize-none"
                          placeholder="Tell us about your needs..."
                        />
                      </div>
                      <button type="submit" className="btn-gold w-full">
                        <span>Send Enquiry</span>
                        <Send size={16} className="relative z-10" />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
