import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send, Sparkles, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'E-Commerce Website',
    budgetOrTimeline: 'Flexible / Standard',
    message: '',
  });

  const email = 'polleyarnab1@gmail.com';
  const phone = '+91 9051024827';
  const location = 'Kolkata, W.B., India';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate mailto link with pre-filled subject and body
    const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} - from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Arnab,\n\nMy name is ${formData.name} (${formData.email}).\n\nProject Type: ${formData.projectType}\nTimeline/Budget: ${formData.budgetOrTimeline}\n\nProject Details:\n${formData.message}\n\nLooking forward to hearing from you!`
    );
    window.open(`mailto:${email}?subject=${subject}&body=${body}`, '_self');
    setFormSubmitted(true);
  };

  return (
    <section
      id="contact"
      aria-label="Contact & Project Discussion"
      className="py-24 sm:py-32 bg-slate-900/60 relative border-t border-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact & Proposition */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Direct Discussion</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Have a Project in Mind?
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 font-normal">
              Whether you need a professional business website, an e-commerce experience, a custom web application or an integration-focused solution, let’s discuss what you want to build.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-4 mb-8">
              {/* Email */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Email Directly
                    </span>
                    <a
                      href={`mailto:${email}`}
                      className="text-sm sm:text-base font-bold text-white hover:text-cyan-400 transition-colors"
                    >
                      {email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Phone / Direct Call
                    </span>
                    <a
                      href={`tel:${phone.replace(/\s+/g, '')}`}
                      className="text-sm sm:text-base font-bold text-white hover:text-cyan-400 transition-colors font-mono"
                    >
                      {phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  aria-label="Copy phone number"
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 shadow-lg">
                <div className="w-11 h-11 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    Location
                  </span>
                  <span className="text-sm sm:text-base font-bold text-white">
                    {location}
                  </span>
                  <span className="text-xs text-slate-400 block mt-0.5">
                    Available for clients worldwide (Remote / Hybrid)
                  </span>
                </div>
              </div>
            </div>

            {/* Reassurance notes */}
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-400 flex items-start gap-3">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>
                Confidentiality guaranteed. Free initial technical assessment and scope consultation for prospective clients.
              </span>
            </div>
          </div>

          {/* Right Column: Project Discussion Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl relative">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                Let’s Discuss Your Project
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-8">
                Fill out the quick project brief below to start the conversation directly.
              </p>

              {formSubmitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-emerald-300 text-xs sm:text-sm flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Email client triggered! If your email app did not launch, please send directly to <strong>{email}</strong>.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe / Sarah Jenkins"
                      className="w-full px-4 py-2.5 text-sm bg-slate-950 border border-slate-800 rounded-xl text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@yourcompany.com"
                      className="w-full px-4 py-2.5 text-sm bg-slate-950 border border-slate-800 rounded-xl text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-2">
                      Project Category
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm bg-slate-950 border border-slate-800 rounded-xl text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors"
                    >
                      <option value="Shopify / E-Commerce Store">Shopify / E-Commerce Store</option>
                      <option value="Healthcare / Clinic Website">Healthcare / Clinic Website</option>
                      <option value="Law Firm / Professional Services">Law Firm / Professional Services</option>
                      <option value="Contractor / Home Services Website">Contractor / Home Services Website</option>
                      <option value="Custom Web Application (Laravel/PHP)">Custom Web Application (Laravel/PHP)</option>
                      <option value="API Integration / Automation">API Integration / Automation</option>
                      <option value="Website Redesign / Scaling">Website Redesign / Scaling</option>
                      <option value="Senior Developer Contract">Senior Developer Contract</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-2">
                      Target Timeline
                    </label>
                    <select
                      value={formData.budgetOrTimeline}
                      onChange={(e) => setFormData({ ...formData, budgetOrTimeline: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm bg-slate-950 border border-slate-800 rounded-xl text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors"
                    >
                      <option value="Immediate (1–2 weeks)">Immediate (1–2 weeks)</option>
                      <option value="Standard (3–6 weeks)">Standard (3–6 weeks)</option>
                      <option value="Upcoming Quarter">Upcoming Quarter</option>
                      <option value="Exploratory / Initial Estimate">Exploratory / Initial Estimate</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-2">
                    What would you like to build or solve? *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe what your business needs (e.g., custom Shopify store with Paystack payment gateway, doctor appointment booking site, or custom Laravel dashboard)..."
                    className="w-full px-4 py-3 text-sm bg-slate-950 border border-slate-800 rounded-xl text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-colors resize-y"
                  />
                </div>

                <button
                  type="submit"
                  id="submit-project-inquiry"
                  className="w-full py-3.5 px-6 rounded-xl text-sm font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-xl shadow-cyan-950/60 hover:shadow-cyan-500/30 flex items-center justify-center gap-2 transition-all cursor-pointer transform active:scale-[0.99]"
                >
                  <span>Let’s Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
