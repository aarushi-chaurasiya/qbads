<img width="1493" height="448" alt="Screenshot 2025-12-27 060844" src="https://github.com/user-attachments/assets/7469f913-0a9a-43dd-b00d-247e23f9dfe5" /># QBADS — Quantum–Blockchain Anomaly Detection System

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

<img width="1885" height="811" alt="Screenshot 2025-12-27 060727" src="https://github.com/user-attachments/assets/e3aef841-4ac7-492d-81b8-0d6309cde086" />
<img width="1565" height="804" alt="Screenshot 2025-12-27 060826" src="https://github.com/user-attachments/assets/15d3af24-d8f1-4ccb-a108-9e0d8d2fef04" />
<img width="1493" height="448" alt="Screenshot 2025-12-27 060844" src="https://github.com/user-attachments/assets/71aaee6c-c807-417d-96cb-bdcf0b9672f7" />
<img width="1896" height="823" alt="Screenshot 2025-12-27 060931" src="https://github.com/user-attachments/assets/9b2fcf5b-bd41-4f21-86ab-04da4521b7e5" />
<img width="1895" height="808" alt="Screenshot 2025-12-27 060959" src="https://github.com/user-attachments/assets/36741526-8560-49fd-8b82-1c046b3820c6" />
<img width="1565" height="796" alt="Screenshot 2025-12-27 061027" src="https://github.com/user-attachments/assets/5bc0a2ff-ac21-43de-9392-46acb3c307ba" />
<img width="1890" height="811" alt="Screenshot 2025-12-27 061100" src="https://github.com/user-attachments/assets/e3f139e7-d6f8-4b7f-951e-7d15423dffc9" />
<img width="1545" height="786" alt="Screenshot 2025-12-27 061122" src="https://github.com/user-attachments/assets/e86ae529-83f9-497d-9fa9-6231f87f1897" />
<img width="1888" height="813" alt="Screenshot 2025-12-27 061148" src="https://github.com/user-attachments/assets/2d0a1cf8-c388-4793-9191-75d75c73645f" />
<img width="1542" height="782" alt="Screenshot 2025-12-27 061205" src="https://github.com/user-attachments/assets/51554f14-edac-4485-8be1-ace7a341370e" />
<img width="1879" height="791" alt="Screenshot 2025-12-27 061253" src="https://github.com/user-attachments/assets/75f15a37-de04-458f-9d1d-f107f81c8c9a" />
<img width="1565" height="806" alt="Screenshot 2025-12-27 061329" src="https://github.com/user-attachments/assets/1538c8de-9c3a-47f2-b248-20f53eec1a7f" />
<img width="1889" height="814" alt="Screenshot 2025-12-27 061347" src="https://github.com/user-attachments/assets/0ed924fc-4b5c-49ce-b1c1-ffd84f2375de" />
<img width="1551" height="795" alt="Screenshot 2025-12-27 061405" src="https://github.com/user-attachments/assets/aa984c44-4160-4971-92de-28c99f2be9a0" />



