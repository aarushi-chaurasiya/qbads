# QBADS — Quantum–Blockchain Anomaly Detection System

QBADS is a **hybrid research and engineering prototype** that integrates **Quantum Machine Learning (QML)** with **blockchain-based auditability** to detect anomalous financial transactions in a transparent, tamper-resistant manner.

This project is designed as a **full-stack demonstration system**, not a theoretical paper exercise. Every component exists to support an end-to-end pipeline: from transaction ingestion → anomaly detection → immutable audit logging → human-interpretable visualization.

---

## 📌 Problem Statement

Modern fraud detection systems suffer from three structural limitations:

1. **Scalability limits** in classical ML models as transaction volumes grow
2. **Model fragility** against evolving fraud patterns
3. **Lack of trust and auditability** in centralized detection pipelines

QBADS addresses these issues by:

* Using **quantum-enhanced models** to explore complex anomaly patterns
* Recording detection outcomes on a **blockchain ledger** for audit and traceability
* Providing a **real-time monitoring dashboard** for human oversight

---

## 🧠 System Architecture Overview

QBADS follows a modular hybrid architecture:

1. **Transaction Layer**

   * Synthetic or streamed financial transaction data
   * Preprocessing and feature normalization

2. **Quantum Anomaly Detection Layer**

   * Quantum Support Vector Machines (QSVM) / Quantum Neural Networks (QNN)
   * Feature encoding into quantum states
   * Inference executed on simulators or quantum backends

3. **Blockchain Audit Layer**

   * Permissioned blockchain network
   * Smart contracts to log anomaly events
   * Immutable, timestamped audit trail

4. **Hybrid Backend Pipeline**

   * Classical–quantum orchestration
   * REST APIs for inference and logging
   * Latency and performance tracking

5. **Frontend Visualization Layer**

   * Real-time dashboard
   * Transaction monitoring
   * Anomaly explanations and audit inspection

---

## 🧩 Project Structure

```
qbads/
├── quantum/          # QML models, circuits, training, evaluation
├── blockchain/       # Smart contracts, ledger configuration
├── backend/          # APIs, preprocessing, orchestration logic
├── frontend/         # Dashboard UI and visualization
├── data/             # Synthetic datasets and feature schemas
├── docs/             # Architecture diagrams and technical notes
└── README.md
```

Each module is intentionally isolated to allow independent testing, benchmarking, and replacement.

---

## ⚙️ Technology Stack

### Quantum Computing

* Qiskit SDK
* Quantum simulators and hybrid execution
* QSVM / QNN models

### Blockchain

* Permissioned blockchain network
* Smart contracts for anomaly logging
* Immutable audit trail

### Backend

* Python-based API layer
* Data preprocessing and feature engineering
* Hybrid classical–quantum orchestration

### Frontend

* React + TypeScript
* Tailwind CSS
* Interactive charts and tables

---

## 📊 Frontend Capabilities

The dashboard provides:

* Live transaction monitoring
* Anomaly scores and risk classification
* Quantum model metadata and confidence indicators
* Blockchain audit trail inspection
* System latency and performance metrics

The UI is designed for **interpretability first**, not visual gimmicks.

---

## 🚧 Project Status

* ✔ System architecture defined
* ✔ Frontend dashboard scaffolded
* ✔ Backend and quantum pipelines under active development
* ✔ Blockchain integration in progress

This repository represents an **engineering prototype**, not a production-ready financial system.

---

## 🎯 Project Goals

* Demonstrate feasibility of quantum-enhanced anomaly detection
* Show how blockchain can enforce trust and auditability in AI decisions
* Provide a clear, inspectable end-to-end fraud detection pipeline

---

## ⚠️ Disclaimer

QBADS is an **academic and experimental prototype**.
It is **not intended for real financial deployment** without extensive security audits, regulatory compliance, and performance validation.

---

## 👤 Author & Team

Developed as part of an advanced systems engineering and research initiative focused on quantum computing, blockchain, and AI integration.

---

## 📄 License

This project is released for **research and educational purposes only**.



# Frontend Output Screenshots
`<img width="1888" height="813" alt="Screenshot 2025-12-27 061148" src="https://github.com/user-attachments/assets/7a9586bf-e6a9-4ed2-91d8-c6d3334cdb87" />
<img width="1542" height="782" alt="Screenshot 2025-12-27 061205" src="https://github.com/user-attachments/assets/8e091a7a-5d4b-4f06-950d-58121e70ff38" />
<img width="1879" height="791" alt="Screenshot 2025-12-27 061253" src="https://github.com/user-attachments/assets/24848b79-1bda-4a30-8466-884f38278d22" />
<img width="1565" height="806" alt="Screenshot 2025-12-27 061329" src="https://github.com/user-attachments/assets/0167b6e2-3294-4baf-9818-fe73ebb4dd85" />
<img width="1889" height="814" alt="Screenshot 2025-12-27 061347" src="https://github.com/user-attachments/assets/cd677594-cef8-44fe-b418-a91dfe3f0130" />
<img width="1551" height="795" alt="Screenshot 2025-12-27 061405" src="https://github.com/user-attachments/assets/6a3d76e3-0141-4bee-bc9d-36163e5cd20e" />
<img width="1885" height="811" alt="Screenshot 2025-12-27 060727" src="https://github.com/user-attachments/assets/ad7b39fb-8323-48b3-8f21-4d0488007d12" />
<img width="1565" height="804" alt="Screenshot 2025-12-27 060826" src="https://github.com/user-attachments/assets/19d4501c-6d45-4607-becc-edcd0ab069bd" />
<img width="1493" height="448" alt="Screenshot 2025-12-27 060844" src="https://github.com/user-attachments/assets/e027194e-85a0-422b-bcb0-ebac93be1402" />
<img width="1893" height="824" alt="Screenshot 2025-12-27 060905" src="https://github.com/user-attachments/assets/92afd774-b10a-405e-bc70-62d4e3c210ff" />
<img width="1896" height="823" alt="Screenshot 2025-12-27 060931" src="https://github.com/user-attachments/assets/c7782201-44fd-4ea1-9c73-6d2fdce06cfe" />
<img width="1895" height="808" alt="Screenshot 2025-12-27 060959" src="https://github.com/user-attachments/assets/4765c82f-c319-40b7-8206-6098ba2af1dd" />
<img width="1565" height="796" alt="Screenshot 2025-12-27 061027" src="https://github.com/user-attachments/assets/71b95b38-2aed-4704-817a-6192484dc4aa" />
<img width="1890" height="811" alt="Screenshot 2025-12-27 061100" src="https://github.com/user-attachments/assets/1e689e1b-60c5-45fa-9a99-f62c45974d57" />
<img width="1545" height="786" alt="Screenshot 2025-12-27 061122" src="https://github.com/user-attachments/assets/393f25ba-e62c-4de1-ae59-6908cf8754f3" />




