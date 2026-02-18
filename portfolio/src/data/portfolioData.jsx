import React from 'react';
import { FaPython, FaJava, FaDocker, FaGit, FaReact, FaAws, FaHtml5, FaToolbox } from 'react-icons/fa';
import { SiSpringboot, SiKubernetes, SiPostgresql, SiMongodb,SiLangchain, SiTensorflow, SiDotnet,SiHuggingface, SiTailwindcss, SiPytorch, SiApacheflink, SiDjango, SiFlask, SiStreamlit, SiKotlin, SiApachekafka, SiFastapi, SiScikitlearn, SiApachespark, SiGithubactions } from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';
import { Shield } from 'lucide-react';

import fitforgeImg from '../assets/img/fitforge.png'
import movieImg from '../assets/img/movie.png'
import mseImg from '../assets/img/mse.png'
import opticalflowImg from '../assets/img/opticalflow.png'
import eegImg from '../assets/img/eeg.png'
import taskmngmntImg from '../assets/img/taskmngmnt.png'
import azureImg from '../assets/img/azure1.png'
import nlpImg2 from '../assets/img/nlp2.png'
import radial from '../assets/img/radial.png'
import rudarenjeImg from '../assets/img/rudarenje1.png'
 

export const skillsData = [
    {
        title: "Languages",
        skills: [
            { name: 'Java', icon: <FaJava size={40} /> },
            { name: 'Python', icon: <FaPython size={40} /> },
            { name: 'C#', icon: <SiDotnet size={40} /> },
            { name: 'Kotlin', icon: <SiKotlin size={40} /> },
        ]
    },
    {
        title: "Backend & Databases",
        skills: [
            { name: 'Spring Boot', icon: <SiSpringboot size={40} /> },
            { name: 'ASP .NET Core', icon: <SiDotnet size={40} /> },
            { name: 'FastAPI', icon: <SiFastapi size={40} /> },
            { name: 'Flask', icon: <SiFlask size={40} /> },
            { name: 'Django', icon: <SiDjango size={40} /> },
            { name: 'PostgreSQL', icon: <SiPostgresql size={40} /> },
            { name: 'MongoDB', icon: <SiMongodb size={40} /> },
        ]
    },
    {
        title: "Cloud & DevOps",
        skills: [
            { name: 'Docker', icon: <FaDocker size={40} /> },
            { name: 'Kubernetes', icon: <SiKubernetes size={40} /> },
            { name: 'AWS', icon: <FaAws size={40} /> },
            { name: 'Azure', icon: <VscAzure size={40} /> },
            { name: 'Git', icon: <FaGit size={40} /> },
            { name: 'GitHub Actions', icon: <SiGithubactions size={40} /> },
            { name: 'Apache Kafka', icon: <SiApachekafka size={40} /> },
            { name: 'Apache Spark', icon: <SiApachespark size={40} /> },
            { name: 'Apache Flink', icon: <SiApacheflink size={40} /> },
        ]
    },
    {
        title: "AI / ML",
        skills: [
            { name: 'LangChain', icon: <SiLangchain size={40} /> },
            { name: 'TensorFlow', icon: <SiTensorflow size={40} /> },
            { name: 'PyTorch', icon: <SiPytorch size={40} /> },
            { name: 'PyTorch Geometric', icon: <SiPytorch size={40} /> },
            { name: 'Scikit-Learn', icon: <SiScikitlearn size={40} /> },
        ]
    },
    {
        title: "Frontend",
        skills: [
            { name: 'React', icon: <FaReact size={40}/>},
            { name: 'Tailwind', icon: <SiTailwindcss size={40} /> },
            { name: 'HTML/CSS', icon: <FaHtml5 size={40} /> },
            { name: 'Streamlit', icon: <SiStreamlit size={40} /> },
        ]
    }
];

