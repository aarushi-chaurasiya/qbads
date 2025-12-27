"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SettingsIcon, Save } from "lucide-react"

export default function SettingsPage() {
  const [autoFlagging, setAutoFlagging] = useState(true)
  const [alertSensitivity, setAlertSensitivity] = useState([75])
  const [refreshRate, setRefreshRate] = useState([30])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-2">Configure system parameters and detection thresholds</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <SettingsIcon className="h-5 w-5" />
            Detection Configuration
          </CardTitle>
          <CardDescription>Adjust anomaly detection and auto-flagging behavior</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="auto-flag">Auto-Flagging</Label>
                <p className="text-sm text-muted-foreground">Automatically flag high-risk transactions for review</p>
              </div>
              <Switch id="auto-flag" checked={autoFlagging} onCheckedChange={setAutoFlagging} />
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="threshold">Anomaly Score Threshold</Label>
              <span className="text-sm font-medium text-foreground">0.75</span>
            </div>
            <Slider
              id="threshold"
              value={alertSensitivity}
              onValueChange={setAlertSensitivity}
              min={0}
              max={100}
              step={5}
              className="w-full"
            />
            <p className="text-xs text-muted-foreground">
              Transactions with anomaly scores above this threshold will be flagged
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="refresh">Dashboard Refresh Rate</Label>
              <span className="text-sm font-medium text-foreground">{refreshRate[0]}s</span>
            </div>
            <Slider
              id="refresh"
              value={refreshRate}
              onValueChange={setRefreshRate}
              min={5}
              max={120}
              step={5}
              className="w-full"
            />
            <p className="text-xs text-muted-foreground">How frequently the dashboard updates with new data</p>
          </div>

          <Button className="w-full">
            <Save className="h-4 w-4 mr-2" />
            Save Detection Settings
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Alert Configuration</CardTitle>
          <CardDescription>Manage alert priorities and notification preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="critical">Critical Alert Threshold</Label>
              <Input id="critical" type="number" defaultValue="0.90" step="0.05" min="0" max="1" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="high">High Alert Threshold</Label>
              <Input id="high" type="number" defaultValue="0.75" step="0.05" min="0" max="1" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="medium">Medium Alert Threshold</Label>
              <Input id="medium" type="number" defaultValue="0.50" step="0.05" min="0" max="1" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="low">Low Alert Threshold</Label>
              <Input id="low" type="number" defaultValue="0.30" step="0.05" min="0" max="1" />
            </div>
          </div>

          <Button className="w-full bg-transparent" variant="outline">
            <Save className="h-4 w-4 mr-2" />
            Save Alert Settings
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>System Configuration</CardTitle>
          <CardDescription>Read-only system parameters and environment info</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 border-b border-border">
              <span className="text-sm text-muted-foreground">Quantum Model Version</span>
              <Badge variant="secondary">v2.4.1</Badge>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-border">
              <span className="text-sm text-muted-foreground">Blockchain Network</span>
              <span className="text-sm font-medium text-foreground">Ethereum Mainnet</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-border">
              <span className="text-sm text-muted-foreground">Smart Contract Address</span>
              <span className="text-sm font-mono text-foreground">0x742d...3f9a</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-border">
              <span className="text-sm text-muted-foreground">API Endpoint</span>
              <span className="text-sm font-mono text-foreground">https://api.qbads.io/v1</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-border">
              <span className="text-sm text-muted-foreground">Deployment Region</span>
              <span className="text-sm font-medium text-foreground">US-East-1</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-sm text-muted-foreground">System Status</span>
              <Badge variant="outline" className="border-success text-success">
                Operational
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
