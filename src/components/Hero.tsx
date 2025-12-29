export default function Hero() {
  return (
    <section id="home" className=" flex flex-col justify-center space-y-8 scroll-mt-20">
      {/* Terminal prompt style header */}
      <div className="space-y-4">
        <div className="text-gray flex items-center gap-2">
          <span className="text-orange">❯</span> whoami
        </div>
        <pre className="text-orange font-mono text-[10px] md:text-xs leading-none py-2 overflow-x-auto scrollbar-hide !bg-transparent p-0 !border-none select-none">
          {`██████╗ ██╗ ██████╗ ██████╗ 
██╔══██╗██║██╔════╝██╔═══██╗
██████╔╝██║██║     ██║   ██║
██╔══██╗██║██║     ██║   ██║
██║  ██║██║╚██████╗╚██████╔╝
╚═╝  ╚═╝╚═╝ ╚═════╝ ╚═════╝ `}
        </pre>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange border-b-2 border-orange pb-2 inline-block">
          backend_dev
        </h1>
      </div>

      {/* Intro paragraph */}
      <div className="space-y-4 text-fg-dim leading-relaxed">
        <p className="text-base md:text-lg flex items-start">
          <span className="text-orange mr-2 mt-1 shrink-0 text-sm">❯</span>
          <span>
            Computer Science student focused on backend development and systems.
            Building REST APIs, optimizing backend structures, and
            contributing to campus open-source projects.
          </span>
        </p>
        <p className="flex items-start">
          <span className="text-orange mr-2 mt-1 shrink-0 text-sm">❯</span>
          <span>
            Actively working on personal backend projects for automation
            and workflow efficiency. Also contributing to various team-based
            projects. Using Linux as my primary development environment.
          </span>
        </p>
      </div>

      {/* Quick stats - terminal style */}
      <div className="space-y-2 text-sm border-l-2 border-gray pl-4">
        <div>
          <span className="text-gray">{"//"}</span>{" "}
          <span className="text-green">Focus:</span>{" "}
          <span className="text-fg-dim">Backend Development & DevOps</span>
        </div>
        <div>
          <span className="text-gray">{"//"}</span>{" "}
          <span className="text-green">Status:</span>{" "}
          <span className="text-fg-dim">Learning, Building, Deploying</span>
        </div>
      </div>

      <div className="pt-4">
        <p className="text-sm flex items-start text-fg-dim ">
          <span className="text-orange mr-2 shrink-0">❯</span>
          <span>I built this UI with AI, don&apos;t be too amazed yet hehe</span>
        </p>
      </div>
    </section>
  );
}
