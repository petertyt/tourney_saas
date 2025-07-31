"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Trophy,
  Users,
  BarChart3,
  Settings,
  Bell,
  Search,
  Plus,
  Download,
  Eye,
  Edit,
  Trash2,
  Calendar,
  Target,
  TrendingUp,
  DollarSign,
  Activity,
  Gamepad2,
  Crown,
  Zap,
} from "lucide-react";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    {
      title: "Active Tournaments",
      value: "12",
      change: "+2",
      changeType: "positive",
      icon: Trophy,
      color: "from-primary-500 to-primary-600",
    },
    {
      title: "Total Participants",
      value: "1,247",
      change: "+156",
      changeType: "positive",
      icon: Users,
      color: "from-success-500 to-success-600",
    },
    {
      title: "Revenue This Month",
      value: "$8,420",
      change: "+12%",
      changeType: "positive",
      icon: DollarSign,
      color: "from-accent-500 to-accent-600",
    },
    {
      title: "Completion Rate",
      value: "94%",
      change: "+3%",
      changeType: "positive",
      icon: Target,
      color: "from-primary-500 to-success-500",
    },
  ];

  const recentActivity = [
    {
      type: "tournament",
      title: "CS2 Championship created",
      time: "2 hours ago",
      icon: Trophy,
    },
    {
      type: "user",
      title: "New team registered",
      time: "4 hours ago",
      icon: Users,
    },
    {
      type: "payment",
      title: "Payment received",
      time: "1 day ago",
      icon: DollarSign,
    },
    {
      type: "tournament",
      title: "Valorant Masters completed",
      time: "2 days ago",
      icon: Trophy,
    },
  ];

  const activeTournaments = [
    {
      name: "CS2 Championship",
      participants: "32/64",
      status: "active",
      progress: 75,
      prize: "$50,000",
    },
    {
      name: "League of Legends Cup",
      participants: "16/16",
      status: "ready",
      progress: 100,
      prize: "$25,000",
    },
    {
      name: "Valorant Masters",
      participants: "24/32",
      status: "active",
      progress: 60,
      prize: "$30,000",
    },
  ];

  return (
    <div className="min-h-screen bg-dark-500">
      {/* Header */}
      <header className="bg-dark-500/95 backdrop-blur-md border-b border-white/10 px-6 py-4">
        <div className="max-width container-padding">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-black text-white">Dashboard</h1>
              <div className="flex items-center space-x-2">
                <Button variant="secondary" size="sm">
                  <Bell className="w-5 h-5" />
                </Button>
                <Button variant="secondary" size="sm">
                  <Search className="w-5 h-5" />
                </Button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="secondary" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Button size="sm" className="btn-primary">
                <Plus className="w-4 h-4 mr-2" />
                New Tournament
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-dark-500/50 backdrop-blur-md border-r border-white/10 min-h-screen">
          <nav className="p-6">
            <div className="space-y-6">
              {/* Menu Section */}
              <div>
                <h3 className="text-xs font-bold text-white/60 uppercase tracking-wider mb-3">
                  Menu
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setActiveTab("overview")}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                      activeTab === "overview"
                        ? "bg-primary-500/20 text-primary-400 border border-primary-500/30"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <BarChart3 className="w-5 h-5" />
                    <span>Overview</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("tournaments")}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                      activeTab === "tournaments"
                        ? "bg-primary-500/20 text-primary-400 border border-primary-500/30"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <Trophy className="w-5 h-5" />
                    <span>Tournaments</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("teams")}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                      activeTab === "teams"
                        ? "bg-primary-500/20 text-primary-400 border border-primary-500/30"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <Users className="w-5 h-5" />
                    <span>Teams</span>
                  </button>
                </div>
              </div>

              {/* Financial Section */}
              <div>
                <h3 className="text-xs font-bold text-white/60 uppercase tracking-wider mb-3">
                  Financial
                </h3>
                <div className="space-y-2">
                  <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-xl text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200">
                    <DollarSign className="w-5 h-5" />
                    <span>Revenue</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-xl text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200">
                    <TrendingUp className="w-5 h-5" />
                    <span>Analytics</span>
                  </button>
                </div>
              </div>

              {/* Tools Section */}
              <div>
                <h3 className="text-xs font-bold text-white/60 uppercase tracking-wider mb-3">
                  Tools
                </h3>
                <div className="space-y-2">
                  <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-xl text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200">
                    <Download className="w-5 h-5" />
                    <span>Export Data</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-xl text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200">
                    <Settings className="w-5 h-5" />
                    <span>Settings</span>
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="gaming-card p-6 group hover:scale-105 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <span
                        className={`text-sm font-bold ${
                          stat.changeType === "positive"
                            ? "text-success-400"
                            : "text-accent-400"
                        }`}
                      >
                        {stat.change}
                      </span>
                    </div>
                    <h3 className="text-3xl font-black text-white mb-1">
                      {stat.value}
                    </h3>
                    <p className="text-sm text-white/70 font-medium">{stat.title}</p>
                  </div>
                ))}
              </div>

              {/* Charts Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="gaming-card p-6">
                  <h3 className="text-lg font-bold text-white mb-4">
                    Tournament Activity
                  </h3>
                  <div className="h-64 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                    <div className="text-center">
                      <Activity className="w-12 h-12 text-primary-400 mx-auto mb-2" />
                      <p className="text-white/50">Chart placeholder</p>
                    </div>
                  </div>
                </div>
                <div className="gaming-card p-6">
                  <h3 className="text-lg font-bold text-white mb-4">
                    Revenue Overview
                  </h3>
                  <div className="h-64 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                    <div className="text-center">
                      <TrendingUp className="w-12 h-12 text-success-400 mx-auto mb-2" />
                      <p className="text-white/50">Chart placeholder</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity & Active Tournaments */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Activity */}
                <div className="gaming-card p-6">
                  <h3 className="text-lg font-bold text-white mb-4">
                    Recent Activity
                  </h3>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl border border-white/10">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-success-500 rounded-xl flex items-center justify-center">
                          <activity.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-bold text-white">
                            {activity.title}
                          </p>
                          <p className="text-xs text-white/50">
                            {activity.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Active Tournaments */}
                <div className="gaming-card p-6">
                  <h3 className="text-lg font-bold text-white mb-4">
                    Active Tournaments
                  </h3>
                  <div className="space-y-4">
                    {activeTournaments.map((tournament, index) => (
                      <div
                        key={index}
                        className="p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-200"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex-1">
                            <h4 className="font-bold text-white">
                              {tournament.name}
                            </h4>
                            <p className="text-sm text-white/70">
                              {tournament.participants} participants
                            </p>
                            <p className="text-xs text-accent-400 font-bold">
                              {tournament.prize}
                            </p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-20 bg-white/20 rounded-full h-2">
                              <div
                                className="bg-gradient-to-r from-primary-500 to-success-500 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${tournament.progress}%` }}
                              />
                            </div>
                            <span className="text-xs text-white/60 font-bold">
                              {tournament.progress}%
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            tournament.status === 'active' 
                              ? 'bg-success-500/20 text-success-400' 
                              : 'bg-primary-500/20 text-primary-400'
                          }`}>
                            {tournament.status}
                          </span>
                          <Button size="sm" variant="secondary">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "tournaments" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-black text-white">
                  Tournaments
                </h2>
                <Button className="btn-primary">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Tournament
                </Button>
              </div>

              <div className="gaming-card p-6">
                <div className="text-center">
                  <Trophy className="w-16 h-16 text-primary-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">
                    Tournament Management
                  </h3>
                  <p className="text-white/70">
                    Tournament management interface coming soon...
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "teams" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-black text-white">Teams</h2>
                <Button className="btn-primary">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Team
                </Button>
              </div>

              <div className="gaming-card p-6">
                <div className="text-center">
                  <Users className="w-16 h-16 text-success-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">
                    Team Management
                  </h3>
                  <p className="text-white/70">
                    Team management interface coming soon...
                  </p>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
