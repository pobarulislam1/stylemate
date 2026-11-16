import { SAMPLE_ITEMS } from "./lib/data";
import { bn } from "./lib/format";
import { CATEGORIES, categoryLabel } from "./lib/options";


const counts = CATEGORIES.map((c) => ({
  ...c,
  n: SAMPLE_ITEMS.filter((i) => i.category === c.key).length,
}));

function Device() {
  return (
    <span className="rounded-full bg-brand-soft px-3 py-1 text-sm font-semibold text-brand">
      <span className="sm:hidden">📱 মোবাইল</span>
      <span className="hidden sm:inline md:hidden">📱 বড় মোবাইল</span>
      <span className="hidden md:inline lg:hidden">📲 ট্যাবলেট</span>
      <span className="hidden lg:inline xl:hidden">💻 ল্যাপটপ</span>
      <span className="hidden xl:inline 2xl:hidden">🖥️ ডেস্কটপ</span>
      <span className="hidden 2xl:inline">🖥️ বড় ডেস্কটপ</span>
    </span>
  );
}

export default function Home() {
  return (
    <>
      {/* হেডার */}
      <header className="border-b border-line bg-white/80 backdrop-blur-md">
        <div className="page flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-brand text-lg text-gold shadow-lg shadow-brand/30">
              ✦
            </div>
            <h1 className="font-display text-2xl">স্টাইলমেট</h1>
          </div>

          <nav className="hidden items-center gap-1 lg:flex">
            {["ক্যাটালগ", "সেভ করা", "কালেকশন"].map((t) => (
              <span
                key={t}
                className="rounded-full px-4 py-2 text-sm font-semibold text-muted"
              >
                {t}
              </span>
            ))}
          </nav>

          <Device />
        </div>
      </header>

      <main className="page pb-28 pt-6 lg:pb-12 lg:pt-8">
        <h2 className="fluid-h1 font-display">সব ডিভাইসে পুরো স্ক্রিন জুড়ে</h2>
        <p className="mt-2 max-w-2xl text-muted">
          মোট {bn(SAMPLE_ITEMS.length)}টি নমুনা পোশাক, {bn(CATEGORIES.length)}টি
          ক্যাটাগরি। উইন্ডো ছোট-বড় করে বা F12 চেপে ফোন মোড দিয়ে দেখুন।
        </p>

        <div className="mt-6 lg:grid lg:grid-cols-[18rem_1fr] lg:gap-8">
          {/* ল্যাপটপ থেকে বাঁয়ে ক্যাটাগরি তালিকা */}
          <aside className="hidden lg:block">
            <div className="soft-shadow sticky top-6 rounded-3xl border border-line bg-white p-5">
              <h3 className="font-display text-xl">ক্যাটাগরি</h3>
              <ul className="mt-3 space-y-1.5">
                {counts.map((c) => (
                  <li
                    key={c.key}
                    className="flex items-center justify-between text-sm"
                  >
                    <span>{c.label}</span>
                    <span className="rounded-full bg-brand-soft px-2 py-0.5 text-xs font-semibold text-brand">
                      {bn(c.n)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <section className="min-w-0">
            {/* ছোট স্ক্রিনে ক্যাটাগরি ট্যাগ */}
            <div className="no-scrollbar mb-4 flex gap-2 overflow-x-auto lg:hidden">
              {counts.map((c) => (
                <span
                  key={c.key}
                  className="shrink-0 rounded-full bg-brand-soft px-3 py-1 text-sm font-semibold text-brand"
                >
                  {c.label} · {bn(c.n)}
                </span>
              ))}
            </div>

            <div className="auto-grid">
              {SAMPLE_ITEMS.map((i) => (
                <div
                  key={i.id}
                  className="soft-shadow overflow-hidden rounded-3xl border border-line bg-white"
                >
                  <div className="aspect-[4/5]" style={{ background: i.color }} />
                  <div className="p-3">
                    <p className="font-semibold leading-tight">{i.name}</p>
                    <p className="text-xs text-muted">
                      {categoryLabel(i.category)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* ছোট স্ক্রিনের নিচের নেভিগেশন */}
      <nav className="pb-safe fixed inset-x-0 bottom-0 z-20 border-t border-line bg-white/90 px-4 pt-2 backdrop-blur-md lg:hidden">
        <div className="mx-auto flex max-w-md gap-2">
          {["👗 ক্যাটালগ", "♥ সেভ করা", "✦ কালেকশন"].map((t, i) => (
            <span
              key={t}
              className={`flex-1 rounded-full py-2.5 text-center text-sm font-semibold ${i === 0 ? "bg-brand text-white" : "text-muted"
                }`}
            >
              {t}
            </span>
          ))}
        </div>
      </nav>
    </>
  );
}