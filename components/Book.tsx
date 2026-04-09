'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import resumeData from '@/data.json'
import Image from 'next/image'

/* ================================================================
   Individual page content components
   ================================================================ */

/* ================================================================
   Gold floral corner ornament — vine/scroll style, top-left origin
   Mirrored via CSS transforms for other corners
   ================================================================ */
function GoldCorner() {
  return (
    <svg viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d4a853" />
          <stop offset="30%" stopColor="#c5963e" />
          <stop offset="60%" stopColor="#e8c36a" />
          <stop offset="100%" stopColor="#b8872e" />
        </linearGradient>
      </defs>
      {/* Main vertical vine */}
      <path d="M8 0 C8 0, 6 20, 8 45 C10 70, 5 95, 8 120 C9 130, 6 140, 8 150"
            stroke="url(#gold)" strokeWidth="2.5" fill="none" />
      {/* Main horizontal vine */}
      <path d="M0 8 C0 8, 20 6, 45 8 C70 10, 95 5, 120 8 C130 9, 140 6, 150 8"
            stroke="url(#gold)" strokeWidth="2.5" fill="none" />
      {/* Large corner swirl */}
      <path d="M12 12 C20 12, 35 14, 40 25 C45 36, 38 45, 28 42 C18 39, 15 28, 20 20 C25 12, 35 16, 30 24"
            stroke="url(#gold)" strokeWidth="2" fill="none" />
      {/* Leaf cluster top-left */}
      <path d="M18 30 C18 30, 10 22, 20 15 C30 8, 28 20, 18 30Z" fill="url(#gold)" opacity="0.7" />
      <path d="M30 18 C30 18, 22 10, 15 20 C8 30, 20 28, 30 18Z" fill="url(#gold)" opacity="0.7" />
      {/* S-curves along vertical */}
      <path d="M14 50 C14 50, 28 55, 25 68 C22 81, 10 75, 14 65"
            stroke="url(#gold)" strokeWidth="1.8" fill="none" />
      <path d="M10 80 C10 80, 22 78, 20 90 C18 102, 6 98, 10 88"
            stroke="url(#gold)" strokeWidth="1.5" fill="none" />
      {/* Leaves along vertical vine */}
      <path d="M12 55 C12 55, 2 48, 6 40 C10 32, 14 42, 12 55Z" fill="url(#gold)" opacity="0.55" />
      <path d="M10 85 C10 85, 0 78, 4 72 C8 66, 12 76, 10 85Z" fill="url(#gold)" opacity="0.45" />
      {/* S-curves along horizontal */}
      <path d="M50 14 C50 14, 55 28, 68 25 C81 22, 75 10, 65 14"
            stroke="url(#gold)" strokeWidth="1.8" fill="none" />
      <path d="M80 10 C80 10, 78 22, 90 20 C102 18, 98 6, 88 10"
            stroke="url(#gold)" strokeWidth="1.5" fill="none" />
      {/* Horizontal scroll end */}
      <path d="M110 6 C115 2, 125 4, 128 10 C131 16, 125 20, 118 16 C111 12, 115 6, 120 8"
            stroke="url(#gold)" strokeWidth="1.5" fill="none" />
      {/* Leaves along horizontal */}
      <path d="M55 12 C55 12, 48 2, 40 6 C32 10, 42 14, 55 12Z" fill="url(#gold)" opacity="0.55" />
      <path d="M85 10 C85 10, 78 0, 72 4 C66 8, 76 12, 85 10Z" fill="url(#gold)" opacity="0.45" />
      {/* Small accent dots */}
      <circle cx="12" cy="12" r="2.5" fill="url(#gold)" opacity="0.8" />
      <circle cx="35" cy="5" r="1.2" fill="url(#gold)" opacity="0.5" />
      <circle cx="5" cy="35" r="1.2" fill="url(#gold)" opacity="0.5" />
      <circle cx="130" cy="10" r="1" fill="url(#gold)" opacity="0.4" />
      <circle cx="10" cy="110" r="1" fill="url(#gold)" opacity="0.4" />
    </svg>
  )
}

