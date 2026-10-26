import React from 'react';
import { motion } from 'framer-motion';
import { Award, Mail, ShieldCheck, CheckCircle2, Factory, Globe2 } from 'lucide-react';
import { StatsBanner } from '../components/StatsBanner';
import { FloatingActions } from '../components/FloatingActions';
import { PartnerWithUs } from '../components/PartnerWithUs';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  experience: string;
  bio: string;
  image: string;
  email: string;
  linkedin: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Mr. Aman Deep Singh',
    role: 'Managing Director',
    experience: '16+ Years Industry Experience',
    bio: 'Pioneered secondary metal processing ecosystems in India, overseeing international trading agreements across 18 countries.',
    image: '/team-director.jpg',
    email: 'rajesh.v@innovixipl.com',
    linkedin: 'https://www.linkedin.com/in/aman-deep-singh-bagri-3b589b18/?isSelfProfile=false',
  },
  {
    id: 2,
    name: 'Mr. Mohit Mishra',
    role: 'Executive Director',
    experience: '15+ Years Metallurgical Research',
    bio: 'Specialist in optical emission spectroscopy and copper alloy refining, ensuring 99.9% ISRI compliant chemical assays.',
    image: '/team-metallurgist.jpg',
    email: 'sarah.j@innovixipl.com',
    linkedin: 'https://www.linkedin.com/in/mohit-mishra-1429b5290/?isSelfProfile=false',
  },
  {
    id: 3,
    name: 'Mr. Amar Verma',
    role: 'CEO',
    experience: '15+ Years Cross-Border Shipping',
    bio: 'Manages multi-modal container shipments, customs documentation, and timely sea-freight deliveries to global smelting ports.',
    image: '/team-ceo.jpg',
    email: 'amitabh.s@innovixipl.com',
    linkedin: 'https://linkedin.com',
  },

];

export const TeamPage: React.FC = () => {
  return (
    <div className="w-full bg-white select-none">
      {/* 1. Team Hero Banner */}
      <section className="relative w-full h-[280px] sm:h-[340px] md:h-[380px] overflow-hidden flex items-center bg-[#072d4b]">
        <img
          src="/recycle-slider.png"
          alt="Innovix Team"
          className="absolute inset-0 w-full h-full object-cover filter brightness-[0.4] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#031526]/95 via-[#07243e]/75 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 md:px-12 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-semibold uppercase tracking-wider mb-3 backdrop-blur-sm border border-rose-400/20">
              <Award className="w-3.5 h-3.5" /> Leadership & Technical Excellence
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-3">
              Meet Our Executive Team
            </h1>
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-xl">
              Backed by seasoned metallurgists, international trade legal counsel, and logistics specialists driving zero-waste recycling standards worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Stats Strip */}
      <StatsBanner />

      {/* 3. Team Cards Grid with Left & Right Reveal Animations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#b65862]">The Minds Behind Innovix</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072d4b] mt-2">Executive Leadership</h2>
          <div className="w-14 h-1 bg-[#b65862]/40 mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 40, x: isEven ? -20 : 20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                whileHover={{ y: -8, boxShadow: '0 20px 35px -10px rgba(0,0,0,0.12)' }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="h-100 sm:h-100 overflow-hidden relative bg-slate-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <div className="flex space-x-2">
                        <a
                          href={`mailto:${member.email}`}
                          className="w-8 h-8 rounded-full bg-white/90 text-gray-800 flex items-center justify-center hover:bg-[#b65862] hover:text-white transition-colors"
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="w-8 h-8 rounded-full bg-white/90 text-gray-800 flex items-center justify-center hover:bg-[#b65862] hover:text-white transition-colors"
                        >
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 1.64 1.64A1.64 1.64 0 0 0 7.83 6.64Z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="text-[11px] font-semibold text-[#b65862] tracking-wider uppercase block mb-1">
                      {member.experience}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#b65862] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-gray-500 mt-0.5 mb-3">{member.role}</p>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <div className="border-t border-slate-100 pt-3 flex items-center justify-between text-xs text-gray-500">
                    <span className="inline-flex items-center gap-1 text-emerald-600 font-medium">
                      <ShieldCheck className="w-3.5 h-3.5" /> Certified Specialist
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 4. Leadership Values Section */}
      <section className="w-full bg-[#f8fafc] py-16 sm:py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-200/80">
              <Factory className="w-10 h-10 text-[#b65862] mb-4" />
              <h4 className="text-lg font-bold text-gray-900 mb-2">Hands-On Metallurgy</h4>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Our leaders frequently inspect scrap sorting yards, ensuring direct oversight on sampling assays, sorting purity, and baling standards.
              </p>
            </div>

            <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-200/80">
              <Globe2 className="w-10 h-10 text-[#072d4b] mb-4" />
              <h4 className="text-lg font-bold text-gray-900 mb-2">Cross-Border Compliance</h4>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Complete mastery over international trade documentation, customs clearance, and global maritime port handling for frictionless delivery.
              </p>
            </div>

            <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-200/80">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mb-4" />
              <h4 className="text-lg font-bold text-gray-900 mb-2">Integrity & Transparency</h4>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Direct assay certificates provided with every single shipment. What we certify on paper matches 100% of the material in container.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Continuous Services Slider */}
      <FloatingActions />

      {/* 6. Partner With Us / Direct Contact */}
      <PartnerWithUs />
    </div>
  );
};

export default TeamPage;
