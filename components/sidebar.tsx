"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, ArrowRightLeft, ShieldAlert, Atom, Blocks, Activity, Bell, Settings } from "lucide-react"

const navItems = [
  { href: "/", label: "Dashboard Overview", icon: LayoutDashboard },
  { href: "/transactions", label: "Live Transactions", icon: ArrowRightLeft },
  { href: "/anomalies", label: "Anomaly Detection", icon: ShieldAlert },
  { href: "/quantum", label: "Quantum Model Insights", icon: Atom },
  { href: "/blockchain", label: "Blockchain Audit Trail", icon: Blocks },
  { href: "/performance", label: "System Performance", icon: Activity },
  { href: "/alerts", label: "Alerts & Logs", icon: Bell },
  { href: "/settings", label: "Settings", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-sidebar-border bg-sidebar">
      <div className="flex h-16 items-center gap-3 border-b border-sidebar-border px-6">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sidebar-primary">
          <Atom className="h-5 w-5 text-sidebar-primary-foreground" />
        </div>
        <div>
          <h1 className="text-lg font-bold text-sidebar-foreground">QBADS</h1>
          <p className="text-xs text-sidebar-foreground/60">Quantum Blockchain ADS</p>
        </div>
      </div>
      <nav className="space-y-1 p-4">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground",
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
