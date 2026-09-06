import { useEffect, useState, type ReactNode } from 'react'
import { ArrowDown, ArrowRight, ArrowUpRight, AtSign, BarChart3, BarChart2, Briefcase, Camera, Check, ChevronLeft, ChevronRight, Compass, ExternalLink, Film, Hash, Heart, ImageIcon, Laptop, Layers, Lightbulb, Mail, MapPin, Menu, MessageCircle, Palette, Play, PlayCircle, Search, Send, Sparkles, TrendingUp, Users, Video, X, Zap } from 'lucide-react'
import { CountUp, ImageSlot, Pill, Reveal, SectionIntro, TiltCard } from '../components/PortfolioUI'

const services = [
  { number: '01', title: 'SOCIAL MEDIA', icon: AtSign, copy: 'Crafting content, viral hooks, and high-engagement brand communities that have personalities behind the screen.', color: 'red' },
  { number: '02', title: 'AI VIDEO GENERATION', icon: Video, copy: 'Turning concepts into scroll-stopping visual stories with AI-powered short-form video workflows and Reels/Shorts.', color: 'navy' },
  { number: '03', title: 'SEO & DISCOVERY', icon: Search, copy: 'Optimizing search discoverability through keyword research, Google Search Console, and Google Business Profile.', color: 'beige' },
  { number: '04', title: 'CONTENT STRATEGY', icon: Lightbulb, copy: 'Planning what to say, where to say it, and why it converts, all from idea to script, shoot, and publishing.', color: 'navy' },
  { number: '05', title: 'ANALYTICS & GROWTH', icon: BarChart3, copy: 'Decoding metrics to understand viewer retention, follower growth, reach signals, and continuous ROI.', color: 'red' },
]

const experiences = [
  {
    company: 'ARVIND ADVERTIZING',
    role: 'DIGITAL MARKETING INTERN',
    date: 'JUN 2026 — PRESENT',
    image: '/images/arvind/Arvind_Advertizing2.PNG',
    brandLogo: { src: '/images/arvind/logo.PNG', alt: 'Arvind Advertizing logo' },
    alt: 'Arvind Advertizing digital marketing and website presence',
    copy: 'Built the brand digital presence from scratch across Instagram, LinkedIn, and Google Business Profile, combining SEO search strategy, content systems, web optimization and analytics at the center.',
    metrics: [
      ['35%+', 'FOLLOWER ENGAGEMENT / 4 WEEKS'],
      ['10+', 'TARGET KEYWORDS IN TOP 5'],
      ['20%', 'SESSION DURATION UPLIFT'],
    ],
  },
  {
    company: 'HELIX ESPORTS',
    role: 'SOCIAL MEDIA MANAGEMENT EXECUTIVE',
    date: 'FEB 2025 — PRESENT',
    image: '/images/helix/HELIX_IG.PNG',
    brandLogo: { src: '/images/helix/logo.png', alt: 'Helix Esports logo' },
    alt: 'Helix Esports viral social media reach and tournament content',
    copy: 'Creating community-led content systems managing social media strategy for esports and gaming(BGCS LAN, BGIS 2026) and gaming creators, driving explosive organic reach with reels crossing 9.4 Million views.',
    metrics: [
      ['9.4M+', 'VIRAL REEL REACH / 2× POST REACH'],
      ['40%+', 'COMMUNITY ENGAGEMENT GROWTH'],
      ['20+', 'CONTENT PIECES / MONTH'],
    ],
  },
]

function BrandBadge({ logo, label }: { logo: { src: string; alt: string }; label: string }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className="visual-sticker visual-sticker--logo" aria-label={label} title={label}>
      {!failed ? (
        <img src={logo.src} alt={logo.alt} onError={() => setFailed(true)} />
      ) : (
        <ImageIcon size={30} strokeWidth={1.5} aria-hidden="true" />
      )}
    </div>
  )
}

const toolIconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  'Instagram': AtSign,
  'LinkedIn': Briefcase,
  'YouTube': PlayCircle,
  'Short-form Video': Video,
  'Community Management': Users,
  'Content Direction': Compass,
  'SEMrush': BarChart2,
  'Google Search Console': Search,
  'Google Business Profile': MapPin,
  'Google Analytics': BarChart3,
  'Keyword Research': Hash,
  'Meta Business Suite': Layers,
  'Figma': Layers,
  'Canva': Palette,
  'AI Video Generation': Sparkles,
  'Viral Hook Scripting': Zap,
  'Reels & Shorts Strategy': Film,
  'Trend Forecasting': TrendingUp,
}

const tools = {
  'SOCIAL MEDIA & CREATION': ['Instagram', 'LinkedIn', 'YouTube', 'Canva', 'Figma', 'Short-form Video', 'Community Management', 'Content Direction'],
  'SEO & ANALYTICS': ['SEMrush', 'Google Search Console', 'Google Analytics', 'Google Business Profile', 'Keyword Research', 'Meta Business Suite'],
  'AI & WORKFLOWS': ['AI Video Generation', 'Viral Hook Scripting', 'Reels & Shorts Strategy', 'Trend Forecasting'],
}

const projects = [
  {
    title: 'ARVIND ADVERTIZING / BRAND FROM ZERO',
    category: 'DIGITAL MARKETING & SEO',
    image: '/images/arvind/Arvind_Advertizing.png',
    result: '35%+ engagement & search growth',
    copy: 'Complete end-to-end digital foundation: website presence, social channels, keyword optimization, and Google Business Profile setup.',
    challenge: 'Establish authority and customer trust for a premier printing and branding leader through organic search and high-value social content.',
    outcome: '10+ target keywords ranked on top search pages, 20% boost in website session duration, and 35%+ engagement surge within 4 weeks.',
  },
  {
    title: 'HELIX ESPORTS / COMMUNITY CONTENT',
    category: 'SOCIAL MEDIA & VIRAL REACH',
    image: '/images/helix/HELIX_IG2.jpeg',
    result: '9.4M+ viral reel reach',
    copy: 'From content strategy to analysing the growth, including creator memes and fast-paced gaming content for BGCS LAN, BGIS.',
    challenge: 'Amplify tournament hype, turn gaming highlights into viral organic reels, and convert casual viewers into dedicated community members.',
    outcome: 'Achieved individual reel reach of 9.4M+ and 108K+ views, doubling average post reach across the entire Instagram channel.',
  },
  {
    title: '25+ BRAND COLLABORATION CAMPAIGNS',
    category: 'INFLUENCER & BRAND MARKETING',
    image: '/images/profile/BRAND_COVER1.PNG',
    secondImage: '/images/profile/BRAND_COVER2.PNG',
    result: '25+ brands partnered & featured',
    copy: 'High-impact product integration reels, UGC showcases, and lifestyle campaigns across beauty, wellness, D2C, and apparel.',
    challenge: 'Deliver authentic, engaging product demonstrations for leading brands including Nykaa, Swiss Beauty, WishCare, Underneat, Paradyes, and Fat Tiger.',
    outcome: 'Generated top save-and-share metrics, genuine audience trust, and repeat brand partnership opportunities.',
  },
  {
    title: 'PERSONAL CREATIVE & VIRAL STRATEGY',
    category: 'CONTENT CREATION & AUDIENCE BUILDING',
    image: '/images/personal/AASHITA_IG.PNG',
    secondImage: '/images/personal/AASHITA_YT.PNG',
    result: '2.5M+ 30-day views · 4.8M viral reel',
    copy: 'Building a relatable personal brand through lifestyle storytelling, viral comedy hooks, and unfiltered YouTube vlogs.',
    challenge: 'Test viral video pacing, hook dynamics, and viewer retention strategies in real time on personal social channels.',
    outcome: 'Surpassed 2.5M views in 30 days, viral reels clocking 4.8M, 3.3M, and 2.1M views, alongside a 205-video travel vlog catalog.',
  },
]

const brandNames = [
  'Nykaa', 'Swiss Beauty', 'WishCare', 'Underneat', 'Paradyes', 'Fat Tiger', 'Silly Dough', 'Gully Beans', 'Nutranext', 'Avni Wellness', 'Beneka', 'The Happy Baker'
]

