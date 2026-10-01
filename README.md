# ☁️ Cloud Computing ALA-1: Student Notes Manager

[![Live Demo](https://img.shields.io/badge/Live_Demo-cc--ala--1.web.app-0284c7?style=for-the-badge&logo=google-chrome&logoColor=white)](https://cc-ala-1.web.app)
[![Firebase](https://img.shields.io/badge/Platform-Firebase%20%2F%20GCP-FFA000?style=for-the-badge&logo=firebase&logoColor=white)](https://firebase.google.com/)
[![Firestore](https://img.shields.io/badge/Database-Cloud%20Firestore-FFCA28?style=for-the-badge&logo=googlecloud&logoColor=black)](https://cloud.google.com/firestore)

> **Academic Submission:** Active Learning Assignment 1 (ALA-1)  
> **Course:** Cloud Computing (CC) — Semester 7  
> **Institution:** Gyanmanjari Innovative University (GMIU)  

---

## 📌 Project Overview

This project satisfies the practical requirements of **ALA-1**, demonstrating end-to-end cloud computing concepts including:
- **Compute / Web Hosting Service (PaaS):** Hosting a web application on global CDN edge nodes via Firebase Hosting with automatic SSL/TLS encryption.
- **Cloud Storage Service (BaaS):** Real-time persistent data storage using Google Cloud Firestore (Serverless NoSQL Document Store).
- **Public Internet Accessibility:** Public routing and live accessibility without managing physical server infrastructure.
- **Resource Management:** Real-time quota tracking, telemetry, and release versioning via the cloud management console.

🔗 **Live Application URL:** [https://cc-ala-1.web.app](https://cc-ala-1.web.app)  
🔗 **Alternative Domain:** [https://cc-ala-1.firebaseapp.com](https://cc-ala-1.firebaseapp.com)

---

## 🏗️ Cloud Architecture

```
[ Client Web Browser ]
         │
         ▼ (HTTPS / Custom Domain)
┌──────────────────────────────────────────────┐
│  Firebase Hosting (Compute / CDN Service)     │
│  - Edge caching across global POPs          │
│  - Serves index.html, app.js, and assets    │
└──────────────────────────────────────────────┘
         │
         ▼ (Firebase Web SDK v10 / REST/gRPC)
┌──────────────────────────────────────────────┐
│  Google Cloud Firestore (Storage Service)    │
│  - NoSQL Collection: 'student_notes'        │
│  - Real-time Read, Write, and Delete         │
└──────────────────────────────────────────────┘
```

---

## ✨ Features

- 📝 **Create Cloud Records:** Submit notes with a title and content directly to Cloud Firestore.
- 🔄 **Real-Time Data Sync:** Fetches and displays all cloud-stored notes ordered by creation timestamp (`createdAt`).
- 🗑️ **Delete Records:** Delete records from the cloud database instantly.
- ⚡ **Zero-Server Maintenance:** Fully serverless architecture with auto-scaling compute and managed database storage.
- 🔒 **Secured by Default:** Served exclusively over HTTPS with auto-renewing SSL certificates.

---

## 🛠️ Tech Stack

| Component | Technology | Cloud Role |
| :--- | :--- | :--- |
| **Frontend** | HTML5, CSS3, Vanilla JS (ES Modules) | Client-side user interface |
| **Cloud SDK** | Firebase Web SDK v10.12.0 | Client-to-cloud database communication |
| **Compute / Hosting** | Firebase Hosting (Google Cloud Platform) | Application delivery & CDN hosting |
| **Database / Storage** | Cloud Firestore | Managed NoSQL document database |
| **Deployment & CLI** | Firebase CLI (`firebase-tools`) | Infrastructure-as-code & artifact deployment |

---

## 📂 Project Structure

```bash
├── index.html        # Web application layout and styling
├── app.js            # Firebase SDK setup and Firestore CRUD operations
├── 404.html          # Custom error page for unrouted requests
├── firebase.json     # Firebase deployment configuration & hosting rewrites
├── .firebaserc       # Project alias linking to 'cc-ala-1'
└── README.md         # Documentation and project overview
```

---

## 🚀 Local Development & Deployment

### 1. Prerequisites
- [Node.js](https://nodejs.org/) installed
- Firebase CLI installed globally:
  ```bash
  npm install -g firebase-tools
  ```

### 2. Login to Firebase
```bash
firebase login
```

### 3. Local Emulation / Testing
To test the web app locally before deploying:
```bash
firebase serve
```
Visit `http://localhost:5000` to view the running app.

### 4. Deploy to Cloud
Deploy the latest code directly to the cloud CDN:
```bash
firebase deploy --only hosting
```

---

## 📊 Cloud Resource Management & Monitoring

The deployed services are monitored using the **Google Cloud / Firebase Console**:
- **Hosting Dashboard:** View active domains, deployment versions, rollback history, and data transfer usage.
- **Firestore Dashboard:** Monitor database read/write/delete operation quotas, document storage size, and active connections.
- **Security Rules:** Configurable security policies to manage read and write access permissions to the database.

---

## 👨‍💻 Student Details

- **Student Name:** [Your Name]
- **Enrollment Number:** [Your Enrollment Number]
- **Course:** B.Tech / BE — Semester 7
- **University:** Gyanmanjari Innovative University (GMIU)
