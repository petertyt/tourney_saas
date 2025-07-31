import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import {
  Trophy,
  Users,
  Calendar,
  ArrowRight,
  Search,
  Filter,
  Star,
  Flame,
  Sparkles,
  Crown,
  Gamepad2,
} from "lucide-react";
import Link from "next/link";

export default function BrowsePage() {
  const tournaments = [
    {
      name: "CS2 Championship 2024",
      game: "Counter-Strike 2",
      type: "FPS Tournament",
      participants: "32/64",
      prize: "$5,000",
      startDate: "Dec 15, 2024",
      status: "active",
      featured: true,
      organizer: "Gaming Community",
    },
    {
      name: "League of Legends Cup",
      game: "League of Legends",
      type: "MOBA Tournament",
      participants: "16/16",
      prize: "$2,500",
      startDate: "Dec 20, 2024",
      status: "upcoming",
      featured: false,
      organizer: "Esports League",
    },
    {
      name: "Valorant Masters",
      game: "Valorant",
      type: "Tactical FPS",
      participants: "24/32",
      prize: "$3,000",
      startDate: "Dec 25, 2024",
      status: "active",
      featured: false,
      organizer: "Pro Gaming",
    },
    {
      name: "Dota 2 International",
      game: "Dota 2",
      type: "MOBA Championship",
      participants: "64/64",
      prize: "$10,000",
      startDate: "Jan 5, 2025",
      status: "upcoming",
      featured: true,
      organizer: "Major League",
    },
    {
      name: "Rocket League Championship",
      game: "Rocket League",
      type: "Sports Game",
      participants: "48/64",
      prize: "$1,500",
      startDate: "Dec 30, 2024",
      status: "active",
      featured: false,
      organizer: "Rocket League Pro",
    },
    {
      name: "FIFA 24 Cup",
      game: "FIFA 24",
      type: "Sports Tournament",
      participants: "32/32",
      prize: "$2,000",
      startDate: "Jan 10, 2025",
      status: "upcoming",
      featured: false,
      organizer: "Football Gaming",
    },
  ];

  const filters = [
    { name: "All Games", active: true },
    { name: "FPS", active: false },
    { name: "MOBA", active: false },
    { name: "Sports", active: false },
    { name: "Strategy", active: false },
  ];

  const statuses = [
    { name: "All Status", active: true },
    { name: "Active", active: false },
    { name: "Upcoming", active: false },
    { name: "Completed", active: false },
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
        </div>

        <div className="max-width container-padding relative z-10">
          <div className="text-center">
            <div className="eyebrow mb-6">
              <Flame className="w-4 h-4 mr-2" />
              TOURNAMENT BROWSE
            </div>
            <h1 className="hero-title text-white mb-8 leading-tight">
              Browse
              <br />
              <span className="gradient-text">Tournaments</span>
            </h1>
            <p className="text-xl text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed">
              Discover and join tournaments from around the world. Find the
              perfect competition for your skills and interests.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="section-padding">
        <div className="max-width container-padding">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
              <input
                type="text"
                placeholder="Search tournaments..."
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white placeholder:text-white/50"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              {filters.map((filter, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                    filter.active
                      ? "bg-primary-500 text-white shadow-glow"
                      : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white border border-white/20"
                  }`}
                >
                  {filter.name}
                </button>
              ))}
            </div>
          </div>

          {/* Status Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {statuses.map((status, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                  status.active
                    ? "bg-success-500 text-white shadow-glow"
                    : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white border border-white/20"
                }`}
              >
                {status.name}
              </button>
            ))}
          </div>

          {/* Tournaments Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tournaments.map((tournament, index) => (
              <div
                key={index}
                className={`gaming-card p-6 group hover:scale-105 transition-all duration-300 ${
                  tournament.featured ? "ring-2 ring-primary-500" : ""
                }`}
              >
                {tournament.featured && (
                  <div className="flex items-center mb-4">
                    <Crown className="w-4 h-4 text-primary-400 mr-2" />
                    <span className="text-sm font-bold text-primary-400">
                      Featured
                    </span>
                  </div>
                )}

                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      {tournament.name}
                    </h3>
                    <p className="text-sm text-white/70">
                      {tournament.game} • {tournament.type}
                    </p>
                  </div>
                  <div
                    className={`px-2 py-1 rounded-full text-xs font-bold ${
                      tournament.status === "active"
                        ? "bg-success-500/20 text-success-400"
                        : "bg-accent-500/20 text-accent-400"
                    }`}
                  >
                    {tournament.status}
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/60">Participants:</span>
                    <span className="font-bold text-white">
                      {tournament.participants}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/60">Prize Pool:</span>
                    <span className="font-bold text-primary-400">
                      {tournament.prize}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/60">Start Date:</span>
                    <span className="font-bold text-white">
                      {tournament.startDate}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/60">Organizer:</span>
                    <span className="font-bold text-white">
                      {tournament.organizer}
                    </span>
                  </div>
                </div>

                <Button className="w-full btn-secondary" variant="secondary">
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="btn-secondary">
              Load More Tournaments
            </Button>
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
              CREATE YOUR OWN
            </div>
            <h2 className="hero-title text-white mb-6">
              Can&apos;t Find What You&apos;re Looking For?
            </h2>
            <p className="text-white/80 mb-10 text-lg">
              Create your own tournament and invite players from around the
              world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild className="btn-cta">
                <Link href="/signup">
                  Create Tournament
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="btn-cta-outline">
                Browse All Games
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