export const projectsData = [
    {
        title: 'Visual QA for Multi-hop in Knowledge Graphs',
        description: "Designed a full-stack system for large-scale knowledge graph exploration where it's used Visual Question Answering using LLM-based entity linking and SPARQL query generation. Developed RESTful APIs for ontology ingestion (RDF/OWL, Turtle, JSON-LD) and created interactive D3.js visualizations with aging-based node shading and reasoning path highlighting.",
        link: 'https://github.com/davidhristov59/visualKGQA',
        tags: ['Semantic Web', 'RDF/OWL', 'Java', 'Spring Boot', 'Apache Jena', 'React', 'D3.js'],
        image: radial,
        category: ['AI / Machine Learning', 'Web Development']
    },
     {  
        title: 'Hybrid Privacy-Preserving RAG – Secure Edge-Cloud AI System',
        description: 'Hybrid RAG system that enables the secure use of Cloud-based LLMs without exposing sensitive data by utilizing a Split Inference architecture, the system ensures that personally identifiable information (PII) is masked locally before being sent to the cloud for processing.',
        link: 'https://github.com/davidhristov59/Hybrid-Privacy-Preserving-RAG-via-Edge-Cloud-Split-Inference',
        image: nlpImg2,
        tags: ['Python', 'NLP', 'Spacy NER', 'FAISS', 'Hybrid RAG', 'Edge Computing' ,'Split-Inference Architecture', 'PIII Masking', 'LangChain', 'FastAPI'],
        category: ['AI / Machine Learning']
    },
    {
        title: 'Real-Time Cascading Failure Detection and Prevention System for Smart Grids',
        description: 'An early warning system that detects cascading failures in smart grid networks using graph-based analysis, Apache Flink stream processing, and real-time simulation.',
        link: 'https://github.com/davidhristov59/Real-Time-Cascading-Failure-Detection-System',
        image: rudarenjeImg,
        tags: ['Apache Flink', 'Apache Spark', 'Apache Kafka', 'Graph Analysis', 'Docker', 'FastAPI'],
        category: ['Distributed Systems & Real-Time Data']
    },
    {
        title: 'Azure AI Assistant',
        description: "Azure-RAG-System is a .NET 8 web application that implements a Retrieval-Augmented Generation (RAG) architecture. It leverages Azure's robust AI ecosystem to provide intelligent, context-aware responses to user queries.",
        link: 'https://github.com/davidhristov59/Azure-RAG-System',
        image: azureImg,
        tags: ['ASP.NET Core', 'Azure App Services', 'Cosmos DB', 'Azure OpenAI', 'Azure Cognitive Search', 'Azure Blob Storage', 'Github Actions'],
        website: 'https://azure-rag-platform-gudwa2bjhehme5hf.italynorth-01.azurewebsites.net',
        category: ['AI / Machine Learning', 'Cloud & DevOps']
    },
     {
        title: 'Task Management System Microservice',
        description: 'A distributed Task Management System built with Domain-Driven Design (DDD) and CQRS/Event Sourcing principles. Features a microservices architecture using Spring Boot (Kotlin/Java), Axon Framework, and Kafka for event-driven communication, with Keycloak for identity management and Consul for service discovery.',
        link: 'https://github.com/davidhristov59/task-management',
        tags: ['Kotlin', 'Spring Boot', 'Axon (CQRS/ES)', 'Kafka', 'Consul', 'React', 'Keycloak', 'Docker'],
        image: taskmngmntImg,
        category: ['Web Development', 'Cloud & DevOps', 'Distributed Systems & Real-Time Data']
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
        title: 'Software Engineering Intern',
        company: 'Inteligenta',
        date: 'April 2025 – August 2025',
        description:
            'Contributed to enterprise-scale system development with modernized architecture and clean design practices. Worked across frontend, backend, and integration layers, improving service communication and data workflows. Refactored legacy components to enhance reliability, maintainability, and system performance.',
    },
];

export const educationData = [
    {
        institution: 'Faculty of Computer Science and Engineering (FCSE)',
        degree: 'BSc in Software Engineering',
        date: 'Sept 2022 – Summer 2026',
        location: 'Skopje, Macedonia',
        status: 'Ongoing',
        coursework: [
            'Natural Language Processing',
            'Mining Massive Datasets',
            'Service-Oriented Architectures',
            'Web-Based Systems',
            'Data Science',
            'Artificial Intelligence',
            'DevOps (CI/CD)',
            'Databases',
            'Advanced Programming',
            'Probability & Statistics'
        ]
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
    'Knowledge Graphs & Semantic Web',
    'Machine Learning',
    'Artificial Inteligence',
    'Graph Theory',
    'Big Data',
    'Cloud-Native Architectures & DevOps',
    'Microservices & Event-Driven Systems'
];

export const navLinks = [
    { href: '#experience', text: 'Experience' },
    { href: '#projects', text: 'Projects' },
    { href: '#skills', text: 'Skills' },
    { href: '#education', text: 'Education' },
    { href: '#interests', text: 'Interests' },
    { href: '#certifications', text: 'Certifications' },
    { href: '#contact', text: 'Contact' },
];
