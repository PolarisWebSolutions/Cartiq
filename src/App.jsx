import { useMemo, useState } from "react";

const featureCards = [
  {
    title: "Visual storefront builder",
    description:
      "Pair flexible drag-and-drop sections with quick-start templates to go live in an afternoon. Adjust typography, colors, and layout down to the pixel.",
  },
  {
    title: "Unified commerce dashboard",
    description:
      "Track orders, fulfillment, and payments in one command center. Automations keep your inventory synced across every channel.",
  },
  {
    title: "Built-in marketing stack",
    description:
      "Launch email flows, SMS campaigns, and upsell funnels without extra tools. Your customer data stays in one place.",
  },
  {
    title: "Developer friendly",
    description:
      "Extend Cartiq with a modern API, webhooks, and a theme kit built on web standards. Ship custom experiences faster.",
  },
];

const templates = [
  {
    name: "Nova",
    description: "Bold, editorial layout perfect for lifestyle brands and studio shops.",
    className: "template-gradient",
  },
  {
    name: "Harbor",
    description: "Story-driven storefront with modular sections for goods and services.",
    className: "template-gradient-alt",
  },
  {
    name: "Verse",
    description: "Minimal design focused on digital products, downloads, and memberships.",
    className: "template-gradient-accent",
  },
];

const testimonials = [
  {
    quote:
      "We migrated in a weekend and immediately cut our tooling costs in half. Cartiq keeps our team focused on products, not maintenance.",
    name: "Jordan Blake",
    role: "Founder, Northwood Supply",
  },
  {
    quote:
      "The visual editor is a dream. Our storefront finally matches our brand and we didn't need to hire an agency to get there.",
    name: "Mina Patel",
    role: "Creative Director, Kindred Goods",
  },
  {
    quote:
      "We activated subscriptions, digital products, and wholesale in one platform. Cartiq replaces three other tools for us.",
    name: "Emilio Santiago",
    role: "COO, Atlas Roasters",
  },
];

const faqs = [
  {
    question: "How long does it take to launch a store on Cartiq?",
    answer:
      "Most merchants publish within a day. Start with a template, import your products, and customize the design. Our onboarding concierge can migrate your data for you.",
  },
  {
    question: "Does Cartiq charge transaction fees?",
    answer:
      "No. We believe you should keep what you earn. Use Cartiq Payments or connect your existing processor without extra fees from us.",
  },
  {
    question: "Can developers extend the platform?",
    answer:
      "Yes. Cartiq exposes a fully documented REST and GraphQL API, webhooks, and a theme kit using standard tooling so you can ship headless experiences.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "Every plan includes 24/7 live chat and a dedicated onboarding specialist for your first 60 days. Scale customers receive priority SLAs.",
  },
];

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Templates", href: "#templates" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

const heroHighlights = [
  "Drag-and-drop storefront designer",
  "Real-time inventory and payments dashboard",
  "Built-in SEO, analytics, and email automations",
];

