import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        
        {/* LEFT COLUMN: Fixed Header & Navigation */}
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-secondary sm:text-5xl">
              <a href="/">Lakshay Gupta</a>
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-accent sm:text-xl">
              Software Engineer
            </h2>
            <p className="mt-4 max-w-xs leading-normal text-slate-400">
              I build products that bridge the gap between complex logic and intuitive design.
            </p>
            
            {/* Theme Switcher lives here now */}
            <div className="mt-12">
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">
                Select Mountain Vibe
              </p>
              <ThemeSwitcher />
            </div>
          </div>

          {/* Social Links or Footer area */}
          <footer className="mt-8 flex items-center gap-4 text-slate-400">
            <p className="text-sm">Inspired by Brittany Chiang • Built with Next.js</p>
          </footer>
        </header>

        {/* RIGHT COLUMN: Scrollable Sections */}
        <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
          <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-primary/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-0 lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-secondary lg:sr-only">
                About
              </h2>
            </div>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I am a developer focused on building high-performance web applications. 
                Currently, I'm mastering the modern web stack to create digital 
                experiences that are fast, accessible, and visually striking.
              </p>
              <p>
                When I&apos;m not coding, you can usually find me exploring new technologies 
                or pursuing my passion for great design and mountain landscapes.
              </p>
            </div>
          </section>

          <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36">
             <h2 className="text-sm font-bold uppercase tracking-widest text-secondary mb-8">
                Projects
              </h2>
              <div className="group rounded-md border border-transparent transition-all hover:border-accent/20 hover:bg-accent/5 p-4">
                <h3 className="text-accent font-semibold">Project Coming Soon</h3>
                <p className="text-sm text-slate-400 mt-2">
                  The next step in our "Product Roadmap" is building out this interactive project grid.
                </p>
              </div>
          </section>
        </main>
        
      </div>
    </div>
  );
}