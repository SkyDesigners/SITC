import { useEffect, useState } from 'react';
import {
  ArrowRight, BookOpen, CalendarDays, Check,
  ChevronDown, Clock3, Download, GraduationCap, Headphones, Landmark, Mail,
  Menu, MessageCircle, MonitorPlay, Phone, ShieldCheck, Sparkles, Users, X,
} from 'lucide-react';

const WHATSAPP = 'https://wa.link/hrm';
const INITIAL_PAYMENT = 'https://payhere.lk/pay/o6aade963';
const FULL_PAYMENT = 'https://payhere.lk/pay/o1daad9f5';

const navigation = [
  ['Who It’s For', '#audience'], ['Curriculum', '#curriculum'], ['Lecturers', '#lecturers'],
  ['Fees', '#pricing'], ['FAQs', '#faq'],
];

const benefits = [
  { image: '/images/benefits/Artboard-01.png', alt: 'PSB University diploma certificate' },
  { image: '/images/benefits/Artboard-02.png', alt: 'Online Zoom delivery' },
  { image: '/images/benefits/Artboard-07.png', alt: 'Six-month career-focused programme' },
  { image: '/images/benefits/Artboard-08.png', alt: 'Live lectures and recordings' },
  { image: '/images/benefits/Artboard-03.png', alt: 'Practical workplace knowledge' },
  { image: '/images/benefits/Artboard-04.png', alt: 'Academic pathway to degree-level study' },
  { image: '/images/benefits/Artboard-05.png', alt: 'Sinhala instruction' },
  { image: '/images/benefits/Artboard-06.png', alt: 'WhatsApp support' },
];

const modules = ['Human Resource Management', 'Administration', 'Employment Law', 'Industrial Psychology', 'Organisational Behaviour', 'HR Onboarding and Offboarding'];

const progressionSteps = [
  {
    icon: GraduationCap,
    title: 'Diploma in HRM & Administration',
    description: 'Build a strong foundation in Human Resource Management and Administration through a practical, career-focused diploma programme.',
    meta: '6 Months',
    label: 'Start Your Academic Journey',
  },
  {
    icon: BookOpen,
    title: 'B.Sc. in HRM & Business Strategy',
    description: 'Progress from the Diploma into the B.Sc. in HRM & Business Strategy through the available direct academic progression pathway.',
    meta: 'Direct Degree Entry',
    label: 'Continue to Bachelor’s Level',
  },
  {
    icon: BookOpen,
    title: 'Postgraduate Studies',
    description: 'Continue building your academic and professional knowledge through advanced postgraduate-level study after completing your bachelor’s degree.',
    meta: 'Advanced Learning Opportunities',
    label: 'Develop Specialist Knowledge',
  },
  {
    icon: GraduationCap,
    title: 'Master’s Degree',
    description: 'Strengthen your strategic knowledge, leadership capabilities and professional expertise through Master’s-level academic study.',
    meta: 'Advanced Academic Progression',
    label: 'Build Higher-Level Expertise',
  },
  {
    icon: Landmark,
    title: 'PhD / Doctoral Pathway',
    description: 'Progress towards doctoral-level study, advanced research and specialist academic development as the next stage of your academic journey.',
    meta: 'Highest Academic Progression',
    label: 'Research & Doctoral Opportunities',
  },
];

const faqs = [
  ['How long is the programme?', 'The programme duration is six months.'],
  ['Is the programme fully online?', 'Yes. Live lectures are delivered online through Zoom.'],
  ['What is the language of instruction?', 'Lectures are delivered in Sinhala, with relevant academic and technical terminology presented in English.'],
  ['When are lectures held?', 'Lectures are scheduled every Wednesday and Thursday from 8:00 PM to 10:00 PM.'],
  ['Will lecture recordings be available?', 'Yes. Recordings of the relevant lectures will be made available to students.'],
  ['What is the scholarship fee?', 'The standard fee is LKR 48,000. With the 50% skill-development scholarship, the fee is LKR 24,000.'],
  ['Can I pay in instalments?', 'Yes. You may pay four instalments of LKR 6,000. A special one-time full payment option of LKR 19,000 is also available.'],
  ['Who awards the diploma?', 'The diploma is awarded by PSB University, according to the official programme documentation supplied by SITC Campus.'],
  ['Is there a pathway to a degree?', 'A progression pathway to the B.Sc. in HRM & Business Strategy is available, subject to the university’s admission and academic requirements.'],
  ['How do I register?', 'Pay the first instalment of LKR 6,000 through the official PayHere link, or contact the programme team on WhatsApp for assistance.'],
];