const pricingTiers = [
  {
    name: "Starter",
    price: "$9",
    priceSuffix: "/ month",
    tagline: "solo entrepreneurs, creators, and small businesses launching their first store.",
    includesHeading: "Includes:",
    features: [
      "1 Online Store (Cartiq-hosted)",
      "Up to 25 products",
      "1 Staff Account",
      "1GB media storage",
      "Basic Checkout + Stripe or PayPal Integration",
      "Basic Themes (Prebuilt templates)",
      "Cartiq Analytics Lite (traffic + order stats)",
      "Email support",
    ],
    goal: "entry-level access to the Cartiq ecosystem with low friction onboarding.",
    ctaLabel: "Start Starter plan",
    ctaHref: "#",
    ctaVariant: "primary",
  },
  {
    name: "Growth",
    price: "$29",
    priceSuffix: "/ month",
    tagline: "growing brands ready to scale their catalog and marketing.",
    includesHeading: "Everything in Starter, plus:",
    features: [
      "Up to 250 products",
      "3 Staff Accounts",
      "Custom Domain Support",
      "Abandoned Cart Recovery",
      "Discount Codes & Gift Cards",
      "Built-in Blog + SEO Tools",
      "Cartiq Wallet Integration (optional upsell)",
      "Priority Chat Support",
    ],
    goal: "support serious sellers expanding their reach and needing automation.",
    ctaLabel: "Upgrade to Growth",
    ctaHref: "#",
    ctaVariant: "primary",
    highlight: true,
  },
  {
    name: "Pro",
    price: "$79",
    priceSuffix: "/ month",
    tagline: "established e-commerce brands and agencies.",
    includesHeading: "Everything in Growth, plus:",
    features: [
      "Unlimited products",
      "10 Staff Accounts",
      "Advanced Analytics + Reports",
      "Cartiq API & Developer Access",
      "Custom Checkout Styling",
      "Multi-Currency & Multi-Language Support",
      "Integrations (Klaviyo, Shippo, Printful, etc.)",
      "Dedicated Account Manager",
    ],
    goal: "give power users control and extensibility.",
    ctaLabel: "Explore Pro",
    ctaHref: "#",
    ctaVariant: "secondary",
  },
  {
    name: "Enterprise",
    price: "Custom pricing",
    tagline: "large-scale operations or SaaS resellers.",
    includesHeading: "Everything in Pro, plus:",
    features: [
      "White-label & Multi-store Management",
      "API Rate Limits Lifted",
      "SSO & Custom Integrations",
      "SLA-backed 99.9% Uptime Guarantee",
      "Dedicated Infrastructure Region (optional)",
      "Onboarding & Migration Assistance",
    ],
    goal: "attract enterprise clients, agencies, and global brands.",
    ctaLabel: "Talk to sales",
    ctaHref: "#",
    ctaVariant: "outline",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function App() {
  const [navOpen, setNavOpen] = useState(false);
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const handleNavClick = () => setNavOpen(false);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-50 border-b border-white/5 bg-background/90 backdrop-blur-xl">
        <div className="container-shell relative flex items-center justify-between gap-6 py-5">
          <a href="#hero" className="flex items-center gap-3 text-sm font-semibold tracking-[0.08em] uppercase">
            <span className="relative inline-flex h-4 w-4 items-center justify-center overflow-hidden rounded-md">
              <span className="absolute inset-0 bg-gradient-to-br from-primary to-accent" />
              <span className="relative h-[10px] w-[10px] rounded-sm bg-white/20" />
            </span>
            Cartiq
          </a>

          <nav
            id="primary-navigation"
            aria-label="primary"
            className={classNames(
              "hidden items-center gap-7 text-sm font-medium text-textSecondary transition-colors lg:flex"
            )}
          >
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="group relative hover:text-textPrimary focus-visible:text-textPrimary">
                <span>{link.name}</span>
                <span className="absolute bottom-[-10px] left-0 h-0.5 w-full origin-left scale-x-0 bg-gradient-to-r from-primary to-accent transition-transform duration-200 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a className="text-sm font-medium text-textSecondary transition hover:text-textPrimary" href="#">
              Sign in
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-textPrimary transition hover:translate-y-[-2px] hover:bg-white/15"
              href="#pricing"
            >
              Start free trial
            </a>
          </div>

          <button
            type="button"
            className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-white/15 bg-white/5 text-textPrimary transition hover:bg-white/10 lg:hidden"
            aria-expanded={navOpen}
            aria-controls="primary-navigation"
            onClick={() => setNavOpen((open) => !open)}
          >
            <span
              className={classNames(
                "h-0.5 w-6 rounded-full bg-current transition-transform duration-300",
                navOpen && "translate-y-[6px] rotate-45"
              )}
            />
            <span className={classNames("h-0.5 w-6 rounded-full bg-current transition-opacity duration-300", navOpen && "opacity-0")} />
            <span
              className={classNames(
                "h-0.5 w-6 rounded-full bg-current transition-transform duration-300",
                navOpen && "-translate-y-[6px] -rotate-45"
              )}
            />
            <span className="sr-only">Toggle navigation</span>
          </button>

          <div
            className={classNames(
              "absolute left-0 right-0 top-full mt-3 origin-top rounded-2xl border border-white/10 bg-background/95 p-6 shadow-soft backdrop-blur-xl transition-all",
              navOpen
                ? "translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-2 opacity-0",
              "lg:hidden"
            )}
          >
            <nav className="flex flex-col gap-4 text-base font-medium text-textSecondary">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleNavClick}
                  className="transition hover:text-textPrimary"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="mt-6 flex flex-col gap-3">
              <a className="text-base font-medium text-textSecondary transition hover:text-textPrimary" href="#">
                Sign in
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-3 text-base font-semibold text-textPrimary transition hover:bg-white/15"
                href="#pricing"
                onClick={handleNavClick}
              >
                Start free trial
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section id="hero" className="relative overflow-hidden">
          <div className="absolute inset-0 headline-gradient" aria-hidden="true" />
          <div className="absolute inset-0 hero-overlay" aria-hidden="true" />

          <div className="container-shell relative grid gap-16 py-24 lg:grid-cols-2 lg:py-28">
            <div className="flex flex-col justify-center">
              <p className="mb-4 flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-wide text-textSecondary">
                <span className="h-px w-8 bg-gradient-to-r from-primary/40 to-accent/40" />
                Built for modern merchants
              </p>
              <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                An ecommerce platform that grows with your ambition.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-textSecondary">
                Cartiq gives you the tools to launch a polished storefront, automate operations, and sell anywhere with plans
                starting at <span className="font-semibold text-textPrimary">$9 per month</span>. No bloated plugins. No hidden fees.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  className="inline-flex items-center justify-center rounded-full border border-transparent bg-gradient-to-br from-primary to-[#09E2D4] px-6 py-3 text-sm font-semibold text-[#001112] shadow-[0_20px_40px_rgba(0,196,179,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_50px_rgba(0,196,179,0.45)]"
                  href="#pricing"
                >
                  Explore pricing tiers
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-full border border-accent/40 bg-accent/20 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-accent/30"
                  href="#features"
                >
                  See everything you get
                </a>
              </div>
              <ul className="mt-8 grid gap-3 text-sm text-textSecondary">
                {heroHighlights.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="inline-flex h-2 w-2 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute top-1/4 h-80 w-80 -translate-y-1/2 rounded-full bg-primary/35 blur-[90px]" aria-hidden="true" />
              <div className="panel-glass relative w-full max-w-md rounded-[28px] border border-white/10 p-7 shadow-glow">
                <div className="flex items-center justify-between text-sm text-textSecondary">
                  <span>Realtime revenue</span>
                  <span className="text-2xl font-semibold text-white">$24,918</span>
                </div>
                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <Stat label="Conversion rate" value="4.8%" />
                  <Stat label="Avg. order value" value="$86.42" />
                  <Stat label="Subscriptions" value="1,204" />
                  <div className="rounded-2xl border border-success/40 bg-success/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-success">
                    Fulfillment health: On track
                  </div>
                </div>
                <div className="mt-7">
                  <p className="text-xs uppercase tracking-[0.2em] text-textSecondary">Top regions</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {["Brooklyn", "Portland", "Austin"].map((region) => (
                      <span key={region} className="inline-flex items-center rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                        {region}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section id="features">
          <div className="container-shell">
            <SectionHeader
              eyebrow="Everything you need"
              title="Powerful tooling without the enterprise price tag."
              description="Cartiq replaces the patchwork stack with one unified workspace. From storefront design to fulfillment, you can launch and scale in days, not months."
            />
            <div className="grid gap-6 md:grid-cols-2">
              {featureCards.map((feature) => (
                <article
                  key={feature.title}
                  className="card-surface group rounded-3xl border border-white/10 p-8 shadow-soft transition hover:-translate-y-1 hover:border-primary/40"
                >
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-textSecondary">{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </Section>

        <Section id="builder" className="bg-background">
          <div className="container-shell grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <SectionEyebrow>Design faster</SectionEyebrow>
              <h2 className="text-3xl font-bold text-white md:text-[2.6rem] md:leading-tight">
                Launch-ready themes with a flexible visual editor.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-textSecondary">
                Start with curated templates built for conversion, then tailor every component in real time. Cartiq protects
                your brand consistency while giving you full creative control.
              </p>
              <ul className="mt-8 grid gap-4 text-sm text-textSecondary">
                {["Inline editing for copy, media, and layout", "Grid-aware spacing system for pixel-perfect designs", "Reusable content blocks synced across pages"].map((item) => (
                  <li key={item} className="relative pl-8">
                    <span className="absolute left-0 top-1.5 inline-flex h-4 w-4 items-center justify-center rounded-md bg-success text-background">
                      <span className="h-2 w-2 rounded-sm bg-background" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#templates"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3"
              >
                Preview template gallery
                <span aria-hidden="true" className="text-base">&gt;</span>
              </a>
            </div>

            <div className="relative">
              <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-surface/90 to-background/70 shadow-glow">
                <div className="flex items-center justify-between border-b border-white/10 px-7 py-5 text-sm">
                  <span className="font-semibold text-white">Cartiq Builder</span>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-white/30" />
                    <span className="h-2 w-2 rounded-full bg-white/30" />
                    <span className="h-2 w-2 rounded-full bg-white/30" />
                  </div>
                </div>
                <div className="grid gap-4 p-7">
                  <div className="flex flex-col rounded-2xl border border-white/10 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 p-6">
                    <div>
                      <p className="text-[0.65rem] uppercase tracking-[0.2em] text-textSecondary">Hero section</p>
                      <h4 className="mt-2 text-xl font-semibold text-white">Brighten your launch</h4>
                    </div>
                    <button className="mt-6 inline-flex w-fit items-center rounded-full bg-primary px-4 py-2 text-xs font-semibold text-[#001112]">
                      Customize
                    </button>
                  </div>
                  <div className="h-32 rounded-2xl border border-white/10 bg-white/5" />
                  <div className="h-32 rounded-2xl border border-white/10 bg-white/5" />
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="pricing" className="bg-gradient-to-b from-surface/80 via-background to-background">
          <div className="container-shell">
            <SectionHeader
              eyebrow="Simple pricing"
              title="Flexible plans for every stage of your business."
              description="Start with Starter for $9 per month and unlock advanced commerce tooling as you scale. No hidden fees or surprise add-ons."
            />
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {pricingTiers.map((tier) => {
                const isHighlighted = tier.highlight;

                const buttonClasses = classNames(
                  "inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition",
                  tier.ctaVariant === "primary"
                    ? "border border-transparent bg-gradient-to-br from-primary to-[#09E2D4] text-[#001112] shadow-[0_20px_40px_rgba(0,196,179,0.3)] hover:-translate-y-0.5 hover:shadow-[0_24px_50px_rgba(0,196,179,0.45)]"
                    : tier.ctaVariant === "secondary"
                    ? "border border-white/10 bg-white/10 text-white hover:-translate-y-0.5 hover:bg-white/20"
                    : "border border-white/20 bg-transparent text-white hover:-translate-y-0.5 hover:bg-white/10"
                );

                return (
                  <article
                    key={tier.name}
                    className={classNames(
                      "rounded-[28px] border p-10 shadow-soft transition hover:-translate-y-1",
                      isHighlighted ? "border-accent/40 bg-accent/10 shadow-glow" : "border-white/10 bg-white/5"
                    )}
                  >
                    <span
                      className={classNames(
                        "inline-flex rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em]",
                        isHighlighted ? "bg-accent/20 text-white" : "bg-primary/15 text-primary"
                      )}
                    >
                      {tier.name}
                    </span>
                    <h3 className="mt-6 text-3xl font-semibold text-white">
                      {tier.price}
                      {tier.priceSuffix ? <span className="text-base font-medium text-textSecondary">{` ${tier.priceSuffix}`}</span> : null}
                    </h3>
                    <p className="mt-3 text-sm text-textSecondary">
                      <span className="font-semibold text-white">Perfect for:</span> {tier.tagline}
                    </p>
                    <p className="mt-6 text-xs font-semibold text-textSecondary">{tier.includesHeading}</p>
                    <ul className="mt-3 space-y-3 text-sm text-textSecondary">
                      {tier.features.map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <span
                            className={classNames(
                              "inline-flex h-5 w-5 items-center justify-center rounded-md border",
                              isHighlighted ? "border-white/30 bg-white/10" : "border-success/40 bg-success/20"
                            )}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-5 text-xs text-textSecondary">
                      <span className="font-semibold text-white">Goal:</span> {tier.goal}
                    </p>
                    <a className={classNames("mt-8", buttonClasses)} href={tier.ctaHref}>
                      {tier.ctaLabel}
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </Section>

        <Section id="templates">
          <div className="container-shell">
            <SectionHeader
              eyebrow="Template gallery"
              title="Designed to spotlight your products and brand story."
            />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {templates.map((template) => (
                <article
                  key={template.name}
                  className="group flex min-h-[360px] flex-col overflow-hidden rounded-[22px] border border-white/10 bg-white/5 shadow-soft transition hover:-translate-y-1 hover:border-primary/40"
                >
                  <div className={classNames("aspect-[3/2] w-full", template.className)} />
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <h3 className="text-lg font-semibold text-white">{template.name}</h3>
                    <p className="text-sm text-textSecondary">{template.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Section>

        <Section id="testimonials" className="bg-gradient-to-b from-background via-[#0B0D10] to-[#050608]">
          <div className="container-shell">
            <SectionHeader eyebrow="Loved by founders" title="Indie brands scale faster with Cartiq." />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <figure
                  key={testimonial.name}
                  className="rounded-[22px] border border-white/10 bg-black/30 p-8 shadow-soft"
                >
                  <blockquote className="text-base leading-relaxed text-textSecondary">&ldquo;{testimonial.quote}&rdquo;</blockquote>
                  <figcaption className="mt-6">
                    <span className="block text-sm font-semibold text-white">{testimonial.name}</span>
                    <span className="mt-1 block text-xs text-textSecondary">{testimonial.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </Section>

        <Section id="faq" className="bg-gradient-to-b from-surface/80 via-background to-background">
          <div className="container-shell">
            <SectionHeader eyebrow="Questions" title="Answers before you switch to Cartiq." />
            <div className="grid gap-4 md:grid-cols-2">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm transition data-[open]:border-primary/40"
                >
                  <summary className="cursor-pointer text-sm font-semibold text-white">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-textSecondary">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </Section>

        <section id="cta" className="cta-sheen py-20">
          <div className="container-shell">
            <div className="grid gap-8 rounded-[28px] border border-primary/30 bg-black/50 p-10 shadow-glow lg:grid-cols-[2fr_1fr]">
              <div>
                <h2 className="text-3xl font-bold text-white md:text-[2.6rem] md:leading-tight">
                  Launch your Cartiq storefront this afternoon.
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-textSecondary">
                  Join thousands of independent brands building sustainable businesses with Cartiq. Start your trial, explore the builder, and publish when you're ready.
                </p>
              </div>
              <div className="flex flex-col items-start justify-center gap-4 sm:flex-row sm:items-center sm:justify-end">
                <a
                  className="inline-flex items-center justify-center rounded-full border border-transparent bg-gradient-to-br from-primary to-[#09E2D4] px-6 py-3 text-sm font-semibold text-[#001112] shadow-[0_20px_40px_rgba(0,196,179,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_50px_rgba(0,196,179,0.45)]"
                  href="#"
                >
                  Compare plans
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/15"
                  href="#"
                >
                  Talk to sales
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#0B0D10] py-16 text-sm text-textSecondary">
        <div className="container-shell">
          <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
            <div className="max-w-xs space-y-4">
              <a href="#hero" className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.08em] text-white">
                <span className="relative inline-flex h-4 w-4 items-center justify-center overflow-hidden rounded-md">
                  <span className="absolute inset-0 bg-gradient-to-br from-primary to-accent" />
                  <span className="relative h-[10px] w-[10px] rounded-sm bg-white/20" />
                </span>
                Cartiq
              </a>
              <p>Commerce infrastructure crafted for independent brands.</p>
            </div>
            <div className="grid flex-1 grid-cols-1 gap-10 text-sm text-textSecondary sm:grid-cols-2 lg:grid-cols-3">
              <FooterColumn
                title="Product"
                links={[
                  { label: "Features", href: "#features" },
                  { label: "Templates", href: "#templates" },
                  { label: "Pricing", href: "#pricing" },
                  { label: "FAQ", href: "#faq" },
                ]}
              />
              <FooterColumn
                title="Company"
                links={[
                  { label: "About", href: "#" },
                  { label: "Careers", href: "#" },
                  { label: "Press", href: "#" },
                ]}
              />
              <FooterColumn
                title="Resources"
                links={[
                  { label: "Documentation", href: "#" },
                  { label: "API Reference", href: "#" },
                  { label: "Status", href: "#" },
                ]}
              />
            </div>
          </div>
          <div className="mt-12 border-t border-white/10 pt-6 text-xs text-textSecondary/80">
            &copy; {currentYear} Cartiq. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function Section({ id, className, children }) {
  return (
    <section id={id} className={classNames("py-24", className)}>
      {children}
    </section>
  );
}

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mb-16 max-w-3xl">
      {eyebrow ? <SectionEyebrow>{eyebrow}</SectionEyebrow> : null}
      {title ? <h2 className="text-3xl font-bold text-white md:text-[2.6rem] md:leading-tight">{title}</h2> : null}
      {description ? <p className="mt-5 text-base leading-relaxed text-textSecondary">{description}</p> : null}
    </div>
  );
}

function SectionEyebrow({ children }) {
  return (
    <p className="mb-4 flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-wide text-textSecondary">
      <span className="h-px w-8 bg-gradient-to-r from-primary/40 to-accent/40" />
      {children}
    </p>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-[0.65rem] uppercase tracking-[0.2em] text-textSecondary">{label}</p>
      <p className="mt-2 text-lg font-semibold text-white">{value}</p>
    </div>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">{title}</h4>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a className="transition hover:text-primary" href={link.href}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
