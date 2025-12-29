'use client';

const navItems = [
  { name: 'home', href: '#home' },
  { name: 'about', href: '#about' },
  { name: 'blog', href: '#blog' },
  { name: 'notes', href: '#notes' },
  { name: 'projects', href: '#projects' },
];

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-bg-dark/95 backdrop-blur-sm border-b border-bg-medium mb-8">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex flex-wrap gap-4 text-sm md:text-base">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-fg hover:text-yellow transition-colors duration-200"
            >
              [{item.name}]
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
