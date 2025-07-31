import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { 
  CheckCircle,
  ArrowRight,
  Star,
  Flame,
  Sparkles,
  Crown
} from 'lucide-react'
import Link from 'next/link'

export default function PricingPage() {
  const pricingPlans = [
    {
      name: "Starter",
      price: "Free",
      period: "forever",
      description: "Perfect for small communities and casual tournaments",
      features: [
        "Up to 100 participants",
        "Basic tournament formats",
        "Email support",
        "Standard analytics",
        "Basic team management",
        "Mobile responsive"
      ],
      popular: false,
      color: "from-success-500 to-success-600"
    },
    {
      name: "Pro",
      price: "$29",
      period: "per month",
      description: "For growing communities and serious tournaments",
      features: [
        "Up to 1,000 participants",
        "Advanced tournament formats",
        "Priority support",
        "Advanced analytics",
        "Custom branding",
        "API access",
        "Real-time notifications",
        "Advanced team management"
      ],
      popular: true,
      color: "from-primary-500 to-primary-600"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "For large organizations and major events",
      features: [
        "Unlimited participants",
        "All tournament formats",
        "24/7 support",
        "Custom integrations",
        "White-label solution",
        "Dedicated account manager",
        "Custom reporting",
        "Advanced security features"
      ],
      popular: false,
      color: "from-accent-500 to-accent-600"
    }
  ]

  const faqs = [
    {
      question: "Can I change plans anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, all paid plans come with a 14-day free trial. No credit card required."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for Enterprise plans."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, you can cancel your subscription at any time. No long-term contracts required."
    }
  ]

  return (
    <div className="min-h-screen bg-dark-500">
      <Navbar />

      {/* Hero Section */}
      <section className="section-padding pt-32 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-500/20 to-success-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-accent-500/20 to-primary-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-width container-padding relative z-10">
          <div className="text-center">
            <div className="eyebrow mb-6">
              <Flame className="w-4 h-4 mr-2" />
              PRICING PLANS
            </div>
            <h1 className="hero-title text-white mb-8 leading-tight">
              Simple, Transparent
              <br />
              <span className="gradient-text">Pricing</span>
            </h1>
            <p className="text-xl text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed">
              Choose the plan that fits your community size and tournament needs. 
              Start free and scale as you grow.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding">
        <div className="max-width container-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`gaming-card p-8 relative ${plan.popular ? 'ring-2 ring-primary-500 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-primary-500 to-success-500 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center">
                      <Crown className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-2">
                    <span className="text-4xl font-black text-primary-400">
                      {plan.price}
                    </span>
                    {plan.period !== "forever" && (
                      <span className="text-white/60 ml-1">
                        /{plan.period}
                      </span>
                    )}
                  </div>
                  <p className="text-white/70">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-white/80">
                      <CheckCircle className="w-5 h-5 text-primary-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${plan.popular ? 'btn-hero' : 'btn-secondary'}`}
                  variant={plan.popular ? "default" : "secondary"}
                  asChild
                >
                  <Link href="/signup">
                    {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white/5 backdrop-blur-md">
        <div className="max-width container-padding">
          <div className="text-center mb-16">
            <h2 className="section-title text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Everything you need to know about our pricing and plans.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="gaming-card p-6">
                <h3 className="text-lg font-bold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-white/70">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-success-500 to-accent-500">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-600/20 to-success-600/20"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-width container-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="eyebrow mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              JOIN THE TOURNAMENT
            </div>
            <h2 className="hero-title text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-white/80 mb-10 text-lg">
              Join thousands of gaming communities already using Tourney.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild className="btn-cta">
                <Link href="/signup">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="btn-cta-outline">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 