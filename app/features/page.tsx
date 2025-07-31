import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { 
  Trophy, 
  Users, 
  Zap, 
  Shield, 
  BarChart3, 
  Globe,
  ArrowRight,
  Star,
  Calendar,
  Target,
  CheckCircle,
  Gamepad2,
  Crown,
  Flame,
  Sparkles
} from 'lucide-react'
import Link from 'next/link'

export default function FeaturesPage() {
  const features = [
    {
      icon: Trophy,
      title: "Tournament Creation",
      description: "Create tournaments in minutes with our intuitive drag-and-drop interface.",
      benefits: ["Multiple bracket formats", "Custom rules & settings", "Real-time updates"],
      color: "from-primary-500 to-primary-600"
    },
    {
      icon: Users,
      title: "Team Management",
      description: "Manage teams, players, and roles with advanced permission systems.",
      benefits: ["Role-based permissions", "Team collaboration", "Player profiles"],
      color: "from-success-500 to-success-600"
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Get detailed analytics and insights into tournament performance.",
      benefits: ["Performance metrics", "Revenue tracking", "Player statistics"],
      color: "from-accent-500 to-accent-600"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Host tournaments worldwide with multi-language support.",
      benefits: ["Multi-language support", "Global hosting", "Time zone handling"],
      color: "from-primary-500 to-success-500"
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Enterprise-grade security with fraud detection and anti-cheat systems.",
      benefits: ["Fraud detection", "Anti-cheat systems", "Data encryption"],
      color: "from-success-500 to-accent-500"
    },
    {
      icon: Zap,
      title: "Real-time Updates",
      description: "Live updates and notifications for all tournament activities.",
      benefits: ["Live notifications", "Real-time scoring", "Instant updates"],
      color: "from-accent-500 to-primary-500"
    }
  ]

  const pricingPlans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for small communities",
      features: [
        "Up to 100 participants",
        "Basic tournament formats",
        "Email support",
        "Standard analytics"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: "$29/month",
      description: "For growing communities",
      features: [
        "Up to 1,000 participants",
        "Advanced tournament formats",
        "Priority support",
        "Advanced analytics",
        "Custom branding"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Unlimited participants",
        "All tournament formats",
        "24/7 support",
        "Custom integrations",
        "White-label solution"
      ],
      popular: false
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
              TOURNAMENT FEATURES
            </div>
            <h1 className="hero-title text-white mb-8 leading-tight">
              Powerful Features for
              <br />
              <span className="gradient-text">Modern Tournaments</span>
            </h1>
            <p className="text-xl text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed">
              Everything you need to create, manage, and scale your tournaments. 
              Built for gaming communities and esports organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding">
        <div className="max-width container-padding">
          <div className="text-center mb-16">
            <h2 className="section-title text-white">
              Core Features
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Comprehensive tools designed for tournament organizers and participants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="gaming-card p-8 group hover:scale-105 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-white/70 mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-white/80">
                      <CheckCircle className="w-4 h-4 text-primary-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-white/5 backdrop-blur-md">
        <div className="max-width container-padding">
          <div className="text-center mb-16">
            <h2 className="section-title text-white">
              Simple Pricing
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Choose the plan that fits your community size and needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`gaming-card p-8 relative ${plan.popular ? 'ring-2 ring-primary-500 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-primary-500 to-success-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-4xl font-black text-primary-400 mb-2">
                    {plan.price}
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
                >
                  Get Started
                </Button>
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