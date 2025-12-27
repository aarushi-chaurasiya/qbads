"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { placeholderBlockchainRecords } from "@/lib/placeholder-data"
import { Check, Clock } from "lucide-react"

export default function BlockchainPage() {
  const getStatusIcon = (status: string) => {
    return status === "confirmed" ? (
      <Check className="h-4 w-4 text-success" />
    ) : (
      <Clock className="h-4 w-4 text-warning" />
    )
  }

  const getStatusColor = (status: string) => {
    return status === "confirmed" ? "border-success text-success" : "border-warning text-warning"
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Blockchain Audit Trail</h1>
        <p className="text-muted-foreground mt-2">Immutable record of all transactions and anomaly detections</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Blockchain Records</CardTitle>
          <CardDescription>Verified and timestamped on distributed ledger</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Block ID</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Block Hash</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Transaction Ref</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Timestamp</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Smart Contract</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {placeholderBlockchainRecords.map((record) => (
                  <tr key={record.blockId} className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="px-4 py-3">
                      <span className="font-mono text-sm font-medium text-foreground">{record.blockId}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="font-mono text-sm text-muted-foreground">{record.blockHash}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="font-mono text-sm text-foreground">{record.transactionRef}</span>
                    </td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">
                      {new Date(record.timestamp).toLocaleString()}
                    </td>
                    <td className="px-4 py-3">
                      <Badge variant="secondary" className="font-mono text-xs">
                        {record.smartContractAction}
                      </Badge>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(record.status)}
                        <Badge variant="outline" className={getStatusColor(record.status)}>
                          {record.status}
                        </Badge>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Audit Timeline</CardTitle>
          <CardDescription>Visual representation of blockchain verification flow</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative space-y-6">
            {placeholderBlockchainRecords.slice(0, 5).map((record, index) => (
              <div key={record.blockId} className="flex items-start gap-4">
                <div className="relative flex flex-col items-center">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full border-2 ${
                      record.status === "confirmed" ? "border-success bg-success/20" : "border-warning bg-warning/20"
                    }`}
                  >
                    {getStatusIcon(record.status)}
                  </div>
                  {index < 4 && <div className="h-full w-0.5 bg-border mt-2 mb-2 min-h-[40px]" />}
                </div>
                <div className="flex-1 pb-6">
                  <div className="rounded-lg border border-border bg-card p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium text-foreground">{record.smartContractAction}</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Block: <span className="font-mono">{record.blockId}</span>
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Transaction: <span className="font-mono">{record.transactionRef}</span>
                        </p>
                      </div>
                      <Badge variant="outline" className={getStatusColor(record.status)}>
                        {record.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">{new Date(record.timestamp).toLocaleString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
