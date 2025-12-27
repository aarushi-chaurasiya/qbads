"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Activity, Zap, Box, CheckCircle } from "lucide-react"
import { performanceData } from "@/lib/placeholder-data"

export default function PerformancePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">System Performance</h1>
        <p className="text-muted-foreground mt-2">Real-time monitoring of system latency and health metrics</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">End-to-End Latency</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">87ms</div>
            <p className="text-xs text-success mt-1">↓ 12% from baseline</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Quantum Inference</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">34ms</div>
            <p className="text-xs text-muted-foreground mt-1">Average processing time</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Blockchain Commit</CardTitle>
            <Box className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">42ms</div>
            <p className="text-xs text-success mt-1">↓ 8% from baseline</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">System Health</CardTitle>
            <CheckCircle className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <Badge variant="outline" className="border-success text-success mt-1">
              Healthy
            </Badge>
            <p className="text-xs text-muted-foreground mt-2">All systems operational</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Performance Metrics (24 Hours)</CardTitle>
          <CardDescription>Latency breakdown by component</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              endToEnd: {
                label: "End-to-End",
                color: "hsl(var(--chart-1))",
              },
              quantum: {
                label: "Quantum Inference",
                color: "hsl(var(--chart-2))",
              },
              blockchain: {
                label: "Blockchain Commit",
                color: "hsl(var(--chart-3))",
              },
            }}
            className="h-[400px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  label={{ value: "Latency (ms)", angle: -90, position: "insideLeft" }}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="endToEnd"
                  stroke="hsl(var(--chart-1))"
                  strokeWidth={2}
                  name="End-to-End"
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="quantum"
                  stroke="hsl(var(--chart-2))"
                  strokeWidth={2}
                  name="Quantum Inference"
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="blockchain"
                  stroke="hsl(var(--chart-3))"
                  strokeWidth={2}
                  name="Blockchain Commit"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Quantum System</CardTitle>
            <CardDescription>Circuit execution health</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Gate Fidelity</span>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-24 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-[99%] bg-success rounded-full" />
                  </div>
                  <span className="text-sm font-medium text-success">99.7%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Coherence</span>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-24 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-[97%] bg-success rounded-full" />
                  </div>
                  <span className="text-sm font-medium text-success">97.0%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Error Rate</span>
                <Badge variant="outline" className="border-success text-success">
                  0.03%
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Blockchain Network</CardTitle>
            <CardDescription>Distributed ledger status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Block Height</span>
                <span className="text-sm font-medium text-foreground">1,247,893</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Confirmation Time</span>
                <span className="text-sm font-medium text-foreground">42ms avg</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Network Status</span>
                <Badge variant="outline" className="border-success text-success">
                  Synced
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Detection Engine</CardTitle>
            <CardDescription>Anomaly processing status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Throughput</span>
                <span className="text-sm font-medium text-foreground">14.3k tx/s</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Queue Depth</span>
                <span className="text-sm font-medium text-foreground">23 pending</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Processing Mode</span>
                <Badge variant="outline" className="border-success text-success">
                  Active
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
