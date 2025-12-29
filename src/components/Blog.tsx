export default function Blog() {
  // Sample blog posts - nanti bisa diganti dengan data dari CMS atau markdown files
  const posts = [
    {
      id: 1,
      date: '2024.12.15',
      title: 'Building a Scalable REST API with FastAPI',
      tags: ['python', 'fastapi', 'backend'],
      brief: 'Lessons learned from building a high-performance API serving 10k+ requests/min'
    },
    {
      id: 2,
      date: '2024.11.28',
      title: 'Docker Multi-Stage Builds: Optimization Tips',
      tags: ['docker', 'devops', 'optimization'],
      brief: 'How to reduce Docker image sizes by 70% using multi-stage builds'
    },
    {
      id: 3,
      date: '2024.11.10',
      title: 'Database Indexing Strategies for Performance',
      tags: ['database', 'postgresql', 'performance'],
      brief: 'Understanding B-tree indexes and when to use them effectively'
    },
  ];

  return (
    <section id="blog" className=" scroll-mt-20">
      <div className="space-y-8">
        {/* Section title */}
        <div>
          <div className="text-gray mb-2">
            <span className="text-orange">❯</span> psql -c "SELECT title, date FROM blog_posts;"
          </div>
          {/* Humorous Error/Empty State */}
          <div className="font-mono space-y-4 pt-4">
            <div className="text-fg-dim">
              <pre className="leading-tight !bg-transparent !border-none !p-0">
                {` title | date 
-------+------
(0 rows)`}
              </pre>
              <div className="mt-4 text-red/80 text-sm font-bold ">
                [!] EmptySetError: data_not_found (yet)
              </div>
              <p className="mt-1 text-gray text-xs italic">
                -- The schema is valid, the table is initialized, but the ink is dry.
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-gray">
                <span className="text-orange">❯</span> cat progress.txt
              </div>
              <div className="pl-4 border-l border-bg-medium space-y-2">
                <p className="text-yellow">
                  Busy learning and shipping projects, haven't found the `commit` time for blogging yet.
                </p>
                <p className="text-fg-dim text-sm italic">
                  Work in progress: Writing clean code &gt; Writing blog posts (for now).
                </p>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <p className="text-[10px] text-gray pt-6">
            [SYS] Markdown parser standby...
          </p>
        </div>
      </div>
    </section>
  );
}