function Header({ open, setOpen }: { open: boolean; setOpen: (value: boolean) => void }) {
  const links = [
    ['ABOUT', 'about'],
    ['WHAT I DO', 'services'],
    ['WORK', 'work'],
    ['EXPERIENCE', 'experience'],
    ['RESULTS', 'results'],
    ['TOOLS', 'tools'],
    ['PROJECTS', 'projects'],
    ['PERSONAL', 'personal'],
    ['CONTACT', 'contact'],
  ]
  return (
    <header className="site-header site-header--light">
      <a className="brand" href="#top" aria-label="Aashita home">
        <span className="brand-dot" />AASHITA MALHOTRA
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map(([label, id]) => (
          <a href={`#${id}`} key={id}>{label}</a>
        ))}
        <a className="nav-pass" href="mailto:aashita.malhotra28@gmail.com">
          <Mail size={14} /> LET'S TALK
        </a>
      </nav>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      {open && (
        <div className="mobile-menu mobile-menu--light">
          <div className="mobile-menu-top">
            <span>MENU / AASHITA</span>
            <span>CREATIVE MARKETING</span>
          </div>
          {links.map(([label, id], index) => (
            <a href={`#${id}`} key={id} onClick={() => setOpen(false)}>
              <small>0{index + 1}</small>{label}<ArrowRight size={18} />
            </a>
          ))}
          <a className="mobile-menu-contact" href="mailto:aashita.malhotra28@gmail.com">
            LET'S TALK <ArrowUpRight size={18} />
          </a>
        </div>
      )}
    </header>
  )
}

