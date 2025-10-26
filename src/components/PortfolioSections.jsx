import { useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Globe, UploadCloud, FileText, Image, ExternalLink } from 'lucide-react';

const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-1 rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-300">
    {children}
  </span>
);

const Progress = ({ value }) => (
  <div className="w-full h-2 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
    <div
      className="h-full bg-gradient-to-r from-blue-500 to-indigo-600"
      style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
    />
  </div>
);

export default function PortfolioSections() {
  const [certFiles, setCertFiles] = useState([]); // { url, name, type }
  const inputRef = useRef(null);

  const handleUpload = (e) => {
    const files = Array.from(e.target.files || []);
    const mapped = files.map((file) => ({
      url: URL.createObjectURL(file),
      name: file.name,
      type: file.type,
    }));
    setCertFiles((prev) => [...mapped, ...prev]);
    if (inputRef.current) inputRef.current.value = '';
  };

  const techSkills = useMemo(
    () => [
      { name: 'JavaScript/TypeScript', level: 90 },
      { name: 'React', level: 88 },
      { name: 'Node.js', level: 80 },
      { name: 'Python', level: 82 },
      { name: 'Design Systems', level: 75 },
    ],
    []
  );

  const softSkills = useMemo(
    () => ['Communication', 'Leadership', 'Problem Solving', 'Collaboration', 'Time Management'],
    []
  );

  const languages = useMemo(
    () => [
      { name: 'English', level: 'Fluent', value: 95 },
      { name: 'Spanish', level: 'Intermediate', value: 65 },
      { name: 'German', level: 'Basic', value: 35 },
    ],
    []
  );

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
      {/* About */}
      <motion.section id="about" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">About Me</h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              I am a multidisciplinary professional passionate about building meaningful products and experiences.
              This portfolio is flexible for any industry — adapt the content to reflect your own journey, strengths,
              and aspirations. Clean typography, elegant spacing, and thoughtful motion focus on readability.
            </p>
          </div>
          <div className="md:col-span-1 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-900">
            <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-4">Contact Information</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300"><Mail size={16}/> <a className="hover:underline" href="mailto:you@example.com">you@example.com</a></li>
              <li className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300"><Phone size={16}/> <a className="hover:underline" href="tel:+1234567890">+1 (234) 567-890</a></li>
              <li className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300"><Linkedin size={16}/> <a className="hover:underline" href="#" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300"><Github size={16}/> <a className="hover:underline" href="#" target="_blank" rel="noreferrer">GitHub</a></li>
              <li className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300"><Globe size={16}/> <a className="hover:underline" href="#" target="_blank" rel="noreferrer">Website</a></li>
              <li className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300"><MapPin size={16}/> <span>City, Country</span></li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Education */}
      <motion.section id="education" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-6">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: 'M.Sc. in Computer Science', place: 'Tech University', date: '2020 – 2022', desc: 'Focus on human-computer interaction and scalable systems.' },
            { title: 'B.A. in Business & Design', place: 'Design College', date: '2016 – 2020', desc: 'Interdisciplinary studies across marketing and product design.' },
          ].map((ed) => (
            <div key={ed.title} className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-900">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-semibold text-neutral-900 dark:text-neutral-100">{ed.title}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">{ed.place}</p>
                </div>
                <span className="text-xs text-neutral-500">{ed.date}</span>
              </div>
              <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-300">{ed.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Experience */}
      <motion.section id="experience" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-6">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">Experience</h2>
        <div className="space-y-4">
          {[
            { title: 'Product Designer • Acme Corp', date: '2023 – Present', desc: 'Leading design for a cross-platform SaaS suite, collaborating with research and engineering.' },
            { title: 'Frontend Engineer • Nova Labs', date: '2021 – 2023', desc: 'Built accessible, performant interfaces with React, TypeScript, and design system tooling.' },
            { title: 'Project Lead • Freelance', date: '2018 – 2021', desc: 'Delivered end-to-end projects across marketing, web, and data visualization.' },
          ].map((ex) => (
            <div key={ex.title} className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-900">
              <div className="flex items-center justify-between gap-4">
                <p className="font-semibold text-neutral-900 dark:text-neutral-100">{ex.title}</p>
                <span className="text-xs text-neutral-500">{ex.date}</span>
              </div>
              <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-300">{ex.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Skills */}
      <motion.section id="skills" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-6">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">Skills</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">Technical</h3>
            <div className="space-y-4">
              {techSkills.map((s) => (
                <div key={s.name} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-neutral-700 dark:text-neutral-300">{s.name}</span>
                    <span className="text-neutral-500">{s.level}%</span>
                  </div>
                  <Progress value={s.level} />
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">General / Soft</h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Languages */}
      <motion.section id="languages" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-6">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">Languages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {languages.map((l) => (
            <div key={l.name} className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-900">
              <div className="flex items-center justify-between">
                <p className="font-medium text-neutral-900 dark:text-neutral-100">{l.name}</p>
                <span className="text-xs text-neutral-500">{l.level}</span>
              </div>
              <div className="mt-3"><Progress value={l.value} /></div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Interests */}
      <motion.section id="interests" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-6">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">Interests</h2>
        <div className="flex flex-wrap gap-2">
          {['AI & ML','Human-Centered Design','Open Source','Data Visualization','Product Strategy','Sustainability'].map((i) => (
            <Badge key={i}>{i}</Badge>
          ))}
        </div>
      </motion.section>

      {/* Certificates */}
      <motion.section id="certificates" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">Certificates</h2>
          <label className="inline-flex items-center gap-2 cursor-pointer rounded-md border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800">
            <UploadCloud size={16} /> Upload PDF or Image
            <input ref={inputRef} onChange={handleUpload} type="file" accept="application/pdf,image/*" multiple className="hidden" />
          </label>
        </div>

        {certFiles.length === 0 ? (
          <p className="text-sm text-neutral-600 dark:text-neutral-400">No certificates uploaded yet. Use the upload button to add PDFs or images. Files are kept locally in your browser for this preview.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certFiles.map((f, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                <div className="aspect-video bg-neutral-50 dark:bg-neutral-800 flex items-center justify-center">
                  {f.type.includes('pdf') ? (
                    <div className="w-full h-full">
                      <object data={f.url} type="application/pdf" className="w-full h-full">
                        <div className="p-6 text-sm text-neutral-600 dark:text-neutral-300 flex flex-col items-center gap-2">
                          <FileText size={18} />
                          <span>Preview not available. Open file instead.</span>
                        </div>
                      </object>
                    </div>
                  ) : (
                    <img src={f.url} alt={f.name} className="w-full h-full object-cover" />
                  )}
                </div>
                <div className="p-4 flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-neutral-900 dark:text-neutral-100">{f.name}</p>
                    <p className="text-xs text-neutral-500">{f.type.includes('pdf') ? 'PDF' : 'Image'}</p>
                  </div>
                  <a href={f.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline">
                    <ExternalLink size={16} /> Open
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </motion.section>

      {/* Contact */}
      <motion.section id="contact" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-6">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">Contact</h2>
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-900">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Your name" className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-sm text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="email" placeholder="Your email" className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-sm text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <textarea placeholder="Message" rows={5} className="md:col-span-2 w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-sm text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <div className="md:col-span-2 flex justify-end">
              <button type="button" className="inline-flex items-center justify-center rounded-md bg-neutral-900 text-white px-5 py-2.5 text-sm font-medium shadow hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 transition-colors">
                Send Message
              </button>
            </div>
          </form>
          <p className="mt-3 text-xs text-neutral-500">This simple form is for demonstration. Connect it to your preferred service or backend to receive messages.</p>
        </div>
      </motion.section>
    </div>
  );
}
