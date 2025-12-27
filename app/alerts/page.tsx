"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, AlertCircle, AlertTriangle, Info } from "lucide-react"
import { placeholderAlerts } from "@/lib/placeholder-data"

export default function AlertsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterSeverity, setFilterSeverity] = useState<string>("all")

  const filteredAlerts = placeholderAlerts.filter((alert) => {
    const matchesSearch =
      alert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alert.message.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSeverity = filterSeverity === "all" || alert.severity === filterSeverity
    return matchesSearch && matchesSeverity
  })

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "critical":
        return <AlertCircle className="h-4 w-4" />
      case "high":
        return <AlertTriangle className="h-4 w-4" />
      case "medium":
        return <Info className="h-4 w-4" />
      default:
        return <Info className="h-4 w-4" />
    }
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "border-destructive text-destructive bg-destructive/10"
      case "high":
        return "border-warning text-warning bg-warning/10"
      case "medium":
        return "border-info text-info bg-info/10"
      case "low":
        return "border-muted-foreground text-muted-foreground"
      default:
        return ""
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Alerts & Logs</h1>
        <p className="text-muted-foreground mt-2">Real-time system alerts and event logging</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Alert Feed</CardTitle>
              <CardDescription>Filtered by severity and keywords</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search alerts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 w-64"
                />
              </div>
              <div className="flex gap-1">
                <Button
                  variant={filterSeverity === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterSeverity("all")}
                >
                  All
                </Button>
                <Button
                  variant={filterSeverity === "critical" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterSeverity("critical")}
                >
                  Critical
                </Button>
                <Button
                  variant={filterSeverity === "high" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterSeverity("high")}
                >
                  High
                </Button>
                <Button
                  variant={filterSeverity === "medium" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterSeverity("medium")}
                >
                  Medium
                </Button>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {filteredAlerts.map((alert) => (
              <div
                key={alert.id}
                className={`flex items-start gap-4 rounded-lg border p-4 transition-colors hover:bg-muted/20 ${getSeverityColor(
                  alert.severity,
                )}`}
              >
                <div className="mt-0.5">{getSeverityIcon(alert.severity)}</div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className={getSeverityColor(alert.severity)}>
                          {alert.severity.toUpperCase()}
                        </Badge>
                        <h4 className="font-medium text-foreground">{alert.title}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">{alert.message}</p>
                      <div className="flex items-center gap-4 mt-3">
                        <span className="text-xs text-muted-foreground">
                          Source: <span className="font-medium">{alert.source}</span>
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {new Date(alert.timestamp).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>System Logs</CardTitle>
          <CardDescription>Detailed event log with timestamps</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border border-border bg-muted/20 p-4 font-mono text-xs space-y-1">
            {[
              "[2024-01-15 14:32:18] INFO: Quantum model inference completed - TX-000234 (score: 0.82)",
              "[2024-01-15 14:32:17] DEBUG: Blockchain commit initiated - Block BLK-000891",
              "[2024-01-15 14:32:15] WARN: Anomaly score threshold exceeded - TX-000233",
              "[2024-01-15 14:32:12] INFO: Transaction processed - TX-000233 ($4,521.00)",
              "[2024-01-15 14:32:10] INFO: Quantum circuit executed - 12 qubits, depth 8",
              "[2024-01-15 14:32:08] DEBUG: Feature extraction completed - 47 features",
              "[2024-01-15 14:32:05] INFO: New transaction received - TX-000232",
              "[2024-01-15 14:32:03] INFO: Model accuracy check passed (94.2%)",
            ].map((log, i) => (
              <div
                key={i}
                className={`text-muted-foreground ${
                  log.includes("WARN") ? "text-warning" : log.includes("INFO") ? "text-foreground" : ""
                }`}
              >
                {log}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
