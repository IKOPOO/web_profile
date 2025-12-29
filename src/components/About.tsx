export default function About() {
  return (
    <section id="about" className="scroll-mt-20">
      <div className="space-y-8">
        {/* Section title */}
        <div>
          <div className="text-gray mb-2">
            <span className="text-orange">❯</span> cat about.txt
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-green border-b-2 border-green pb-2 inline-block">
            about_me
          </h2>
        </div>

        {/* Role & Background */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-yellow">
            <span className="text-gray">#</span> Role & Background
          </h3>
          <div className="text-fg-dim space-y-3 pl-4 border-l-2 border-bg-medium">
            <p>
              Backend-focused developer building <span className="text-orange">APIs and systems</span>.
              Exploring <span className="text-orange">DevOps</span> to understand the full software lifecycle.
            </p>
            <p>
              Philosophy: <span className="text-green">clean code, reliable systems, automation, do it yourself</span>.
            </p>
          </div>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-yellow">
              <span className="text-gray">#</span> Technical Skills
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-orange">-</span>
                <div>
                  <span className="text-green font-semibold">Languages:</span>{" "}
                  <span className="text-fg-dim">Rust, Go, JavaScript, PHP, C++</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange">-</span>
                <div>
                  <span className="text-green font-semibold">Frameworks:</span>{" "}
                  <span className="text-fg-dim">Express, Gin, Laravel, Next.js</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange">-</span>
                <div>
                  <span className="text-green font-semibold">Databases:</span>{" "}
                  <span className="text-fg-dim">PostgreSQL, MySQL, MariaDB</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange">-</span>
                <div>
                  <span className="text-green font-semibold">API:</span>{" "}
                  <span className="text-fg-dim">RestAPI</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tools & Utilities */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-yellow">
              <span className="text-gray">#</span> Tools & Others
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-orange">-</span>
                <span className="text-fg-dim">Swagger & Postman</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange">-</span>
                <span className="text-fg-dim">Git & GitHub</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange">-</span>
                <span className="text-fg-dim">Docker & Docker Compose</span>
              </div>
            </div>
          </div>
        </div>

        {/* Grid for Workflow and Learning */}
        <div className="grid md:grid-cols-2 gap-8 pt-4">
          {/* Workflow / Cara Kerja */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-yellow">
              <span className="text-gray">#</span> Workflow & Interests
            </h3>
            <div className="pl-4 space-y-3">
              <ul className="space-y-3 text-sm text-fg-dim">
                <li className="flex items-start gap-2">
                  <span className="text-orange">❯</span>
                  <span>Designing clean APIs and robust data models</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange">❯</span>
                  <span>Hunting bugs and tracing backend bottlenecks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange">❯</span>
                  <span>Analyzing architecture trade-offs for better reliability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange">❯</span>
                  <span>Deep interest in exploring how systems work under the hood</span>
                </li>
              </ul>
            </div>
          </div>

          {/* DevOps Journey */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-yellow">
              <span className="text-gray">#</span> DevOps Journey
            </h3>
            <div className="pl-4 space-y-3">
              <ul className="space-y-3 text-sm text-fg-dim">
                <li className="flex items-start gap-2">
                  <span className="text-blue">→</span>
                  <span>Mastering Linux server basics & CLI workflow</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue">→</span>
                  <span>Implementing automated deployment pipelines</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue">→</span>
                  <span>Streamlining CI/CD & container orchestration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue">→</span>
                  <span>Building a honest, reliable infra from scratch</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
