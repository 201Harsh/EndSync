import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  ArrowRightCircleIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
  ArrowsPointingOutIcon,
  ChartBarIcon,
} from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

export default function Start() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Navigation */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5 flex items-center">
              <CloudArrowUpIcon className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-2xl font-bold text-white">
                EndSync
              </span>
            </Link>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a
              href="#features"
              className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#faq"
              className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors"
            >
              FAQ
            </a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              to="/login"
              className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-500 to-purple-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Your files, everywhere with EndSync
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Secure cloud storage that keeps your data safe and accessible from
              any device. Join millions of users who trust EndSync with their
              files.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/register"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 flex items-center transition-colors"
              >
                Get started
                <ArrowRightCircleIcon className="h-5 w-5 ml-2" />
              </Link>
              <Link
                to="#features"
                className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-indigo-500 to-purple-600 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>

      {/* Industries Section */}
      <div className="bg-gray-900 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
            Powering innovation across industries
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-300">
            Trusted by teams in diverse sectors to secure and manage their
            critical data
          </p>

          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
            {[
              {
                icon: "💻",
                name: "Tech Startups",
                desc: "Secure code repositories",
              },
              {
                icon: "🏥",
                name: "Healthcare",
                desc: "HIPAA-compliant storage",
              },
              { icon: "🎓", name: "Education", desc: "Research collaboration" },
              { icon: "💰", name: "Finance", desc: "Encrypted transactions" },
              { icon: "🎨", name: "Creative", desc: "Asset management" },
              { icon: "⚖️", name: "Legal", desc: "Client document portal" },
              { icon: "🔬", name: "Research", desc: "Data preservation" },
              { icon: "🌎", name: "Nonprofits", desc: "Global team access" },
              { icon: "🏗️", name: "Engineering", desc: "CAD file sharing" },
              { icon: "📱", name: "Mobile Apps", desc: "User data sync" },
            ].map((industry) => (
              <div
                key={industry.name}
                className="group flex flex-col items-center text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-800 text-2xl transition-all duration-300 group-hover:bg-indigo-500 group-hover:text-white">
                  {industry.icon}
                </div>
                <h3 className="mt-4 text-lg font-medium text-white">
                  {industry.name}
                </h3>
                <p className="mt-1 text-sm text-gray-400">{industry.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/register"
              className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              View customer stories
              <ArrowRightCircleIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-400">
              Store smarter
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Everything you need for secure file storage
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              EndSync provides enterprise-grade security with simple, intuitive
              tools for managing all your files in the cloud.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                    <CloudArrowUpIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  Easy file upload
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-400">
                  Drag and drop your files or select them from your device.
                  EndSync supports all file types and sizes.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                    <LockClosedIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  End-to-end encryption
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-400">
                  Your files are encrypted before they leave your device. Only
                  you have the keys to access your data.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                    <ServerIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  Reliable infrastructure
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-400">
                  Our distributed servers ensure 99.99% uptime and fast access
                  to your files from anywhere in the world.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                    <DevicePhoneMobileIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  Cross-platform sync
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-400">
                  Access your files from any device - desktop, mobile, or web.
                  Changes sync automatically across all platforms.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-800 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Trusted by users worldwide
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                Join millions of users who trust EndSync with their important
                files and data.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col bg-gray-700/50 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-300">
                  Files stored
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                  10M+
                </dd>
              </div>
              <div className="flex flex-col bg-gray-700/50 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-300">
                  Daily users
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                  500K+
                </dd>
              </div>
              <div className="flex flex-col bg-gray-700/50 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-300">
                  Uptime
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                  99.99%
                </dd>
              </div>
              <div className="flex flex-col bg-gray-700/50 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-300">
                  Countries
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                  150+
                </dd>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div id="testimonials" className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              What our users say
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Hear from our satisfied customers about their experience with
              EndSync.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[
              {
                name: "Sarah Johnson",
                role: "CTO, TechCorp",
                imageSrc:
                  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
                quote:
                  "EndSync has transformed how our team collaborates. The security features give us peace of mind while the intuitive interface keeps everyone productive.",
              },
              {
                name: "Michael Chen",
                role: "Freelance Designer",
                imageSrc:
                  "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
                quote:
                  "As a designer, I need to access my files from multiple devices. EndSync makes this seamless while keeping my work secure.",
              },
              {
                name: "Emma Rodriguez",
                role: "Marketing Director",
                imageSrc:
                  "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
                quote:
                  "The cross-platform sync is flawless. I can start a presentation on my laptop and finish it on my phone during my commute.",
              },
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                className="flex flex-col bg-gray-800/50 p-8 rounded-xl border border-gray-700"
              >
                <div className="flex items-center gap-x-4">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src={testimonial.imageSrc}
                    alt=""
                  />
                  <div className="text-left">
                    <h3 className="text-lg font-semibold leading-7 text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm leading-6 text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="mt-6 text-base leading-7 text-gray-300">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="bg-gray-800 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Choose the perfect plan for your needs. No hidden fees, ever.
            </p>
          </div>
          <div className="mt-16 flex justify-center">
            <div className="grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-3">
              {[
                {
                  name: "Starter",
                  price: "Free",
                  description: "Perfect for individuals getting started",
                  features: [
                    "5GB storage",
                    "Basic file sharing",
                    "2 device sync",
                    "Standard security",
                  ],
                  cta: "Get started",
                },
                {
                  name: "Professional",
                  price: "$9.99",
                  period: "/month",
                  description: "For professionals and small teams",
                  features: [
                    "100GB storage",
                    "Advanced sharing",
                    "5 device sync",
                    "Enhanced security",
                    "Priority support",
                  ],
                  cta: "Start free trial",
                  featured: true,
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  description: "For organizations with advanced needs",
                  features: [
                    "Unlimited storage",
                    "Advanced controls",
                    "Unlimited devices",
                    "Enterprise-grade security",
                    "Dedicated support",
                    "Custom integrations",
                  ],
                  cta: "Contact sales",
                },
              ].map((tier) => (
                <div
                  key={tier.name}
                  className={`flex flex-col rounded-2xl border p-8 ${
                    tier.featured
                      ? "border-indigo-500 bg-gray-900/50"
                      : "border-gray-700 bg-gray-900/30"
                  }`}
                >
                  <h3 className="text-lg font-semibold leading-8 text-white">
                    {tier.name}
                  </h3>
                  <div className="mt-4 flex items-baseline gap-x-2">
                    <span className="text-4xl font-bold tracking-tight text-white">
                      {tier.price}
                    </span>
                    {tier.period && (
                      <span className="text-sm font-semibold leading-6 text-gray-300">
                        {tier.period}
                      </span>
                    )}
                  </div>
                  <p className="mt-4 text-sm leading-6 text-gray-300">
                    {tier.description}
                  </p>
                  <ul
                    role="list"
                    className="mt-8 space-y-3 text-sm leading-6 text-gray-300"
                  >
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <svg
                          className="h-6 w-5 flex-none text-indigo-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/register"
                    className={`mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 ${
                      tier.featured
                        ? "bg-indigo-500 text-white hover:bg-indigo-400"
                        : "text-white ring-1 ring-inset ring-gray-700 hover:ring-gray-600"
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div id="faq" className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Have questions? We've got answers.
            </p>
          </div>
          <div className="mt-16 mx-auto max-w-2xl divide-y divide-gray-700">
            {[
              {
                question: "How secure is EndSync?",
                answer:
                  "EndSync uses industry-leading encryption standards to protect your files. All data is encrypted both in transit and at rest, and we never store your encryption keys on our servers.",
              },
              {
                question: "Can I access my files offline?",
                answer:
                  "Yes! With our desktop and mobile apps, you can mark files for offline access. Any changes will sync automatically when you reconnect to the internet.",
              },
              {
                question: "What happens if I exceed my storage limit?",
                answer:
                  "You'll receive a notification and can either upgrade your plan or delete files to free up space. Your existing files remain accessible even if you exceed your limit.",
              },
              {
                question: "How do I share files with others?",
                answer:
                  "You can generate shareable links with customizable permissions, or invite collaborators directly to folders with different access levels (view, edit, etc.).",
              },
            ].map((faq, index) => (
              <div key={index} className="py-6">
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between">
                    <h3 className="text-lg font-semibold leading-7 text-white">
                      {faq.question}
                    </h3>
                    <svg
                      className="h-5 w-5 flex-none text-gray-400 group-open:rotate-180"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </summary>
                  <p className="mt-3 text-base leading-7 text-gray-400">
                    {faq.answer}
                  </p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-800">
        <div className="mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl rounded-2xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to secure your files?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Join millions of users who trust EndSync with their important
              documents and memories.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/register"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 flex items-center transition-colors"
              >
                Get started
                <ArrowRightCircleIcon className="h-5 w-5 ml-2" />
              </Link>
              <Link
                to="#pricing"
                className="text-sm font-semibold leading-6 text-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
              aria-hidden="true"
            >
              <circle
                cx={512}
                cy={512}
                r={512}
                fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                  <stop stopColor="#7C3AED" />
                  <stop offset={1} stopColor="#4F46E5" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            {/* Social links */}
            <div className="flex justify-center space-x-8">
              <a
                href="https://www.instagram.com/201harshs/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  fill="currentColor"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>

            {/* Copyright and attribution */}
            <div className="flex flex-col items-center gap-2 text-center md:items-end">
              <p className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} EndSync, Inc. All rights
                reserved.
              </p>
              <p className="text-xs text-gray-500">
                Made with ❤️ by{" "}
                <a
                  href="https://www.instagram.com/201harshs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Harsh
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
