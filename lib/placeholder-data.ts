import type { Transaction, Anomaly, BlockchainRecord, ModelMetrics, Alert } from "./types"

export const placeholderTransactions: Transaction[] = Array.from({ length: 50 }, (_, i) => ({
  id: `TXN-${String(i + 1).padStart(6, "0")}`,
  timestamp: new Date(Date.now() - Math.random() * 86400000 * 7).toISOString(),
  amount: Math.random() * 10000,
  merchant: ["Amazon", "Stripe", "PayPal", "Square", "Coinbase", "Shopify"][Math.floor(Math.random() * 6)],
  source: ["Card", "ACH", "Wire", "Crypto"][Math.floor(Math.random() * 4)],
  anomalyScore: Math.random(),
  status: Math.random() > 0.85 ? (Math.random() > 0.5 ? "flagged" : "under_review") : "normal",
}))

export const placeholderAnomalies: Anomaly[] = Array.from({ length: 15 }, (_, i) => ({
  id: `ANM-${String(i + 1).padStart(5, "0")}`,
  transactionId: `TXN-${String(Math.floor(Math.random() * 50) + 1).padStart(6, "0")}`,
  detectedAt: new Date(Date.now() - Math.random() * 86400000 * 3).toISOString(),
  riskClassification: (["low", "medium", "high", "critical"] as const)[Math.floor(Math.random() * 4)],
  confidence: 0.7 + Math.random() * 0.3,
  featureContributions: [
    { feature: "Transaction Amount", contribution: Math.random() },
    { feature: "Time of Day", contribution: Math.random() },
    { feature: "Location Anomaly", contribution: Math.random() },
    { feature: "Merchant Category", contribution: Math.random() },
  ],
  description: "Unusual transaction pattern detected based on quantum feature analysis",
}))

export const placeholderBlockchainRecords: BlockchainRecord[] = Array.from({ length: 30 }, (_, i) => ({
  blockId: `BLK-${String(i + 1).padStart(6, "0")}`,
  blockHash: `0x${Math.random().toString(16).substring(2, 18)}...`,
  transactionRef: `TXN-${String(Math.floor(Math.random() * 50) + 1).padStart(6, "0")}`,
  timestamp: new Date(Date.now() - Math.random() * 86400000 * 5).toISOString(),
  smartContractAction: ["LogTransaction", "FlagAnomaly", "UpdateRiskScore", "AuditRecord"][
    Math.floor(Math.random() * 4)
  ],
  status: Math.random() > 0.2 ? "confirmed" : "pending",
}))

export const placeholderModelMetrics: ModelMetrics = {
  modelType: "QSVM",
  qubits: 12,
  circuitDepth: 8,
  lastTrainingTime: new Date(Date.now() - 3600000 * 24).toISOString(),
  accuracy: 0.94,
  quantumAdvantage: 1.27,
}

export const placeholderAlerts: Alert[] = Array.from({ length: 20 }, (_, i) => ({
  id: `ALT-${String(i + 1).padStart(5, "0")}`,
  timestamp: new Date(Date.now() - Math.random() * 86400000 * 2).toISOString(),
  severity: (["low", "medium", "high", "critical"] as const)[Math.floor(Math.random() * 4)],
  title: [
    "High-risk transaction detected",
    "Quantum model accuracy drift",
    "Blockchain sync delay",
    "Unusual transaction volume",
    "Model retraining required",
  ][Math.floor(Math.random() * 5)],
  message: "Automated anomaly detection flagged this event for review",
  source: ["Anomaly Detector", "Quantum Model", "Blockchain Monitor", "System Health"][Math.floor(Math.random() * 4)],
}))

export const anomalyTimeSeriesData = Array.from({ length: 30 }, (_, i) => ({
  date: new Date(Date.now() - (29 - i) * 86400000).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
  anomalies: Math.floor(Math.random() * 20) + 5,
}))

export const anomalyDistributionData = [
  { type: "Amount Anomaly", count: 45, fill: "hsl(var(--chart-1))" },
  { type: "Location Anomaly", count: 32, fill: "hsl(var(--chart-2))" },
  { type: "Time Anomaly", count: 28, fill: "hsl(var(--chart-3))" },
  { type: "Pattern Anomaly", count: 19, fill: "hsl(var(--chart-4))" },
]

export const modelAccuracyData = Array.from({ length: 12 }, (_, i) => ({
  month: new Date(Date.now() - (11 - i) * 2592000000).toLocaleDateString("en-US", { month: "short" }),
  quantum: 0.88 + Math.random() * 0.08,
  classical: 0.75 + Math.random() * 0.08,
}))

export const performanceData = Array.from({ length: 24 }, (_, i) => ({
  time: `${String(i).padStart(2, "0")}:00`,
  endToEnd: 50 + Math.random() * 50,
  quantum: 20 + Math.random() * 30,
  blockchain: 30 + Math.random() * 40,
}))
