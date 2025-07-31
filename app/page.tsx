import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
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
  Play,
  Sparkles,
  CheckCircle,
  Flame,
  Gamepad2,
  Crown,
  Target as TargetIcon,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const newsUpdates = [
    {
      icon: Trophy,
      title: "Tournament Engine v2.0",
      description:
        "Revolutionary bracket generation with AI-powered seeding and real-time analytics.",
      date: "2 hours ago",
      featured: true,
    },
    {
      icon: Users,
      title: "Advanced Team Management",
      description:
        "Role-based permissions, real-time collaboration, and automated roster management.",
      date: "1 day ago",
    },
    {
      icon: Zap,
      title: "Performance Boost",
      description:
        "50% faster tournament operations with optimized matchmaking algorithms.",
      date: "3 days ago",
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description:
        "Multi-factor authentication, fraud detection, and anti-cheat systems.",
      date: "1 week ago",
    },
  ];

  const features = [
    {
      icon: Gamepad2,
      title: "Tournament Creation",
      description:
        "Create tournaments in minutes with our intuitive drag-and-drop interface.",
      featured: true,
    },
    {
      icon: Users,
      title: "Team Management",
      description:
        "Manage teams, players, and roles with advanced permission systems.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description:
        "Get detailed analytics and insights into tournament performance.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Host tournaments worldwide with multi-language support.",
    },
    {
      icon: Shield,
      title: "Security First",
      description:
        "Enterprise-grade security with fraud detection and anti-cheat systems.",
    },
    {
      icon: Zap,
      title: "Real-time Updates",
      description:
        "Live updates and notifications for all tournament activities.",
    },
  ];

  const popularTournaments = [
    {
      name: "CS2 Championship",
      type: "FPS Tournament",
      teams: "32 Teams",
      prize: "$50,000",
      logo: "/assets/cs2-logo.png",
    },
    {
      name: "League of Legends Cup",
      type: "MOBA Tournament",
      teams: "16 Teams",
      prize: "$25,000",
      logo: "/assets/lol-logo.png",
    },
    {
      name: "Valorant Masters",
      type: "Tactical FPS",
      teams: "24 Teams",
      prize: "$30,000",
      logo: "/assets/valorant-logo.png",
    },
    {
      name: "Dota 2 International",
      type: "MOBA Championship",
      teams: "64 Teams",
      prize: "$100,000",
      logo: "/assets/dota2-logo.png",
    },
  ];

  const stats = [
    { number: "10,000+", label: "Active Users" },
    { number: "500+", label: "Tournaments Created" },
    { number: "$2M+", label: "Prize Pools Distributed" },
    { number: "99.9%", label: "Uptime" },
  ];

  return (
    <div className="min-h-screen bg-dark-500">
      <Navbar />

      {/* Hero Section */}
      <section className="section-padding pt-32 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-500/20 to-success-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-accent-500/20 to-primary-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-success-500/10 to-primary-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-width container-padding relative z-10">
          <div className="text-center">
            {/* Eyebrow */}
            <div className="eyebrow">
              <Flame className="w-4 h-4 mr-2" />
              FUTURE OF ESPORTS
            </div>

            {/* Hero Title */}
            <h1 className="hero-title text-white mb-8">
              Building Immersive
              <br />
              <span className="gradient-text">Tournament Experience</span>
            </h1>

            {/* Hero Subtitle */}
            <p className="text-xl sm:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
              Tourney is a modern tournament management platform known for
              creating innovative and immersive gaming experiences for
              communities worldwide.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button size="lg" asChild className="btn-hero pulse-glow group">
                <Link href="/signup" className="flex items-center">
                  <span className="relative z-10">Download Now</span>
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>

              <Button
                variant="secondary"
                size="lg"
                asChild
                className="btn-hero-secondary group"
              >
                <Link href="/features" className="flex items-center">
                  <Play className="w-5 h-5 mr-3" />
                  Explore Features
                </Link>
              </Button>
            </div>

            {/* Key Benefits Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="gaming-card text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-success-500 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Lightning Fast Setup
                </h3>
                <p className="text-sm text-white/70">
                  Create tournaments in under 5 minutes with our intuitive
                  interface
                </p>
              </div>

              <div className="gaming-card text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-primary-500 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Enterprise Security
                </h3>
                <p className="text-sm text-white/70">
                  Bank-level security with fraud detection and anti-cheat
                  systems
                </p>
              </div>

              <div className="gaming-card text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-success-500 to-accent-500 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Real-time Analytics
                </h3>
                <p className="text-sm text-white/70">
                  Advanced insights and performance tracking for every
                  tournament
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white/5 backdrop-blur-md">
        <div className="max-width container-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-black text-white mb-2 gradient-text">
                  {stat.number}
                </div>
                <div className="text-white/70 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Updates Section */}
      <section className="section-padding">
        <div className="max-width container-padding">
          <div className="text-center mb-16">
            <h2 className="section-title text-white">Latest Updates</h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Stay up to date with our latest features, improvements, and
              announcements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsUpdates.map((update, index) => (
              <div
                key={index}
                className={`bento-card ${
                  update.featured
                    ? "md:col-span-2 md:row-span-2 bg-gradient-to-br from-primary-500 to-success-500 text-white"
                    : ""
                }`}
              >
                <update.icon
                  className={`w-8 h-8 mb-4 ${
                    update.featured ? "text-white" : "text-primary-400"
                  }`}
                />
                <h3
                  className={`text-lg font-bold mb-2 ${
                    update.featured ? "text-white" : "text-white"
                  }`}
                >
                  {update.title}
                </h3>
                <p
                  className={`text-sm ${
                    update.featured ? "text-white/80" : "text-white/70"
                  }`}
                >
                  {update.description}
                </p>
                <div
                  className={`text-xs mt-4 ${
                    update.featured ? "text-white/60" : "text-white/50"
                  }`}
                >
                  {update.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white/5 backdrop-blur-md">
        <div className="max-width container-padding">
          <div className="text-center mb-16">
            <h2 className="section-title text-white">What We Offer</h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Everything you need to create and manage successful tournaments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bento-card ${
                  feature.featured
                    ? "lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-accent-500 to-primary-500 text-white"
                    : ""
                }`}
              >
                <feature.icon
                  className={`w-8 h-8 mb-4 ${
                    feature.featured ? "text-white" : "text-primary-400"
                  }`}
                />
                <h3
                  className={`text-lg font-bold mb-2 ${
                    feature.featured ? "text-white" : "text-white"
                  }`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`text-sm ${
                    feature.featured ? "text-white/80" : "text-white/70"
                  }`}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tournaments Section */}
      <section className="section-padding">
        <div className="max-width container-padding">
          <div className="text-center mb-16">
            <h2 className="section-title text-white">Featured Tournaments</h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Join thousands of players in these trending tournaments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularTournaments.map((tournament, index) => (
              <div key={index} className="gaming-card text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-success-500 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {tournament.name}
                </h3>
                <p className="text-sm text-white/70 mb-2">{tournament.type}</p>
                <p className="text-primary-400 font-bold mb-2">
                  {tournament.teams}
                </p>
                <p className="text-accent-400 font-bold mb-4">
                  {tournament.prize}
                </p>
                <Button size="sm" className="w-full btn-primary">
                  Join Tournament
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="section-padding relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-success-500 to-accent-500">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-600/20 to-success-600/20"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-width container-padding relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Eyebrow */}
            <div className="eyebrow">
              <Sparkles className="w-4 h-4 mr-2" />
              Join the Tournament Revolution
            </div>

            <h2 className="hero-title text-white mb-8">
              Ready to Get Started?
            </h2>

            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands of gaming communities already using Tourney.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-row gap-4 sm:gap-6 justify-center items-center mb-12 flex-wrap">
              <Button size="lg" asChild className="btn-cta pulse-glow group">
                <Link href="/signup" className="flex items-center">
                  <span className="relative z-10">Start Free Trial</span>
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="btn-cta-outline group"
              >
                Contact Sales
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80 text-sm">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-success-400" />
                <span className="font-semibold">10,000+</span> Active Users
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-success-400" />
                <span className="font-semibold">99.9%</span> Uptime
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-success-400" />
                <span className="font-semibold">24/7</span> Support
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
