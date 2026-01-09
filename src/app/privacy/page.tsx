import Link from 'next/link';

export const metadata = {
    title: 'Privacy Policy - ProfitDoctor',
    description: 'Privacy Policy for ProfitDoctor Shopify App',
};

export default function PrivacyPolicy() {
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
                <h1 className="text-4xl font-semibold text-gray-900 mb-4">Privacy Policy</h1>
                <p className="text-gray-500 mb-12">Last updated: January 2026</p>

                <div className="space-y-12">
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
                        <p className="text-gray-600 leading-relaxed">
                            ProfitDoctor (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Shopify application.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            When you install and use ProfitDoctor, we access the following data from your Shopify store:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                            <li><strong>Orders:</strong> Order history, amounts, dates, and fulfillment status</li>
                            <li><strong>Products:</strong> Product catalog, inventory levels, and pricing</li>
                            <li><strong>Customers:</strong> Customer counts and purchase patterns (no personal customer data is stored)</li>
                        </ul>
                        <p className="text-gray-600 leading-relaxed mt-4">
                            We request <strong>read-only access</strong> to this data. We do not modify your store data.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            We use the collected data exclusively to:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                            <li>Generate your store health diagnosis</li>
                            <li>Calculate metrics and identify problems</li>
                            <li>Provide personalized recommendations</li>
                            <li>Improve our analysis algorithms</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Data Storage & Security</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Your diagnosis results are stored securely in our database. We implement industry-standard security measures including:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                            <li>Encrypted data transmission (HTTPS/TLS)</li>
                            <li>Secure database storage</li>
                            <li>Access controls and authentication</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Data Sharing</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            We do <strong>not</strong> sell, trade, or share your store data with third parties except:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                            <li>AI processing partners (Anthropic) for diagnosis generation</li>
                            <li>When required by law</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Data Retention</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We retain your diagnosis data for as long as you have our app installed. Upon uninstallation, your data is deleted within 30 days.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Your Rights</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            You have the right to:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                            <li>Request access to your data</li>
                            <li>Request deletion of your data</li>
                            <li>Uninstall the app at any time</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Contact Us</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            If you have any questions about this Privacy Policy, please contact us at:
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
