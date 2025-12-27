"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { AlertTriangle, Cpu, Zap, Clock } from "lucide-react"
import { placeholderModelMetrics, modelAccuracyData } from "@/lib/placeholder-data"

export default function QuantumPage() {
  const metrics = placeholderModelMetrics

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Quantum Model Insights</h1>
        <p className="text-muted-foreground mt-2">Performance metrics and quantum computing analytics</p>
      </div>

      <Alert className="border-warning bg-warning/10">
        <AlertTriangle className="h-4 w-4 text-warning" />
        <AlertDescription className="text-warning-foreground">
          Quantum noise detected at 0.03 coherence level. Model confidence may be slightly reduced.
        </AlertDescription>
      </Alert>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Model Type</CardTitle>
            <Cpu className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{metrics.modelType}</div>
            <p className="text-xs text-muted-foreground mt-1">Quantum Support Vector Machine</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Qubits</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{metrics.qubits}</div>
            <p className="text-xs text-muted-foreground mt-1">Circuit depth: {metrics.circuitDepth}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Model Accuracy</CardTitle>
            <Badge variant="outline" className="border-success text-success">
              Excellent
            </Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{(metrics.accuracy * 100).toFixed(1)}%</div>
            <p className="text-xs text-success mt-1">↑ 2.3% from last training</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Last Training</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">24h ago</div>
            <p className="text-xs text-muted-foreground mt-1">
              {new Date(metrics.lastTrainingTime).toLocaleDateString()}
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Model Accuracy Over Time</CardTitle>
          <CardDescription>Quantum vs Classical model comparison</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              quantum: {
                label: "Quantum Model",
                color: "hsl(var(--chart-1))",
              },
              classical: {
                label: "Classical Model",
                color: "hsl(var(--chart-2))",
              },
            }}
            className="h-[350px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={modelAccuracyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  domain={[0.7, 1.0]}
                  tickFormatter={(value) => `${(value * 100).toFixed(0)}%`}
                />
                <ChartTooltip
                  content={<ChartTooltipContent />}
                  formatter={(value: number) => `${(value * 100).toFixed(1)}%`}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="quantum"
                  stroke="hsl(var(--chart-1))"
                  strokeWidth={2}
                  name="Quantum Model"
                />
                <Line
                  type="monotone"
                  dataKey="classical"
                  stroke="hsl(var(--chart-2))"
                  strokeWidth={2}
                  name="Classical Model"
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Quantum Advantage</CardTitle>
            <CardDescription>Performance gain over classical methods</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-chart-1">{metrics.quantumAdvantage.toFixed(2)}x</div>
            <p className="text-sm text-muted-foreground mt-2">
              The quantum model demonstrates a {((metrics.quantumAdvantage - 1) * 100).toFixed(0)}% improvement in
              accuracy compared to classical approaches for this anomaly detection task.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Circuit Configuration</CardTitle>
            <CardDescription>Current quantum circuit parameters</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Number of Qubits</span>
              <span className="text-sm font-medium text-foreground">{metrics.qubits}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Circuit Depth</span>
              <span className="text-sm font-medium text-foreground">{metrics.circuitDepth}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Gate Fidelity</span>
              <span className="text-sm font-medium text-success">99.7%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Coherence Time</span>
              <span className="text-sm font-medium text-foreground">120 μs</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
