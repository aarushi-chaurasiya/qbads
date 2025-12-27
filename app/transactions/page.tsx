"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search, Filter, ChevronLeft, ChevronRight } from "lucide-react"
import { placeholderTransactions } from "@/lib/placeholder-data"

export default function TransactionsPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const itemsPerPage = 15

  const filteredTransactions = placeholderTransactions.filter(
    (tx) =>
      tx.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tx.merchant.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedTransactions = filteredTransactions.slice(startIndex, startIndex + itemsPerPage)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "normal":
        return "border-success text-success"
      case "flagged":
        return "border-warning text-warning"
      case "under_review":
        return "border-destructive text-destructive"
      default:
        return ""
    }
  }

  const getAnomalyScoreColor = (score: number) => {
    if (score < 0.3) return "text-success"
    if (score < 0.7) return "text-warning"
    return "text-destructive"
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Live Transactions</h1>
        <p className="text-muted-foreground mt-2">Monitor and analyze real-time transaction data</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Transaction Log</CardTitle>
              <CardDescription>All transactions with anomaly scoring</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search by ID or merchant..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 w-64"
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Transaction ID</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Timestamp</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Amount</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Merchant</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Source</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Anomaly Score</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {paginatedTransactions.map((tx) => (
                  <tr
                    key={tx.id}
                    className={`border-b border-border transition-colors hover:bg-muted/30 ${
                      tx.status !== "normal" ? "bg-destructive/5" : ""
                    }`}
                  >
                    <td className="px-4 py-3">
                      <span className="font-mono text-sm text-foreground">{tx.id}</span>
                    </td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">
                      {new Date(tx.timestamp).toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-sm font-medium text-foreground">${tx.amount.toFixed(2)}</td>
                    <td className="px-4 py-3 text-sm text-foreground">{tx.merchant}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{tx.source}</td>
                    <td className="px-4 py-3">
                      <span className={`text-sm font-medium ${getAnomalyScoreColor(tx.anomalyScore)}`}>
                        {tx.anomalyScore.toFixed(3)}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <Badge variant="outline" className={getStatusColor(tx.status)}>
                        {tx.status.replace("_", " ")}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between mt-4">
            <p className="text-sm text-muted-foreground">
              Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredTransactions.length)} of{" "}
              {filteredTransactions.length} transactions
            </p>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
              <span className="text-sm text-muted-foreground">
                Page {currentPage} of {totalPages}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
