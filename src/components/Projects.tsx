export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20">
      <div className="space-y-7">
        {/* Visual Header - File Tree */}
        <div className="space-y-3">
          <div className="text-gray flex items-center gap-2">
            <span className="text-orange">❯</span> tree projects/
          </div>
          <pre className="text-fg-dim font-mono text-sm leading-relaxed !bg-transparent !p-0 !border-none">
            {`projects/
├── team/
│   ├── ricesource.json
│   └── doscom_web.go
├── personal/
│   ├── savorbite_api.json
│   └── project_tui.rs
└── community/
    └── doscom_dos.log

3 directories, 5 files`}
          </pre>
        </div>

        {/* Project Contents */}
        <div className="space-y-7 pb-8">

          {/* Section 1: RiceSource (JSON Format) */}
          <div className="space-y-4">
            <div className="text-gray flex items-center gap-2">
              <span className="text-orange">❯</span> curl -X GET https://api.ricesource.com/v1/meta
            </div>

            <pre className="text-fg-dim font-mono text-sm leading-relaxed !bg-transparent !p-0 !border-none pl-2">
              {`{
  "project": "RiceSource",
  "org": "Dinus Open Source Community",
  "role": "Backend Developer",
  "period": "2024 - Present",
  "team_size": 4,
  "stack": ["Next.js", "Express.js", "PostgreSQL", "Swagger"],
  "responsibilities": [
    "Develop core feature controllers",
    "Bug fixing & stability improvements",
    "API Testing & OpenAPI documentation",
    "Continuous backend maintenance"
  ],
  "description": "Platform for sharing Linux ricing configurations."
}`}
            </pre>
          </div>

          {/* Section 2: DOSCOM Web (Go Format) */}
          <div className="space-y-4">
            <div className="text-gray flex items-center gap-2">
              <span className="text-orange">❯</span> cat team/doscom_web.go
            </div>

            <pre className="text-fg-dim font-mono text-sm leading-relaxed !bg-transparent !p-0 !border-none pl-2">
              {`package doscom

import "backend/architect"

// Project: Website Profil Organisasi (DOSCOM)
// Role: Backend Developer (Full Ownership)
// Tech: Astro, Go (Golang), PostgreSQL

func GetProjectDetails() Project {
    return Project{
        Ownership: "Full Backend Architecture",
        Tasks: []string{
            "Design overall backend architecture",
            "Database ERD design & modeling",
            "Implementation of models, services, and handlers",
            "API documentation with Swagger",
            "End-to-end API testing",            
        },
        Status: "Under Development",
    }
}`}
            </pre>
          </div>

          {/* Section 3: SavorBite (JSON Format) */}
          <div className="space-y-4">
            <div className="text-gray flex items-center gap-2">
              <span className="text-orange">❯</span> curl -X GET https://api.savorbite.com/v1/project
            </div>

            <pre className="text-fg-dim font-mono text-sm leading-relaxed !bg-transparent !p-0 !border-none pl-2">
              {`{
  "project": "SavorBite",
  "org": "Team Project (3 Members)",
  "role": "Solo Backend Developer (Full Ownership)",
  "tech_stack": {
    "language": "Go (Golang)",
    "database": "PostgreSQL",
    "payment": "Xendit Integration"
  },
  "api_specification": {
    "architecture": "RESTful API",
    "versioning": "v1 prefixing implemented",
    "documentation": "Swagger Spec"
  },
  "backend_milestones": [
    "100% Backend infrastructure & logic implementation",
    "Complex ERD design (Users, Products, Transactions, Payments, Etc...)",
    "Secure JWT Auth (Multi-role: Buyer, Seller, Admin)",
    "Full transactional flow with Xendit callback handling"
  ],
  "description": "E-commerce platform for UMKM markets."
}`}
            </pre>
          </div>

          {/* Section 4: Project TUI (Rust Format) */}
          <div className="space-y-4">
            <div className="text-gray flex items-center gap-2">
              <span className="text-orange">❯</span> cat personal/project_tui.rs
            </div>

            <pre className="text-fg-dim font-mono text-sm leading-relaxed !bg-transparent !p-0 !border-none pl-2">
              {`/// Terminal User Interface (TUI) — Project Management Tool
/// Language: Rust
/// Ownership: 100% Solo Development

struct ProjectTUI {
    features: Vec<Feature>,
}

impl ProjectTUI {
    fn new() -> Self {
        Self {
            features: vec![
                Feature::AutoPushToGithub,
                Feature::RealTimeFileMonitoring,
                Feature::DevelopmentWorkflowAutomation,
            ],
        }
    }

    fn run_monitoring(&self) {
        // Implementation of file changes monitoring
        // Integrated with Git automation hooks
    }
}`}
            </pre>
          </div>

          {/* Section 5: DOSCOM Activity Log */}
          <div className="space-y-4">
            <div className="text-gray flex items-center gap-2">
              <span className="text-orange">❯</span> cat community/doscom_dos.log
            </div>

            <div className="space-y-6 pl-2 text-fg-dim text-sm leading-relaxed">
              <div>
                <p className="font-bold">Dinus Open Source Community (DOSCOM)</p>
                <p className="text-xs text-gray mb-2">Member | 2024 – Present</p>
                <p>
                  Programming Division. Collaborative development using Git and open-source workflows.
                </p>
              </div>
              <ul className="list-none space-y-2">
                <li className="flex flex-col">
                  <span className="text-fg"># DOSCOM University 2025</span>
                  <span className="text-xs text-gray">Instructor / Trainer</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-fg"># DOSCOM University 2024</span>
                  <span className="text-xs text-gray">Event Coordinator (Sie Acara)</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-fg"># OOTS (Open Source On The School) 2025</span>
                  <span className="text-xs text-gray">Instructor / Trainer</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-fg"># TeaLinux Release Party 2024</span>
                  <span className="text-xs text-gray">Event Coordinator (Sie Acara)</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* System Info */}
        <div className="text-[10px] text-gray font-mono">
          [SYS] project_manifest: updated / current_focus: systems_architecture
        </div>
      </div>
    </section>
  );
}