const recognitionRows = [
  [['ugc.png', 'UGC Sri Lanka recognised'], ['decc.png', 'DECC'], ['sdfl.png', 'SDFL'], ['psb-iau.png', 'PSB University and IAU'], ['ieac.png', 'IEAC'], ['wes.png', 'World Education Services'], ['inqaahe.png', 'INQAAHE'], ['asic.png', 'ASIC']],
  [['cpd.png', 'CPD member'], ['uk-accredited.png', 'UK accredited university'], ['unesco.png', 'UNESCO'], ['whed.png', 'World Higher Education Database'], ['the.png', 'Times Higher Education']],
];

const guestLecturers = [
  { name: 'Mr. Nuwan Jayasinghe', subject: 'Employment Law', image: '/lecturers/nuwan-jayasinghe.webp', description: 'Attorney-at-Law with more than eight years of experience in banking and legal operations.', qualifications: ['Attorney-at-Law', 'Banking & Legal Operations'] },
  { name: 'Ms. Sadamali Herath', subject: 'Industrial Psychology', image: '/lecturers/industrial-psychology-lecturer.webp', description: 'Guest lecturer specialising in industrial psychology and applied psychology.', qualifications: ['BA (Special) — University of Colombo', 'Postgraduate in Psychology — University of Peradeniya', 'MSc Applied Psychology — Cardiff Metropolitan University'] },
  { name: 'Michael Ranuka Gamage', subject: 'Professional Development', image: '/lecturers/personal-development-lecturer.webp', description: 'Personal development expert and lecturer at CIPM, ICBT Campus and CCBM.', qualifications: ['Doctorate (Reading) — LUC Malaysia', 'MBA — AeU', 'Pg. Dip. Level 7 — CIM UK'] },
];

function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`container ${className}`}>{children}</div>;
}

function Button({ href, children, variant = 'primary', event }: { href: string; children: React.ReactNode; variant?: 'primary' | 'secondary' | 'light'; event: string }) {
  const external = href.startsWith('http');
  return <a className={`btn btn-${variant}`} href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} data-cta={event}>{children}<ArrowRight size={17} /></a>;
}

