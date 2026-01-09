import Link from 'next/link';

export const metadata = {
    title: 'Terms of Service - ProfitDoctor',
    description: 'Terms of Service for ProfitDoctor Shopify App',
};

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-6 py-6">
                    <Link href="/" className="flex items-center gap-2 text-gray-900 hover:text-emerald-600 transition">
                        <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                            <span className="text-white text-sm font-bold">P</span>
                        </div>
                        <span className="text-lg font-semibold">ProfitDoctor</span>
                    </Link>
                </div>
            </header>

            {/* Content */}
            <main className="max-w-4xl mx-auto px-6 py-16">
                <h1 className="text-4xl font-semibold text-gray-900 mb-4">Terms of Service</h1>
                <p className="text-gray-500 mb-12">Last updated: January 2026</p>

                <div className="space-y-12">
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                        <p className="text-gray-600 leading-relaxed">
                            By installing and using ProfitDoctor (&quot;the App,&quot; &quot;Service&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            ProfitDoctor is a Shopify application that analyzes your store data to provide:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                            <li>Store health scores and diagnostics</li>
                            <li>Identification of profit optimization opportunities</li>
                            <li>Actionable recommendations and prescriptions</li>
                            <li>Quick wins for immediate improvement</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            You agree to:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                            <li>Provide accurate information when using the Service</li>
                            <li>Maintain the security of your Shopify account</li>
                            <li>Use the Service in compliance with Shopify&apos;s terms</li>
                            <li>Not attempt to reverse engineer or exploit the Service</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Intellectual Property</h2>
                        <p className="text-gray-600 leading-relaxed">
                            The Service, including its original content, features, and functionality, is owned by ProfitDoctor and is protected by international copyright, trademark, and other intellectual property laws.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Disclaimer of Warranties</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind. We do not guarantee that:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                            <li>The Service will meet your specific requirements</li>
                            <li>Recommendations will result in specific profit increases</li>
                            <li>The Service will be uninterrupted or error-free</li>
                            <li>Analysis results are 100% accurate</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            To the maximum extent permitted by law, ProfitDoctor shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                            <li>Loss of profits or revenue</li>
                            <li>Loss of data</li>
                            <li>Business interruption</li>
                            <li>Any other commercial damages or losses</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Pricing & Payments</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            The Service may be offered as free or paid tiers. Any paid subscriptions are billed through Shopify&apos;s billing system. By subscribing, you agree to:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                            <li>Pay all applicable fees as described</li>
                            <li>Shopify&apos;s payment processing terms</li>
                            <li>Automatic renewal unless cancelled</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Cancellation</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            You may cancel your subscription or uninstall the App at any time through your Shopify admin. Upon cancellation:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                            <li>Access to the Service will end immediately</li>
                            <li>No refunds for partial periods</li>
                            <li>Your data will be deleted within 30 days</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Contact</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            For questions about these Terms, please contact us at:
                        </p>
                        <p className="text-emerald-600 font-medium">
                            <a href="mailto:support@profitdoctor.app">support@profitdoctor.app</a>
                        </p>
                    </section>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-gray-100 py-8">
                <div className="max-w-4xl mx-auto px-6 text-center text-gray-400 text-sm">
                    <p>© {new Date().getFullYear()} ProfitDoctor. All rights reserved.</p>
                    <div className="flex justify-center gap-6 mt-4">
                        <Link href="/privacy" className="hover:text-gray-900 transition">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-gray-900 transition">Terms of Service</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
