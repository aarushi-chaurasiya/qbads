"use client"

import { Badge } from "@/components/ui/badge"
import { Activity, Box, ShieldCheck } from "lucide-react"

export function Header() {
  return (
    <header className="fixed left-64 right-0 top-0 z-30 h-16 border-b border-border bg-card">
      <div className="flex h-full items-center justify-between px-8">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold text-card-foreground">System Status</h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-success" />
            <span className="text-sm text-muted-foreground">Quantum Model:</span>
            <Badge variant="outline" className="border-success text-success">
              Operational
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <Box className="h-4 w-4 text-success" />
            <span className="text-sm text-muted-foreground">Blockchain:</span>
            <Badge variant="outline" className="border-success text-success">
              Synced
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-success" />
            <span className="text-sm text-muted-foreground">Detector:</span>
            <Badge variant="outline" className="border-success text-success">
              Active
            </Badge>
          </div>
        </div>
      </div>
    </header>
  )
}
