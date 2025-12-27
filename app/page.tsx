"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MetricCard } from "@/components/metric-card"
import { Badge } from "@/components/ui/badge"
import { Activity, ShieldAlert, TrendingUp, Clock, AlertTriangle } from "lucide-react"
import { Line, LineChart, Bar, BarChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { anomalyTimeSeriesData, anomalyDistributionData, placeholderAlerts } from "@/lib/placeholder-data"

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard Overview</h1>
        <p className="text-muted-foreground mt-2">Real-time monitoring of quantum-blockchain anomaly detection</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Transactions"
          value="1,247,893"
          subtitle="Last 24 hours"
          icon={Activity}
          trend={{ value: 12.5, isPositive: true }}
        />
        <MetricCard
          title="Anomalies Detected"
          value="124"
          subtitle="Current period"
          icon={ShieldAlert}
          trend={{ value: 8.2, isPositive: false }}
        />
        <MetricCard title="Current Risk Score" value="7.2/10" subtitle="Medium risk level" icon={TrendingUp} />
        <MetricCard
          title="Blockchain Latency"
          value="42ms"
          subtitle="Average confirmation time"
          icon={Clock}
          trend={{ value: 5.1, isPositive: true }}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Anomalies Over Time</CardTitle>
            <CardDescription>Daily anomaly detection trend (last 30 days)</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                anomalies: {
                  label: "Anomalies",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={anomalyTimeSeriesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="anomalies" stroke="hsl(var(--chart-1))" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Anomaly Distribution</CardTitle>
            <CardDescription>Breakdown by anomaly type</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                count: {
                  label: "Count",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={anomalyDistributionData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis
                    dataKey="type"
                    type="category"
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    width={120}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="count" radius={4} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            Critical Alerts
          </CardTitle>
          <CardDescription>Recent high-priority alerts requiring attention</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {placeholderAlerts
              .filter((alert) => alert.severity === "critical" || alert.severity === "high")
              .slice(0, 5)
              .map((alert) => (
                <div
                  key={alert.id}
                  className="flex items-start justify-between rounded-lg border border-border bg-muted/30 p-4"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Badge
                        variant={alert.severity === "critical" ? "destructive" : "default"}
                        className={alert.severity === "high" ? "bg-warning text-warning-foreground" : ""}
                      >
                        {alert.severity.toUpperCase()}
                      </Badge>
                      <span className="text-sm font-medium text-card-foreground">{alert.title}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{alert.message}</p>
                    <p className="text-xs text-muted-foreground mt-2">
                      {alert.source} • {new Date(alert.timestamp).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