function Sticker({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <span className={`sticker ${className}`}>{children}</span>
}

function Hero() {
  return (
    <section className="new-hero" id="top">
      <div className="hero-sun" />
      <div className="hero-doodle hero-doodle--one">✳</div>
      <div className="hero-doodle hero-doodle--two">↗</div>
      <div className="hero-note hero-note--top">
        SOCIAL MEDIA<br />DIGITAL MARKETING<br />SEO <span>#LET'SMAKEITVISIBLE</span>
      </div>
      <Sticker className="sticker--pink">CREATIVE<br />MODE: ON</Sticker>
      <Sticker className="sticker--star">✦</Sticker>
      <Sticker className="sticker--heart"><Heart size={17} fill="currentColor" /></Sticker>

      <div className="hero-collage" aria-label="Creative marketing collage">
        <div className="mock-phone">
          <div className="mock-phone-top">
            <span>9:41</span>
            <span>● ● ●</span>
          </div>
          <div className="mock-profile">
            <span className="mock-avatar">
              <img src="/images/personal/AASHITA_PORTRAIT2.jpeg" alt="Aashita avatar" className="mock-avatar-img" />
            </span>
            <span><b>aashita.malhotra28</b><small>creator / strategist</small></span>
            <span>•••</span>
          </div>
          <div className="mock-reel mock-reel--has-img">
            <img src="/images/personal/AASHITA_IG.PNG" alt="Aashita viral reel preview" className="mock-reel-img" />
            <div className="mock-reel-overlay">
              <div className="mock-reel-badge">2.5M VIEWS / 30D</div>
              <span>turn ideas<br />into impact.</span>
            </div>
          </div>
          <div className="mock-actions">
            <Heart size={16} fill="#b82036" color="#b82036" />
            <MessageCircle size={16} />
            <Send size={16} />
            <small>liked by 1.7k+ people</small>
          </div>
        </div>

        <div className="mock-camera">
          <Camera size={32} />
          <span>shoot<br />something<br />good</span>
        </div>

        <div className="mock-laptop">
          <div className="mock-laptop-screen">
            <div className="mini-bar mini-bar--one" />
            <div className="mini-bar mini-bar--two" />
            <div className="mini-bar mini-bar--three" />
            <div className="mini-chart" />
          </div>
          <span>content / analytics</span>
        </div>

        <div className="hero-photo-slot" title="Aashita Malhotra">
          <ImageSlot
            src="/images/personal/AASHITA_PORTRAIT2.jpeg"
            alt="Aashita Malhotra — Creative Marketer"
            index={0}
          />
          <div className="hero-photo-tag">AASHITA M. ↗</div>
        </div>
      </div>

      <div className="hero-copy-new">
        <div className="eyebrow eyebrow--light">
          <span className="eyebrow-dot" />DIGITAL MARKETING · SOCIAL MEDIA · SEO
        </div>
        <h1>
          <span>TURNING</span>
          <span className="hero-red">ATTENTION</span>
          <span>INTO IMPACT.</span>
        </h1>
        <p>
          Hi, I’m Aashita! I create stop scrolling content, high-converting social campaigns and digital marketing systems, with a little strategy behind the chaos.
        </p>
        <div className="hero-actions">
          <a className="button button--red" href="#contact">LET'S WORK TOGETHER <ArrowUpRight size={17} /></a>
          <a className="text-link text-link--dark" href="#work">SEE MY WORK <ArrowDown size={15} /></a>
        </div>
      </div>

      <div className="hero-bottom-new">
        <span>CREATIVE MARKETING / 01</span>
        <span>SCROLL TO EXPLORE ↓</span>
        <span>DELHI, INDIA</span>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section about-new" id="about">
      <div className="container about-new-grid">
        <Reveal>
          <div className="about-photo-wrap">
            <ImageSlot
              src="/images/personal/AASHITA_PORTRAIT.jpeg"
              alt="Aashita Malhotra"
              index={0}
              className="about-photo"
            />
            <span className="hand-note hand-note--one">always curious ↗</span>
            <span className="hand-note hand-note--two">ideas → execution</span>
            <span className="about-photo-pin">♥</span>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="about-new-copy">
            <div className="section-label">01 / ABOUT ME</div>
            <h2>Hi, I’m Aashita<span className="red-dot">!</span></h2>
            <p className="about-lead">
              I’ve always been fascinated by "what makes people stop scrolling?" A sharp hook, a compelling visual, a perfectly executed idea, or something that hits you hard enough to remember.
            </p>
            <p>
              I work across the creative side of marketing but for me, marketing isn’t just about the posting content. It’s about deeply understanding the audience, crafting the right narrative, and turning their attention into measurable business impact.
            </p>
            <div className="about-tags">
              <Pill>SOCIAL MEDIA</Pill>
              <Pill>SEO & SEARCH</Pill>
              <Pill>CONTENT STRATEGY</Pill>
              <Pill>ANALYTICS</Pill>
              <Pill>AI VIDEO</Pill>
            </div>
            <span className="hand-note hand-note--bottom">still learning. always creating.</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Services() {
  const [active, setActive] = useState(0)
  const item = services[active]
  return (
    <section className="section services-new" id="services">
      <div className="container">
        <Reveal>
          <div className="section-kicker-red">02 / WHAT I DO</div>
          <h2 className="display-title">Ideas that make<br /><span>people pause.</span></h2>
        </Reveal>
        <div className="services-grid">
          <div className="service-list">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <button
                  key={service.title}
                  className={`service-row ${active === index ? 'is-active' : ''}`}
                  onClick={() => setActive(index)}
                >
                  <span className="service-number">{service.number}</span>
                  <Icon size={22} strokeWidth={1.7} />
                  <strong>{service.title}</strong>
                  <ArrowUpRight size={18} />
                </button>
              )
            })}
          </div>
          <Reveal className={`service-feature service-feature--${item.color}`}>
            <div className="service-feature-top">
              <span>SELECTED SERVICE</span>
              <span>{item.number} / 05</span>
            </div>
            <item.icon size={54} strokeWidth={1.35} />
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
            <div className="service-feature-foot">
              <span>CLICK ANOTHER TO EXPLORE</span>
              <span>♥ ↗ #GROWTH</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function SocialWork() {
  const [activeBrandModal, setActiveBrandModal] = useState<string | null>(null)

  return (
    <section className="section social-work" id="work">
      <div className="container">
        <Reveal>
          <div className="social-heading">
            <div>
              <div className="section-kicker-red">03 / SOCIAL MEDIA WORK</div>
              <h2 className="display-title display-title--light">
                <span>25+</span><br />BRANDS.
              </h2>
            </div>
            <p>
              Experience creating, directing, and executing high-engagement social media campaigns across 25+ leading consumer, beauty, food, and lifestyle brands.
            </p>
          </div>
        </Reveal>

        <div className="social-wall">
          <Reveal>
            <div
              className="social-post social-post--slot social-post--primary"
              onClick={() => setActiveBrandModal('/images/profile/BRAND_COVER1.PNG')}
              title="Click to view full collaboration portfolio"
            >
              <div className="social-post-bar">
                <span><i><img src="/images/personal/AASHITA_PORTRAIT.jpeg" alt="Aashita" /></i> aashita.malhotra28</span>
                <span className="social-badge-tag">CAMPAIGN GRID 01 ↗</span>
              </div>
              <ImageSlot
                src="/images/profile/BRAND_COVER1.PNG"
                alt="Brand collaborations including Nykaa, Swiss Beauty, WishCare, Underneat, Gully Beans, Silly Dough"
                index={1}
                dark
                objectFit="contain"
              />
              <div className="social-post-actions">
                <Heart size={18} fill="#b82036" color="#b82036" />
                <MessageCircle size={18} />
                <Send size={18} />
                <span>♡ NYKAA · SWISS BEAUTY · WISHCARE · UNDERNEAT</span>
              </div>
              <Sticker className="sticker--mini">25+ BRANDS</Sticker>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div
              className="social-post social-post--slot social-post--secondary"
              onClick={() => setActiveBrandModal('/images/profile/BRAND_COVER2.PNG')}
              title="Click to view full collaboration portfolio"
            >
              <div className="social-post-bar">
                <span><i><img src="/images/personal/AASHITA_PORTRAIT.jpeg" alt="Aashita" /></i> aashita.malhotra28</span>
                <span className="social-badge-tag">CAMPAIGN GRID 02 ↗</span>
              </div>
              <ImageSlot
                src="/images/profile/BRAND_COVER2.PNG"
                alt="Brand collaborations including Paradyes, Beneka, Fat Tiger, Nutranext, Avni Wellness"
                index={2}
                dark
                objectFit="contain"
              />
              <div className="social-post-actions">
                <Heart size={18} fill="#b82036" color="#b82036" />
                <MessageCircle size={18} />
                <Send size={18} />
                <span>♡ PARADYES · DERMA CO · FAT TIGER · NUTRANEXT</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="social-note-card">
              <span>WHAT I DELIVER</span>
              <strong>reels<br />stories<br />ugc<br />strategy</strong>
              <div className="social-featured-brands">
                <small>PARTNERED BRANDS</small>
                <div className="brand-tags-mini">
                  {brandNames.slice(0, 8).map(brand => (
                    <span key={brand}>{brand}</span>
                  ))}
                </div>
              </div>
              <span className="hand-note">creative that converts ↗</span>
            </div>
          </Reveal>
        </div>

        <div className="social-chips">
          <Pill dark>INSTAGRAM REELS</Pill>
          <Pill dark>UGC CREATION</Pill>
          <Pill dark>PRODUCT INTEGRATION</Pill>
          <Pill dark>INFLUENCER MARKETING</Pill>
          <Pill dark>VIRAL HOOKS</Pill>
          <Pill dark>COMMUNITY BUILDING</Pill>
        </div>
      </div>

      {activeBrandModal && (
        <div className="project-modal" role="dialog" aria-modal="true" onClick={() => setActiveBrandModal(null)}>
          <div className="project-modal-card project-modal-card--wide" onClick={e => e.stopPropagation()}>
            <button onClick={() => setActiveBrandModal(null)} aria-label="Close modal"><X size={22} /></button>
            <div className="project-modal-phone-wrap">
              <div className="iphone-body">
                <div className="iphone-screen-wrap">
                  <div className="iphone-pill" aria-hidden="true">
                    <span className="iphone-pill-camera" />
                  </div>
                  <div className="iphone-statusbar">
                    <span>9:41</span>
                    <span>▲ ◀ ▊</span>
                  </div>
                  <div className="iphone-screen-img-wrap">
                    <ImageSlot src={activeBrandModal} alt="Full Brand Collaboration Showcase" objectFit="contain" />
                  </div>
                  <div className="iphone-home-area">
                    <div className="iphone-home-bar" />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-details-side">
              <span>BRAND COLLABORATION PORTFOLIO</span>
              <h3>25+ Brand Campaigns</h3>
              <p><b>COLLABORATION CATEGORIES</b> Beauty & Skincare, D2C Apparel, Gourmet Food & Cafes, Wellness, and Lifestyle accessories.</p>
              <p><b>CREATIVE SCOPE</b> Conceptualized scripts, high-retention video hooks, aesthetic product shoots, and direct CTA integration that fueled viral engagement.</p>
              <div className="brand-pill-grid">
                {brandNames.map(name => (
                  <span key={name} className="brand-pill-item"><Check size={12} /> {name}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

function DigitalMarketing() {
  return (
    <section className="section digital-section" id="experience">
      <div className="container">
        <Reveal>
          <div className="section-kicker-red">04 / DIGITAL MARKETING & EXPERIENCE</div>
          <h2 className="display-title">Work that<br /><span>moves numbers.</span></h2>
        </Reveal>
        <div className="experience-cards">
          {experiences.map((experience, index) => (
            <Reveal delay={index * 0.1} key={experience.company}>
              <article className={`experience-card experience-card--${index === 0 ? 'navy' : 'red'}`}>
                <div className="experience-visual">
                  <ImageSlot
                    src={experience.image}
                    alt={experience.alt}
                    index={index}
                    dark
                    objectFit="cover"
                  />
                  <BrandBadge logo={experience.brandLogo} label={experience.company} />
                </div>
                <div className="experience-copy">
                  <div className="experience-meta">
                    <span>{experience.company}</span>
                    <span>{experience.date}</span>
                  </div>
                  <h3>{experience.role}</h3>
                  <p>{experience.copy}</p>
                  <div className="experience-metrics">
                    {experience.metrics.map(([value, label]) => (
                      <div key={label}>
                        <strong>{value}</strong>
                        <span>{label}</span>
                      </div>
                    ))}
                  </div>
                  <a href="#contact" className="experience-link">
                    DISCUSS THIS CAMPAIGN <ArrowUpRight size={16} />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Results() {
  const metrics = [
    ['9.4M+', 'TOP VIRAL REEL REACH'],
    ['2.5M+', '30-DAY CREATOR VIEWS'],
    ['35%+', 'ARVIND ENGAGEMENT IMPROVEMENT'],
    ['40%+', 'HELIX COMMUNITY GROWTH'],
    ['2×', 'AVERAGE POST REACH MULTIPLIER'],
    ['25+', 'BRAND COLLABORATIONS'],
    ['10+', 'TOP-RANKING TARGET KEYWORDS'],
    ['205+', 'YOUTUBE VLOGS PRODUCED'],
  ]
  return (
    <section className="section results-new" id="results">
      <div className="container">
        <Reveal>
          <div className="section-kicker-red">05 / THE NUMBERS BEHIND THE WORK</div>
          <h2 className="display-title display-title--light">Proof, not<br /><span>promises.</span></h2>
          <p className="results-intro">
            Every metric here represents documented results from real clients, real community growth, and viral social reach.
          </p>
        </Reveal>
        <div className="results-grid-new">
          {metrics.map(([value, label], index) => (
            <Reveal delay={index * 0.04} key={label}>
              <div className="proof-card">
                <span className="proof-index">0{index + 1}</span>
                <CountUp value={value} label={label} delay={index * 0.03} />
                <div className="proof-arrow">↗</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Tools() {
  return (
    <section className="section tools-new" id="tools">
      <div className="container">
        <Reveal>
          <div className="section-kicker-red">06 / MY TOOLKIT</div>
          <h2 className="display-title">The tools<br /><span>in my tabs.</span></h2>
        </Reveal>
        <div className="tools-categories">
          {Object.entries(tools).map(([category, items], index) => (
            <Reveal delay={index * 0.08} key={category}>
              <div className={`tools-category tools-category--${index}`}>
                <div className="tools-category-top">
                  <span>0{index + 1}</span>
                  <span>
                    {index === 0 ? <AtSign size={24} /> : index === 1 ? <Search size={24} /> : <Zap size={24} />}
                  </span>
                </div>
                <h3>{category}</h3>
                <div className="tools-list">
                  {items.map(tool => {
                    const ToolIcon = toolIconMap[tool] ?? Check
                    return <span key={tool}><ToolIcon size={14} strokeWidth={1.8} />{tool}</span>
                  })}
                </div>
                <span className="tools-hand">tap in ↗</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(null)
  const [slides, setSlides] = useState<Record<number, number>>({})

  return (
    <section className="section projects-new" id="projects">
      <div className="container">
        <Reveal>
          <div className="section-kicker-red">07 / SELECTED CASE STUDIES</div>
          <h2 className="display-title">The work<br /><span>in the wild.</span></h2>
        </Reveal>
        <div className="project-grid">
          {projects.map((project, index) => {
            const hasSlider = index >= 2 && Boolean(project.secondImage)
            const activeSlide = slides[index] ?? 0
            const shownImage = activeSlide === 1 && project.secondImage ? project.secondImage : project.image

            return (
              <TiltCard key={project.title}>
                <article className={`project-card project-card--${index}`} onClick={() => setSelected(project)}>
                  <div className="project-card-image">
                    <ImageSlot
                      src={shownImage}
                      alt={project.title}
                      index={index}
                      dark={index % 2 === 1}
                    />
                    <span className="project-like"><Heart size={15} /></span>
                    {hasSlider && (
                      <div className="project-card-slider" aria-label={`${project.title} image gallery`}>
                        <button
                          type="button"
                          className="project-slider-control"
                          aria-label="Show previous image"
                          onClick={(event) => { event.stopPropagation(); setSlides(current => ({ ...current, [index]: activeSlide === 0 ? 1 : 0 })) }}
                        ><ChevronLeft size={17} /></button>
                        <div className="project-slider-dots" aria-hidden="true">
                          <span className={activeSlide === 0 ? 'is-active' : ''} />
                          <span className={activeSlide === 1 ? 'is-active' : ''} />
                        </div>
                        <button
                          type="button"
                          className="project-slider-control"
                          aria-label="Show next image"
                          onClick={(event) => { event.stopPropagation(); setSlides(current => ({ ...current, [index]: activeSlide === 0 ? 1 : 0 })) }}
                        ><ChevronRight size={17} /></button>
                      </div>
                    )}
                  </div>
                  <div className="project-card-copy">
                    <span>{project.category}</span>
                    <h3>{project.title}</h3>
                    <p>{project.copy}</p>
                    <strong>{project.result} ↗</strong>
                  </div>
                </article>
              </TiltCard>
            )
          })}
        </div>
      </div>

      {selected && (
        <div className="project-modal" role="dialog" aria-modal="true" aria-label={selected.title} onClick={() => setSelected(null)}>
          <div className="project-modal-card" onClick={event => event.stopPropagation()}>
            <button onClick={() => setSelected(null)} aria-label="Close project"><X size={22} /></button>
            <div className="project-modal-gallery">
              <ImageSlot src={selected.image} alt={selected.title} index={0} dark />
              {selected.secondImage && (
                <ImageSlot src={selected.secondImage} alt={`${selected.title} secondary preview`} index={1} dark />
              )}
            </div>
            <div className="project-modal-info">
              <span>{selected.category}</span>
              <h3>{selected.title}</h3>
              <p><b>THE CHALLENGE</b> {selected.challenge}</p>
              <p><b>WHAT I DID</b> {selected.copy}</p>
              <p><b>THE RESULT</b> {selected.outcome}</p>
              <a href="mailto:aashita.malhotra28@gmail.com" className="button button--red" style={{ marginTop: '20px', display: 'inline-flex' }}>
                DISCUSS SIMILAR WORK <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

function Personal() {
  return (
    <section className="section personal-new" id="personal">
      <div className="container personal-new-grid">
        <Reveal>
          <div className="section-kicker-red">08 / PERSONAL CREATIVE</div>
          <h2 className="display-title">I loveee...<br /><span>creating things.</span></h2>
          <p className="personal-lead">
            My personal playground for video experiments, humor scripts, viral hook optimization, travel vlogs, and mastering audience attention.
          </p>
          <div className="process-line">
            {['IDEA', 'SCRIPT', 'SHOOT', 'EDIT', 'OPTIMIZE', 'PUBLISH', 'ANALYZE'].map((step, index) => (
              <span key={step}>
                <b>0{index + 1}</b>{step}{index < 6 && <ArrowRight size={14} />}
              </span>
            ))}
          </div>
          <div className="personal-growth-grid">
            <div className="personal-growth">
              <span>INSTAGRAM 30-DAY REACH</span>
              <strong>2.5M+</strong>
              <span>ORGANIC VIEWS</span>
            </div>
            <div className="personal-growth">
              <span>YOUTUBE CHANNEL</span>
              <strong>205+</strong>
              <span>LIFESTYLE & TRAVEL VLOGS</span>
            </div>
            <div className="personal-growth">
              <span>LINKEDIN</span>
              <strong>1000+</strong>
              <span>PROFESSIONAL NETWORK</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="personal-collage">
            <div className="personal-slot personal-slot--one" title="Aashita Malhotra Instagram Profile & Viral Reels">
              <ImageSlot
                src="/images/personal/AASHITA_IG.PNG"
                alt="Instagram @aashita.malhotra28 - 2.5M views, viral reels reaching 4.8M and 3.3M views"
                index={2}
              />
              <div className="personal-slot-tag">INSTAGRAM · 2.5M VIEWS · 4.8M REEL</div>
            </div>
            <div className="personal-slot personal-slot--two" title="Aashita Malhotra YouTube Channel">
              <ImageSlot
                src="/images/personal/AASHITA_YT.PNG"
                alt="YouTube @Aashita_Malhotra - Travel, food and lifestyle vlogs"
                index={3}
                dark
              />
              <div className="personal-slot-tag">YOUTUBE · 205 VIDEOS · TRAVEL VLOGS</div>
            </div>
            <div className="personal-slot personal-slot--three" title="Aashita Malhotra LinkedIn">
              <ImageSlot
                src="/images/personal/AASHITA_IN.jpeg"
                alt="Aashita Malhotra LinkedIn Profile"
                index={3}
                dark
              />

              <div className="personal-slot-tag">LINKEDIN · PROFESSIONAL PROFILE</div>
            </div>
            <div className="personal-comment">
              <Heart size={16} fill="currentColor" /> keep creating.
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="section contact-new" id="contact">
      <div className="contact-scribble">LET'S MAKE<br />SOMETHING<br />PEOPLE NOTICE.</div>
      <div className="container contact-new-inner">
        <Reveal>
          <div className="section-kicker-red text">09 / CONTACT ME</div>
          <h2 className="text">Let’s give the boring<br /><span>some personality!</span></h2>
          <p>Looking for someone who can think creatively, craft the strategy behind the numbers and implement it with a bang! My inbox is always open :)</p>
          <a className="contact-main-link" href="mailto:aashita.malhotra28@gmail.com">
            aashita.malhotra28@gmail.com <ArrowUpRight size={23} />
          </a>
          <div className="contact-links">
            <span>DELHI, INDIA</span>
            <a href="mailto:aashita.malhotra28@gmail.com"><Mail size={16} /> EMAIL ME ↗</a>
            <a href="https://instagram.com/aashita.malhotra28" target="_blank" rel="noopener noreferrer"><AtSign size={16} /> INSTAGRAM ↗</a>
            <a href="https://www.linkedin.com/in/aashita-malhotra-ab0b072ba/" target="_blank" rel="noopener noreferrer"><MessageCircle size={16} /> LINKEDIN ↗</a>
            <a href="https://youtube.com/@Aashita_Malhotra" target="_blank" rel="noopener noreferrer"><Video size={16} /> YOUTUBE ↗</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    document.title = 'Aashita Malhotra — Creative Marketing & Social Media Strategist'
  }, [])
  return (
    <div className="site-shell site-shell--new">
      <Header open={menuOpen} setOpen={setMenuOpen} />
      <main>
        <Hero />
        <About />
        <Services />
        <SocialWork />
        <DigitalMarketing />
        <Results />
        <Tools />
        <Projects />
        <Personal />
        <Contact />
      </main>
    </div>
  )
}
