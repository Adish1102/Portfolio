export const personalInfo = {
  name: "Adish Hussain",
  title: "AI/ML & Full Stack Developer",
  subtitle: "Final year B.Tech student building intelligent systems with AI/ML and modern web technologies",
  email: "adishhussain100@gmail.com",
  phone: "+91-8595601511",
  github: "https://github.com/Adish1102",
  linkedin: "https://linkedin.com/in/adishhussain",
  bio: `I'm a final year B.Tech student in Computer Science & Engineering (AI & ML) at VIT Bhopal University. I'm passionate about building intelligent systems that bridge the gap between AI research and real-world applications.

From engineering deep packet inspection engines processing 10,000+ packets/sec to building AI-powered enterprise platforms, I thrive on solving complex technical challenges. I'm actively looking for full-time opportunities where I can contribute and grow as a developer.`,
  location: "Bhopal, India",
  education: {
    degree: "B.Tech in Computer Science & Engineering (AI & ML)",
    university: "VIT Bhopal University, Bhopal",
    period: "2023 - 2027",
    cgpa: "7.8/10",
    coursework: "DSA, Operating Systems, Computer Networks, DBMS, Machine Learning, OOP",
  },
};

export const skills = [
  { name: "Python", level: 90, category: "Programming" },
  { name: "C++", level: 75, category: "Programming" },
  { name: "SQL", level: 80, category: "Programming" },
  { name: "FastAPI", level: 85, category: "Backend" },
  { name: "Express.js", level: 75, category: "Backend" },
  { name: "Flask", level: 70, category: "Backend" },
  { name: "REST APIs", level: 85, category: "Backend" },
  { name: "TensorFlow", level: 80, category: "ML / AI" },
  { name: "Scikit-learn", level: 85, category: "ML / AI" },
  { name: "Keras", level: 75, category: "ML / AI" },
  { name: "NumPy / Pandas", level: 85, category: "ML / AI" },
  { name: "MySQL / PostgreSQL", level: 80, category: "Databases" },
  { name: "pgvector", level: 70, category: "Databases" },
  { name: "Vector Databases", level: 75, category: "Databases" },
  { name: "Git / Docker", level: 80, category: "Tools" },
  { name: "AWS", level: 65, category: "Tools" },
  { name: "Jupyter Notebook", level: 85, category: "Tools" },
  { name: "VS Code", level: 90, category: "Tools" },
];

export const projects = [
  {
    title: "Deep Packet Inspection (DPI) Engine",
    description:
      "Engineered a high-performance network traffic analyzer parsing PCAP files with deep packet inspection by decoding Ethernet, IP, and TCP/UDP headers at line rate, processing 10,000+ packets/sec. Implemented TLS SNI extraction and five-tuple flow hashing to classify encrypted application traffic from YouTube, Facebook, and Google with 85-92% classification accuracy.",
    tags: ["Python", "Networking", "TLS SNI", "PCAP", "Multi-threading"],
    github: "https://github.com/Adish1102/Deep-Packet-Inspection-System",
    live: "",
    featured: true,
    stats: "10,000+ packets/sec | 85-92% accuracy | <0.5ms latency",
  },
  {
    title: "Vector Database with RAG Pipeline",
    description:
      "Built from scratch a vector database supporting 3 ANN search algorithms — HNSW, KD-Tree, and Brute Force — across Cosine, Euclidean, and Manhattan distance metrics, indexing 10,000+ vectors with 5ms average query latency. Developed a RAG pipeline integrating nomic-embed-text (768 dims) and Llama3.2 for document ingestion, chunking, and context-aware generation.",
    tags: ["Python", "HNSW", "RAG", "Vector DB", "LLM", "Embeddings"],
    github: "https://github.com/Adish1102/VectorDB-with-RAG-Containerised",
    live: "",
    featured: true,
    stats: "3 ANN algorithms | 5ms query latency | 5x speedup with HNSW",
  },
  {
    title: "AI-Powered Enterprise OData Platform",
    description:
      "Built an AI-driven OData orchestration platform using FastAPI, Neo4j, ChromaDB, Docker, enabling natural-language querying across 200+ enterprise SAP OData entities. Designed an LLM-based reasoning layer with query-plan caching and vector memory/RAG, reducing repeated-query latency by 90% and achieving 90% query-plan accuracy.",
    tags: ["Python", "FastAPI", "Neo4j", "ChromaDB", "Docker", "LLM"],
    github: "https://github.com/Adish1102/AI-Powered-Enterprise-OData-Orchestration-Platform",
    live: "",
    featured: false,
    stats: "200+ entities | 90% accuracy | 90% latency reduction",
  },
];

export const experiences = [
  {
    role: "Software Development Intern",
    company: "SmartData Enterprises Pvt. Ltd., Mohali",
    period: "Jun 2026 - Aug 2026",
    description:
      "Built an AI-powered OData service orchestration platform enabling natural-language querying across 200+ enterprise SAP OData entities. Designed an LLM-based reasoning layer with query-plan caching and vector memory/RAG, reducing repeated-query latency by 90%. Developed a full CRUD REST API and Pytest-based automated test suite.",
    technologies: ["Python", "FastAPI", "Neo4j", "ChromaDB", "Docker", "LLM"],
  },
  {
    role: "IT Intern - Project Neosisgen",
    company: "Sun Pharmaceuticals Ltd. (RED-IT), Gurugram",
    period: "May 2026 - Jun 2026",
    description:
      "Resolved functional and build-level issues during the Neosisgen software rollout by debugging across lab systems and environments. Executed software lifecycle upgrades across 10-15 R&D lab systems, deploying updated releases and legacy versions per SO compliance standards.",
    technologies: ["SDLC", "Git", "Docker", "AWS", "Debugging"],
  },
];

export const certifications = [
  {
    name: "Deep Learning Specialization",
    issuer: "Andrew Ng - DeepLearning.AI",
    platform: "Coursera",
    year: "2024",
  },
  {
    name: "Python for Data Science",
    issuer: "Oracle Cloud Infrastructure",
    platform: "Oracle",
    year: "2025",
  },
  {
    name: "Introduction to Data Analytics",
    issuer: "Coursera",
    platform: "Coursera",
    year: "2025",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];
