const COLORS = [
  "#1f2f5c", "#7a1f2b", "#1f6b4f", "#c0892c", "#b3202e", "#2f5aa8",
  "#5b6b3a", "#8a5a3b", "#222222", "#d8c3a0", "#6aa3d9", "#f08cb0",
  "#3b2f63", "#0f5c4d", "#e0526f", "#9a9ea6",
];

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
          ব্রাউজার উইন্ডো ছোট-বড় করে বা F12 চেপে ফোন মোড দিয়ে দেখুন: কলাম সংখ্যা,
          মেনু ও ফাঁকা জায়গা নিজে বদলাবে।
        </p>

        <div className="mt-6 lg:grid lg:grid-cols-[18rem_1fr] lg:gap-8">
          {/* ল্যাপটপ থেকে বাঁয়ে ফিল্টারের জায়গা */}
          <aside className="hidden lg:block">
            <div className="soft-shadow sticky top-6 rounded-3xl border border-line bg-white p-5">
              <h3 className="font-display text-xl">ফিল্টার</h3>
              <p className="mt-2 text-sm text-muted">
                এখানে ফিল্টার বসবে (ল্যাপটপ ও বড় স্ক্রিনে)।
              </p>
            </div>
          </aside>

          <section className="min-w-0">
            <div className="auto-grid">
              {COLORS.map((c, i) => (
                <div
                  key={c}
                  className="soft-shadow overflow-hidden rounded-3xl border border-line bg-white"
                >
                  <div className="aspect-[4/5]" style={{ background: c }} />
                  <div className="p-3">
                    <p className="font-semibold">নমুনা {i + 1}</p>
                    <p className="text-xs text-muted">{c}</p>
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