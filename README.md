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
<img width="1885" height="811" alt="image" src="https://github.com/user-attachments/assets/1d720995-f001-400b-adde-567a4afeea21" />
<img width="1565" height="804" alt="image" src="https://github.com/user-attachments/assets/5e268e60-7cf4-4364-aa99-aaf5ef5c26b2" />
<img width="1493" height="448" alt="image" src="https://github.com/user-attachments/assets/8b65f9b3-a06f-43ad-aab9-9b1a4f184739" />
<img width="1893" height="824" alt="image" src="https://github.com/user-attachments/assets/8c740c30-b7aa-4634-b767-5464ca132398" />
<img width="1896" height="823" alt="image" src="https://github.com/user-attachments/assets/c9975ecd-dc87-4799-9f89-de8f702771e4" />
<img width="1895" height="808" alt="image" src="https://github.com/user-attachments/assets/0d31ffad-e631-4e47-859a-f7b81d1ed563" />
<img width="1565" height="796" alt="image" src="https://github.com/user-attachments/assets/55785517-b9ca-4e31-8982-4032f682eacb" />
<img width="1890" height="811" alt="image" src="https://github.com/user-attachments/assets/a572f6d4-faf9-4259-9e9d-c4b4d99cb98c" />
<img width="1545" height="786" alt="image" src="https://github.com/user-attachments/assets/d3b4fbe7-5625-4a60-acdd-4282581e7654" />
<img width="1888" height="813" alt="image" src="https://github.com/user-attachments/assets/1ff6640e-1955-42ba-84d2-fb53f61b4b5b" />
<img width="1542" height="782" alt="image" src="https://github.com/user-attachments/assets/8dbee8ea-1215-4725-bdc6-67fa15567c9d" />
<img width="1879" height="791" alt="image" src="https://github.com/user-attachments/assets/2773ef68-083d-40bd-8180-ab7afc306f12" />
<img width="1565" height="806" alt="image" src="https://github.com/user-attachments/assets/90e68464-017f-4d56-bdb3-e201b09c1b06" />
<img width="1889" height="814" alt="image" src="https://github.com/user-attachments/assets/2610de04-2e55-416b-8854-3f56dda47097" />
<img width="1551" height="795" alt="image" src="https://github.com/user-attachments/assets/8d027679-b4a5-487d-81e9-192c25e74374" />




