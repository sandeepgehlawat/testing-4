export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <LogoWall />
      <LiveTicker />
      <Bento />
      <SecuritySection />
      <HowItWorks />
      <Testimonial />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}

/* ============================================================
   NAV — floating premium
============================================================ */
function Nav() {
  return (
    <>
      {/* announcement bar */}
      <div className="relative z-[60] bg-[var(--color-ink)] text-white text-[12px]">
        <div className="max-w-[1280px] mx-auto px-8 h-9 flex items-center justify-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-2 text-white/60 font-mono uppercase tracking-[0.18em] text-[10px]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-mint)] dot" /> new
          </span>
          <span className="text-white/85">
            Safety Net now supports <b className="text-white">Morpho Blue</b> and{" "}
            <b className="text-white">Pendle PT</b> positions
          </span>
          <a className="ml-1 text-[var(--color-mint)] inline-flex items-center gap-1 group">
            Read changelog{" "}
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </div>
      </div>

      {/* floating nav */}
      <div className="sticky top-5 z-50 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="relative rounded-[20px] border border-[var(--color-line)]/80 bg-[var(--color-paper)]/65 backdrop-blur-2xl shadow-[0_1px_0_rgba(255,255,255,0.7)_inset,0_24px_60px_-30px_rgba(12,12,12,0.28)]">
            {/* hairline highlight */}
            <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />

            <div className="flex items-center pl-5 pr-2 h-[60px]">
              {/* brand */}
              <a className="group flex items-center gap-3 pr-6">
                <Mark />
                <div className="flex items-baseline gap-1.5 leading-none">
                  <span className="font-serif italic text-[22px] tracking-[-0.01em]">Safety</span>
                  <span className="font-serif italic text-[22px] tracking-[-0.01em] text-[var(--color-mute)]">
                    Net
                  </span>
                </div>
              </a>

              {/* hairline divider */}
              <div className="hidden md:block w-px h-7 bg-gradient-to-b from-transparent via-[var(--color-line)] to-transparent" />

              {/* center links */}
              <nav className="hidden md:flex items-center ml-4">
                {[
                  ["Product", true],
                  ["How it works", false],
                  ["Security", false],
                  ["Pricing", false],
                  ["Docs", false],
                ].map(([label, active], i, arr) => (
                  <span key={label as string} className="flex items-center">
                    <a className={`nav-link-mono ${active ? "is-active" : ""}`}>
                      {label as string}
                    </a>
                    {i < arr.length - 1 && (
                      <span className="w-1 h-1 rounded-full bg-[var(--color-line)] mx-0.5" />
                    )}
                  </span>
                ))}
              </nav>

              {/* right cluster */}
              <div className="ml-auto flex items-center gap-3">
                {/* network chip */}
                <div className="hidden lg:flex items-center gap-2.5 pl-3 pr-3.5 h-9 rounded-full border border-[var(--color-line)] bg-white/60">
                  <span className="relative flex w-1.5 h-1.5">
                    <span className="absolute inset-0 rounded-full bg-[var(--color-mint)] opacity-40 animate-ping" />
                    <span className="relative w-1.5 h-1.5 rounded-full bg-[var(--color-mint)]" />
                  </span>
                  <span className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-[var(--color-graphite)]">
                    mainnet
                  </span>
                  <span className="w-px h-3 bg-[var(--color-line)]" />
                  <span className="font-mono text-[9.5px] tnum text-[var(--color-mute)]">14ms</span>
                </div>

                {/* sign in — text */}
                <a className="hidden md:inline-flex items-center font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-mute)] hover:text-[var(--color-ink)] transition-colors duration-500 px-2">
                  Sign in
                </a>

                {/* connect wallet — refined */}
                <a className="btn-wallet group">
                  <span className="btn-wallet-icon">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M3 7h15a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7Zm0 0V6a2 2 0 0 1 2-2h11"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                      <circle cx="17" cy="13" r="1.4" fill="currentColor" />
                    </svg>
                  </span>
                  <span className="btn-wallet-label">Connect wallet</span>
                  <span className="btn-wallet-arr">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Mark() {
  return (
    <div className="relative w-7 h-7 rounded-[8px] bg-[var(--color-ink)] grid place-items-center overflow-hidden">
      <svg viewBox="0 0 24 24" width="16" height="16" className="text-[var(--color-mint)]">
        <path
          d="M12 2 L21 6 V12 C21 17 17 21 12 22 C7 21 3 17 3 12 V6 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    </div>
  );
}

/* ============================================================
   HERO — asymmetric, large display, product visual on right
============================================================ */
function Hero() {
  return (
    <section className="relative grain">
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_70%_60%_at_30%_40%,black_30%,transparent_85%)]" />
      <div className="relative max-w-[1280px] mx-auto px-8 pt-24 pb-28 grid grid-cols-12 gap-8 items-center">
        {/* LEFT */}
        <div className="col-span-12 lg:col-span-7">
          <div className="pill rise rise-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-mint)] dot" />
            Watching <b className="text-[var(--color-ink)] tnum">$182,419,002</b> across 14 protocols
          </div>
          <h1 className="h-display mt-7 rise rise-2">
            Never get
            <br />
            <span className="font-serif italic font-normal">liquidated</span>{" "}
            <span className="text-[var(--color-mute)]">again.</span>
          </h1>
          <p className="mt-7 max-w-[520px] text-[17px] leading-[1.55] text-[var(--color-mute)] rise rise-3">
            Safety Net is an autonomous on-chain guardian. It watches every Aave loan, every Uniswap
            range and every token you hold — and quietly intervenes the second something turns red.
          </p>
          <div className="mt-9 flex items-center gap-7 rise rise-4">
            <a className="btn-ink">
              Connect wallet <span className="arr">→</span>
            </a>
            <a className="btn-ghost">
              Watch a 90-sec demo
              <span className="text-[var(--color-mute)]">↗</span>
            </a>
          </div>
          <div className="mt-12 flex items-center gap-8 text-[12px] text-[var(--color-mute)] rise rise-5">
            <Check>Read-only by default</Check>
            <Check>You approve every signer</Check>
            <Check>Non-custodial</Check>
          </div>
        </div>

        {/* RIGHT — product visual */}
        <div className="col-span-12 lg:col-span-5 rise rise-3">
          <ProductWindow />
        </div>
      </div>
    </section>
  );
}

