"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, CheckCircle2, ArrowRight, Users, CreditCard, FileText, Clock, Globe, TrendingUp, Lock } from "lucide-react";

const features = [
  { icon: Shield, title: "Escrow Protection", desc: "Funds locked in escrow until work is delivered and approved" },
  { icon: CreditCard, title: "Razorpay Integration", desc: "Instant payments with UPI, cards, and net banking" },
  { icon: FileText, title: "Smart Contracts", desc: "Auto-generated agreements with milestones and deadlines" },
  { icon: Clock, title: "Milestone Tracking", desc: "Break projects into milestones with partial payments" },
  { icon: Users, title: "Dispute Resolution", desc: "AI-assisted mediation for project conflicts" },
  { icon: TrendingUp, title: "Analytics Dashboard", desc: "Track earnings, spending, and project health" },
];

const plans = [
  { name: "Freelancer", price: "₹499", period: "/month", escrows: "5 active", fee: "2.5%", disputes: "3/mo", cta: "Start Free" },
  { name: "Professional", price: "₹1,499", period: "/month", escrows: "Unlimited", fee: "1.5%", disputes: "Unlimited", cta: "Start Free", popular: true },
  { name: "Agency", price: "₹4,999", period: "/month", escrows: "Unlimited", fee: "0.5%", disputes: "Unlimited", cta: "Contact Sales" },
];

export default function LandingPage() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2"><Shield className="h-7 w-7 text-emerald-500" /><span className="text-xl font-bold">SafeWork</span><Badge variant="secondary" className="text-[10px]">Escrow</Badge></div>
          <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600">Get Started <ArrowRight className="ml-1 h-4 w-4" /></Button>
        </div>
      </nav>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 py-24 sm:py-32 relative text-center">
          <Badge className="mb-4 bg-emerald-500/10 text-emerald-500 border-emerald-500/20"><Zap className="h-3 w-3 mr-1" />Freelancer Escrow Platform</Badge>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">Get Paid.<br /><span className="text-emerald-500">Safe. Guaranteed.</span></h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">SafeWork protects freelancers and clients with escrow payments, smart contracts, and AI dispute resolution. No more &quot;payment pending&quot; excuses.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className="flex-1" />
            <Button className="bg-emerald-500 hover:bg-emerald-600 whitespace-nowrap">Start Free <ArrowRight className="ml-1 h-4 w-4" /></Button>
          </div>
          <p className="text-xs text-muted-foreground mt-3">7-day free trial • Razorpay powered</p>
        </div>
      </section>

      <section className="border-y border-border/50 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[{ num: "₹5Cr+", label: "Escrow Protected" }, { num: "10K+", label: "Freelancers" }, { num: "99.9%", label: "Payment Success" }, { num: "<24hr", label: "Dispute Resolution" }].map((s) => (
            <div key={s.label}><div className="text-3xl font-bold text-emerald-500">{s.num}</div><div className="text-sm text-muted-foreground mt-1">{s.label}</div></div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16"><h2 className="text-3xl font-bold mb-4">How SafeWork Protects You</h2></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <Card key={f.title} className="border-border/50 hover:border-emerald-500/30 transition-colors">
              <CardHeader><f.icon className="h-8 w-8 text-emerald-500 mb-2" /><CardTitle className="text-lg">{f.title}</CardTitle></CardHeader>
              <CardContent><p className="text-sm text-muted-foreground">{f.desc}</p></CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16"><h2 className="text-3xl font-bold mb-4">Pricing</h2></div>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {plans.map((p) => (
            <Card key={p.name} className={`relative ${p.popular ? "border-emerald-500 shadow-lg shadow-emerald-500/10" : "border-border/50"}`}>
              {p.popular && <Badge className="absolute -top-2 left-1/2 -translate-x-1/2 bg-emerald-500">Most Popular</Badge>}
              <CardHeader className="text-center pt-8"><CardTitle className="text-lg">{p.name}</CardTitle><div className="mt-2"><span className="text-4xl font-bold">{p.price}</span><span className="text-muted-foreground">{p.period}</span></div></CardHeader>
              <CardContent className="space-y-3">
                {[p.escrows, `${p.fee} fee`, p.disputes].map((f) => (<div key={f} className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0" />{f}</div>))}
                <Button className={`w-full mt-4 ${p.popular ? "bg-emerald-500 hover:bg-emerald-600" : ""}`}>{p.cta}</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Stop Chasing Payments. Start Getting Paid.</h2>
          <Button size="lg" variant="secondary" className="text-emerald-600 font-semibold">Start Free Trial <ArrowRight className="ml-2 h-4 w-4" /></Button>
        </div>
      </section>

      <footer className="border-t border-border/50 py-8">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center"><div className="flex items-center gap-2"><Shield className="h-5 w-5 text-emerald-500" /><span className="font-semibold">SafeWork</span></div><span className="text-sm text-muted-foreground flex items-center gap-1"><Globe className="h-3 w-3" />by RAGSPRO</span></div>
      </footer>
    </div>
  );
}
