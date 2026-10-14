import React from 'react';
import { FaPython, FaJava, FaDocker, FaGit, FaReact, FaAws, FaRobot, FaDatabase, FaBrain, FaChartLine } from 'react-icons/fa';
import { SiSpringboot, SiKubernetes, SiPostgresql, SiMongodb, SiMysql, SiLangchain, SiLanggraph, SiModelcontextprotocol, SiSpacy, SiPydantic, SiTensorflow, SiDotnet, SiHuggingface, SiPytorch, SiNumpy, SiPandas, SiApacheflink, SiStreamlit, SiKotlin, SiApachekafka, SiFastapi, SiScikitlearn, SiApachespark, SiGithubactions, SiJenkins, SiMlflow, SiLinux, SiPostman, SiNvidia, SiSwift } from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';
import { Shield } from 'lucide-react';

import fitforgeImg from '../assets/img/fitforge-800.webp'
import movieImg from '../assets/img/movie-800.webp'
import mseImg from '../assets/img/mse-predictor-800.webp'
import mseImg2x from '../assets/img/mse-predictor-1600.webp'
import opticalflowImg from '../assets/img/optical-flow-800.webp'
import eegImg from '../assets/img/eeg-800.webp'
import taskmngmntImg from '../assets/img/task-management-800.webp'
import taskmngmntImg2x from '../assets/img/task-management-1600.webp'
import azureImg from '../assets/img/azure-rag-800.webp'
import azureImg2x from '../assets/img/azure-rag-1600.webp'
import nlpImg2 from '../assets/img/split-rag-800.webp'
import nlpImg2x from '../assets/img/split-rag-1600.webp'
import radial from '../assets/img/kgqa-800.webp'
import radial2x from '../assets/img/kgqa-1600.webp'
import rudarenjeImg from '../assets/img/grid-monitor-800.webp'
import rudarenjeImg2x from '../assets/img/grid-monitor-1600.webp'

// Responsive source set for screenshots that have a 1600px version.
const srcSet = (small, large) => `${small} 800w, ${large} 1600w`;


