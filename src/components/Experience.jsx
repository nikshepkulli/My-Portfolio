import React, { useState } from "react";
import "../styles/Experience.css"; // Ensure path is correct

// Import company logos
import cernerLogo from '../assets/cerner.png';
import sixDLogo from '../assets/6D.png';
import starteryouLogo from '../assets/starteryou.png';
import organicmandyaLogo from '../assets/organicmandya.png';

// ── Dynamic dates ─────────────────────────────────────────────────────────────
// Each role stores a `start` (and optional `end`) as "YYYY" or "YYYY-MM". The
// display range and the duration are COMPUTED at render time, so "Present" roles
// and their year counts update themselves — nothing here to hand-edit each year.
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const parse = (s) => { const [y, m] = s.split("-").map(Number); return [y, m || 1]; };
const label = (s) => (s.includes("-") ? `${MONTHS[parse(s)[1] - 1]} ${parse(s)[0]}` : s);
const duration = (start, end) => {
  const [sy, sm] = parse(start);
  const now = new Date();
  const [ey, em] = end ? parse(end) : [now.getFullYear(), now.getMonth() + 1];
  let months = Math.max(0, (ey - sy) * 12 + (em - sm));
  const y = Math.floor(months / 12), m = months % 12;
  return [y ? `${y} yr${y > 1 ? "s" : ""}` : "", m ? `${m} mo${m > 1 ? "s" : ""}` : ""].filter(Boolean).join(" ") || "1 mo";
};
const formatRange = (start, end) => `${label(start)} – ${end ? label(end) : "Present"} · ${duration(start, end)}`;

const Experiences = [
  {
    key: 'organicmandya',
    title: 'Head of Engineering',
    company: 'Organic Mandya (Mandya Organic Foods Pvt. Ltd.), Bengaluru, India',
    start: '2026-06',
    end: null,
    logo: organicmandyaLogo,
    points: [
      "Lead engineering across the omnichannel stack of a 21-store organic retail business — a Flutter customer app, a Shopify storefront, and a React/Supabase staff analytics platform.",
      "Architected the omnichannel availability system: a per-pincode available-to-promise stock gate (FastAPI + Redis on AWS) syncing Odoo inventory to the storefront in real time — eliminating false “sold out” and overselling.",
      "Built CI/CD and deployment pipelines across the mobile app (Flutter/TestFlight), the Shopify theme (staging → publish), and the analytics dashboard — replacing manual, error-prone releases.",
      "Drove data-integrity, observability, and security hardening — automated catalog audits, AWS-based secrets management, and least-privilege access across services.",
      "Set engineering standards and process — issue-first tracking, PR review with CI gates, and reproducible infrastructure — across the team.",
    ]
  },
  {
    key: 'starteryou',
    title: 'Co-Founder & Chief Technology Officer',
    company: 'Starteryou Inc., New York, NY (Remote)',
    start: '2024-07',
    end: null,
    logo: starteryouLogo,
    points: [
      "Architected and operated a scalable multi-environment platform (dev/staging/prod) on AWS, owning the foundational infrastructure and shared tooling the entire engineering team depended on to ship reliably.",
      "Built reusable Terraform modules to provision and manage infrastructure as code, enabling consistent, repeatable environment setup and multi-cloud scalability.",
      "Established CI/CD pipelines with GitHub Actions, cutting release times by 40%; optimized delivery with multi-stage Docker builds that significantly reduced image size and deployment time.",
      "Containerized services with Docker and designed Kubernetes orchestration for auto-scaling, rollout, and self-healing of platform workloads.",
      "Hardened platform security end-to-end: HTTPS/TLS (Let's Encrypt), database access controls (IP whitelisting, SSL), and a caching + cookie/session layer on a metadata-driven framework to improve response times.",
      "Integrated Stripe with webhook-driven post-payment workflows, and built a real-time geolocation matching service — distributed, latency-sensitive systems serving production traffic.",
      "Led a cross-functional team of 10–12 (engineers, DevOps, design) with Agile sprint planning, code review, and retrospectives.",
    ]
  },
  {
    key: 'cerner',
    title: 'Software Engineer II',
    company: 'Cerner Corporation, Bengaluru, India',
    start: '2019-12',
    end: '2022-08',
    logo: cernerLogo,
    points: [
      "Developed RESTful microservices in Spring Boot for CRUD operations across a multi-module enterprise platform serving healthcare systems.",
      "Leveraged Spring Cloud for service discovery, centralized configuration, and distributed logging/tracing (Eureka, Config Server, Sleuth) — core platform/service-mesh concerns at scale.",
      "Secured API endpoints with Spring Security, integrating OAuth2 and JWT for authentication and authorization.",
      "Implemented Spring Data JPA for efficient query handling; performance-tuned services with caching and asynchronous processing to improve scalability.",
      "Built telemetry/‘Call Home’ data-collection frameworks (SQL/PL-SQL/T-SQL, PowerShell), a Java Native Interface for Linux disk metrics, and crash-dump collection — observability and reliability tooling for fleets of servers.",
      "Deployed containerized Spring Boot services to cloud (Azure, internal CCTS) with Docker; wrote JUnit/Mockito unit and integration tests to ensure code quality and reliability.",
    ]
  },
  {
    key: 'earlier',
    title: 'Earlier Engineering Roles',
    company: '6D Technology (SWE) • Probots Techno Solutions (SWE), India',
    start: '2018-06',
    end: '2019-11',
    logo: sixDLogo,
    points: [
      "Built Spring Boot services and React UI components (Magik UI), and shipped native C/C++ REST integrations and Android applications for IoT/hardware control — full-stack and systems-level breadth.",
    ]
  }
];

const Experience = () => {
  const [expandedExperiences, setExpandedExperiences] = useState([]);

  const toggleExperienceExpand = (key) => {
    setExpandedExperiences((prev) =>
      prev.includes(key)
        ? prev.filter((k) => k !== key)
        : [...prev, key]
    );
  };

  return (
    <div className="experience-section">
      {/* Rotated Title */}
      <h1 className="experience-title-large">My</h1>
      <h2 className="experience-title-small">Experience</h2>

      <div className="experience-content">
        <div className="experience-container">
          {Experiences.map((experience) => (
            <div
              key={experience.key}
              className={`experience-block ${expandedExperiences.includes(experience.key) ? 'expanded' : ''}`}
              onClick={() => toggleExperienceExpand(experience.key)}
              style={{
                cursor: 'pointer',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
              }}
            >
              <img src={experience.logo} alt={`${experience.title} Logo`} className="experience-img experience-logo-img" />
              <div className="experience-header-row">
                <div className="experience-info">
                  <h3 className="experience-title">{experience.title}</h3>
                  <p className="experience-company">{experience.company}</p>
                  <p className="experience-date">{formatRange(experience.start, experience.end)}</p>
                </div>
              </div>
              {expandedExperiences.includes(experience.key) && (
                <ul className="experience-details">
                  {experience.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
