'use client';

import { useState } from 'react';

export default function Home() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Email submitted:', email);
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center relative overflow-hidden">
                                {/* Cross shape */}
                                <div className="absolute w-2 h-5 bg-white rounded-sm"></div>
                                <div className="absolute w-5 h-2 bg-white rounded-sm"></div>
                                {/* Dollar sign */}
                                <span className="relative text-emerald-500 text-[10px] font-bold">$</span>
                            </div>
                            <span className="text-lg font-semibold text-gray-900">ProfitDoctor</span>
                        </div>
                        <div className="hidden md:flex items-center gap-8">
                            <a href="#demo" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition">Demo</a>
                            <a href="#features" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition">Features</a>
                            <a href="#pricing" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition">Pricing</a>
                            <a
                                href="https://apps.shopify.com/profitdoctor"
                                className="bg-gray-900 hover:bg-gray-800 text-white px-5 py-2.5 rounded-full text-sm font-medium transition shadow-sm"
                            >
                                Install Free →
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-1.5 mb-8">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                        <span className="text-emerald-700 text-sm font-medium">Free during launch</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight tracking-tight">
                        Find the profit leaks
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">hiding in your store</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Get an AI-powered diagnosis of your Shopify store in 10 minutes.
                        Discover exactly how much money you&apos;re losing and how to fix it.
                    </p>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                        <a
                            href="https://apps.shopify.com/profitdoctor"
                            className="w-full sm:w-auto bg-gray-900 hover:bg-gray-800 text-white text-base font-medium px-8 py-4 rounded-full shadow-lg shadow-gray-900/10 transition transform hover:scale-[1.02]"
                        >
                            Get your free diagnosis
                        </a>
                        <a
                            href="#demo"
                            className="text-gray-600 hover:text-gray-900 text-base font-medium flex items-center gap-2 transition"
                        >
                            <span className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                                ▶
                            </span>
                            See how it works
                        </a>
                    </div>

                    {/* Trust Signals */}
                    <div className="flex flex-wrap justify-center gap-8 text-gray-400 text-sm">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>10 minute analysis</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>$ impact quantified</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Actionable fixes</span>
                        </div>
                    </div>

                    {/* Social Proof */}
                    <div className="mt-16 flex flex-wrap justify-center gap-6 md:gap-10">
                        <div className="flex items-center gap-2 bg-gray-50 px-5 py-3 rounded-full border border-gray-100">
                            <span className="text-xl">🚀</span>
                            <span className="text-gray-600 text-sm font-medium">Launched January 2026</span>
                        </div>
                        <div className="flex items-center gap-2 bg-gray-50 px-5 py-3 rounded-full border border-gray-100">
                            <span className="text-xl">📊</span>
                            <span className="text-gray-600 text-sm font-medium">Already analyzing $2M+ in store revenue</span>
                        </div>
                        <div className="flex items-center gap-2 bg-gray-50 px-5 py-3 rounded-full border border-gray-100">
                            <span className="text-xl">⭐</span>
                            <span className="text-gray-600 text-sm font-medium">Built by e-commerce experts</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* App Screenshots Section */}
            <section id="demo" className="py-20 px-6 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                            See ProfitDoctor in action
                        </h2>
                        <p className="text-gray-500 text-lg">
                            Real diagnosis results from a Shopify store
                        </p>
                    </div>

                    {/* Carousel */}
                    <div className="relative">
                        {/* Main Image */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-900/10 border border-gray-200 bg-white">
                            <img
                                src={`/images/screenshot-${currentSlide + 1}.png`}
                                alt={[
                                    'Store Health Score & Impact',
                                    'Health Metrics Dashboard',
                                    'Problems Identified',
                                    'Quick Wins Checklist'
                                ][currentSlide]}
                                className="w-full h-auto"
                            />
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={() => setCurrentSlide((prev) => (prev === 0 ? 3 : prev - 1))}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-900 transition"
                            aria-label="Previous slide"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={() => setCurrentSlide((prev) => (prev === 3 ? 0 : prev + 1))}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-900 transition"
                            aria-label="Next slide"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-6">
                        {[0, 1, 2, 3].map((index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-3 h-3 rounded-full transition ${currentSlide === index
                                    ? 'bg-emerald-500'
                                    : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Slide Labels */}
                    <div className="flex justify-center gap-4 mt-4 flex-wrap">
                        {['Health Score', 'Metrics', 'Problems', 'Quick Wins'].map((label, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`text-sm px-3 py-1 rounded-full transition ${currentSlide === index
                                    ? 'bg-emerald-100 text-emerald-700 font-medium'
                                    : 'text-gray-500 hover:text-gray-700'
                                    }`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>

                    {/* Caption */}
                    <p className="text-center text-gray-400 text-sm mt-6">
                        ☝️ Actual diagnosis from a real Shopify store
                    </p>
                </div>
            </section>

            {/* Problem Statement */}
            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                            You have the data. But what does it mean?
                        </h2>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                            Most store owners are overwhelmed by metrics that don&apos;t tell them what to actually do.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: '📊',
                                title: 'Drowning in numbers',
                                desc: 'Dozens of metrics in your dashboard. Which ones actually matter for your growth?'
                            },
                            {
                                icon: '🤷',
                                title: 'No clear direction',
                                desc: '"My AOV is $45." Is that good? Bad? What should you do about it?'
                            },
                            {
                                icon: '💸',
                                title: 'Silent profit leaks',
                                desc: 'Problems hide in plain sight for months, silently draining your profits.'
                            },
                        ].map((item, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-300 hover:shadow-lg transition duration-300">
                                <span className="text-4xl mb-4 block">{item.icon}</span>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 px-6 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                            Your complete health report
                        </h2>
                        <p className="text-gray-500 text-lg">
                            Like a doctor&apos;s checkup, but for your Shopify profits
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                icon: '🎯',
                                title: 'Health Score (0-100)',
                                desc: 'One number that tells you exactly how healthy your store is, with context on what it means.'
                            },
                            {
                                icon: '🔍',
                                title: 'Top 5 Problems',
                                desc: 'The exact issues costing you money, ranked by $ impact so you know where to focus.'
                            },
                            {
                                icon: '💵',
                                title: 'Dollar Impact',
                                desc: 'Every problem quantified in $/month. No vague advice — real numbers you can act on.'
                            },
                            {
                                icon: '💊',
                                title: 'Prescriptions',
                                desc: 'Specific, actionable steps to fix each problem. Copy-paste ready actions.'
                            },
                            {
                                icon: '⚡',
                                title: 'Quick Wins',
                                desc: 'Things you can fix in under 1 hour with maximum impact. Start recovering money today.'
                            },
                            {
                                icon: '📈',
                                title: 'Progress Tracking',
                                desc: 'Run diagnoses over time to track your improvement and see what\'s working.'
                            },
                        ].map((feature, i) => (
                            <div
                                key={i}
                                className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-300 hover:shadow-lg transition duration-300"
                            >
                                <span className="text-3xl mb-4 block">{feature.icon}</span>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                            How it works
                        </h2>
                        <p className="text-gray-500 text-lg">
                            Get your diagnosis in 3 simple steps
                        </p>
                    </div>

                    <div className="space-y-8">
                        {[
                            {
                                step: '01',
                                title: 'Install the app',
                                desc: 'One click install from Shopify App Store. We request read-only access to your store data.',
                                time: '30 seconds'
                            },
                            {
                                step: '02',
                                title: 'Run your diagnosis',
                                desc: 'Our AI analyzes your orders, products, customers, and operations to find hidden problems.',
                                time: '10 minutes'
                            },
                            {
                                step: '03',
                                title: 'Fix & profit',
                                desc: 'Follow your personalized prescriptions and quick wins to stop the profit leaks.',
                                time: 'Ongoing'
                            },
                        ].map((item, i) => (
                            <div key={i} className="flex gap-6 items-start">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center">
                                    <span className="text-sm font-semibold text-white">{item.step}</span>
                                </div>
                                <div className="flex-1 pt-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                                        <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full font-medium">{item.time}</span>
                                    </div>
                                    <p className="text-gray-500">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-20 px-6 bg-gray-50">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                            Frequently asked questions
                        </h2>
                        <p className="text-gray-500 text-lg">
                            Everything you need to know about ProfitDoctor
                        </p>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                q: 'Is my data safe?',
                                a: 'Yes, we only request read-only access to your store data. We never modify anything in your store, and your data is encrypted and never shared with third parties.'
                            },
                            {
                                q: 'How long does a diagnosis take?',
                                a: 'About 10 minutes for stores with up to 10,000 orders. Larger stores may take a bit longer, but you can continue using Shopify while we analyze.'
                            },
                            {
                                q: 'What if I don\'t agree with the diagnosis?',
                                a: 'Our AI provides evidence for every problem it identifies, including specific data points and calculations. You can see exactly why each issue was flagged.'
                            },
                            {
                                q: 'Will this work for my store size?',
                                a: 'ProfitDoctor works for stores from $0 to $10M+ GMV. Whether you\'re just starting or scaling fast, we adapt our analysis to your stage.'
                            },
                        ].map((item, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.q}</h3>
                                <p className="text-gray-500 leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 px-6 bg-gray-50">
                <div className="max-w-lg mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-1.5 mb-4">
                            <span className="text-emerald-700 text-sm font-medium">🎉 Launch Special</span>
                        </div>
                        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                            Free during launch
                        </h2>
                        <p className="text-gray-500 text-lg">
                            Get full access while we&apos;re in beta. No credit card required.
                        </p>
                    </div>

                    <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 text-center shadow-xl shadow-gray-900/5">
                        <div className="mb-6">
                            <span className="text-5xl font-semibold text-gray-900">$0</span>
                            <span className="text-gray-400 text-lg">/month</span>
                        </div>
                        <p className="text-emerald-600 font-medium mb-8">Free during launch • Full access</p>

                        <ul className="text-left space-y-4 mb-8">
                            {[
                                'Complete store diagnosis',
                                'Health score (0-100)',
                                'Top 5 problems with $ impact',
                                'Personalized prescriptions',
                                'Quick wins checklist',
                                'Unlimited diagnoses',
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-700">
                                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <a
                            href="https://apps.shopify.com/profitdoctor"
                            className="block w-full bg-gray-900 hover:bg-gray-800 text-white text-base font-medium py-4 rounded-full transition"
                        >
                            Install free now
                        </a>
                    </div>
                </div>
            </section>

            {/* Email Capture Section */}
            <section className="py-20 px-6">
                <div className="max-w-xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                        Not on Shopify yet?
                    </h2>
                    <p className="text-gray-500 text-lg mb-4">
                        Join our waitlist for other platforms.
                    </p>

                    {/* Incentive Badge */}
                    <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-2 mb-8">
                        <span className="text-lg">🎁</span>
                        <span className="text-amber-700 text-sm font-medium">Early access + 50% off when we launch</span>
                    </div>

                    {!submitted ? (
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your@email.com"
                                required
                                className="flex-1 px-5 py-3 rounded-full border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                            />
                            <button
                                type="submit"
                                className="px-6 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition"
                            >
                                Join waitlist
                            </button>
                        </form>
                    ) : (
                        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 max-w-md mx-auto">
                            <span className="text-2xl mb-2 block">🎉</span>
                            <p className="text-emerald-800 font-medium">You&apos;re on the list!</p>
                            <p className="text-emerald-600 text-sm">You&apos;ll get early access + 50% off when we launch on your platform.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 border-t border-gray-200">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center relative overflow-hidden">
                                <div className="absolute w-2 h-5 bg-white rounded-sm"></div>
                                <div className="absolute w-5 h-2 bg-white rounded-sm"></div>
                                <span className="relative text-emerald-500 text-[10px] font-bold">$</span>
                            </div>
                            <span className="text-lg font-semibold text-gray-900">ProfitDoctor</span>
                        </div>

                        <div className="flex gap-8 text-gray-500 text-sm">
                            <a href="/privacy" className="hover:text-gray-900 transition">Privacy Policy</a>
                            <a href="/terms" className="hover:text-gray-900 transition">Terms of Service</a>
                            <a href="mailto:support@profitdoctor.app" className="hover:text-gray-900 transition">Contact</a>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-gray-100 text-center text-gray-400 text-sm">
                        © {new Date().getFullYear()} ProfitDoctor. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}
