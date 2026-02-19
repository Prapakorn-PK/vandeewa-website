"use client";

import React, { useState, createContext, useContext } from 'react';
import { 
  ShieldCheck, Cpu, Lock, MapPin, Mail, ArrowUpRight,
  Link2, Settings, Zap, Database, ExternalLink, Globe
} from 'lucide-react';

// --- Language Logic ---
const translations: any = {
  EN: {
    nav_expertise: "Expertise", nav_projects: "Projects", nav_tech: "Technology", nav_contact: "Contact", nav_enquiry: "ENQUIRY NOW",
    hero_title: "Global Engineering Excellence.",
    hero_desc: "Strategic partner for Fortune 500 Enterprises in Thailand. Delivering high-precision automation with absolute confidentiality.",
    proj_title: "Proven Success.",
    footer_copy: "© 2026 VANDEEWA COMPANY LIMITED | Private Engineering Solutions"
  },
  TH: {
    nav_expertise: "ความเชี่ยวชาญ", nav_projects: "ผลงาน", nav_tech: "เทคโนโลยี", nav_contact: "ติดต่อเรา", nav_enquiry: "ติดต่อสอบถาม",
    hero_title: "ความเป็นเลิศด้านวิศวกรรมระดับสากล",
    hero_desc: "พันธมิตรเชิงกลยุทธ์สำหรับองค์กร Fortune 500 ในประเทศไทย นำเสนอระบบอัตโนมัติที่มีความแม่นยำสูงพร้อมการรักษาความลับอย่างสมบูรณ์",
    proj_title: "ความสำเร็จที่พิสูจน์แล้ว",
    footer_copy: "© 2569 บริษัท แวนดีว่า จำกัด | มาตรฐานวิศวกรรมเฉพาะตัว"
  }
};

const LanguageContext = createContext({ lang: 'EN', setLang: (l: string) => {}, t: (key: string) => key });

export default function Home() {
  const [lang, setLang] = useState('EN');
  const t = (key: string) => translations[lang][key] || key;
  const colors = { primary: "#17386C", secondary: "#3F7FAC" };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      <main className="min-h-screen bg-white">
        {/* Navbar */}
        <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 py-4 px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex flex-col">
              <span style={{ color: colors.primary }} className="text-2xl font-black tracking-tighter">VANDEEWA</span>
              <span style={{ color: colors.secondary }} className="text-[9px] font-bold tracking-[0.4em] uppercase">Engineering Excellence</span>
            </div>
            <div className="hidden lg:flex items-center space-x-8 text-[10px] font-bold uppercase tracking-widest text-slate-400">
              <a href="#expertise" className="hover:text-[#17386C]">{t('nav_expertise')}</a>
              <a href="#projects" className="hover:text-[#17386C]">{t('nav_projects')}</a>
              <button onClick={() => setLang(lang === 'EN' ? 'TH' : 'EN')} className="text-[#3F7FAC] flex items-center gap-1">
                <Globe size={12} /> {lang}
              </button>
            </div>
            <button style={{ backgroundColor: colors.primary }} className="text-white px-6 py-2 text-xs font-bold tracking-widest uppercase">
              {t('nav_enquiry')}
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-40 pb-20 px-8 max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 style={{ color: colors.primary }} className="text-6xl lg:text-8xl font-black leading-tight mb-8 tracking-tighter">
              {t('hero_title')}
            </h1>
            <p className="text-xl text-slate-500 border-l-4 border-slate-100 pl-8 mb-10 italic">
              {t('hero_desc')}
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ backgroundColor: colors.primary }} className="py-12 text-white px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-2xl font-black">VANDEEWA</div>
            <div className="text-[10px] tracking-[0.3em] text-slate-400 uppercase text-center">
              {t('footer_copy')}
            </div>
          </div>
        </footer>
      </main>
    </LanguageContext.Provider>
  );
}