function CoverPage() {
  const { personalInfo } = resumeData
  return (
    <div className="h-full flex flex-col items-center justify-center text-center px-8"
         style={{ color: '#e4e4e7' }}>
      <div className="mb-8 relative w-36 h-36 rounded-full overflow-hidden border-2 border-indigo-400/30">
        <Image
          src={personalInfo.profileImage}
          alt={personalInfo.name}
          width={144}
          height={144}
          className="object-cover w-full h-full"
          priority
        />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-3 text-white tracking-tight">
        {personalInfo.name}
      </h1>
      <p className="text-lg text-indigo-300/80 mb-6 font-light">{personalInfo.title}</p>
      <div className="w-16 h-px bg-indigo-400/20 mb-6" />
      <p className="text-sm text-white/35">{personalInfo.location}</p>
      <p className="absolute bottom-6 right-8 text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>
        scroll or use arrows
      </p>
    </div>
  )
}

function AboutPage() {
  const { personalInfo } = resumeData
  return (
    <div className="page-content">
      <p className="section-label">About Me</p>
      <h2 className="page-title">{personalInfo.name}</h2>
      <p className="text-sm text-[var(--page-muted)] mb-4">{personalInfo.title}</p>
      <div className="divider" />
      <p className="text-[0.9rem] leading-[1.75] text-[var(--page-text)] mb-6">
        {personalInfo.summary}
      </p>
      <div className="divider" />
      <div className="space-y-3 mt-1">
        {[
          { label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
          { label: 'Phone', value: personalInfo.phone },
          { label: 'Location', value: personalInfo.location },
          { label: 'Languages', value: resumeData.languages.join(', ') },
        ].map((row) => (
          <div key={row.label} className="flex gap-4 text-sm">
            <span className="text-[var(--page-muted)] w-20 flex-shrink-0 font-medium">{row.label}</span>
            {row.href ? (
              <a href={row.href} className="text-[var(--page-highlight)] no-underline hover:underline">{row.value}</a>
            ) : (
              <span className="text-[var(--page-text)]">{row.value}</span>
            )}
          </div>
        ))}
      </div>
      <p className="page-number">01</p>
    </div>
  )
}

function ExperiencePage() {
  return (
    <div className="page-content">
      <p className="section-label">Experience</p>
      <h2 className="page-title">Work History</h2>
      <div className="divider" />
      <div className="space-y-6 flex-1 overflow-y-auto">
        {resumeData.experience.map((exp, i) => (
          <div key={i}>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
              <div>
                <h3 className="text-base font-semibold text-[var(--page-text)]">{exp.title}</h3>
                <p className="text-sm text-[var(--page-highlight)] font-medium">
                  {exp.company} &middot; {exp.location}
                </p>
              </div>
              <span className="text-xs text-[var(--page-muted)] whitespace-nowrap flex-shrink-0 mt-1 sm:mt-0">
                {exp.startDate} – {exp.endDate}
              </span>
            </div>
            <p className="text-sm text-[var(--page-muted)] leading-[1.7] mb-3">
              {exp.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {exp.technologies.map((tech, j) => (
                <span key={j} className="tag">{tech}</span>
              ))}
            </div>
            {i < resumeData.experience.length - 1 && <div className="divider" />}
          </div>
        ))}
      </div>
      <p className="page-number">02</p>
    </div>
  )
}

function SkillsPage() {
  const categories = [
    { name: 'Backend', skills: ['C#', '.NET Core', 'ASP.NET', '.NET MVC', 'Web API', 'Entity Framework Core', 'LINQ'] },
    { name: 'Frontend', skills: ['Angular', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Bootstrap', 'Next.js'] },
    { name: 'Database', skills: ['SQL Server', 'PostgreSQL', 'MySQL', 'Firebase'] },
    { name: 'Cloud & DevOps', skills: ['AWS', 'Azure', 'Docker', 'CI/CD', 'Kafka'] },
    { name: 'Other', skills: ['REST APIs', 'Microservices', 'Git', 'Python'] },
  ]

  return (
    <div className="page-content">
      <p className="section-label">Skills</p>
      <h2 className="page-title">Technical Skills</h2>
      <div className="divider" />
      <div className="flex-1 overflow-y-auto pb-4 skill-list">
        {categories.map((cat) => (
          <div key={cat.name} className="skill-group">
            <p className="text-xs font-semibold text-[var(--page-text)] mb-2 uppercase tracking-wider">
              {cat.name}
            </p>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
          </div>
        ))}
        <div className="skill-group">
          <p className="text-xs font-semibold text-[var(--page-text)] mb-2 uppercase tracking-wider">AI Tools</p>
          <div className="flex flex-wrap gap-2">
            {resumeData.aiTools.map((t) => <span key={t} className="tag">{t}</span>)}
          </div>
        </div>
        <div className="skill-group">
          <p className="text-xs font-semibold text-[var(--page-text)] mb-2 uppercase tracking-wider">Dev Tools</p>
          <div className="flex flex-wrap gap-2">
            {resumeData.tools.map((t) => <span key={t} className="tag">{t}</span>)}
          </div>
        </div>
      </div>
      <p className="page-number">03</p>
    </div>
  )
}

function ProjectsPage() {
  return (
    <div className="page-content">
      <p className="section-label">Projects</p>
      <h2 className="page-title">Selected Work</h2>
      <div className="divider" />
      <div className="flex-1 overflow-y-auto">
        {resumeData.projects.map((project, i) => (
          <div key={i} className="skill-group">
            <h3 className="text-base font-semibold text-[var(--page-text)] mb-1">{project.name}</h3>
            <p className="text-sm text-[var(--page-muted)] leading-[1.7] mb-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, j) => (
                <span key={j} className="tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="page-number">04</p>
    </div>
  )
}

function EducationPage() {
  return (
    <div className="page-content">
      <p className="section-label">Education & Certifications</p>
      <h2 className="page-title">Education</h2>
      <div className="divider" />
      <div className="space-y-5 flex-1 overflow-y-auto">
        {resumeData.education.map((edu, i) => (
          <div key={i}>
            <h3 className="text-base font-semibold text-[var(--page-text)]">
              {edu.degree} in {edu.field}
            </h3>
            <p className="text-sm text-[var(--page-highlight)] font-medium mb-1">
              {edu.institution} &middot; {edu.location}
            </p>
            <div className="flex gap-4 text-sm text-[var(--page-muted)] mb-3">
              <span>{edu.year}</span>
              {edu.gpa && <span>GPA: {edu.gpa}</span>}
            </div>
            {'courses' in edu && edu.courses && (
              <div className="flex flex-wrap gap-1.5">
                {(edu.courses as string[]).map((c, j) => (
                  <span key={j} className="tag">{c}</span>
                ))}
              </div>
            )}
            {i < resumeData.education.length - 1 && <div className="divider" />}
          </div>
        ))}
        <div className="divider" />
        <p className="text-xs font-semibold text-[var(--page-text)] mb-3 uppercase tracking-wider">
          Certifications
        </p>
        <div className="space-y-3">
          {resumeData.certifications.map((cert, i) => (
            <div key={i}>
              <p className="text-sm font-semibold text-[var(--page-text)]">{cert.name}</p>
              <p className="text-xs text-[var(--page-muted)]">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="page-number">05</p>
    </div>
  )
}

function ContactPage() {
  const { personalInfo } = resumeData
  return (
    <div className="h-full flex flex-col items-center justify-center text-center px-12">
      <p className="section-label">Contact</p>
      <h2 className="page-title mb-3">Get in Touch</h2>
      <div className="w-16 h-px bg-[var(--page-border)] mx-auto mb-8" />
      <div className="space-y-5 text-sm mb-10">
        <div>
          <p className="text-xs text-[var(--page-muted)] mb-1 uppercase tracking-wider">Email</p>
          <a href={`mailto:${personalInfo.email}`} className="text-[var(--page-highlight)] no-underline hover:underline">
            {personalInfo.email}
          </a>
        </div>
        <div>
          <p className="text-xs text-[var(--page-muted)] mb-1 uppercase tracking-wider">Phone</p>
          <p className="text-[var(--page-text)]">{personalInfo.phone}</p>
        </div>
        <div>
          <p className="text-xs text-[var(--page-muted)] mb-1 uppercase tracking-wider">Location</p>
          <p className="text-[var(--page-text)]">{personalInfo.location}</p>
        </div>
      </div>
      <div className="w-16 h-px bg-[var(--page-border)] mx-auto mb-6" />
      <p className="text-xs text-[var(--page-muted)]">
        {personalInfo.name} &middot; {new Date().getFullYear()}
      </p>
    </div>
  )
}

/* ================================================================
   Pages array — each item = one full-screen page
   ================================================================ */
const pageData = [
  { content: <CoverPage />, label: 'Cover', dark: true },
  { content: <AboutPage />, label: 'About', dark: false },
  { content: <ExperiencePage />, label: 'Experience', dark: false },
  { content: <SkillsPage />, label: 'Skills', dark: false },
  { content: <ProjectsPage />, label: 'Projects', dark: false },
  { content: <EducationPage />, label: 'Education', dark: false },
  { content: <ContactPage />, label: 'Contact', dark: false },
]

/* ================================================================
   Book component — one page at a time, 3D flip on scroll
   ================================================================ */
export default function Book() {
  const [current, setCurrent] = useState(0)
  const isAnimating = useRef(false)
  const total = pageData.length

  const goNext = useCallback(() => {
    if (isAnimating.current) return
    isAnimating.current = true
    setCurrent((c) => (c + 1) % total)
    setTimeout(() => { isAnimating.current = false }, 600)
  }, [total])

  const goPrev = useCallback(() => {
    if (isAnimating.current) return
    isAnimating.current = true
    setCurrent((c) => (c - 1 + total) % total)
    setTimeout(() => { isAnimating.current = false }, 600)
  }, [total])

  const goTo = useCallback((idx: number) => {
    if (isAnimating.current || idx === current) return
    isAnimating.current = true
    setCurrent(idx)
    setTimeout(() => { isAnimating.current = false }, 650)
  }, [current])

  // Input handlers
  useEffect(() => {
    let locked = false

    const lock = () => {
      locked = true
      setTimeout(() => { locked = false }, 700)
    }

    // Find nearest scrollable ancestor of an element
    const getScrollableParent = (el: Element | null): Element | null => {
      while (el) {
        if (el.scrollHeight > el.clientHeight + 1) {
          const style = window.getComputedStyle(el)
          if (style.overflowY === 'auto' || style.overflowY === 'scroll') {
            return el
          }
        }
        el = el.parentElement
      }
      return null
    }

    const canScroll = (el: Element, dir: 'down' | 'up'): boolean => {
      if (dir === 'down') return el.scrollTop + el.clientHeight < el.scrollHeight - 2
      return el.scrollTop > 2
    }

    const onWheel = (e: WheelEvent) => {
      const scrollable = getScrollableParent(e.target as Element)
      const dir = e.deltaY > 0 ? 'down' : 'up' as const
      if (scrollable && canScroll(scrollable, dir)) {
        return // let inner content scroll naturally
      }
      e.preventDefault()
      if (locked) return

      if (e.deltaY > 15) {
        lock()
        goNext()
      } else if (e.deltaY < -15) {
        lock()
        goPrev()
      }
    }

    const onKey = (e: KeyboardEvent) => {
      if (locked) return
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault(); lock(); goNext()
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault(); lock(); goPrev()
      }
    }

    let touchY = 0
    let touchTarget: Element | null = null
    const onTouchStart = (e: TouchEvent) => {
      touchY = e.touches[0].clientY
      touchTarget = e.target as Element
    }
    const onTouchEnd = (e: TouchEvent) => {
      if (locked) return
      const d = touchY - e.changedTouches[0].clientY
      const dir = d > 0 ? 'down' : 'up' as const

      // If inside a scrollable container that can still scroll, don't flip
      const scrollable = getScrollableParent(touchTarget)
      if (scrollable && canScroll(scrollable, dir)) return

      if (d > 40) { lock(); goNext() }
      else if (d < -40) { lock(); goPrev() }
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('keydown', onKey)
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchend', onTouchEnd, { passive: true })

    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [goNext, goPrev])

  return (
    <>
      <div className="page-scene">
        <div className="page-stack">
          {pageData.map((page, index) => {
            let state: 'current' | 'above' | 'below'
            if (index === current) state = 'current'
            else if (index < current) state = 'above'
            else state = 'below'

            return (
              <div
                key={index}
                className={`page-leaf ${state} ${page.dark ? 'cover-dark' : 'simple-corners'}`}
              >
                {page.dark && (
                  <>
                    <div className="corner-ornament tl"><GoldCorner /></div>
                    <div className="corner-ornament tr"><GoldCorner /></div>
                    <div className="corner-ornament bl"><GoldCorner /></div>
                    <div className="corner-ornament br"><GoldCorner /></div>
                  </>
                )}
                {page.content}
              </div>
            )
          })}
        </div>
      </div>

      <div className="book-nav">
        <button className="nav-btn" onClick={goPrev} aria-label="Previous">
          &#8249;
        </button>
        <div className="nav-dots">
          {pageData.map((_, i) => (
            <button
              key={i}
              className={`nav-dot ${current === i ? 'active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Page ${i + 1}`}
            />
          ))}
        </div>
        <span className="nav-label">{pageData[current].label}</span>
        <button className="nav-btn" onClick={goNext} aria-label="Next">
          &#8250;
        </button>
      </div>
    </>
  )
}
