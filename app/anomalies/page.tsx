"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { placeholderAnomalies } from "@/lib/placeholder-data"

export default function AnomaliesPage() {
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set())

  const toggleRow = (id: string) => {
    const newExpanded = new Set(expandedRows)
    if (newExpanded.has(id)) {
      newExpanded.delete(id)
    } else {
      newExpanded.add(id)
    }
    setExpandedRows(newExpanded)
  }

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "low":
        return "border-success text-success"
      case "medium":
        return "border-warning text-warning"
      case "high":
        return "border-destructive text-destructive"
      case "critical":
        return "border-destructive text-destructive bg-destructive/10"
      default:
        return ""
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Anomaly Detection</h1>
        <p className="text-muted-foreground mt-2">Detailed analysis of detected anomalies with quantum insights</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Detected Anomalies</CardTitle>
          <CardDescription>Expandable rows showing detailed feature analysis</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {placeholderAnomalies.map((anomaly) => {
              const isExpanded = expandedRows.has(anomaly.id)
              return (
                <div key={anomaly.id} className="rounded-lg border border-border bg-card">
                  <div
                    className="flex items-center justify-between p-4 cursor-pointer hover:bg-muted/30 transition-colors"
                    onClick={() => toggleRow(anomaly.id)}
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div>
                        <span className="font-mono text-sm font-medium text-foreground">{anomaly.id}</span>
                        <p className="text-xs text-muted-foreground mt-1">Transaction: {anomaly.transactionId}</p>
                      </div>
                      <Badge variant="outline" className={getRiskColor(anomaly.riskClassification)}>
                        {anomaly.riskClassification.toUpperCase()}
                      </Badge>
                      <div className="text-sm text-muted-foreground">
                        Confidence:{" "}
                        <span className="font-medium text-foreground">{(anomaly.confidence * 100).toFixed(1)}%</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {new Date(anomaly.detectedAt).toLocaleString()}
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </Button>
                  </div>

                  {isExpanded && (
                    <div className="border-t border-border p-4 space-y-4 bg-muted/20">
                      <div>
                        <h4 className="text-sm font-medium text-foreground mb-2">Description</h4>
                        <p className="text-sm text-muted-foreground">{anomaly.description}</p>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-foreground mb-3">Feature Contributions</h4>
                        <ChartContainer
                          config={{
                            contribution: {
                              label: "Contribution",
                              color: "hsl(var(--chart-1))",
                            },
                          }}
                          className="h-[200px]"
                        >
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={anomaly.featureContributions} layout="vertical">
                              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                              <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                              <YAxis
                                dataKey="feature"
                                type="category"
                                stroke="hsl(var(--muted-foreground))"
                                fontSize={12}
                                width={150}
                              />
                              <ChartTooltip content={<ChartTooltipContent />} />
                              <Bar dataKey="contribution" fill="hsl(var(--chart-1))" radius={4} />
                            </BarChart>
                          </ResponsiveContainer>
                        </ChartContainer>
                      </div>

                      <div className="grid grid-cols-2 gap-4 pt-2">
                        <div className="rounded-lg border border-border bg-card p-3">
                          <p className="text-xs text-muted-foreground">Risk Classification</p>
                          <p className="text-lg font-semibold text-foreground mt-1">
                            {anomaly.riskClassification.charAt(0).toUpperCase() + anomaly.riskClassification.slice(1)}
                          </p>
                        </div>
                        <div className="rounded-lg border border-border bg-card p-3">
                          <p className="text-xs text-muted-foreground">Detection Confidence</p>
                          <p className="text-lg font-semibold text-foreground mt-1">
                            {(anomaly.confidence * 100).toFixed(1)}%
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
