import React, { useState } from 'react'
import { motion } from 'framer-motion'

// Replace profile.jpg in /public or assets
const PROFILE = '/assets/profile.jpg'

const skills = [
  { title: 'Languages', items: ['JavaScript (ES6+)', 'Python', 'C++, Java (basic)'] },
  { title: 'Frontend', items: ['React.js', 'HTML5', 'CSS3', 'Tailwind'] },
  { title: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs'] },
  { title: 'Databases', items: ['MongoDB', 'MySQL'] },
]

const projects = [
  {
    title: 'CitiWatch — Traffic Violation Reporting System',
    tech: 'MERN, MongoDB Atlas, CI/CD',
    desc: 'Full-stack application to report violations, upload images, and track complaints. Implemented modular architecture and optimized queries.'
  },
  {
    title: 'CodeMate — AI-Powered LeetCode Assistant',
    tech: 'MERN, OpenAI API, JWT',
    desc: 'Platform that reviews code submissions and provides AI-generated hints, code reviews, and debugging assistance.'
  }
]

export default function App(){
  return (
    <div className="min-h-screen text-slate-100 antialiased">
      <Nav />
      <main className="max-w-6xl mx-auto px-6 lg:px-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

function Nav(){
  return (
    <nav className="sticky top-4 z-40">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6 bg-transparent">
        <div className="text-xl font-bold text-white">Srujan N S</div>
        <div className="space-x-6 hidden md:flex">
          <a href="#about" className="text-slate-300 hover:text-white">About</a>
          <a href="#skills" className="text-slate-300 hover:text-white">Skills</a>
          <a href="#projects" className="text-slate-300 hover:text-white">Projects</a>
          <a href="#contact" className="text-slate-300 hover:text-white">Contact</a>
        </div>
      </div>
    </nav>
  )
}

function Hero(){
  return (
    <section className="grid lg:grid-cols-2 gap-10 items-center py-20">
      <motion.div initial={{opacity:0, x:-40}} animate={{opacity:1, x:0}} transition={{duration:0.6}}>
        <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-cyan-300">
          Hi, I’m Srujan N S
        </h1>

        <p className="mt-4 text-slate-300 max-w-xl">
          Software Developer & Full-Stack (MERN). I build scalable web applications, APIs, and developer tools with a focus on performance, clean code and great UX.
        </p>

        <div className="mt-6 flex gap-4">
          <a href="#projects" className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-[var(--accent)] text-black font-semibold">
            View Projects
          </a>
          <a href="/assets/Srujan_N_S_Updated_V2.pdf" download className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-slate-700">
            Download Resume
          </a>
        </div>

        <div className="mt-8 text-sm text-slate-400">
          <p><strong>Location:</strong> Mysore, India</p>
          <p className="mt-1">
            <strong>Contact:</strong>
            <a href="mailto:srujan.ns.work@gmail.com" className="text-[var(--accent)]">
              srujan.ns.work@gmail.com
            </a> • +91 7204812429
          </p>
        </div>
      </motion.div>

      <motion.figure className="mx-auto w-72" initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
        <div className="bg-gradient-to-tr from-[#06202b] via-[#071827] to-[#091825] p-1 rounded-3xl shadow-2xl">
          <img src={PROFILE} alt="Srujan" className="w-full h-full rounded-2xl object-cover" />
        </div>
      </motion.figure>
    </section>
  )
}

function About(){
  return (
    <section id="about" className="py-10">
      <h2 className="text-3xl font-semibold text-[var(--accent)]">About</h2>

      <div className="mt-6 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 card">
          <p className="text-slate-300">
            Motivated and detail-oriented Full Stack Developer with a strong foundation in Data Structures, Algorithms,
            and Object-Oriented Programming. Hands-on experience in SDLC, including requirements analysis, design,
            development, testing, and deployment. Skilled in MERN stack development, API integration, and database design.
            Proficient with Git/GitHub, Agile methodology, and modern web frameworks like React.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm text-slate-400">Education</h4>
              <p className="mt-1">B.E. in Computer Science</p>
            </div>

            <div>
              <h4 className="text-sm text-slate-400">Certifications</h4>
              <p className="mt-1">JavaScript (HackerRank), Responsive Web Design (freeCodeCamp)</p>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold">Quick Info</h3>
          <ul className="mt-4 text-slate-300 space-y-2">
            <li><strong>Location:</strong> Mysore, India</li>
            <li>
              <strong>LinkedIn:</strong>
              <a href="https://linkedin.com/in/srujan-n-s-976062281" className="text-[var(--accent)]">
                linkedin.com/in/srujan-n-s-976062281
              </a>
            </li>
            <li><strong>Soft Skills:</strong> Communication, Teamwork, Problem Solving</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function Skills(){
  return (
    <section id="skills" className="py-10">
      <h2 className="text-3xl font-semibold text-[var(--accent)]">Skills</h2>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {skills.map(s => (
          <div key={s.title} className="card">
            <h4 className="font-semibold text-white">{s.title}</h4>
            <ul className="mt-3 text-slate-300 list-disc list-inside">
              {s.items.map(it => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

function Projects(){
  return (
    <section id="projects" className="py-10">
      <h2 className="text-3xl font-semibold text-[var(--accent)]">Projects</h2>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {projects.map(p => (
          <article key={p.title} className="card">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-slate-300">{p.desc}</p>
            <div className="mt-4 text-sm text-slate-400">
              <strong>Tech:</strong> {p.tech}
            </div>

            <div className="mt-4 flex gap-3">
              <a className="text-sm px-3 py-2 rounded-md bg-slate-800 hover:bg-slate-700">View Code</a>
              <a className="text-sm px-3 py-2 rounded-md border border-slate-700">Live Demo</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Contact(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  async function handleSubmit(e){
    e.preventDefault()
    setStatus(null)
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({ ok: false, message: 'Please fill all fields.' })
      return
    }

    setLoading(true)
    try {
      const base = import.meta.env.VITE_API_BASE || ''
      const res = await fetch(`${base}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      })
      const data = await res.json().catch(()=>({}))
      if (res.ok) {
        setStatus({ ok: true, message: 'Message sent. Thank you!' })
        setName(''); setEmail(''); setMessage('')
      } else {
        setStatus({ ok: false, message: data?.error || 'Failed to send message.' })
      }
    } catch (err) {
      console.error(err)
      setStatus({ ok: false, message: 'Network error. Try later.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-10">
      <h2 className="text-3xl font-semibold text-[var(--accent)]">Contact</h2>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="card">
          <h4 className="font-semibold">Get in touch</h4>
          <p className="mt-2 text-slate-300">
            I’m currently open to new roles and freelance projects. Feel free to reach out via email or LinkedIn.
          </p>

          <ul className="mt-4 text-slate-300">
            <li><strong>Email:</strong> <a href="mailto:srujan.ns.work@gmail.com" className="text-[var(--accent)]">
              srujan.ns.work@gmail.com</a>
            </li>
            <li className="mt-2"><strong>Phone:</strong> +91 7204812429</li>
          </ul>
        </div>

        <form className="card space-y-4" onSubmit={handleSubmit}>
          <input aria-label="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Your name" className="w-full p-3 rounded-md bg-[#0b1220] border border-slate-800" />
          <input aria-label="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="w-full p-3 rounded-md bg-[#0b1220] border border-slate-800" />
          <textarea aria-label="message" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Message" className="w-full p-3 rounded-md bg-[#0b1220] border border-slate-800 h-28"></textarea>

          <button type="submit" disabled={loading} className="w-full py-3 rounded-md bg-[var(--accent)] text-black font-semibold">
            {loading ? 'Sending…' : 'Send Message'}
          </button>

          {status && (
            <div className={`text-sm mt-2 ${status.ok ? 'text-green-400' : 'text-red-400'}`}>
              {status.message}
            </div>
          )}
        </form>
      </div>
    </section>
  )
}

function Footer(){
  return (
    <footer className="py-8 mt-12 text-center text-slate-400">
      <div className="max-w-6xl mx-auto">
        © {new Date().getFullYear()} Srujan N S 
      </div>
    </footer>
  )
}
