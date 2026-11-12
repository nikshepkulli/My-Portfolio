// All page copy lives here so it can be edited without touching layout code.

export const person = {
  name: 'Nikshep Kulli',
  role: 'AI Engineer and engineering leader in Bengaluru',
  pitch:
    'I build AI and cloud systems that people actually use, and lead the teams that ship them: Java and Spring Boot microservices, React and Node.js, AWS and Azure, and production RAG.',
  status: 'Open to roles in Bengaluru, joining immediately',
  email: 'nikshepkulli9@gmail.com',
  linkedin: 'https://www.linkedin.com/in/nikshepkulli/',
  github: 'https://github.com/nikshepkulli',
  resume: '/assets/resume/nikshep-resume.pdf',
};

// Dates are "YYYY-MM"; end: null means current.
export const experience = [
  {
    title: 'AI Engineer',
    org: 'Independent',
    place: 'Bengaluru, remote',
    start: '2026-11',
    end: null,
    points: [
      'Building production-style AI and data engineering projects with AI coding agents, under full code review and CI gates.',
      'Claims Lakehouse Analytics: Spark and Delta Lake pipeline, dbt, Great Expectations, Airflow and Terraform for AWS, Azure and Snowflake, with 23 CI checks on every pull request.',
    ],
  },
  {
    title: 'Head of Engineering',
    org: 'Organic Mandya',
    place: 'Bengaluru, remote',
    start: '2026-06',
    end: '2026-09',
    points: [
      'Led engineering for a farm-to-consumer food brand, owning the Suggi mobile app and the e-commerce platform.',
      'Grew a fully remote engineering team to 6 engineers.',
      'Set up automated CI/CD for the Android and iOS apps.',
      'Defined the migration strategy from Shopify to a custom commerce platform.',
      'Created a Forward Deployed Engineer role linking engineering with farmer cooperatives and retail partners.',
    ],
  },
  {
    title: 'Co-founder and CTO',
    org: 'Starteryou',
    place: 'New York, remote',
    start: '2024-07',
    end: '2026-11',
    points: [
      'Took a two-sided student and employer platform from zero to 15,000+ users and 342 employer partners, supporting a $1.2M pre-seed raise.',
      'Built and shipped a production RAG assistant (Node.js, Hugging Face LLMs): ingestion, chunking, retrieval and grounding rules, evaluated on the first 100 real user queries.',
      'Built GitHub Actions CI/CD across environments, cutting release time by 40%, with Terraform on AWS and Azure and multi-stage Docker builds.',
      'Led a 12-person team of engineers, interns, DevOps and design with Agile sprints and code-review standards.',
      'Integrated Stripe with webhook-driven payment workflows and built a real-time geolocation matching service.',
    ],
  },
  {
    title: 'Software Engineer II',
    org: 'Cerner (Oracle Health)',
    place: 'Bengaluru',
    start: '2019-12',
    end: '2022-08',
    points: [
      'Built Spring Boot REST microservices with Spring Cloud (Eureka, Config Server, Sleuth), secured with Spring Security, OAuth2 and JWT.',
      'Improved data ingestion frameworks feeding the Vertica analytics warehouse, and tuned services with caching and asynchronous processing.',
      'Deployed containerised services to Azure and internal cloud, with JUnit and Mockito test suites.',
      'Won four internal innovation awards, including AI-based optimisation of ventilator usage.',
    ],
  },
  {
    title: 'Software Engineer',
    org: '6D Technologies and Probots Techno Solutions',
    place: 'Bengaluru',
    start: '2018-06',
    end: '2019-11',
    points: [
      'Built Spring Boot services and React components, plus native C/C++ REST integrations and Android apps for IoT and medical-device control.',
    ],
  },
];

export const projects = [
  {
    name: 'Claims Lakehouse Analytics',
    year: '2026',
    summary:
      'A health-insurance claims data platform that keeps a raw copy of every feed, quarantines bad records with a stated reason, and reconciles row counts so nothing silently disappears. Member and provider ids are tokenised; all data is synthetic.',
    stack: 'Spark, Delta Lake, dbt, Great Expectations, Airflow, Terraform, Snowflake',
    links: [
      { label: 'Live dashboard', href: 'https://nikshepkulli.github.io/claims-lakehouse/' },
      { label: 'Code', href: 'https://github.com/nikshepkulli/claims-lakehouse' },
    ],
  },
  {
    name: 'Starteryou RAG assistant',
    year: '2024–2026',
    summary:
      'A production assistant that answers questions from the platform’s own job and help content, says “I don’t know” when the source doesn’t cover it, and was tuned on the first 100 real user questions.',
    stack: 'Node.js, Express, Hugging Face LLMs, vector search, Docker, Terraform on AWS',
    links: [],
  },
  {
    name: 'Hexapod robot',
    year: '2018–2019',
    summary:
      'A six-legged robot built from scratch, with servo control, inverse kinematics for smooth gaits, and sensor feedback for obstacle avoidance.',
    stack: 'Embedded C, Arduino, PCB design',
    links: [{ label: 'Photos', href: 'https://photos.app.goo.gl/QdTQ17xtBoWvkacp9' }],
  },
];

export const skills = [
  { group: 'AI', items: 'RAG, LLM agents, Hugging Face, prompt engineering, Amazon SageMaker, NLP (spaCy, NLTK, scikit-learn)' },
  { group: 'Backend', items: 'Java, Spring Boot, Spring Cloud, Python, Node.js, Django, REST APIs, Kafka' },
  { group: 'Frontend', items: 'React, React Native, JavaScript' },
  { group: 'Cloud and DevOps', items: 'AWS, Azure, Terraform, Docker, Kubernetes, GitHub Actions, Jenkins, Airflow' },
  { group: 'Data', items: 'SQL, PL/SQL, PostgreSQL, MongoDB, Cassandra, Hadoop, Vertica' },
];

export const education = [
  { degree: 'M.S. Computer Science (Data Science)', school: 'Sacred Heart University, Connecticut', years: '2022–2023', note: 'GPA 3.9' },
  { degree: 'B.E. Electrical and Electronics Engineering', school: 'M. S. Ramaiah University of Applied Sciences, Bengaluru', years: '2014–2018', note: '' },
  { degree: 'Diploma, Electrical and Electronics Engineering', school: 'P. V. P Polytechnic, Bengaluru', years: '2011–2014', note: '' },
];

export const teaching =
  'Adjunct Professor at Sacred Heart University (2024), teaching graduate Big Data Architecture, MongoDB, NLP and C++ data structures, rated 4.5–5.0 out of 5.';

export const writing = [
  {
    title: 'COVID-19 Vaccine Response on Social Media using LDA Analysis',
    venue: 'Springer, Future of Information and Communication Conference 2024',
    href: 'https://link.springer.com/chapter/10.1007/978-3-031-53963-3_7',
  },
  {
    title: 'The Gambit of De-Dollarization: Unveiling New Currency Frontiers through NLP',
    venue: 'AIRCC, Computer Science & Information Technology 2024',
    href: 'https://aircconline.com/csit/papers/vol14/csit142214.pdf',
  },
];
