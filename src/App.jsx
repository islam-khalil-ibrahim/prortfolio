import './App.css'

function App() {
  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Islam Khalil-Ibrahim, home">
          <span className="brand-mark">IK</span>
          <span className="brand-name">ISLAM KHALIL-IBRAHIM</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a className="nav-contact" href="#contact">Let's talk <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="availability-dot" /> COMPUTER SYSTEMS ENGINEER <span className="eyebrow-divider">/</span> BETHLEHEM, PALESTINE</p>
            <h1 id="hero-title">I build thoughtful software for the <em>real world.</em></h1>
            <p className="hero-intro">From dependable back-end systems to hands-on embedded projects, I turn curious ideas into useful things people can rely on.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <span aria-hidden="true">↓</span></a>
              <a className="text-link" href="mailto:islamdariyah4@gmail.com">Get in touch <span aria-hidden="true">↗</span></a>
            </div>
            <div className="hero-meta"><span>Computer Systems Engineering</span><span className="meta-line" /><span>PPU · Class of 2026</span></div>
          </div>

          <div className="hero-visual" aria-label="A snapshot of my engineering toolkit">
            <div className="visual-grid" />
            <div className="visual-label"><span className="live-dot" /> CURRENTLY BUILDING</div>
            <div className="terminal-window">
              <div className="terminal-topbar"><div className="window-dots"><i /><i /><i /></div><span>system.config.ts</span><span className="terminal-language">TS</span></div>
              <div className="terminal-code" aria-label="TypeScript code illustration">
                <div><span className="line-number">01</span><span className="code-purple">const</span> <span className="code-yellow">engineer</span> = {'{'}</div>
                <div><span className="line-number">02</span><span className="code-muted">  focus:</span> <span className="code-green">'useful software'</span>,</div>
                <div><span className="line-number">03</span><span className="code-muted">  tools:</span> [<span className="code-green">'TypeScript'</span>,</div>
                <div><span className="line-number">04</span>          <span className="code-green">'Raspberry Pi'</span>],</div>
                <div><span className="line-number">05</span><span className="code-muted">  mindset:</span> <span className="code-green">'keep learning'</span></div>
                <div><span className="line-number">06</span>{'}'}</div>
                <div className="terminal-cursor-row"><span className="line-number">07</span><span className="terminal-cursor" /></div>
              </div>
            </div>
            <div className="visual-sticker"><span>Ideas</span><span className="sticker-arrow">↘</span><span>into systems</span></div>
            <div className="visual-caption"><span>01 — 03</span><span>CODE · DESIGN · HARDWARE</span></div>
            <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
          </div>
        </section>

        <section className="work-section section-wrap" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <div><p className="section-kicker">01 / SELECTED WORK</p><h2 id="work-title">Built with curiosity.<br /><span>Made to work.</span></h2></div>
            <p className="section-aside">A mix of software, interfaces, and connected systems, each shaped around a practical problem.</p>
          </div>

          <div className="project-grid">
            <article className="project-card ecommerce-card">
              <a className="ecommerce-visual" href="https://3legant-alpha.vercel.app/" target="_blank" rel="noreferrer" aria-label="Visit the 3legant jewelry store">
                <img src="https://3legant-alpha.vercel.app/images/jewelry/hero.png" alt="Jewelry collection from the 3legant online store" />
                <span className="ecommerce-label">3LEGANT · ONLINE STORE</span>
                <span className="ecommerce-badge">CASH<br />ON DELIVERY</span>
                <span className="ecommerce-arrow" aria-hidden="true">↗</span>
              </a>
              <div className="card-copy">
                <div className="project-overline"><span>01</span><span>BACK-END · E-COMMERCE</span></div>
                <h3>3legant<br />Jewelry Store</h3>
                <p>A jewelry shopping experience with curated collections, product pages, and cash-on-delivery ordering.</p>
                <div className="project-tags"><span>E-commerce</span><span>Product catalog</span><span>Live project</span></div>
                <a className="project-visit" href="https://3legant-alpha.vercel.app/" target="_blank" rel="noreferrer">Visit live store <span aria-hidden="true">↗</span></a>
              </div>
            </article>

            <article className="project-card api-card">
              <div className="api-visual" aria-label="Library API endpoints for books">
                <div className="api-topline"><span>LIBRARY API</span><span className="api-status">NESTJS BACKEND</span></div>
                <div className="api-route"><span className="method-pill">GET</span><span>/books/getAllBooks</span><span className="route-arrow">↗</span></div>
                <div className="api-route"><span className="method-pill post-method">POST</span><span>/books/addBook</span><span className="route-arrow">↗</span></div>
                <div className="api-response"><span>DATA</span><span>TypeORM · PostgreSQL</span></div>
              </div>
              <div className="card-copy">
                <div className="project-overline"><span>02</span><span>BACK-END · LIBRARY SYSTEM</span></div>
                <h3>Library<br />Management API</h3>
                <p>Book management endpoints for creating, editing, deleting, searching, and filtering by price, with a login route.</p>
                <div className="project-tags"><span>TypeScript</span><span>NestJS</span><span>TypeORM</span><span>PostgreSQL</span></div>
                <a className="project-visit" href="https://github.com/islam-khalil-ibrahim/library_back_end" target="_blank" rel="noreferrer">View source on GitHub <span aria-hidden="true">↗</span></a>
              </div>
            </article>

            <article className="project-card motivation-card">
              <div className="motivation-visual" aria-label="Daily workflow from schedule trigger through Google Sheets, AI Agent, and email">
                <span className="motivation-caption">DAILY MOTIVATION QUOTE SENDER</span>
                <div className="motivation-track">
                  <div className="motivation-node"><span className="motivation-icon">◷</span><span>Schedule</span></div><span className="motivation-arrow">›</span>
                  <div className="motivation-node"><span className="motivation-icon sheets-icon">▦</span><span>Sheets</span></div><span className="motivation-arrow">›</span>
                  <div className="motivation-node"><span className="motivation-icon">↻</span><span>Loop</span></div><span className="motivation-arrow">›</span>
                  <div className="motivation-node"><span className="motivation-icon agent-icon">AI</span><span>AI Agent</span></div><span className="motivation-arrow">›</span>
                  <div className="motivation-node"><span className="motivation-icon code-icon">{'{}'}</span><span>JavaScript</span></div><span className="motivation-arrow">›</span>
                  <div className="motivation-node"><span className="motivation-icon mail-icon">✉</span><span>Email</span></div>
                </div>
                <div className="motivation-model"><span className="gemini-mark">✦</span><span>Google Gemini Chat Model</span></div>
                <span className="motivation-duration">AUTOMATED · DAILY</span>
              </div>
              <div className="card-copy">
                <div className="project-overline"><span>03</span><span>AI · WORKFLOW AUTOMATION</span></div>
                <h3>A little motivation,<br />delivered daily.</h3>
                <p>Reads subscriber data from Google Sheets, generates personalized motivational quotes with Gemini, then delivers them by email.</p>
                <div className="project-tags"><span>n8n</span><span>Google Sheets</span><span>Gemini AI</span><span>Email automation</span></div>
              </div>
            </article>

            <article className="project-card automation-card">
              <div className="automation-visual" aria-label="Workflow connecting a form, Notion, and Gmail">
                <div className="workflow-node form-node"><span className="node-icon">▤</span><span>Form trigger</span></div>
                <div className="workflow-connector"><i /></div>
                <div className="workflow-node notion-node"><span className="node-icon">N</span><span>Notion</span></div>
                <div className="workflow-connector"><i /></div>
                <div className="workflow-node gmail-node"><span className="node-icon">✉</span><span>Gmail</span></div>
                <span className="workflow-live"><i /> WORKFLOW ACTIVE</span>
              </div>
              <div className="card-copy">
                <div className="project-overline"><span>04</span><span>WORKFLOW AUTOMATION</span></div>
                <h3>Task management,<br />without the busywork.</h3>
                <p>Connected form submissions, Notion, and Gmail with n8n workflows, webhooks, and conditional logic.</p>
                <div className="project-tags"><span>n8n</span><span>Notion API</span><span>Webhooks</span></div>
              </div>
            </article>

            <article className="project-card graduation-card">
              <div className="graduation-visual">
                <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1500&q=85" alt="Rows of bookshelves in a library" />
                <div className="image-wash" />
                <span className="image-index">GRADUATION PROJECT · 2025—26</span>
                <div className="vision-frame"><span>BOOK</span></div>
                <div className="image-bottom-label"><span>VISION SYSTEM</span><span className="detection-line" /><span>BOOK / IDENTIFIED</span></div>
              </div>
              <div className="card-copy">
                <div className="project-overline"><span>05</span><span>COMPUTER VISION · EMBEDDED</span></div>
                <h3>Smart Book<br />Re-Shelving System</h3>
                <p>An automated system combining computer vision, sensors, and actuators to identify and return books to their place.</p>
                <div className="project-tags"><span>Python</span><span>Raspberry Pi</span><span>Computer Vision</span><span>Embedded Systems</span></div>
              </div>
            </article>

            <article className="project-card movie-card">
              <div className="movie-visual" aria-label="Movie search application interface preview">
                <div className="movie-toolbar"><span>MOVIE SEARCH</span><span>LOG IN</span></div>
                <div className="movie-searchbar"><span className="movie-search-icon">⌕</span><span>Find a movie...</span><span className="search-key">↵</span></div>
                <div className="movie-posters"><div className="movie-poster poster-forest"><i /><span>DISCOVER</span></div><div className="movie-poster poster-sun"><i /><span>EXPLORE</span></div><div className="movie-poster poster-coral"><i /><span>FAVORITES</span></div></div>
                <div className="movie-visual-foot"><span>SEARCH · SAVE · EXPLORE</span><span>01 — 03</span></div>
              </div>
              <div className="card-copy">
                <div className="project-overline"><span>06</span><span>FRONT-END · MOVIE APP</span></div>
                <h3>Movie Search</h3>
                <p>A responsive movie app for searching by category, exploring film details, and saving favorites, with registration and login.</p>
                <div className="project-tags"><span>HTML</span><span>CSS</span><span>JavaScript</span><span>GitHub Pages</span></div>
                <div className="project-links"><a className="project-visit" href="https://islam-khalil-ibrahim.github.io/Movie-Search-App/" target="_blank" rel="noreferrer">Visit app <span aria-hidden="true">↗</span></a><a className="project-visit" href="https://github.com/islam-khalil-ibrahim/Movie-Search-App" target="_blank" rel="noreferrer">Source code <span aria-hidden="true">↗</span></a></div>
              </div>
            </article>
          </div>
        </section>

        <section className="about-section section-wrap" id="about" aria-labelledby="about-title">
          <div className="about-intro">
            <p className="section-kicker">02 / A LITTLE ABOUT ME</p>
            <h2 id="about-title">Curious by nature.<br /><span>Engineer by practice.</span></h2>
            <p className="about-copy">I’m a Computer Systems Engineering graduate who enjoys understanding how things fit together, then building something useful from the pieces. I learn quickly, care about the details, and like work that connects software to everyday life.</p>
            <div className="languages-line"><span>LANGUAGES</span><span>Arabic <i /> English</span></div>
          </div>
          <div className="journey">
            <p className="section-kicker">EDUCATION & EXPERIENCE</p>
            <article className="journey-item journey-featured">
              <div className="journey-date">SEP 2020 — JAN 2026</div>
              <div className="journey-detail"><h3>Palestine Polytechnic University</h3><p>Bachelor’s Degree · Computer Systems Engineering</p><span className="gpa-mark">GPA <strong>3.3</strong> / 4</span></div>
            </article>
            <article className="journey-item">
              <div className="journey-date">JUL — SEP 2026</div>
              <div className="journey-detail"><h3>Backend Development Training</h3><p>Wahj · TypeScript, NestJS, TypeORM, PostgreSQL, JWT</p></div>
            </article>
            <article className="journey-item">
              <div className="journey-date">JUN 2026</div>
              <div className="journey-detail"><h3>n8n Workflow Automation</h3><p>Ansarify · Instructor: Amar Rama</p></div>
            </article>
            <article className="journey-item">
              <div className="journey-date">MAY — SEP 2024</div>
              <div className="journey-detail"><h3>Front-End Web Developer Nanodegree</h3><p>Udacity · Hands-on front-end development projects</p></div>
            </article>
            <article className="journey-item">
              <div className="journey-date">JAN — MAY 2024</div>
              <div className="journey-detail"><h3>Web Development</h3><p>Gaza Sky Geeks · React interface development</p></div>
            </article>
            <article className="journey-item">
              <div className="journey-date">MAY — JUL 2023</div>
              <div className="journey-detail"><h3>Computer Hardware & Maintenance</h3><p>Electronic components, microprocessors, and troubleshooting</p></div>
            </article>
            <article className="journey-item">
              <div className="journey-date">JUL — AUG 2021</div>
              <div className="journey-detail"><h3>Summer Camp Volunteer</h3><p>Taught C++ and HTML, introduced Adobe XD, and coordinated learning activities</p></div>
            </article>
          </div>
        </section>

        <section className="skills-band" id="skills" aria-labelledby="skills-title">
          <div className="section-wrap skills-inner">
            <div className="skills-heading"><p className="section-kicker">03 / THE TOOLKIT</p><h2 id="skills-title">A practical<br />mix of skills.</h2><p>Comfortable moving between code, interfaces, and the physical world.</p></div>
            <div className="skill-groups">
              <div className="skill-row"><span className="skill-label">BACK END</span><div className="skill-list"><span>TypeScript</span><span>NestJS</span><span>Node.js</span><span>REST APIs</span><span>PostgreSQL</span></div></div>
              <div className="skill-row"><span className="skill-label">FRONT END</span><div className="skill-list"><span>React</span><span>JavaScript</span><span>HTML & CSS</span><span>Tailwind CSS</span></div></div>
              <div className="skill-row"><span className="skill-label">LANGUAGES</span><div className="skill-list"><span>C++</span><span>Python</span><span>Java</span><span>C</span><span>Dart</span></div></div>
              <div className="skill-row"><span className="skill-label">EMBEDDED & IoT</span><div className="skill-list"><span>Raspberry Pi</span><span>Arduino</span><span>ESP32</span><span>8085 / 8086</span><span>GPIO · I2C · SPI · UART</span><span>Arduino Cloud</span><span>Sensor data logging</span></div></div>
              <div className="skill-row"><span className="skill-label">DESIGN & TOOLS</span><div className="skill-list"><span>Figma</span><span>Adobe XD</span><span>Git & GitHub</span><span>Postman</span><span>Microsoft Azure</span></div></div>
              <div className="skill-row"><span className="skill-label">SOFT SKILLS</span><div className="skill-list"><span>Problem-solving</span><span>Critical thinking</span><span>Teamwork</span><span>Time management</span><span>Communication</span><span>Fast learner</span></div></div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-inner section-wrap">
            <div><p className="section-kicker">04 / HAVE A PROJECT IN MIND?</p><h2 id="contact-title">Let’s build<br /><em>something useful.</em></h2></div>
            <div className="contact-links"><a className="email-link" href="mailto:islamdariyah4@gmail.com">islamdariyah4@gmail.com <span>↗</span></a><div className="social-links"><a href="https://github.com/islam-khalil-ibrahim" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/islam-khalil-ibrahim" target="_blank" rel="noreferrer">LinkedIn ↗</a><span>Beit Fajjar, Bethlehem</span></div></div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap"><a className="footer-brand" href="#top">IK<span>.</span></a><span>Designed & built with care.</span><span>© 2026 Islam Khalil-Ibrahim</span></footer>
    </div>
  )
}

export default App