function SectionTitle({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="section-title"><span>{eyebrow}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}

function Countdown() {
  const target = Date.parse('2026-09-26T20:00:00+05:30');
  const [now, setNow] = useState(Date.now());
  useEffect(() => { const id = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(id); }, []);
  const diff = target - now;
  if (diff <= 0) return <p className="expired">Contact SITC Campus to confirm the next available intake.</p>;
  const units = [['Days', 864e5], ['Hours', 36e5], ['Minutes', 6e4], ['Seconds', 1e3]] as const;
  let remaining = diff;
  return <div className="countdown">{units.map(([label, size]) => { const value = Math.floor(remaining / size); remaining %= size; return <div key={label}><strong>{String(value).padStart(2, '0')}</strong><span>{label}</span></div>; })}</div>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><Container className="header-inner">
    <a href="#top" className="brand" aria-label="SITC Campus home"><img src="/sitc-logo.jpg" alt="SITC Campus" /></a>
    <nav className={open ? 'open' : ''} aria-label="Main navigation">{navigation.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}</nav>
    <Button href="#pricing" event="header_registration">Apply Now</Button>
    <button className="menu" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
  </Container></header>;
}

export function App() {
  return <>
    <Header />
    <main id="top">
      <section className="hero">
        <div className="hero-glow hero-glow-one" /><div className="hero-glow hero-glow-two" />
        <Container>
          <div className="announce"><Sparkles size={16} /> 50% Skill-Development Scholarship Available <span>Start with LKR 6,000</span></div>
          <div className="hero-grid">
            <div className="hero-content">
              <h1>Build your future in <em>Human Resource Management</em></h1>
              <p className="hero-lead">Diploma in Human Resource Management and Administration</p>
              <p className="hero-copy">Develop practical people-management and administrative skills through a flexible, six-month online programme designed for ambitious professionals.</p>
              <div className="hero-actions"><Button href="#pricing" event="hero_scholarship">Secure Your Scholarship</Button><Button href="/course-guide.pdf" variant="secondary" event="course_guide_download"><Download size={17} /> Download Course Guide</Button></div>
              <div className="hero-meta"><span><Clock3 /> 6 months</span><span><MonitorPlay /> Zoom Live Online</span><span><CalendarDays /> Starts 23 September 2026</span></div>
            </div>
            <aside className="enrol-card">
              <div className="enrol-top"><span>Next intake</span><div className="live-dot">Enrolment open</div></div>
              <div className="date-block"><strong>23</strong><div><b>September 2026</b><span>Wednesday · 8:00 PM</span></div></div>
              <div className="schedule"><CalendarDays /><div><b>Live lecture schedule</b><span>Wednesdays & Thursdays<br />8:00 PM – 10:00 PM</span></div></div>
              <div className="scholarship-stat"><span>Scholarship fee</span><strong>LKR 24,000</strong><small>Standard fee: <s>LKR 48,000</s></small></div>
              <Button href={WHATSAPP} event="whatsapp_click"><MessageCircle size={17} /> Speak to an Advisor</Button>
            </aside>
          </div>
        </Container>
      </section>

      <section className="recognition" aria-labelledby="recognition-heading"><Container>
        <div className="recognition-heading"><span>Institutional standing</span><h2 id="recognition-heading">Recognition, Memberships & Accreditations</h2></div>
        <div className="recognition-rows">{recognitionRows.map((row, i) => <div className={`recognition-row row-${i + 1}`} key={i}>{row.map(([file, alt]) => <figure key={file}><img src={`/recognition/${file}`} alt={alt} loading="lazy" /></figure>)}</div>)}</div>
        <p>Logos shown relate to the awarding institution and associated educational bodies as described in the official programme documentation.</p>
      </Container></section>

      <section id="audience" className="section section-soft"><Container>
        <div className="audience-heading">
          <SectionTitle eyebrow="Designed for you" title="Who is this programme for?" copy="For those planning the next step in their professional journey." />
        </div>
        <div className="audience-grid">
          <img src="/images/audience/al-students.png" alt="A/L students beginning a career-focused higher education pathway" loading="lazy" decoding="async" />
          <img src="/images/audience/university-students.png" alt="University students adding HRM and administration knowledge to their degree" loading="lazy" decoding="async" />
          <img src="/images/audience/employees.png" alt="Public and private sector employees developing professional skills" loading="lazy" decoding="async" />
          <img src="/images/audience/managers.png" alt="Managers and administrative officers strengthening workforce management skills" loading="lazy" decoding="async" />
          <img src="/images/audience/entrepreneurs.png" alt="Entrepreneurs learning to lead teams and organisations effectively" loading="lazy" decoding="async" />
          <img src="/images/audience/hr-career.png" alt="Future HR professionals building a strong human resources foundation" loading="lazy" decoding="async" />
        </div>
      </Container></section>

      <section className="section credentials"><Container>
        <SectionTitle eyebrow="Your qualification" title="A credible foundation for your professional future" copy="Complete the programme, earn your diploma credential and explore an academic pathway towards further study." />
        <div className="showcase-grid">
          <article className="showcase-card"><div className="showcase-image"><img src="/showcase/sitc-hrm-convocation.png" alt="SITC Campus convocation award presentation" loading="lazy" /><span>Convocation</span></div><div className="showcase-copy"><h3>Celebrate your achievement</h3><p>Mark your academic milestone through the official SITC Campus convocation experience, subject to applicable arrangements and eligibility.</p></div></article>
          <article className="showcase-card"><div className="showcase-image contain"><img src="/showcase/diploma-certificate-transcript.png" alt="PSB University diploma certificate and student transcript" loading="lazy" decoding="async" /><span>Credential</span></div><div className="showcase-copy"><h3>Diploma certificate & transcript</h3><p>Receive a diploma certificate awarded by PSB University together with a transcript recording your academic progress.</p></div></article>
          <article className="showcase-card"><div className="showcase-image contain"><img src="/showcase/verify-and-progress.png" alt="PSB University Diploma in Human Resource Management and Administration certificate" loading="lazy" decoding="async" /><span>Progression</span></div><div className="showcase-copy"><h3>Verify and progress</h3><p>Access online certificate verification and explore a pathway to the B.Sc. in HRM & Business Strategy.</p><a href="https://portal.sitc.lk/verify-certificate" target="_blank" rel="noopener noreferrer">Visit verification portal <ArrowRight /></a></div></article>
        </div>
        <img className="credential-banner" src="/images/banner.png" alt="Diploma award, transcript and B.Sc. in HRM and Business Strategy progression information" loading="lazy" decoding="async" />
      </Container></section>

      <section className="section why"><Container><div className="split">
        <div className="why-copy"><SectionTitle eyebrow="Why choose this diploma?" title="Career-focused learning that fits your schedule" copy="Study from home, connect with experienced lecturers and build skills you can apply in real workplaces from day one." /><Button href={WHATSAPP} event="whatsapp_click">Talk to a Programme Advisor</Button></div>
        <div className="benefit-grid">{benefits.map(item => <img key={item.image} src={item.image} alt={item.alt} loading="lazy" decoding="async" />)}</div>
      </div></Container></section>

      <section className="section path" aria-labelledby="progression-heading"><Container>
        <div className="section-title"><span>Academic progression</span><h2 id="progression-heading">A pathway designed to take you further</h2><p>Begin with a practical Diploma in HRM &amp; Administration, progress into the B.Sc. in HRM &amp; Business Strategy, and continue your academic journey towards postgraduate, Master’s and doctoral-level study.</p></div>
        <ol className="progression-steps">
          {progressionSteps.map(({ icon: Icon, title, description, meta, label }, index) => <li className="progression-item" key={title}>
            <article className="progression-card">
              <div className="progression-card-top"><Icon aria-hidden="true" /><span>{String(index + 1).padStart(2, '0')}</span></div>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="progression-meta"><strong>{meta}</strong><small>{label}</small></div>
            </article>
            {index < progressionSteps.length - 1 && <span className="progression-connector" aria-hidden="true"><ArrowRight /></span>}
          </li>)}
        </ol>
        <p className="fine-print">Academic progression and admission are subject to the relevant university’s entry criteria and academic requirements.</p>
      </Container></section>

      <section id="curriculum" className="section section-soft"><Container><div className="curriculum-grid">
        <div><SectionTitle eyebrow="Academic profile" title="Build expertise across core HR disciplines" copy="Explore the essential areas of people management and workplace administration identified in the official course guide." /><a className="inline-link" href="/course-guide.pdf"><Download /> View the complete course guide</a></div>
        <div className="module-list">{modules.map((module, i) => <div key={module}><span>{String(i + 1).padStart(2, '0')}</span><strong>{module}</strong><BookOpen /></div>)}</div>
      </div></Container></section>

      <section className="section experience"><Container><div className="experience-grid">
        <div><span className="eyebrow-light">Learning experience</span><h2>Live, supported learning that works around you</h2><p>Join from anywhere, learn directly from lecturers and stay connected through discussions, recordings and dedicated student support.</p></div>
        <div className="facts">{[[Clock3, 'Six-month programme'], [CalendarDays, 'Wednesday & Thursday'], [MonitorPlay, '8:00 PM – 10:00 PM'], [BookOpen, 'Sinhala medium'], [Users, 'Live Zoom lectures'], [Headphones, 'Recordings & support']].map(([Icon, text]: any) => <div key={text}><Icon /><span>{text}</span></div>)}</div>
      </div></Container></section>

      <section id="lecturers" className="section section-soft"><Container>
        <SectionTitle eyebrow="Meet your lecturers" title="Learn from experienced professionals" copy="Gain practical perspective from lecturers with experience across HR, law, psychology and professional development." />
        <article className="lead-lecturer"><img src="/lecturers/ranga-yudara.webp" alt="Mr. Ranga Yudara" loading="lazy" /><div><span>Lead Lecturer</span><h2>Mr. Ranga Yudara</h2><h3>Head of Department / Senior Lecturer</h3><p>Department of Human Resources Management</p><ul><li>MBS — University of Colombo</li><li>Certified Trainer in HRD — SLITAD</li><li>CAB II — CA · D.TEFL — UK</li></ul></div></article>
        <div className="lecturer-grid">{guestLecturers.map(lecturer => <article className="lecturer-card" key={lecturer.name}><img src={lecturer.image} alt={lecturer.name} loading="lazy" /><span>{lecturer.subject}</span><h3>{lecturer.name}</h3><p>{lecturer.description}</p><ul>{lecturer.qualifications.map(q => <li key={q}>{q}</li>)}</ul></article>)}</div>
        <p className="fine-print">Names, roles and qualifications are reproduced from the official HRM programme documentation.</p>
      </Container></section>

      <section id="pricing" className="section pricing"><Container>
        <SectionTitle eyebrow="50% scholarship now available" title="Choose the payment plan that works for you" copy="Secure your place with a flexible instalment plan or save more with a one-time payment." />
        <div className="price-grid">
          <article className="price-card featured"><span className="price-tag">Most flexible</span><p>Scholarship programme fee</p><div className="old-price">Standard fee <s>LKR 48,000</s></div><h3>LKR 24,000</h3><div className="payment-row"><div><strong>LKR 6,000 × 4</strong><span>Four monthly instalments</span></div><Check /></div><Button href={INITIAL_PAYMENT} event="initial_payment">Pay First Instalment</Button></article>
          <article className="price-card"><span className="price-tag dark">Best value</span><p>Special one-time payment</p><div className="old-price">Save an additional LKR 5,000</div><h3>LKR 19,000</h3><div className="payment-row"><div><strong>One secure payment</strong><span>No remaining instalments</span></div><Check /></div><Button href={FULL_PAYMENT} variant="secondary" event="full_payment">Pay in Full</Button></article>
        </div>
        <p className="secure"><ShieldCheck /> Payments are completed securely on the external PayHere website. This page never collects your card details.</p>
      </Container></section>

      <section className="section deadline"><Container><span>September 2026 intake</span><h2>Your next chapter starts soon</h2><p>Enrol before the intake begins to secure the current scholarship offer.</p><Countdown /><div className="hero-actions centered"><Button href={INITIAL_PAYMENT} variant="light" event="final_registration">Reserve My Place</Button><Button href={WHATSAPP} variant="secondary" event="whatsapp_click"><MessageCircle size={17} /> Ask a Question</Button></div></Container></section>

      <section id="faq" className="section section-soft"><Container><SectionTitle eyebrow="Frequently asked questions" title="Everything you need to know" copy="Clear answers about the programme, schedule, fees and registration." /><div className="faqs">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown /></summary><p>{answer}</p></details>)}</div></Container></section>

      <section className="final-cta"><Container><div><span>Ready to begin?</span><h2>Take the first step towards your HR career.</h2><p>Our programme team is ready to help with registration and course information.</p></div><div className="final-actions"><Button href={WHATSAPP} variant="light" event="whatsapp_click"><MessageCircle /> Chat on WhatsApp</Button><a href="tel:+94715258653"><Phone /> 071 525 8653</a></div></Container></section>
    </main>

    <footer><Container><div className="footer-grid"><div className="footer-brand"><img src="/sitc-logo.jpg" alt="SITC Campus" /><p>Diploma in Human Resource Management and Administration</p></div><div><h3>Contact</h3><a href="tel:+94715258653">Diploma: 071 525 8653</a><a href="tel:+94114532139">Hotline: 011 453 2139</a><a href="mailto:info@sitc.lk"><Mail /> info@sitc.lk</a></div><div><h3>Locations</h3><p>World Trade Center, Level 26,<br />East Tower, Colombo 01</p><p>208, Hospital Road, Gampola</p></div><div><h3>Explore</h3>{navigation.map(([label, href]) => <a href={href} key={href}>{label}</a>)}<a href="/course-guide.pdf">Course Guide</a></div></div><div className="legal"><p>Recognition statements refer to information supplied in official course material. Programme progression is subject to academic conditions.</p><span>© {new Date().getFullYear()} SITC Campus. All rights reserved.</span></div></Container></footer>
    <div className="mobile-cta"><a href={WHATSAPP}><MessageCircle /> WhatsApp</a><a href="#pricing"><GraduationCap /> Apply Now</a></div>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Course', name: 'Diploma in Human Resource Management and Administration', description: 'A six-month online diploma programme delivered by SITC Campus and awarded by PSB University.', provider: { '@type': 'Organization', name: 'SITC Campus', email: 'info@sitc.lk', telephone: '+94 11 453 2139' }, timeRequired: 'P6M', inLanguage: ['si', 'en'] }) }} />
  </>;
}
