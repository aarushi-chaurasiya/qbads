export interface Transaction {
  id: string
  timestamp: string
  amount: number
  merchant: string
  source: string
  anomalyScore: number
  status: "normal" | "flagged" | "under_review"
}

export interface Anomaly {
  id: string
  transactionId: string
  detectedAt: string
  riskClassification: "low" | "medium" | "high" | "critical"
  confidence: number
  featureContributions: {
    feature: string
    contribution: number
  }[]
  description: string
}

export interface BlockchainRecord {
  blockId: string
  blockHash: string
  transactionRef: string
  timestamp: string
  smartContractAction: string
  status: "confirmed" | "pending"
}

export interface ModelMetrics {
  modelType: "QSVM" | "QNN"
  qubits: number
  circuitDepth: number
  lastTrainingTime: string
  accuracy: number
  quantumAdvantage: number
}

export interface SystemPerformance {
  endToEndLatency: number
  quantumInferenceTime: number
  blockchainCommitTime: number
  healthStatus: "healthy" | "degraded" | "critical"
}

export interface Alert {
  id: string
  timestamp: string
  severity: "low" | "medium" | "high" | "critical"
  title: string
  message: string
  source: string
}

export interface SystemStatus {
  quantumModel: "operational" | "training" | "offline"
  blockchain: "synced" | "syncing" | "error"
  anomalyDetector: "active" | "paused"
}
