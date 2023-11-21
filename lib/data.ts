import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaAws, FaConnectdevelop, FaDocker, FaGraduationCap, FaLaptop, FaPlane, FaPython, FaRProject, FaReact, FaSortNumericDown } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "JSS Private School",
    location: "Dubai, UAE",
    description:
      "I graduated high school in the field of Science with spl in Python & SQL",
    icon: React.createElement(FaGraduationCap),
    date: "2021",
  },
  {
    title: "Vellore Institute of technology",
    location: "Tamilnadu, India",
    description:
      "I joined undergrad B.Tech CSE with spl in Information Security",
    icon: React.createElement(FaGraduationCap),
    date: "2021 - 2025",
  },
  {
    title: "Team Captain",
    location: "Vimaanas Inc, VIT",
    description:
      "Captaining a collegiate aerodesign team which builds UAV. The team is ranked 2nd internationally in 2020 SAE Aerodesign Florida and 1st in Aerodominator 2023",
    icon: React.createElement(FaPlane),
    date: "2023 - present",
  },
  {
    title: "Technical Senior",
    location: "IEEE Computer society, VIT",
    description:
      "I have coordinated in hackathons like Hack4Impact bringing in guest speakers and sponsors which focusses on building solutions under 36hrs",
    icon: React.createElement(FaLaptop),
    date: "2023 - present",
  },
  {
    title: "DevOps Enginering Intern",
    location: "Mphasis, Remote",
    description:
      "Interning at Mphasis a service based company where my team is dealing with managed end to end CI/CD Automated deployment in client-network.",
    icon: React.createElement(FaDocker),
    date: "2023 Sept - Dec",
  },
  
] as const;

export const projectsData = [
  {
    title: "Jenkins Shared Library",
    description:
      "Reduced deployment time and increased development efficiency by enabling code reusability across teams.",
    tags: ["Jenkins", "CI/CD", "Webhooks", "GIT/github", "Dockerhub"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Cluster/Pod Monitoring",
    description:
      "Orchestrated Kubernetes deployment on Amazon EKS, monitoring with Grafana and HELM Charts",
    tags: ["Kubrnetes", "AWS EKS", "GRAFANA", "HELM", "AWS ECR"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Django on AWS Terraform",
    description:
      "Deployment of a Python Django application on AWS, utilizing Terraform to automate infrastructure provisioning",
    tags: ["Terraform", "Python", "Ansible", "django", "AWS CLI", "Docker"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Python",
  "Bash",
  "Linux",
  "RedHat",
  "JavaScript",
  "Git",
  "Docker",
  "Jenkins",
  "Ansible",
  "Kubernetes",
  "AWS Cloud",
  "Database ORM",
  "PostgreSQL",
  "DjangoREST",
  "SonarQube",
  "Terraform",
  "Prometheus",
  "Grafanna"
] as const;
