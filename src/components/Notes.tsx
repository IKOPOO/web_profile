export default function Notes() {
  return (
    <section id="notes" className="scroll-mt-20">
      <div className="space-y-7">
        {/* Terminal Directory Listing */}
        <div className="space-y-3">
          <div className="text-gray flex items-center gap-2">
            <span className="text-orange">❯</span> tree notes/
          </div>
          <pre className="text-fg-dim font-mono text-sm leading-relaxed !bg-transparent !p-0 !border-none">
            {`/notes
├── rust-concurrency.md
├── thread-communication.md
├── async-runtime-notes.md
└── tooling-decisions.md

0 directories, 4 files`}
          </pre>
        </div>

        {/* Note Contents */}
        <div className="space-y-7 pb-8">
          {/* Section 1: Concurrency */}
          <div className="space-y-3">
            <div className="text-gray">
              <span className="text-orange">❯</span> cat rust-concurrency.md
            </div>

            <div className="space-y-6 pl-2 text-fg-dim text-sm leading-relaxed">
              <div>
                <p className="text-fg font-bold">Arc Is Not Data Copying</p>
                <p>
                  Arc&lt;T&gt; does not clone data — it clones the pointer. Only the reference counter is incremented; the underlying data stays in the same heap allocation. Think of it as: "Multiple owners, single data."
                </p>
              </div>

              <div>
                <p className="text-fg font-bold">Mutex: Exclusive Access, Not Safety Magic</p>
                <p>
                  Mutex&lt;T&gt; ensures only one thread accesses data at a time. Commonly paired with Arc as Arc&lt;Mutex&lt;T&gt;&gt; to achieve shared ownership + exclusive access. Safety comes from the locking discipline.
                </p>
              </div>

              <div>
                <p className="text-fg font-bold">Why Receiver in Struct Broke Design</p>
                <p>
                  Receiver stored inside a struct wrapped in Arc&lt;T&gt; will fail because Arc requires T: Sync, but Receiver is not. Fix: Remove Receiver from struct and pass it directly to thread::spawn.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Thread Communication */}
          <div className="space-y-4">
            <div className="text-gray">
              <span className="text-orange">❯</span> cat thread-communication.md
            </div>

            <div className="space-y-6 pl-2 text-fg-dim text-sm leading-relaxed">
              <div>
                <p className="text-fg font-bold">Ownership & Thread Communication</p>
                <p>
                  Receiver&lt;T&gt; is not Sync; it cannot be shared but can be moved. Sender&lt;T&gt; can be cloned, allowing multiple threads to send messages safely. Understanding what can be shared vs moved is critical.
                </p>
              </div>

              <div>
                <p className="text-fg font-bold">recv() vs try_recv()</p>
                <p>
                  recv() blocks execution until a message arrives. try_recv() is non-blocking, allowing background logic (PID checks, sleeps) while polling for events. Use try_recv() for monitoring loops.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Async Runtime */}
          <div className="space-y-4">
            <div className="text-gray">
              <span className="text-orange">❯</span> cat async-runtime-notes.md
            </div>

            <div className="space-y-6 pl-2 text-fg-dim text-sm leading-relaxed">
              <div>
                <p className="text-fg font-bold">impl Future Explained</p>
                <p>
                  Async fns return anonymous Future types. impl Future hides concrete types, but all branches must return the same future type. If they don't, use Pin&lt;Box&lt;dyn Future&gt;&gt; or Enums.
                </p>
              </div>

              <div>
                <p className="text-fg font-bold">Tokio: One Runtime Per Program</p>
                <p>
                  #[tokio::main] creates a global runtime. Storing or creating another runtime inside it with Runtime::new() is forbidden. Keep it simple: stick to the global runtime.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: Tooling */}
          <div className="space-y-4">
            <div className="text-gray">
              <span className="text-orange">❯</span> cat tooling-decisions.md
            </div>

            <div className="space-y-6 pl-2 text-fg-dim text-sm leading-relaxed">
              <div>
                <p className="text-fg font-bold">Safe Vector Index Removal</p>
                <p>
                  When removing multiple elements from a Vec by index, always iterate in reverse: .rev(). This ensures index stability as you delete from the back.
                </p>
              </div>

              <div>
                <p className="text-fg font-bold">Choosing 'ureq' for CLI</p>
                <p>
                  Used ureq because it is simple, blocking, and lacks async overhead. Perfect for CLI tools where you don't need thousands of parallel requests.
                </p>
              </div>

              <div>
                <p className="text-fg font-bold">GitHub Auth & Monitoring</p>
                <p>
                  Opted for Fine-grained PATs for safer repository access. For monitoring pushes, used git2 RemoteCallbacks to detect success/failure per ref programmatically.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* System Status */}
        <div className="text-[10px] text-gray  font-mono">
          [SYS] all files synced / total_notes: 11
        </div>
      </div>
    </section>
  );
}
