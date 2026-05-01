"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, CreditCard, Clock, Users, TrendingUp, CheckCircle2, AlertCircle, ArrowUpRight } from "lucide-react";

const projects = [
  { name: "E-commerce Website", client: "TechCorp", amount: "₹75,000", status: "In Progress", milestone: "2/4", due: "May 15" },
  { name: "Mobile App Design", client: "StartupXYZ", amount: "₹45,000", status: "Escrow Locked", milestone: "0/3", due: "Jun 1" },
  { name: "API Integration", client: "DataFlow", amount: "₹30,000", status: "Completed", milestone: "3/3", due: "Apr 20" },
  { name: "Logo & Branding", client: "BrandCo", amount: "₹15,000", status: "Disputed", milestone: "1/2", due: "May 5" },
];

const stats = [
  { label: "Escrow Held", value: "₹1.2L", icon: Shield, color: "text-emerald-500" },
  { label: "Released", value: "₹3.5L", icon: CreditCard, color: "text-blue-500" },
  { label: "Active Projects", value: "8", icon: Clock, color: "text-orange-500" },
  { label: "Clients", value: "12", icon: Users, color: "text-purple-500" },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border/50 sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2"><Shield className="h-6 w-6 text-emerald-500" /><span className="font-bold">SafeWork</span><Badge variant="secondary" className="text-[10px]">Dashboard</Badge></div>
          <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600">+ New Project</Button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <Card key={s.label} className="border-border/50">
              <CardContent className="pt-4 pb-4"><s.icon className={`h-4 w-4 ${s.color} mb-1`} /><div className="text-2xl font-bold">{s.value}</div><div className="text-xs text-muted-foreground">{s.label}</div></CardContent>
            </Card>
          ))}
        </div>
        <Card className="border-border/50">
          <CardHeader className="pb-3"><CardTitle className="text-base">Active Projects</CardTitle></CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead><tr className="border-b border-border/50 text-muted-foreground">
                  <th className="text-left pb-3 font-medium">Project</th><th className="text-left pb-3 font-medium hidden sm:table-cell">Client</th>
                  <th className="text-left pb-3 font-medium">Amount</th><th className="text-left pb-3 font-medium">Status</th><th className="text-left pb-3 font-medium hidden md:table-cell">Milestone</th>
                </tr></thead>
                <tbody>
                  {projects.map((p) => (
                    <tr key={p.name} className="border-b border-border/30 hover:bg-muted/30">
                      <td className="py-3 font-medium">{p.name}</td>
                      <td className="py-3 hidden sm:table-cell text-muted-foreground">{p.client}</td>
                      <td className="py-3 font-medium">{p.amount}</td>
                      <td className="py-3"><Badge variant={p.status === "Completed" ? "default" : p.status === "Disputed" ? "destructive" : "secondary"}
                        className={p.status === "Escrow Locked" ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" : p.status === "In Progress" ? "bg-blue-500/10 text-blue-500 border-blue-500/20" : ""}>
                        {p.status === "Disputed" && <AlertCircle className="h-3 w-3 mr-1" />}{p.status}</Badge></td>
                      <td className="py-3 hidden md:table-cell">{p.milestone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
