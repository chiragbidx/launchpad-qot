// ─── Hero ───────────────────────────────────────────────────────────────────
export type HeroContent = {
  badgeInner: string;
  badgeOuter: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  heroImageLight: string;
  heroImageDark: string;
  heroImageAlt: string;
};
// ... (types unchanged)
export type SponsorItem = { icon: string; name: string };
export type SponsorsContent = {
  heading: string;
  items: SponsorItem[];
};
export type BenefitItem = { icon: string; title: string; description: string };
export type BenefitsContent = {
  eyebrow: string;
  heading: string;
  description: string;
  items: BenefitItem[];
};
export type FeatureItem = { icon: string; title: string; description: string };
export type FeaturesContent = {
  eyebrow: string;
  heading: string;
  subtitle: string;
  items: FeatureItem[];
};
export type ServiceItem = { title: string; description: string; pro: boolean };
export type ServicesContent = {
  eyebrow: string;
  heading: string;
  subtitle: string;
  items: ServiceItem[];
};
export type TestimonialItem = {
  image: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
};
export type TestimonialsContent = {
  eyebrow: string;
  heading: string;
  reviews: TestimonialItem[];
};
export type SocialLink = { name: string; url: string };
export type TeamMember = {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialLink[];
};
export type TeamContent = {
  eyebrow: string;
  heading: string;
  members: TeamMember[];
};
export type PricingPlan = {
  title: string;
  popular: boolean;
  price: number;
  description: string;
  buttonText: string;
  benefits: string[];
};
export type PricingContent = {
  eyebrow: string;
  heading: string;
  subtitle: string;
  priceSuffix: string;
  plans: PricingPlan[];
};
export type ContactInfoBlock = { label: string; value: string | string[] };
export type ContactContent = {
  eyebrow: string;
  heading: string;
  description: string;
  mailtoAddress: string;
  info: {
    address: ContactInfoBlock;
    phone: ContactInfoBlock;
    email: ContactInfoBlock;
    hours: ContactInfoBlock;
  };
  formSubjects: string[];
  formSubmitLabel: string;
};
export type FaqItem = { question: string; answer: string };
export type FaqContent = {
  eyebrow: string;
  heading: string;
  items: FaqItem[];
};
export type FooterLink = { label: string; href: string };
export type FooterColumn = { heading: string; links: FooterLink[] };
export type FooterContent = {
  brandName: string;
  columns: FooterColumn[];
  copyright: string;
  attribution: { label: string; href: string };
};
export type NavRoute = { href: string; label: string };
export type NavFeature = { title: string; description: string };
export type NavbarContent = {
  brandName: string;
  routes: NavRoute[];
  featureDropdownLabel: string;
  featureImage: { src: string; alt: string };
  features: NavFeature[];
  signInLabel: string;
  signUpLabel: string;
  dashboardLabel: string;
  githubLink: { href: string; ariaLabel: string };
};
export type HomeContent = {
  hero: HeroContent;
  sponsors: SponsorsContent;
  benefits: BenefitsContent;
  features: FeaturesContent;
  services: ServicesContent;
  testimonials: TestimonialsContent;
  team: TeamContent;
  pricing: PricingContent;
  contact: ContactContent;
  faq: FaqContent;
  footer: FooterContent;
  navbar: NavbarContent;
};
// ─── Defaults ───────────────────────────────────────────────────────────────
export const defaultHomeContent: HomeContent = {
  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    badgeInner: "Launch",
    badgeOuter: "Welcome to LaunchBoard",
    titleBefore: "Launch your next",
    titleHighlight: "startup",
    titleAfter: "with confidence",
    subtitle: "Plan, track, and accelerate your startup journey—all in one place.",
    primaryCta: { label: "Get Started Now", href: "/auth#signup" },
    secondaryCta: { label: "See How It Works", href: "#features" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "LaunchBoard dashboard preview",
  },

  // ── Sponsors ─────────────────────────────────────────────────────────────
  sponsors: {
    heading: "Built for modern founders",
    items: [
      { icon: "Rocket", name: "Startups" },
      { icon: "Users", name: "Teams" },
      { icon: "Star", name: "VCs" },
      { icon: "Goal", name: "Accelerators" },
    ],
  },

  // ── Benefits ─────────────────────────────────────────────────────────────
  benefits: {
    eyebrow: "Why LaunchBoard",
    heading: "Command center for founders and teams",
    description:
      "LaunchBoard gives you a practical, flexible workspace to move ideas from vision to execution—no more scattered notes or lost progress.",
    items: [
      {
        icon: "Blocks",
        title: "Launch-ready foundation",
        description: "All-in-one dashboard so you never lose sight of key milestones.",
      },
      {
        icon: "LineChart",
        title: "Velocity for teams",
        description: "Collaborate in real time and stay aligned across roles, tasks, and priorities.",
      },
      {
        icon: "Wallet",
        title: "Optimized for outcomes",
        description: "Transform ideas into shipped products with structured workflows.",
      },
      {
        icon: "Sparkle",
        title: "Modern interface",
        description: "Simple, elegant UI that founders and teams love.",
      },
    ],
  },

  // ── Features ─────────────────────────────────────────────────────────────
  features: {
    eyebrow: "Features",
    heading: "Everything you need to launch",
    subtitle:
      "The only dashboard founders need to plan, manage, and execute their startup journey.",
    items: [
      {
        icon: "Lightbulb",
        title: "Idea Management",
        description: "Capture and refine every business concept.",
      },
      {
        icon: "ListChecks",
        title: "Task Tracking",
        description: "Organize your team's to-dos and never miss a deadline.",
      },
      {
        icon: "BarChart4",
        title: "Progress Dashboard",
        description: "Visualize milestones and measure your growth.",
      },
      {
        icon: "Users",
        title: "Team Collaboration",
        description: "Work together, move faster.",
      },
    ],
  },

  // ── Services ─────────────────────────────────────────────────────────────
  services: {
    eyebrow: "Services",
    heading: "What LaunchBoard offers",
    subtitle:
      "Streamline your startup workflow with purpose-built tools for every stage.",
    items: [
      { title: "Secure Authentication", description: "Keep your startup data protected with secure sign-in.", pro: false },
      { title: "Collaborative Dashboard", description: "Coordinate tasks and milestones together.", pro: false },
      { title: "Startup Progress Reports", description: "Monitor KPIs and milestones in real time.", pro: false },
      { title: "Founder-Focused Experience", description: "Built for ambitious teams who want to win.", pro: true },
    ],
  },

  // ── Testimonials ─────────────────────────────────────────────────────────
  testimonials: {
    eyebrow: "Testimonials",
    heading: "Founders love LaunchBoard",
    reviews: [
      {
        image: "/demo-img.jpg",
        name: "Aarav Shah",
        role: "Founder, FinchFlow",
        comment: "LaunchBoard gave our team the clarity and momentum we needed to go from idea to reality.",
        rating: 5.0
      },
      {
        image: "/demo-img.jpg",
        name: "Maya Patel",
        role: "Product Lead, StartupLab",
        comment: "The dashboard keeps everyone aligned and accountable.",
        rating: 4.9
      },
      {
        image: "/demo-img.jpg",
        name: "Nikhil Rao",
        role: "CTO, TeamForge",
        comment: "Every idea and task is right where I need it. LaunchBoard is a founder’s dream.",
        rating: 5.0
      },
      {
        image: "/demo-img.jpg",
        name: "Emma Brooks",
        role: "Head of Growth, Nimbus",
        comment: "Setup took minutes, not hours. My co-founder and I got to work right away.",
        rating: 5.0
      }
    ],
  },

  // ── Team ─────────────────────────────────────────────────────────────────
  team: {
    eyebrow: "Team",
    heading: "Meet the LaunchBoard team",
    members: [
      {
        imageUrl: "/team1.jpg",
        firstName: "Chirag",
        lastName: "Dodiya",
        positions: ["Founder", "Product"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/chiragdodiya" },
          { name: "Github", url: "https://github.com/chiragdodiya" }
        ],
      },
    ],
  },

  // ── Pricing ──────────────────────────────────────────────────────────────
  pricing: {
    eyebrow: "Pricing",
    heading: "Flexible pricing for startups",
    subtitle: "Choose a plan that grows with you.",
    priceSuffix: "/month",
    plans: [
      {
        title: "Starter",
        popular: false,
        price: 0,
        description: "Perfect for founders just starting out.",
        buttonText: "Start for free",
        benefits: [
          "Up to 3 collaborators",
          "LaunchBoard core features",
          "Community support",
          "Customizable workspace",
        ],
      },
      {
        title: "Growth",
        popular: true,
        price: 49,
        description: "For teams scaling their ideas into reality.",
        buttonText: "Start trial",
        benefits: [
          "Unlimited collaborators",
          "Advanced task & milestone tracking",
          "Priority support",
          "Slack integration",
        ],
      },
      {
        title: "Enterprise",
        popular: false,
        price: 199,
        description: "Custom plans for larger teams and organizations.",
        buttonText: "Contact sales",
        benefits: [
          "Dedicated support",
          "Custom integrations",
          "Security advisory",
          "SLA guarantees",
        ],
      },
    ],
  },

  // ── Contact ──────────────────────────────────────────────────────────────
  contact: {
    eyebrow: "Contact",
    heading: "Get in touch with LaunchBoard",
    description:
      "Want to see how LaunchBoard can work for your team? Reach out and let's talk.",
    mailtoAddress: "chirag@bidx.ai",
    info: {
      address: { label: "Find us", value: "Remote-first • Global" },
      phone: { label: "Call us", value: "" },
      email: { label: "Email us", value: "chirag@bidx.ai" },
      hours: { label: "Workspace hours", value: ["Monday - Friday", "9AM - 6PM"] },
    },
    formSubjects: [
      "Product Demo",
      "Integration Inquiry",
      "Startup Collaboration",
      "Pricing & Plans",
      "Other"
    ],
    formSubmitLabel: "Send message",
  },

  // ── FAQ ──────────────────────────────────────────────────────────────────
  faq: {
    eyebrow: "FAQ",
    heading: "LaunchBoard FAQs",
    items: [
      { question: "Who is LaunchBoard for?", answer: "Founders, teams, and anyone launching a new startup, product, or project." },
      { question: "Is LaunchBoard free to start?", answer: "Yes! Our Starter plan is completely free for new users and small teams." },
      { question: "Can I switch plans?", answer: "Absolutely. Upgrade or downgrade anytime to suit your team’s needs." },
      { question: "Does LaunchBoard work for remote teams?", answer: "Yes, LaunchBoard is built for remote-first collaboration and visibility." },
      { question: "Is my startup’s data secure?", answer: "Security is our top priority—your data is always encrypted and protected." },
    ],
  },

  // ── Footer ───────────────────────────────────────────────────────────────
  footer: {
    brandName: "LaunchBoard",
    columns: [
      {
        heading: "Contact",
        links: [
          { label: "chirag@bidx.ai", href: "mailto:chirag@bidx.ai" },
        ],
      },
      {
        heading: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        heading: "Help",
        links: [
          { label: "FAQ", href: "#faq" },
        ],
      },
      {
        heading: "Socials",
        links: [
          { label: "GitHub", href: "https://github.com/chiragdodiya" },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/chiragdodiya" },
        ],
      },
    ],
    copyright: `© ${new Date().getFullYear()} LaunchBoard. All rights reserved. `,
    attribution: { label: "Built for founders", href: "/" },
  },

  // ── Navbar ───────────────────────────────────────────────────────────────
  navbar: {
    brandName: "LaunchBoard",
    routes: [
      { href: "/#testimonials", label: "Testimonials" },
      { href: "/#team", label: "Team" },
      { href: "/#contact", label: "Contact" },
      { href: "/#faq", label: "FAQ" },
    ],
    featureDropdownLabel: "Features",
    featureImage: { src: "/hero-image-light.jpeg", alt: "LaunchBoard preview" },
    features: [
      { title: "Idea Management", description: "Capture and organize all your startup concepts." },
      { title: "Task Tracking", description: "Keep your team moving with organized templates." },
      { title: "Progress Visualization", description: "Never lose sight of your milestones." },
    ],
    signInLabel: "Sign In",
    signUpLabel: "Sign Up",
    dashboardLabel: "Dashboard",
    githubLink: { href: "https://github.com/chiragdodiya", ariaLabel: "View on GitHub" },
  },
};

export const homeContent: HomeContent = defaultHomeContent;

export function getHomeContent(): HomeContent {
  return homeContent;
}