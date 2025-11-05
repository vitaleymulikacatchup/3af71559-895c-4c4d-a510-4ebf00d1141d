"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div className="min-h-screen bg-background text-foreground">
        {/* Hero Section */}
        <div id="hero" data-section="hero" className="mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary-cta to-accent bg-clip-text text-transparent">
              Welcome to Your Website
            </h1>
            <p className="text-xl text-foreground/80 mb-8 max-w-2xl">
              Create something amazing with our modern, trustworthy design system.
            </p>
            <button className="primary-button text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform">
              Get Started
            </button>
          </div>
        </div>

        {/* About Section */}
        <div id="about" data-section="about" className="mx-auto px-4 md:px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-foreground">
              About Our Platform
            </h2>
            <p className="text-lg text-foreground/80 mb-12 leading-relaxed">
              We provide cutting-edge solutions designed to help you build modern, responsive, and beautiful web experiences. Our platform combines powerful technology with intuitive design to deliver exceptional results.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Modern Design
                </h3>
                <p className="text-foreground/70">
                  Clean, contemporary aesthetics that make your content shine.
                </p>
              </div>
              <div className="card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Performance
                </h3>
                <p className="text-foreground/70">
                  Optimized for speed and efficiency across all devices.
                </p>
              </div>
              <div className="card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Reliability
                </h3>
                <p className="text-foreground/70">
                  Built with robust technology you can depend on.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Section */}
        <div id="feature" data-section="feature" className="mx-auto px-4 md:px-6 py-20 bg-card/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Powerful Features
              </h2>
              <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                Everything you need to create exceptional digital experiences, packed into one comprehensive platform.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card p-8 rounded-lg hover:scale-105 transition-transform">
                <div className="w-12 h-12 bg-primary-cta/20 rounded-lg flex items-center justify-center mb-6">
                  <div className="w-6 h-6 bg-primary-cta rounded"></div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Advanced Analytics
                </h3>
                <p className="text-foreground/70">
                  Get detailed insights into your performance with comprehensive analytics and reporting tools.
                </p>
              </div>
              <div className="card p-8 rounded-lg hover:scale-105 transition-transform">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-6">
                  <div className="w-6 h-6 bg-accent rounded"></div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Real-time Collaboration
                </h3>
                <p className="text-foreground/70">
                  Work together seamlessly with team members in real-time, from anywhere in the world.
                </p>
              </div>
              <div className="card p-8 rounded-lg hover:scale-105 transition-transform">
                <div className="w-12 h-12 bg-primary-cta/20 rounded-lg flex items-center justify-center mb-6">
                  <div className="w-6 h-6 bg-primary-cta rounded"></div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Enterprise Security
                </h3>
                <p className="text-foreground/70">
                  Bank-level security measures protect your data with encryption and advanced monitoring.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof Section */}
        <div id="social-proof" data-section="social-proof" className="mx-auto px-4 md:px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12 text-foreground">
              Trusted by Industry Leaders
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              <div className="card p-6 rounded-lg">
                <div className="text-2xl font-bold text-foreground">TechCorp</div>
              </div>
              <div className="card p-6 rounded-lg">
                <div className="text-2xl font-bold text-foreground">StartupXYZ</div>
              </div>
              <div className="card p-6 rounded-lg">
                <div className="text-2xl font-bold text-foreground">GlobalInc</div>
              </div>
              <div className="card p-6 rounded-lg">
                <div className="text-2xl font-bold text-foreground">InnovaCo</div>
              </div>
            </div>
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-cta mb-2">10,000+</div>
                <div className="text-foreground/80">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">99.9%</div>
                <div className="text-foreground/80">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-cta mb-2">24/7</div>
                <div className="text-foreground/80">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div id="faq" data-section="faq" className="mx-auto px-4 md:px-6 py-20 bg-card/20">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-foreground/80">
                Find answers to common questions about our platform and services.
              </p>
            </div>
            <div className="space-y-6">
              <div className="card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  How do I get started?
                </h3>
                <p className="text-foreground/80">
                  Simply sign up for an account and follow our guided onboarding process. You'll be up and running in minutes.
                </p>
              </div>
              <div className="card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  What pricing plans are available?
                </h3>
                <p className="text-foreground/80">
                  We offer flexible pricing plans to suit businesses of all sizes, from startups to enterprise organizations.
                </p>
              </div>
              <div className="card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Is customer support included?
                </h3>
                <p className="text-foreground/80">
                  Yes, all plans include access to our customer support team via email, chat, and phone during business hours.
                </p>
              </div>
              <div className="card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Can I integrate with other tools?
                </h3>
                <p className="text-foreground/80">
                  Absolutely! Our platform offers extensive integration capabilities with popular tools and services.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Section */}
        <div id="blog" data-section="blog" className="mx-auto px-4 md:px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Latest Insights
              </h2>
              <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                Stay updated with the latest trends, tips, and insights from our team of experts.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <article className="card rounded-lg overflow-hidden hover:scale-105 transition-transform">
                <div className="h-48 bg-gradient-to-br from-primary-cta/20 to-accent/20"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    The Future of Digital Experiences
                  </h3>
                  <p className="text-foreground/80 mb-4">
                    Explore upcoming trends and technologies that will shape the digital landscape.
                  </p>
                  <div className="text-sm text-foreground/60">March 15, 2024</div>
                </div>
              </article>
              <article className="card rounded-lg overflow-hidden hover:scale-105 transition-transform">
                <div className="h-48 bg-gradient-to-br from-accent/20 to-primary-cta/20"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    Best Practices for User Experience
                  </h3>
                  <p className="text-foreground/80 mb-4">
                    Learn how to create intuitive and engaging user experiences that convert.
                  </p>
                  <div className="text-sm text-foreground/60">March 12, 2024</div>
                </div>
              </article>
              <article className="card rounded-lg overflow-hidden hover:scale-105 transition-transform">
                <div className="h-48 bg-gradient-to-br from-primary-cta/20 to-accent/20"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    Performance Optimization Tips
                  </h3>
                  <p className="text-foreground/80 mb-4">
                    Discover strategies to improve your website's speed and performance.
                  </p>
                  <div className="text-sm text-foreground/60">March 10, 2024</div>
                </div>
              </article>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" data-section="contact" className="mx-auto px-4 md:px-6 py-20 bg-card/20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Get in Touch
              </h2>
              <p className="text-lg text-foreground/80">
                Ready to get started? We'd love to hear from you and discuss how we can help.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-primary-cta/20 rounded mr-4"></div>
                    <div>
                      <div className="font-semibold text-foreground">Email</div>
                      <div className="text-foreground/80">contact@webild.com</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-accent/20 rounded mr-4"></div>
                    <div>
                      <div className="font-semibold text-foreground">Phone</div>
                      <div className="text-foreground/80">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-primary-cta/20 rounded mr-4"></div>
                    <div>
                      <div className="font-semibold text-foreground">Address</div>
                      <div className="text-foreground/80">123 Innovation Street, Tech City, TC 12345</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card p-8 rounded-lg">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-foreground/20 bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary-cta"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-foreground/20 bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary-cta"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-foreground/20 bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary-cta"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="primary-button text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform w-full"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div id="footer" data-section="footer" className="mx-auto px-4 md:px-6 py-12 bg-foreground/5">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Webild</h3>
                <p className="text-foreground/80 mb-4">
                  Building the future of digital experiences with modern, reliable technology.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-4">Product</h4>
                <ul className="space-y-2 text-foreground/80">
                  <li><a href="#" className="hover:text-primary-cta transition-colors">Features</a></li>
                  <li><a href="#" className="hover:text-primary-cta transition-colors">Pricing</a></li>
                  <li><a href="#" className="hover:text-primary-cta transition-colors">Integrations</a></li>
                  <li><a href="#" className="hover:text-primary-cta transition-colors">API</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-4">Company</h4>
                <ul className="space-y-2 text-foreground/80">
                  <li><a href="#about" className="hover:text-primary-cta transition-colors">About</a></li>
                  <li><a href="#blog" className="hover:text-primary-cta transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-primary-cta transition-colors">Careers</a></li>
                  <li><a href="#contact" className="hover:text-primary-cta transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-4">Support</h4>
                <ul className="space-y-2 text-foreground/80">
                  <li><a href="#" className="hover:text-primary-cta transition-colors">Help Center</a></li>
                  <li><a href="#faq" className="hover:text-primary-cta transition-colors">FAQ</a></li>
                  <li><a href="#" className="hover:text-primary-cta transition-colors">Documentation</a></li>
                  <li><a href="#" className="hover:text-primary-cta transition-colors">Status</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
              <div className="text-foreground/60 mb-4 md:mb-0">
                © 2024 Webild. All rights reserved.
              </div>
              <div className="flex space-x-6 text-foreground/60">
                <a href="#" className="hover:text-primary-cta transition-colors">Privacy</a>
                <a href="#" className="hover:text-primary-cta transition-colors">Terms</a>
                <a href="#" className="hover:text-primary-cta transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}