export const skillsData = [
    {
        title: "Languages",
        skills: [
            { name: 'Python', icon: <FaPython size={40} /> },
            { name: 'Java', icon: <FaJava size={40} /> },
            { name: 'Kotlin', icon: <SiKotlin size={40} /> },
            { name: 'C#', icon: <SiDotnet size={40} /> },
            { name: 'Swift', icon: <SiSwift size={40} /> },
        ]
    },
    {
        title: "ML & Deep Learning",
        skills: [
            { name: 'PyTorch', icon: <SiPytorch size={40} /> },
            { name: 'TensorFlow / Keras', icon: <SiTensorflow size={40} /> },
            { name: 'Scikit-Learn', icon: <SiScikitlearn size={40} /> },
            { name: 'Hugging Face', icon: <SiHuggingface size={40} /> },
            { name: 'XGBoost', icon: <FaBrain size={40} /> },
            { name: 'NumPy', icon: <SiNumpy size={40} /> },
            { name: 'Pandas', icon: <SiPandas size={40} /> },
        ]
    },
    {
        title: "LLMs & NLP",
        skills: [
            { name: 'LangChain', icon: <SiLangchain size={40} /> },
            { name: 'LangGraph', icon: <SiLanggraph size={40} /> },
            { name: 'Strands Agents', icon: <FaRobot size={40} /> },
            { name: 'MCP (FastMCP)', icon: <SiModelcontextprotocol size={40} /> },
            { name: 'Pydantic', icon: <SiPydantic size={40} /> },
            { name: 'Sentence Transformers', icon: <SiHuggingface size={40} /> },
            { name: 'spaCy', icon: <SiSpacy size={40} /> },
        ]
    },
    {
        title: "Databases & Vector Stores",
        skills: [
            { name: 'PostgreSQL', icon: <SiPostgresql size={40} /> },
            { name: 'MySQL', icon: <SiMysql size={40} /> },
            { name: 'MongoDB', icon: <SiMongodb size={40} /> },
            { name: 'pgvector', icon: <SiPostgresql size={40} /> },
            { name: 'FAISS', icon: <FaDatabase size={40} /> },
            { name: 'ChromaDB', icon: <FaDatabase size={40} /> },
        ]
    },
    {
        title: "Cloud & Infrastructure",
        skills: [
            { name: 'AWS', icon: <FaAws size={40} /> },
            { name: 'Amazon Bedrock', icon: <FaAws size={40} /> },
            { name: 'SageMaker', icon: <FaAws size={40} /> },
            { name: 'AWS CDK', icon: <FaAws size={40} /> },
            { name: 'Azure', icon: <VscAzure size={40} /> },
            { name: 'Azure OpenAI', icon: <VscAzure size={40} /> },
        ]
    },
    {
        title: "DevOps & MLOps",
        skills: [
            { name: 'Docker', icon: <FaDocker size={40} /> },
            { name: 'Kubernetes', icon: <SiKubernetes size={40} /> },
            { name: 'GitHub Actions', icon: <SiGithubactions size={40} /> },
            { name: 'Jenkins', icon: <SiJenkins size={40} /> },
            { name: 'MLflow', icon: <SiMlflow size={40} /> },
            { name: 'Langfuse', icon: <FaChartLine size={40} /> },
        ]
    },
    {
        title: "Data Engineering",
        skills: [
            { name: 'Apache Spark', icon: <SiApachespark size={40} /> },
            { name: 'Apache Kafka', icon: <SiApachekafka size={40} /> },
            { name: 'Apache Flink', icon: <SiApacheflink size={40} /> },
        ]
    },
    {
        title: "Backend Development",
        skills: [
            { name: 'FastAPI', icon: <SiFastapi size={40} /> },
            { name: 'Spring Boot', icon: <SiSpringboot size={40} /> },
            { name: 'ASP .NET Core', icon: <SiDotnet size={40} /> },
        ]
    },
    {
        title: "Tools",
        skills: [
            { name: 'Git', icon: <FaGit size={40} /> },
            { name: 'Linux', icon: <SiLinux size={40} /> },
            { name: 'Streamlit', icon: <SiStreamlit size={40} /> },
            { name: 'React', icon: <FaReact size={40} /> },
            { name: 'Postman', icon: <SiPostman size={40} /> },
            { name: 'CUDA', icon: <SiNvidia size={40} /> },
        ]
    }
];

