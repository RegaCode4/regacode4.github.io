import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, RefreshCw, AlertCircle, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submittedMessages, setSubmittedMessages] = useState<ContactFormData[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate sending progress with full integrity
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setSubmittedMessages(prev => [formData, ...prev]);
      // Reset form variables
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1800);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Informative Side Card */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium text-xs tracking-wider uppercase rounded-full mb-4">
                <Mail className="w-3.5 h-3.5" /> Hubungi Saya
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-none mb-4">
                Mari Diskusikan Proyek Anda
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Apakah Anda membutuhkan desainer arsitektur database, optimasi render website NodeJS, atau meluncurkan produk SaaS baru? Kirimkan pesan Anda dan mari berkolaborasi!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/30 border border-slate-200/40 dark:border-slate-800/45">
                <div className="p-3 bg-emerald-500/10 text-emerald-500 rounded-full">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-550 dark:text-slate-450 font-bold uppercase tracking-wider">Email Utama</div>
                  <a href="mailto:regacode4@gmail.com" className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-emerald-500 transition">
                    regacode4@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/30 border border-slate-200/40 dark:border-slate-800/45">
                <div className="p-3 bg-emerald-500/10 text-emerald-500 rounded-full">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-550 dark:text-slate-450 font-bold uppercase tracking-wider">Kontak WhatsApp</div>
                  <a href="https://wa.me/628000000000" className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-emerald-500 transition">
                    +62 822-xxxx-xxxx
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/30 border border-slate-200/40 dark:border-slate-800/45">
                <div className="p-3 bg-emerald-500/10 text-emerald-500 rounded-full">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-550 dark:text-slate-450 font-bold uppercase tracking-wider">Domisili</div>
                  <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    Padang, Sumatera Barat, Indonesia
                  </div>
                </div>
              </div>
            </div>

            {/* Quick stats panel */}
            <div className="grid grid-cols-2 gap-4 border-t border-slate-255 dark:border-slate-855 pt-6">
              <div>
                <div className="text-2xl md:text-3xl font-display font-extrabold text-slate-900 dark:text-white">99%</div>
                <div className="text-xs text-slate-500 mt-1">Kepuasan Klien</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-display font-extrabold text-slate-900 dark:text-white">15+</div>
                <div className="text-xs text-slate-500 mt-1">Proyek Sukses</div>
              </div>
            </div>
          </div>

          {/* Contact Input Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-6 md:p-8 hover:shadow-2xl hover:shadow-slate-100/50 dark:hover:shadow-none transition-all duration-300">
              
              <AnimatePresence mode="wait">
                {submitStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-10 space-y-4"
                  >
                    <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 scale-110">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-display font-extrabold text-slate-900 dark:text-white">Pesan Berhasil Dikirim!</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm max-w-sm mx-auto leading-relaxed">
                      Terima kasih atas pesan Anda. Adip Habibullah akan mempelajari kebutuhan proyek Anda dan menghubungi Anda kembali dalam kurun waktu 1x24 jam.
                    </p>
                    <button
                      onClick={() => setSubmitStatus('idle')}
                      className="mt-6 px-5 py-2 text-xs font-semibold bg-slate-900 dark:bg-slate-100 rounded-full text-white dark:text-slate-900 hover:opacity-90 transition cursor-pointer"
                    >
                      Kirim Pesan Lain
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {submitStatus === 'error' && (
                      <div className="flex items-center gap-3 p-3 text-red-650 bg-red-500/10 border border-red-500/20 text-xs rounded-xl font-semibold">
                        <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                        <span>Mohon lengkapi bagian Nama, Email, dan isi Pesan Anda.</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name field */}
                      <div>
                        <label htmlFor="form-name" className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Nama Lengkap *</label>
                        <input
                          id="form-name"
                          type="text"
                          name="name"
                          autoComplete="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-205 dark:border-slate-805 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition"
                          placeholder="Contoh: John Doe"
                        />
                      </div>

                      {/* Email field */}
                      <div>
                        <label htmlFor="form-email" className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Alamat Email *</label>
                        <input
                          id="form-email"
                          type="email"
                          name="email"
                          autoComplete="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-205 dark:border-slate-805 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition"
                          placeholder="johndoe@email.com"
                        />
                      </div>
                    </div>

                    {/* Subject field */}
                    <div>
                      <label htmlFor="form-subject" className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Subjek / Topik</label>
                      <input
                        id="form-subject"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-205 dark:border-slate-805 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition"
                        placeholder="Contoh: Kerjasama Proyek SaaS / Job Offer"
                      />
                    </div>

                    {/* Message textarea */}
                    <div>
                      <label htmlFor="form-message" className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Isi Pesan Anda *</label>
                      <textarea
                        id="form-message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-205 dark:border-slate-805 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition resize-none"
                        placeholder="Tuliskan ide proyek, estimasi timeline, atau deskripsi pekerjaan detail..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      id="submit-contact"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-bold rounded-full text-sm shadow-md shadow-emerald-500/15 cursor-pointer disabled:opacity-50 transition"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          Mengirim Pesan...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Kirim Pesan Sekarang
                        </>
                      )}
                    </button>
                    
                  </form>
                )}
              </AnimatePresence>
            </div>
            
            {/* Interactive feature: Submitted logs feed! Let's showcase local message storage in real-time */}
            {submittedMessages.length > 0 && (
              <div className="mt-8 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/30 border border-emerald-500/10 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                  <Sparkles className="w-4 h-4 text-amber-500" /> Web Console: Local Outbox Message Queued
                </div>
                <div className="space-y-2">
                  {submittedMessages.map((msg, idx) => (
                    <div key={idx} className="p-3 bg-white dark:bg-slate-950 rounded-lg text-xs border border-slate-200/50 dark:border-slate-800/50 flex justify-between items-center">
                      <div>
                        <span className="font-semibold text-slate-800 dark:text-slate-200">{msg.name}</span>
                        <span className="text-slate-400 mx-2">•</span>
                        <span className="text-slate-550 dark:text-slate-450 italic">{msg.email}</span>
                      </div>
                      <span className="text-[10px] bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded-full font-bold">SENT Sim</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
