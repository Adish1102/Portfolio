# Portfolio Screenshots - Advanced OData Service Orchestration Architecture

📸 **Captured:** October 8, 2026  
📁 **Total Screenshots:** 10  
🎯 **Purpose:** Showcase key features and capabilities of the system

---

## Screenshot Overview

### 1. **Landing Page** (`01_landing_page.png`)
- **URL:** http://localhost:3000
- **Features Shown:**
  - Professional landing page design
  - Project overview and introduction
  - Navigation to Chat App and Admin Portal
  - Technology stack highlights
  - Call-to-action buttons

### 2. **Chat Interface** (`02_chat_interface.png`)
- **URL:** http://localhost:3000/app/
- **Features Shown:**
  - Clean, modern chat UI
  - Natural language query input
  - Session management (create, rename, delete)
  - Dark mode toggle
  - Chat history sidebar
  - Real-time processing indicators

### 3. **Query Results** (`03_query_results.png`)
- **Features Shown:**
  - Natural language query execution: "Show top 5 purchase orders from Sopra PO Service"
  - Tabular data display with sorting
  - Query metadata (tokens, latency, provider)
  - CSV export functionality
  - Processing time and LLM provider badge
  - Results pagination

### 4. **Data Visualization** (`04_data_visualization.png`)
- **Features Shown:**
  - Chart.js-powered visualizations
  - Auto-detected chart types (Pie, Bar, Network)
  - Interactive data graphs
  - Tab switching between Table/Graph views
  - Visual representation of OData query results

### 5. **Entity Selector** (`05_entity_selector.png`)
- **Features Shown:**
  - Visual entity selection interface
  - Property labels (Key, ForeignKey, Date, Measure, Status)
  - Auto-join detection between entities
  - Multi-entity selection capability
  - Cross-service join support
  - Join priority indicators

### 6. **Admin Dashboard** (`06_admin_dashboard.png`)
- **URL:** http://localhost:3000/admin/
- **Features Shown:**
  - Admin authentication system
  - Dashboard overview with key metrics
  - User management interface
  - Role-based access control (RBAC)
  - System statistics and analytics
  - Navigation menu (Users, Roles, Analytics, Audit, Usage)

### 7. **Token Usage Dashboard** (`07_token_usage.png`)
- **Features Shown:**
  - LLM token consumption tracking
  - Summary cards (Today's tokens, 7-day average, Weekly total)
  - Provider breakdown (Groq, NVIDIA, Gemini)
  - Cost estimation per provider
  - Daily usage chart (last 7 days)
  - Recent queries table with timestamps

### 8. **API Documentation (Swagger)** (`08_api_swagger_docs.png`)
- **URL:** http://localhost:8000/docs
- **Features Shown:**
  - FastAPI auto-generated Swagger UI
  - Complete REST API documentation
  - Interactive API testing interface
  - Endpoints categorized by functionality:
    - Chat & Analysis
    - Services Management
    - Entity Selector & Auto-Join
    - Custom Entities & Joins
    - Auth & Admin
    - ML Training & Prediction
  - Request/response schemas

### 9. **Neo4j Graph Browser** (`09_neo4j_graph_browser.png`)
- **URL:** http://localhost:7474
- **Features Shown:**
  - Neo4j graph database interface
  - Entity relationship visualization
  - Service registry management
  - Cypher query console
  - Graph data exploration tools
  - Node and edge properties

### 10. **Services Health** (`10_services_health.png`)
- **URL:** http://localhost:8000/services
- **Features Shown:**
  - Registered OData services list
  - Service health status monitoring
  - Active services:
    - Sopra PO Service (8 entities)
    - PP MPE Order Manage (158 entities)
  - Service metadata and connection details
  - Quick access to service endpoints

---

## Key Capabilities Demonstrated

### 🤖 **Natural Language Processing**
- Screenshots #2, #3 show the chat interface processing natural language queries
- LLM-powered query plan generation visible in metadata

### 📊 **Data Visualization & Analytics**
- Screenshot #4 demonstrates automatic chart generation
- Multiple visualization types (Pie, Bar, Network graphs)

### 🔗 **Multi-Entity Orchestration**
- Screenshot #5 shows the visual entity selector with auto-join detection
- Cross-service data integration capabilities

### 🔐 **Enterprise Security**
- Screenshot #6 shows RBAC implementation
- JWT authentication, password strength validation
- Audit logging (5 default roles: Super Admin, Admin, Data Analyst, Viewer, Guest)

### 💰 **Cost Management**
- Screenshot #7 demonstrates token usage tracking
- Real-time cost estimation per LLM provider
- Weekly usage analytics

### 🔧 **Developer Experience**
- Screenshot #8 shows comprehensive API documentation
- RESTful API design with 40+ endpoints
- Interactive testing interface

### 📈 **ML & Analytics**
- System supports 17 ML algorithms (not shown in these screenshots)
- Auto-training after queries with 10+ rows
- Business insights generation

### 🗄️ **Graph Database Integration**
- Screenshot #9 shows Neo4j integration
- Entity relationship management
- Service registry in graph format

---

## Technical Architecture Highlights

| Component | Technology | Purpose |
|-----------|-----------|---------|
| **Frontend** | nginx 1.27, HTML/CSS/JS, Chart.js | Static web serving, UI |
| **Backend** | FastAPI, Python 3.10, uvicorn | REST API, orchestration |
| **Graph DB** | Neo4j 5.26 | Entity relationships |
| **Vector DB** | ChromaDB | Query plan caching, RAG |
| **Auth DB** | SQLite | User management, audit logs |
| **LLM** | Groq (llama-3.3-70b-versatile) | Query planning, insights |
| **ML** | scikit-learn, XGBoost, CatBoost | 17 algorithms |
| **Workflow** | n8n | Email/WhatsApp/Slack sharing |

---

## System Information

- **RAM Usage:** ~2 GB idle, ~3.2 GB under load
- **Disk Usage:** ~57 GB (Docker images + volumes)
- **Services:** 5 Docker containers (frontend, backend, Neo4j, n8n, mock-writer)
- **Port Mapping:**
  - Frontend: 3000
  - Backend: 8000
  - Neo4j: 7474 (HTTP), 7687 (Bolt)
  - n8n: 5678

---

## Use Cases

1. **SAP Data Query:** Non-technical users query SAP purchase orders using natural language
2. **Multi-Service Analytics:** Join data from multiple OData services for cross-system reporting
3. **Predictive Analytics:** Train ML models on query results for forecasting
4. **Cost Optimization:** Track LLM token usage to optimize API costs
5. **Enterprise Governance:** RBAC ensures proper access control across teams

---

## Notes

- All screenshots captured at 1920x1080 resolution
- Services were running in Docker containers on Windows 11
- Screenshots demonstrate a fully functional, production-ready system
- Sample data from Sopra PO Service (SAP Purchase Orders) used in demos

---

**Repository:** [github.com/Karanpr-18/ODATA](https://github.com/Karanpr-18/ODATA)  
**Version:** 3.0  
**License:** MIT