export const projectsData = [
    {
        title: 'Multi-tier Router – A Compliance-Aware Cost Optimizer for LLMs',
        description: 'A multi-tier LLM query router on AWS that sends each query to a deterministic, fast, strong or isolated private tier, using Titan embeddings with S3 Vectors for route matching. The private tier for sensitive queries runs on ECS Fargate in an isolated subnet with no internet route (local embeddings, FAISS retrieval and a local Gemma model, reachable only through VPC endpoints), while the cloud tiers share RAG over a Bedrock Knowledge Base. An evaluation pipeline with Step Functions (Distributed Map) and Lambda benchmarks queries across tiers and uses an LLM judge to find the best tier per query.',
        tags: ['AWS', 'Amazon Bedrock', 'ECS Fargate', 'S3 Vectors', 'Step Functions', 'Lambda', 'FAISS', 'Gemma', 'LLM-as-Judge'],
        category: ['AI / Machine Learning', 'NLP & LLMs', 'Cloud & DevOps']
    },
    {
        title: 'Cross-Check – Multi-Agent Research Verifier',
        description: 'A multi-agent system that verifies technical claims by cross-checking a paper knowledge base against live web search, with a lead agent drafting an evidence-backed verdict. A critic agent rejects unsupported claims and sends drafts back for revision, with a debate round whenever sources disagree. The RAG pipeline was evaluated on retrieval recall, showing that grounding reduces hallucinations. Includes persistent memory of past verdicts, full observability with Langfuse tracing and a live UI that streams each agent\'s progress.',
        tags: ['Multi-Agent Systems', 'RAG', 'Web Search', 'Langfuse', 'LLM Evaluation'],
        category: ['AI / Machine Learning', 'NLP & LLMs']
    },
    {
        title: 'Multi-Topic LLM Fine-Tuning with LoRA',
        description: 'Implemented SVD-based low-rank analysis and a LoRALinear layer from scratch, then fine-tuned Qwen2.5-1.5B-Instruct on GSM8K with Unsloth, with a rank ablation (r = 4–32), baselines, error analysis, an LLM-as-judge with bias checks and catastrophic-forgetting checks. Trained a single LoRA jointly on 4 topics (math, code, logic, biology; 22.4k examples) on Qwen3-0.6B to test whether joint training plus Model Soup can compete with per-topic specialists: code rose from 0% to 52% exact match, logic +6–8 and biology +7 points, at a cost of ~9–12 points on math (negative transfer). Restructuring gradient accumulation cut each run from ~4 hours to ~1 hour.',
        tags: ['LoRA / PEFT', 'Qwen2.5', 'Qwen3', 'Unsloth', 'GSM8K', 'Model Soup', 'LLM-as-Judge', 'PyTorch'],
        category: ['AI / Machine Learning', 'NLP & LLMs']
    },
    {
        title: 'CogniViz – Multi-Hop Reasoning over Knowledge Graphs',
        description: 'A platform that makes multi-hop reasoning over RDF/OWL knowledge graphs visible. An LLM agent traverses the graph hop by hop and explains each path with a faithfulness score. Users can ask questions in plain language and let the AI resolve the entities via entity linking, search the graph with LLM-generated SPARQL, and find shortest, all or weighted paths. An evaluation harness compares the agent against a human, a weighted-search algorithm and an LLM-only baseline.',
        // TODO: add link once the repo (stefantagarski/cogniviz) is public.
        tags: ['Java 21', 'Spring Boot', 'Spring AI', 'Apache Jena', 'SPARQL', 'LLM Agents', 'AWS Bedrock', 'React', 'D3.js'],
        image: radial,
        imageSrcSet: srcSet(radial, radial2x),
        category: ['AI / Machine Learning', 'NLP & LLMs', 'Web Development']
    },
     {  
        title: 'Hybrid Privacy-Preserving RAG – Secure Edge-Cloud AI System',
        description: 'Hybrid RAG system that enables the secure use of Cloud-based LLMs without exposing sensitive data by utilizing a Split Inference architecture, the system ensures that personally identifiable information (PII) is masked locally before being sent to the cloud for processing.',
        link: 'https://github.com/davidhristov59/Hybrid-Privacy-Preserving-RAG-via-Edge-Cloud-Split-Inference',
        image: nlpImg2,
        imageSrcSet: srcSet(nlpImg2, nlpImg2x),
        tags: ['Python', 'NLP', 'Spacy NER', 'FAISS', 'Hybrid RAG', 'Edge Computing' ,'Split-Inference Architecture', 'PIII Masking', 'LangChain', 'FastAPI'],
        category: ['AI / Machine Learning', 'NLP & LLMs']
    },
    {
        title: 'Real-Time Cascading Failure Detection and Prevention System for Smart Grids',
        description: 'An early warning system that detects cascading failures in smart grid networks using graph-based analysis and web sockets, Apache Flink stream processing, and real-time simulation.',
        link: 'https://github.com/davidhristov59/Real-Time-Cascading-Failure-Detection-System',
        image: rudarenjeImg,
        imageSrcSet: srcSet(rudarenjeImg, rudarenjeImg2x),
        tags: ['Apache Flink', 'Apache Spark', 'Apache Kafka', 'Graph Analysis', 'Docker', 'FastAPI', 'Web Sockets'],
        category: ['Distributed Systems & Real-Time Data']
    },
    {
        title: 'Azure AI Assistant',
        description: "Azure-RAG-System is a .NET 8 web application that implements a Retrieval-Augmented Generation (RAG) architecture. It leverages Azure's robust AI ecosystem to provide intelligent, context-aware responses to user queries.",
        link: 'https://github.com/davidhristov59/Azure-RAG-System',
        image: azureImg,
        imageSrcSet: srcSet(azureImg, azureImg2x),
        tags: ['ASP.NET Core', 'Azure App Services', 'Cosmos DB', 'Azure OpenAI', 'Azure Cognitive Search', 'Azure Blob Storage', 'Github Actions'],
        website: 'https://azure-rag-platform-gudwa2bjhehme5hf.italynorth-01.azurewebsites.net',
        category: ['AI / Machine Learning', 'NLP & LLMs', 'Cloud & DevOps']
    },
    {
        title: 'Skillio AI – Recruitment System for Public Administration',
        description: 'Recruitment platform that automatically screens and ranks CVs for public-sector roles. A FastAPI backend extracts text from PDF/DOCX uploads, uses gpt-4o-mini to pull structured skills, experience and education, and embeds CVs and job postings with text-embedding-3-small into PostgreSQL with pgvector, where cosine similarity gives each candidate a match score and a recommended/rejected flag. HR admins review ranked candidates in a React + TypeScript dashboard secured with JWT, bcrypt and token blacklisting, all orchestrated with Docker Compose.',
        // TODO: add link once the repo is public (currently private).
        tags: ['FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'pgvector', 'OpenAI', 'Embeddings', 'JWT', 'Docker'],
        category: ['AI / Machine Learning', 'NLP & LLMs', 'Web Development']
    },
    {
        title: 'MCP Semantic Search on Bedrock AgentCore',
        description: 'FastMCP server for semantic search over 10 foundational ML papers (Transformer, ResNet, BERT, Adam and others). Ingestion chunks PDFs from S3, embeds them with Amazon Titan Embed v2 (1024 dimensions) and stores them in Amazon S3 Vectors (cosine distance). The server runs as an ARM64 multi-stage Docker image in ECR, deployed with AWS CDK (TypeScript) to Bedrock AgentCore Runtime, with a least-privilege IAM role scoped to one model and one vector index, IAM/SigV4 authentication and an isolated microVM per session. For every test query the top result came from the correct paper (e.g. the dropout query at cosine distance 0.20).',
        tags: ['FastMCP', 'Amazon Bedrock AgentCore', 'Titan Embeddings', 'S3 Vectors', 'AWS CDK', 'ECR', 'Docker', 'IAM'],
        category: ['AI / Machine Learning', 'NLP & LLMs', 'Cloud & DevOps']
    },
    {
        title: 'NLP Support Triage Assistant (Banking77)',
        description: 'Support-routing system that sorts banking customer messages into 6 queues (grouped from 77 intents), comparing TF-IDF + Logistic Regression (trained on 10.4k examples) against a quantized zero-shot BART-Large-MNLI. TF-IDF reached 91.2% validation accuracy (0.917 macro-F1) at under 1 ms latency vs. 48% zero-shot, showing the value of in-domain training. Guardrails flag messages for human review on low confidence, model disagreement or high-risk words like "fraud", and predictions are explained through TF-IDF word coefficients.',
        tags: ['Scikit-Learn', 'TF-IDF', 'BART-MNLI', 'Zero-Shot', 'Quantization', 'Guardrails'],
        category: ['AI / Machine Learning', 'NLP & LLMs']
    },
    {
        title: 'CIFAR-100 Classification System',
        description: 'Production-style multi-container app serving CNN and ResNet models trained on CIFAR-100: FastAPI, Streamlit, MongoDB (async motor) and MinIO, with multi-stage Docker builds and health-checked orchestration. Supports single and batch/ZIP inference, side-by-side model comparison, thread-safe Grad-CAM heatmaps, and a human-in-the-loop feedback loop with per-model accuracy tracking and CSV export for retraining. Models load once at startup and inference runs in a thread pool to keep the API responsive.',
        tags: ['FastAPI', 'Streamlit', 'MongoDB', 'MinIO', 'Docker', 'Grad-CAM', 'PyTorch'],
        category: ['AI / Machine Learning', 'Computer Vision', 'Cloud & DevOps']
    },
    {
        title: 'LLM Fundamentals & Semantic Search Lab',
        description: 'Full-stack interactive lab on the building blocks of LLMs: tokenizer comparison (WordPiece vs. BPE), Word2Vec skip-gram with negative sampling from scratch in NumPy, static vs. contextual embeddings, and GPT-2 decoding strategies with attention heatmaps. Fine-tuned DistilBERT for IMDB sentiment (~92% vs. 88% for a TF-IDF baseline) and built a FAISS + MiniLM semantic search engine over AG News, extended into an end-to-end RAG pipeline.',
        tags: ['PyTorch', 'Hugging Face', 'DistilBERT', 'Word2Vec', 'FAISS', 'MiniLM', 'RAG'],
        category: ['AI / Machine Learning', 'NLP & LLMs']
    },
    {
        title: 'Prompt Engineering Benchmark',
        description: 'Reproducible benchmark of zero-shot, few-shot, chain-of-thought and self-consistency prompting on 200 GSM8K and 200 AG News examples, comparing Llama 3.1 8B vs. 70B on accuracy vs. token cost. Also compared naive JSON, a from-scratch retry loop with error feedback, and Instructor + Pydantic for structured extraction, plus human-written vs. Auto-CoT prompts in a team mini-project. Results are served from FastAPI to a Streamlit dashboard.',
        tags: ['Llama 3.1', 'LiteLLM', 'Groq', 'OpenRouter', 'Instructor', 'Pydantic', 'FastAPI', 'Streamlit'],
        category: ['AI / Machine Learning', 'NLP & LLMs']
    },
    {
        title: 'Plain CNN vs. ResNet on CIFAR-100',
        description: 'Paired study isolating the effect of residual connections: trained a 32-layer VGG-style plain CNN (~470k parameters) from scratch on CIFAR-100 in PyTorch, against a teammate\'s same-size ResNet-32. Three MLflow-tracked experiments (baseline 58.4%, AutoAugment 56.2%, cosine-annealing LR 60.9%) showed how vanishing gradients limit deep plain networks.',
        tags: ['PyTorch', 'CNNs', 'AutoAugment', 'MLflow'],
        category: ['AI / Machine Learning', 'Computer Vision']
    },
    {
        title: 'Human Activity Recognition: Classical ML Pipeline',
        description: 'End-to-end classical ML pipeline classifying 6 human activities from 561 smartphone-sensor features, organized into reusable modules for loading, preprocessing, visualization, analysis and training. Implemented Gaussian Naive Bayes from scratch with log-likelihoods (checked against scikit-learn) and compared 8 models on an MLflow leaderboard; LinearSVC won at ~96% accuracy, and PCA/t-SNE error analysis traced most mistakes to Sitting vs. Standing.',
        tags: ['Scikit-Learn', 'XGBoost', 'MLflow', 'PCA', 't-SNE'],
        category: ['AI / Machine Learning']
    },
     {
        title: 'Task Management System Microservice',
        description: 'A distributed Task Management System built with Domain-Driven Design (DDD) and CQRS/Event Sourcing principles. Features a microservices architecture using Spring Boot (Kotlin/Java), Axon Framework, and Kafka for event-driven communication, with Keycloak for identity management and Consul for service discovery.',
        link: 'https://github.com/davidhristov59/task-management',
        tags: ['Kotlin', 'Spring Boot', 'Axon (CQRS/ES)', 'Kafka', 'Consul', 'React', 'Keycloak', 'Docker'],
        image: taskmngmntImg,
        imageSrcSet: srcSet(taskmngmntImg, taskmngmntImg2x),
        category: ['Web Development', 'Cloud & DevOps', 'Distributed Systems & Real-Time Data']
    },
    {
        title: 'SplitEase – AI Expense Splitting for iOS',
        description: 'iOS app for splitting group expenses, built in SwiftUI with SwiftData and MVVM as a team of two. Expenses can be split equally, by exact amounts or by percentage, and group debts are simplified into the fewest settlement payments with a greedy creditor–debtor matching algorithm. Scan-to-split reads receipts with Apple Vision OCR and uses an OpenAI model to extract line items and propose a split; expenses can be pinned on a MapKit map, with spending statistics and XCTest suites for the core logic.',
        // TODO: add link once the repo is public (currently private).
        tags: ['Swift', 'SwiftUI', 'SwiftData', 'MVVM', 'Vision OCR', 'OpenAI API', 'MapKit', 'XCTest'],
        category: ['Mobile Development', 'AI / Machine Learning']
    },
    {
        title: 'PathFinder – GPS Activity Tracker',
        description: 'React Native (Expo) app for recording GPS activities, with foreground and background location tracking via expo-location and expo-task-manager, live route maps with react-native-maps, and Haversine-based distance and speed stats. Activities are stored offline on-device in SQLite and can be reviewed in a history list and per-activity detail screens; state is managed with Zustand and the UI is styled with NativeWind.',
        link: 'https://github.com/davidhristov59/pathfinder',
        tags: ['React Native', 'Expo', 'TypeScript', 'Zustand', 'SQLite', 'react-native-maps', 'NativeWind'],
        category: ['Mobile Development']
    },
    {
        title: 'EEG Seizure Prediction using Machine Learning & Deep Learning',
        description: 'Developed a seizure prediction framework combining advanced feature engineering (time, frequency, nonlinear) with Machine Learning classifiers and a Transformer-based Deep Learning architecture for end-to-end sequence learning on multi-channel EEG data.',
        link: 'https://github.com/davidhristov59/eeg-epilepsy-seizure-classification',
        tags: ['Python', 'PyTorch', 'Transformers', 'PyEEG', 'MNE', 'Signal Processing', 'Scikit-Learn'],
        image: eegImg,
        category: ['AI / Machine Learning']
    },
    {
        title: 'Cloud-Native Movie Management System with full CI/CD workflow',
        description: 'This project demonstrates modern containerization, orchestration, CI/CD pipelines, and cloud deployment practices through a practical movie exploration and management system.',
        link: 'https://github.com/davidhristov59/Movie-Management-System',
        tags: ['Kubernetes (k3d)','AWS EC2', 'MongoDB', 'Flask', 'Streamlit', 'Docker', 'GitHub Actions'],
        image: movieImg,
        category: ['Cloud & DevOps']
    },
    {
        title: 'Macedonian Stock Exchange Predictor',
        description: 'A web-based stock price prediction system for the Macedonian Stock Exchange. Utilizes technical and sentiment analysis to forecast market trends. Built with a modular software architecture and deployed on Azure.',
        link: 'https://github.com/davidhristov59/Macedonian-Stock-Exchange-Prediction',
        image: mseImg,
        imageSrcSet: srcSet(mseImg, mseImg2x),
        tags: ['Python', 'Flask', 'Docker', 'Azure Cloud', 'BeautifulSoup', 'Scikit-Learn'],
        website: 'https://msepredictions-cqb0d5b7e4cyc4ar.westeurope-01.azurewebsites.net',
        category: ['Web Development', 'AI / Machine Learning']
    },
    {
        title: 'FitForge',
        description: 'FitForge is a ready-to-use application for fitness and nutrition tracking, designed to generate personalized workout and meal plans based on user preferences and goals.',
        link: 'https://github.com/davidhristov59/FitForge',
        image: fitforgeImg,
        tags: ['C#', 'ASP.NET Core', 'Entity Framework', 'SQL Server', 'Bootstrap', 'MVC'],
        category: ['Web Development']
    },
    {
        title: 'Optical Flow Motion Tracking',
        description: 'Implemented both Sparse (Lucas-Kanade) and Dense (Gunner Farneback) Optical Flow algorithms in OpenCV for real-time motion tracking and velocity estimation in video sequences.',
        link: 'https://github.com/davidhristov59/Calculating-Optical-Flow',
        image: opticalflowImg,
        tags: ['Python', 'OpenCV', 'Computer Vision', 'NumPy', 'Image Processing'],
        category: ['Computer Vision']
    }
];

export const experienceData = [
    {
        title: 'Machine Learning Intern',
        company: 'Loka',
        date: 'May 2026 – September 2026',
        bullets: [
            'Completed a comprehensive 4-month program building end-to-end ML systems and cutting-edge LLM applications, including transformer implementation, supervised fine-tuning, RL and multi-agent RAG systems.',
            'Contributed to a client production project using multimodal LLMs on AWS Bedrock, benchmarked models on accuracy, reliability and cost.',
            'Gained hands-on MLOps experience with AWS services (Lambda, S3, EC2, Bedrock, IAM) and Infrastructure as Code (AWS CDK) under mentorship of seasoned DevOps engineers.',
        ],
    },
    {
        title: 'Software Engineering Intern',
        company: 'Inteligenta',
        date: 'April 2025 – August 2025',
        bullets: [
            'Contributed to enterprise-scale system development within an agile environment, participating in sprint planning, daily stand-ups and retrospectives.',
            'Developed full-stack features and integration layers, improving service communication and data workflows through clean design practices and SOLID principles.',
            'Refactored legacy components to enhance reliability, maintainability and system performance.',
        ],
    },
];

export const educationData = [
    {
        institution: 'Faculty of Computer Science and Engineering (FCSE)',
        university: 'Ss. Cyril and Methodius University in Skopje',
        degree: 'MSc in Data Science in Computer Science and Engineering',
        date: 'November 2026 – Present',
        location: 'Skopje, Macedonia',
        status: 'Ongoing',
    },
    {
        institution: 'Faculty of Computer Science and Engineering (FCSE)',
        university: 'Ss. Cyril and Methodius University in Skopje',
        degree: 'BSc in Computer Science and Engineering',
        date: 'October 2022 – October 2026',
        location: 'Skopje, Macedonia',
        status: 'Completed',
        thesis: 'Comparative Analysis over Knowledge Graphs Based on Multi-Hop Reasoning through Path Discovery and Evaluation',
        thesisGrade: '10/10',
        coursework: [
            'Machine Learning',
            'Natural Language Processing',
            'Intro to Data Science',
            'Mining Massive Datasets',
            'Web-Based Systems',
            'Service-Oriented Architectures',
            'DevOps (CI/CD)',
        ]
    },
];

export const publicationsData = [
    {
        title: 'VisualKGQA: Multi-Hop Reasoning Path Visualization',
        authors: ['D. Hristov', 'S. Tagarski', 'D. Sasanski', 'R. Stojanov'],
        venue: 'International Conference on Informatics and Information Technologies (CIIT 2026)',
        note: 'Selected for IEEE Xplore publication (approx. 30% of accepted papers), to appear.',
        status: 'Accepted',
    },
    {
        title: 'Real-Time Cascading Failure Detection in Smart Grid Networks Using Adaptive Stream Processing',
        authors: ['S. Tagarski', 'D. Hristov', 'M. Poposki', 'S. Andonov', 'G. Madjarov'],
        venue: 'TELFOR 2026, Belgrade',
        status: 'Under review',
    },
];

export const openSourceData = [
    {
        project: 'nf-core/proteinfold',
        title: 'DockQ v2 integration',
        context: 'Built at the nf-core Hackathon, March 2026',
        description: 'Team contribution to nf-core/proteinfold, a Nextflow pipeline for protein structure prediction.',
        bullets: [
            'Built a Nextflow DSL2 module and subworkflow that scores predicted protein complexes against reference structures with DockQ v2, containerised with Docker.',
            'Added optional reference-structure input to the pipeline\u2019s samplesheet schema, so the top-ranked model from any of 8 prediction modes is scored automatically.',
            'Fixed Docker runtime issues (deprecated NVIDIA library, cache/permission errors) that kept the Boltz-2 co-folding module from running.',
        ],
        tags: ['Nextflow', 'Docker', 'Python', 'Biopython'],
        // TODO: replace with the PR link once available.
        link: 'https://github.com/nf-core/proteinfold',
    },
];

export const certificationsData = [
    {
        name: 'Latency-limited processing of streaming data with Apache Flink',
        icon: <SiApacheflink size={24} />
    },
    {
        name: 'Deep Learning with TensorFlow & PyTorch',
        icon: <SiTensorflow size={24} />
    },
    {
        name: 'Natural Language Processing',
        icon: <SiHuggingface size={24} />
    },
    {
        name: 'Day After Production - Cybersecurity and Exploiting',
        icon: <Shield size={24} />
    },
];

export const interestsData = [
    'Machine Learning & Deep Learning',
    'LLMs & Agentic AI Systems',
    'Natural Language Processing',
    'Knowledge Graphs & Semantic Web',
    'Graph Theory',
    'Big Data & Stream Processing',
    'MLOps & Cloud-Native Architectures',
    'Microservices & Event-Driven Systems'
];

export const languagesData = [
    { name: 'Macedonian', level: 'Native' },
    { name: 'English', level: 'Fluent' },
];

export const navLinks = [
    { href: '#experience', text: 'Experience' },
    { href: '#education', text: 'Education' },
    { href: '#publications', text: 'Publications' },
    { href: '#projects', text: 'Projects' },
    { href: '#open-source', text: 'Open Source' },
    { href: '#skills', text: 'Skills' },
    { href: '#interests', text: 'Interests' },
    { href: '#certifications', text: 'Certifications' },
    { href: '#contact', text: 'Contact' },
];