function Check({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <svg width="12" height="12" viewBox="0 0 24 24" className="text-[var(--color-mint-deep)]">
        <path
          d="M4 12 L10 18 L20 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      {children}
    </span>
  );
}

function ProductWindow() {
  return (
    <div className="card p-0 overflow-hidden">
      {/* chrome */}
      <div className="flex items-center gap-2 px-4 h-9 border-b border-[var(--color-line)] bg-[var(--color-fog)]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-coral)]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-amber)]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-mint)]" />
        </div>
        <div className="ml-3 font-mono text-[10px] text-[var(--color-mute)] tracking-wider">
          safetynet.app / dashboard
        </div>
        <div className="ml-auto pill !py-0.5 !px-2 !text-[10px]">
          <span className="w-1 h-1 rounded-full bg-[var(--color-mint)] dot" /> live · block 19,482,711
        </div>
      </div>

      {/* alert card */}
      <div className="p-5">
        <div className="flex items-center gap-2">
          <span className="label">Critical alert</span>
          <span className="ml-auto font-mono text-[10px] text-[var(--color-mute)]">12s ago</span>
        </div>
        <div className="mt-3 flex items-baseline gap-3">
          <div className="text-[28px] font-medium tracking-tight">HF 1.18</div>
          <div className="text-[12px] text-[var(--color-coral)] font-mono">↓ from 1.42</div>
        </div>
        <p className="mt-1 text-[13px] text-[var(--color-mute)] leading-relaxed">
          Your <b className="text-[var(--color-ink)]">ETH/USDC</b> position on Aave v3 is approaching
          liquidation. Repay <b className="text-[var(--color-ink)]">$500 USDC</b> to bring health
          factor to <b className="text-[var(--color-ink)]">1.80</b>?
        </p>

        {/* simulated state diff */}
        <div className="mt-4 grid grid-cols-2 gap-2 text-[11px] font-mono">
          <div className="rounded-[8px] bg-[var(--color-fog)] border border-[var(--color-line)] p-2">
            <div className="text-[var(--color-mute)]">before</div>
            <div className="mt-1 text-[var(--color-coral)]">HF 1.18 · debt $9,420</div>
          </div>
          <div className="rounded-[8px] bg-[#e8f7ee] border border-[var(--color-mint)]/40 p-2">
            <div className="text-[var(--color-mint-deep)]">after</div>
            <div className="mt-1">HF 1.80 · debt $8,920</div>
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <button className="flex-1 bg-[var(--color-ink)] text-white rounded-full text-[12px] font-medium py-2.5">
            Repay $500 ·  one tap
          </button>
          <button className="px-3 rounded-full text-[12px] font-medium border border-[var(--color-line)] bg-white">
            Snooze
          </button>
        </div>

        <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-[var(--color-mute)]">
          <span>gas est. 142k · $0.41</span>
          <span>tx will simulate first</span>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   LOGO WALL
============================================================ */
function LogoWall() {
  const names = ["AAVE", "UNISWAP", "CHAINLINK", "MORPHO", "PENDLE", "SPARK", "COMPOUND", "EULER"];
  return (
    <section className="border-y border-[var(--color-line)] bg-[var(--color-fog)]">
      <div className="max-w-[1280px] mx-auto px-8 py-10 flex flex-col md:flex-row items-center gap-8">
        <div className="label whitespace-nowrap">Watching positions on</div>
        <div className="flex-1 grid grid-cols-4 md:grid-cols-8 gap-6 items-center">
          {names.map((n) => (
            <div
              key={n}
              className="font-mono text-[13px] tracking-[0.2em] text-[var(--color-graphite)]/70 hover:text-[var(--color-ink)] transition text-center"
            >
              {n}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   LIVE TICKER
============================================================ */
function LiveTicker() {
  const items = [
    "✓ Saved 0xA1f...3c2 from $14,200 liquidation",
    "ETH HF rebalanced for 0x9b2...77d",
    "✓ LP range refreshed · ETH/USDC 0.05%",
    "Drawdown alert · ARB -21.4%",
    "✓ Repaid 1,240 USDC for 0x4ee...a09",
    "Block 19,482,711 · 14ms",
    "✓ Saved 0x77c...d12 from $4,820 liquidation",
    "Chainlink feed ETH/USD updated",
  ];
  const doubled = [...items, ...items];
  return (
    <section className="border-b border-[var(--color-line)] bg-[var(--color-paper)] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-8 py-3 flex items-center gap-6">
        <div className="label flex items-center gap-2 whitespace-nowrap">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-mint)] dot" />
          live agent log
        </div>
        <div className="relative flex-1 overflow-hidden">
          <div className="ticker flex gap-10 whitespace-nowrap font-mono text-[11px] text-[var(--color-mute)]">
            {doubled.map((t, i) => (
              <span key={i}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   BENTO — differentiated cards
============================================================ */
function Bento() {
  return (
    <section className="max-w-[1280px] mx-auto px-8 py-28">
      <SectionHeader
        n="01"
        eyebrow="The product"
        title={
          <>
            Built like an instrument,
            <br />
            <span className="font-serif italic">not a dashboard.</span>
          </>
        }
      />
      <div className="grid grid-cols-12 gap-6 mt-14">
        {/* LIVE MONITOR — large */}
        <div className="card col-span-12 lg:col-span-7 p-8 min-h-[420px] flex flex-col">
          <div className="flex items-center justify-between">
            <span className="label">02 · live monitor</span>
            <span className="font-mono text-[10px] text-[var(--color-mute)] flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[var(--color-mint)] dot" /> per-block · 14ms latency
            </span>
          </div>
          <h3 className="mt-4 text-[28px] font-medium tracking-tight leading-[1.05]">
            Every position. Every block.
            <span className="text-[var(--color-mute)]"> Always on.</span>
          </h3>
          <p className="mt-2 text-[14px] text-[var(--color-mute)] max-w-md">
            The agent indexes Aave health factors, Uniswap LP ranges and Chainlink feeds on every
            new block. No polling delays. No missed liquidations.
          </p>
          <div className="mt-auto pt-8">
            <HealthBars />
          </div>
        </div>

        {/* DARK STAT CARD */}
        <div className="card-dark col-span-12 lg:col-span-5 p-8 min-h-[420px] flex flex-col relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-[var(--color-mint)]/10 blur-3xl" />
          <span className="label !text-white/40">03 · saved to date</span>
          <div className="mt-auto">
            <div className="flex items-baseline gap-3">
              <div className="text-[88px] font-medium tracking-[-0.05em] leading-none tnum">
                $4.1M
              </div>
              <div className="text-[var(--color-mint)] font-mono text-xs">+$182k this week</div>
            </div>
            <div className="mt-4 text-white/60 text-[14px] max-w-xs">
              Liquidations prevented across <b className="text-white tnum">1,284</b> positions since
              launch. Real money kept in real wallets.
            </div>
            <div className="mt-8 flex items-center gap-4 text-[11px] font-mono text-white/40">
              <Sparkline />
              <span>30-day rescues</span>
            </div>
          </div>
        </div>

        {/* UNISWAP RANGE — chart card */}
        <div className="card col-span-12 lg:col-span-5 p-7">
          <div className="flex items-center justify-between">
            <span className="label">04 · uniswap v3</span>
            <span className="font-mono text-[10px] text-[var(--color-mute)]">ETH/USDC · 0.05%</span>
          </div>
          <h3 className="mt-2 text-[18px] font-medium tracking-tight">
            Liquidity range, watched and rebalanced.
          </h3>
          <div className="mt-5">
            <LiquidityCurve />
          </div>
          <div className="mt-3 grid grid-cols-3 text-[11px] font-mono">
            <div>
              <div className="text-[var(--color-mute)]">lower</div>
              <div className="tnum">$2,840</div>
            </div>
            <div className="text-center">
              <div className="text-[var(--color-mute)]">price</div>
              <div className="tnum text-[var(--color-mint-deep)]">$3,210</div>
            </div>
            <div className="text-right">
              <div className="text-[var(--color-mute)]">upper</div>
              <div className="tnum">$3,560</div>
            </div>
          </div>
        </div>

        {/* AUTOPILOT */}
        <div className="card col-span-6 lg:col-span-3 p-7 flex flex-col justify-between">
          <span className="label">05 · autopilot</span>
          <div>
            <div className="text-[28px] font-medium tracking-tight leading-tight">
              Hands-off
              <br />
              <span className="font-serif italic text-[var(--color-mute)]">if you wish.</span>
            </div>
            <p className="mt-2 text-[12px] text-[var(--color-mute)]">
              Pre-approve a budget. The agent acts without asking.
            </p>
          </div>
          <Toggle />
        </div>

        {/* DRAWDOWN */}
        <div className="card col-span-6 lg:col-span-4 p-6">
          <div className="flex items-center justify-between">
            <span className="label">06 · drawdown alerts</span>
            <span className="font-mono text-[10px] text-[var(--color-mute)]">14 tokens</span>
          </div>
          <ul className="mt-3 divide-y divide-[var(--color-line)]">
            <TokenRow sym="ETH" px="$3,210" d="-2.1%" tone="ok" />
            <TokenRow sym="ARB" px="$0.84" d="-21.4%" tone="bad" />
            <TokenRow sym="LDO" px="$1.92" d="-4.6%" tone="warn" />
            <TokenRow sym="WBTC" px="$68,420" d="+1.0%" tone="ok" />
          </ul>
        </div>

        {/* x402 row */}
        <div className="card col-span-12 p-6 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden sweep">
          <div className="label whitespace-nowrap">07 · x402 micropayments</div>
          <div className="text-[15px]">
            <span className="font-medium tnum">$0.0004 / check.</span>{" "}
            <span className="text-[var(--color-mute)]">
              Your agent pays per poll. You only spend when it actually watches — and only ever pay
              real money when it actually saves you.
            </span>
          </div>
          <div className="md:ml-auto flex items-center gap-3 font-mono text-[10px] text-[var(--color-mute)]">
            streaming <span className="tnum text-[var(--color-ink)]">0.000412 USDC/s</span>
            <div className="w-24 h-1.5 rounded-full bg-[var(--color-fog)] overflow-hidden">
              <div className="h-full w-2/3 bg-[var(--color-ink)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  n,
  eyebrow,
  title,
  align = "left",
}: {
  n: string;
  eyebrow: string;
  title: React.ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <div className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
        <span className="font-mono text-[10px] text-[var(--color-mute)] tnum">{n}</span>
        <div className="w-8 h-px bg-[var(--color-line)]" />
        <span className="label !tracking-[0.22em]">{eyebrow}</span>
      </div>
      <h2 className="h-section mt-5 max-w-[820px]">{title}</h2>
    </div>
  );
}

/* ============================================================
   SECURITY
============================================================ */
function SecuritySection() {
  return (
    <section className="bg-[var(--color-fog)] border-y border-[var(--color-line)]">
      <div className="max-w-[1280px] mx-auto px-8 py-24 grid grid-cols-12 gap-10">
        <div className="col-span-12 lg:col-span-5">
          <SectionHeader
            n="02"
            eyebrow="Trust"
            title={
              <>
                Custody you keep.
                <br />
                <span className="font-serif italic">Power you grant.</span>
              </>
            }
          />
          <p className="mt-6 text-[15px] text-[var(--color-mute)] max-w-md leading-relaxed">
            Safety Net never holds your funds. You delegate a scoped guardian signer with explicit
            allowances — and you can revoke it from the dashboard at any time, in a single tx.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-7 grid grid-cols-2 gap-4">
          <TrustCard k="Audited by" v="Spearbit · Trail of Bits" />
          <TrustCard k="Bug bounty" v="$250k via Immunefi" />
          <TrustCard k="Open source" v="github.com/safetynet" />
          <TrustCard k="Signer scope" v="Repay & rebalance only" />
        </div>
      </div>
    </section>
  );
}
function TrustCard({ k, v }: { k: string; v: string }) {
  return (
    <div className="card p-5">
      <div className="label">{k}</div>
      <div className="mt-2 text-[16px] font-medium tracking-tight">{v}</div>
    </div>
  );
}

/* ============================================================
   HOW IT WORKS — vertical with line
============================================================ */
function HowItWorks() {
  const steps = [
    { n: "01", t: "Connect", d: "Read-only by default. Add a guardian signer when you're ready to let the agent act." },
    { n: "02", t: "Watch", d: "Every Aave loan, Uniswap range and ERC-20 indexed. Thresholds inferred or set by you." },
    { n: "03", t: "Decide", d: "On danger, you get a push notification with a one-tap remediation already simulated." },
    { n: "04", t: "Act", d: "Approve or let autopilot fire. Repay, withdraw, rebalance — fully on-chain." },
  ];
  return (
    <section className="max-w-[1280px] mx-auto px-8 py-28">
      <SectionHeader
        n="03"
        eyebrow="How it works"
        title={
          <>
            Four steps from connected wallet
            <br />
            to <span className="font-serif italic">peace of mind.</span>
          </>
        }
      />
      <div className="mt-16 relative">
        <div className="absolute left-[14px] top-0 bottom-0 w-px bg-[var(--color-line)] hidden md:block" />
        <ol className="space-y-10">
          {steps.map((s) => (
            <li key={s.n} className="grid grid-cols-12 gap-6 items-start">
              <div className="col-span-12 md:col-span-1 flex items-center gap-4">
                <div className="w-7 h-7 rounded-full border border-[var(--color-line)] bg-[var(--color-paper)] grid place-items-center font-mono text-[10px] tnum">
                  {s.n}
                </div>
              </div>
              <div className="col-span-12 md:col-span-4">
                <div className="text-[24px] font-medium tracking-tight">{s.t}</div>
              </div>
              <div className="col-span-12 md:col-span-7">
                <p className="text-[15px] text-[var(--color-mute)] leading-relaxed max-w-lg">
                  {s.d}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ============================================================
   TESTIMONIAL
============================================================ */
function Testimonial() {
  return (
    <section className="bg-[var(--color-fog)] border-y border-[var(--color-line)]">
      <div className="max-w-[1280px] mx-auto px-8 py-24">
        <blockquote className="max-w-3xl">
          <div className="font-serif italic text-[clamp(28px,4vw,52px)] leading-[1.15] tracking-[-0.02em]">
            “I had a 7-figure ETH loan on Aave during the March wick. I was asleep. Safety Net
            repaid 40k USDC on its own and saved me a six-figure liquidation penalty. It paid for
            itself a hundred times over in one night.”
          </div>
          <footer className="mt-8 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[var(--color-ink)] text-white grid place-items-center font-mono text-[11px]">
              0x
            </div>
            <div>
              <div className="text-[14px] font-medium">0xCygaar</div>
              <div className="text-[12px] text-[var(--color-mute)]">DeFi whale · anon</div>
            </div>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}

/* ============================================================
   PRICING
============================================================ */
function Pricing() {
  return (
    <section className="max-w-[1280px] mx-auto px-8 py-28">
      <SectionHeader
        n="04"
        eyebrow="Pricing"
        title={
          <>
            Pay only when
            <br />
            you’re <span className="font-serif italic">actually saved.</span>
          </>
        }
      />
      <div className="grid md:grid-cols-2 gap-6 mt-14">
        <div className="card p-9 flex flex-col">
          <span className="label">Pay-as-you-save</span>
          <div className="mt-4 flex items-baseline gap-2">
            <div className="text-[64px] font-medium tracking-[-0.04em] leading-none tnum">10%</div>
            <div className="text-[var(--color-mute)] text-[14px]">of liquidation prevented</div>
          </div>
          <p className="mt-4 text-[14px] text-[var(--color-mute)]">
            Charged on success only, settled in stablecoins via x402. No save, no fee. Perfect for
            wallets you don’t touch every day.
          </p>
          <ul className="mt-7 space-y-2.5 text-[14px]">
            <Li>Unlimited positions</Li>
            <Li>Per-block monitoring</Li>
            <Li>Push, Telegram & email alerts</Li>
            <Li>Manual approval flow</Li>
          </ul>
          <a className="mt-auto pt-8">
            <span className="btn-ghost">Start free <span>→</span></span>
          </a>
        </div>

        <div className="card-dark p-9 flex flex-col relative overflow-hidden">
          <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-[var(--color-mint)]/10 blur-3xl" />
          <div className="flex items-center justify-between">
            <span className="label !text-white/50">Flat — recommended</span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-mint)] border border-[var(--color-mint)]/40 rounded-full px-2 py-0.5">
              autopilot
            </span>
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <div className="text-[64px] font-medium tracking-[-0.04em] leading-none tnum">$19</div>
            <div className="text-white/50 text-[14px]">/ month</div>
          </div>
          <p className="mt-4 text-[14px] text-white/60">
            Streamed second-by-second over x402. Cancel mid-second if you like. Includes the full
            autopilot — the agent acts without asking.
          </p>
          <ul className="mt-7 space-y-2.5 text-[14px]">
            <Li dark>Everything in Pay-as-you-save</Li>
            <Li dark>Autopilot interventions</Li>
            <Li dark>Custom thresholds & strategies</Li>
            <Li dark>Priority block inclusion</Li>
            <Li dark>Private mempool routing</Li>
          </ul>
          <a className="mt-auto pt-8">
            <span className="inline-flex items-center gap-2 bg-white text-[var(--color-ink)] rounded-full px-5 py-2.5 text-[13px] font-medium">
              Start 14-day trial →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FAQ
============================================================ */
function FAQ() {
  const items = [
    {
      q: "Does Safety Net hold my funds?",
      a: "No. You delegate a scoped signer with explicit allowances. Funds always remain in your wallet, and you can revoke the signer at any time.",
    },
    {
      q: "How does the agent get paid?",
      a: "Per-block checks are paid with x402 stablecoin micropayments — fractions of a cent. The success fee or subscription is settled the same way.",
    },
    {
      q: "What if the agent fails to act in time?",
      a: "Each agent runs redundantly across multiple regions and uses private mempool routing on the paid plan. We publish uptime and intervention latency at status.safetynet.app.",
    },
    {
      q: "Which protocols are supported?",
      a: "Aave v3, Morpho Blue, Spark, Compound v3, Euler, Uniswap v3 LPs and any ERC-20 you hold. New protocols are added monthly.",
    },
    {
      q: "Can I use it without giving any signing permission?",
      a: "Yes — read-only mode is the default. You’ll receive alerts and a one-tap link to act manually from your own wallet.",
    },
  ];
  return (
    <section className="bg-[var(--color-fog)] border-y border-[var(--color-line)]">
      <div className="max-w-[1280px] mx-auto px-8 py-28 grid grid-cols-12 gap-10">
        <div className="col-span-12 lg:col-span-4">
          <SectionHeader n="05" eyebrow="FAQ" title={<>Common <span className="font-serif italic">questions.</span></>} />
        </div>
        <div className="col-span-12 lg:col-span-8">
          <ul className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
            {items.map((it, i) => (
              <li key={i} className="py-6 group">
                <details>
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <span className="text-[18px] font-medium tracking-tight">{it.q}</span>
                    <span className="text-[var(--color-mute)] group-open:rotate-45 transition text-2xl leading-none">+</span>
                  </summary>
                  <p className="mt-3 text-[14.5px] text-[var(--color-mute)] leading-relaxed max-w-2xl">
                    {it.a}
                  </p>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FINAL CTA
============================================================ */
function FinalCTA() {
  return (
    <section className="max-w-[1280px] mx-auto px-8 py-28 text-center grain">
      <div className="pill">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-mint)] dot" />
        Connect in under 10 seconds
      </div>
      <h2 className="h-display mt-7">
        Sleep through the
        <br />
        <span className="font-serif italic">next wick.</span>
      </h2>
      <div className="mt-10 flex items-center justify-center gap-7">
        <a className="btn-ink">
          Connect wallet <span className="arr">→</span>
        </a>
        <a className="btn-ghost">
          Read the docs <span className="text-[var(--color-mute)]">↗</span>
        </a>
      </div>
    </section>
  );
}

/* ============================================================
   FOOTER
============================================================ */
function Footer() {
  const cols = [
    {
      h: "Product",
      l: ["Dashboard", "Autopilot", "Integrations", "Changelog", "Status"],
    },
    { h: "Developers", l: ["Docs", "API", "x402", "GitHub", "Bug bounty"] },
    { h: "Company", l: ["About", "Blog", "Careers", "Press", "Brand"] },
    { h: "Legal", l: ["Terms", "Privacy", "Security", "Disclosures"] },
  ];
  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-paper)]">
      <div className="max-w-[1280px] mx-auto px-8 py-20">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-4">
            <div className="flex items-center gap-3">
              <Mark />
              <span className="font-semibold tracking-tight">Safety Net</span>
            </div>
            <p className="mt-5 text-[14px] text-[var(--color-mute)] max-w-xs leading-relaxed">
              The autonomous on-chain guardian for DeFi positions. Built by people who’ve been
              liquidated, so you don’t have to be.
            </p>
            <div className="mt-6 pill">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-mint)] dot" />
              All systems operational
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.h} className="col-span-6 md:col-span-2">
              <div className="label">{c.h}</div>
              <ul className="mt-4 space-y-2.5 text-[13.5px]">
                {c.l.map((i) => (
                  <li key={i} className="text-[var(--color-mute)] hover:text-[var(--color-ink)] transition">
                    <a>{i}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-[var(--color-line)] flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-[var(--color-mute)]">
          <div>© 2026 Safety Net Labs · Non-custodial · Made on the internet</div>
          <div className="font-mono tnum">block 19,482,711 · 14ms · all green</div>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   PRIMITIVES & VISUALS
============================================================ */
function Li({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <li className="flex items-center gap-2.5">
      <svg width="12" height="12" viewBox="0 0 24 24" className={dark ? "text-[var(--color-mint)]" : "text-[var(--color-ink)]"}>
        <path d="M4 12 L10 18 L20 6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
      <span className={dark ? "text-white/85" : ""}>{children}</span>
    </li>
  );
}

function HealthBars() {
  const positions = [
    { n: "ETH/USDC · Aave v3", h: 1.18, tone: "bad" },
    { n: "wstETH/ETH · Aave v3", h: 2.4, tone: "ok" },
    { n: "ARB/USDC · Uniswap LP", h: 1.62, tone: "warn" },
    { n: "WBTC long · Aave v3", h: 3.1, tone: "ok" },
  ];
  const color = (t: string) =>
    t === "bad" ? "bg-[var(--color-coral)]" : t === "warn" ? "bg-[var(--color-amber)]" : "bg-[var(--color-mint)]";
  return (
    <div className="space-y-3.5">
      {positions.map((p) => (
        <div key={p.n} className="flex items-center gap-4 text-[13px]">
          <div className="w-52 truncate text-[var(--color-mute)] font-mono text-[11px]">{p.n}</div>
          <div className="flex-1 h-1.5 rounded-full bg-[var(--color-fog)] overflow-hidden border border-[var(--color-line)]">
            <div className={`h-full ${color(p.tone)}`} style={{ width: `${Math.min(p.h / 4, 1) * 100}%` }} />
          </div>
          <div className="w-12 text-right font-mono text-[11px] tnum">{p.h.toFixed(2)}</div>
        </div>
      ))}
    </div>
  );
}

function LiquidityCurve() {
  // synthesize a bell-ish curve as a polyline
  const pts: string[] = [];
  for (let x = 0; x <= 100; x += 2) {
    const y = 60 - Math.exp(-Math.pow((x - 50) / 18, 2)) * 50;
    pts.push(`${x},${y}`);
  }
  return (
    <div className="relative h-24 rounded-[10px] border border-[var(--color-line)] bg-[var(--color-fog)] overflow-hidden">
      <div className="absolute inset-y-0 left-[20%] right-[25%] bg-[var(--color-mint)]/12 border-x border-dashed border-[var(--color-mint)]/50" />
      <svg viewBox="0 0 100 70" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <polyline points={pts.join(" ")} fill="none" stroke="rgba(12,12,12,0.55)" strokeWidth="0.8" />
      </svg>
      <div className="absolute inset-y-0 left-[55%] w-[2px] bg-[var(--color-ink)]" />
      <div className="absolute left-[55%] -translate-x-1/2 top-1 w-1.5 h-1.5 rounded-full bg-[var(--color-ink)]" />
    </div>
  );
}

function Sparkline() {
  const pts = [50, 46, 48, 40, 42, 35, 30, 32, 25, 22, 18, 15, 12, 14, 10, 8, 12, 6, 9, 5];
  const path = pts.map((y, i) => `${(i / (pts.length - 1)) * 100},${y}`).join(" ");
  return (
    <svg viewBox="0 0 100 50" className="w-32 h-8">
      <polyline points={path} fill="none" stroke="rgb(31 209 137)" strokeWidth="1.5" />
    </svg>
  );
}

function Toggle() {
  return (
    <div className="self-start flex items-center gap-2.5">
      <div className="w-10 h-5.5 rounded-full bg-[var(--color-ink)] relative" style={{ height: "22px" }}>
        <div className="absolute right-0.5 top-0.5 w-[18px] h-[18px] rounded-full bg-[var(--color-mint)]" />
      </div>
      <span className="text-[11px] text-[var(--color-mute)] font-mono uppercase tracking-wider">enabled</span>
    </div>
  );
}

function TokenRow({
  sym,
  px,
  d,
  tone,
}: {
  sym: string;
  px: string;
  d: string;
  tone: "ok" | "warn" | "bad";
}) {
  const c = tone === "bad" ? "text-[var(--color-coral)]" : tone === "warn" ? "text-[var(--color-amber)]" : "text-[var(--color-mint-deep)]";
  return (
    <li className="flex items-center justify-between py-2.5">
      <div className="flex items-center gap-2.5">
        <div className="w-6 h-6 rounded-full bg-[var(--color-fog)] border border-[var(--color-line)] grid place-items-center text-[10px] font-mono">
          {sym[0]}
        </div>
        <span className="font-medium text-[13px]">{sym}</span>
      </div>
      <div className="font-mono text-[11px] text-[var(--color-mute)] tnum">{px}</div>
      <div className={`font-mono text-[11px] tnum ${c}`}>{d}</div>
    </li>
  );
}
