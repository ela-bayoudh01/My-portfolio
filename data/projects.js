// Each project: { id, number, title, summary, problem, approach, results, stack, status, featured, links }
// Translatable fields are { en, fr }. stack/links/ids/state are language-neutral.
// problem/approach/results stay null until real project depth is written — the modal falls back to summary only.
export const projects = [
  {
    id: 'flow-guard',
    number: '001',
    title: { en: 'Flow Guard — Network Flow Matrix & ACL', fr: 'Flow Guard — Matrice de flux réseau & ACL' },
    summary: {
      en: 'Turning real firewall logs into a network security governance tool.',
      fr: 'Transformation de logs firewall réels en outil de gouvernance de la sécurité réseau.',
    },
    problem: {
      en: 'Nouvelair managed its firewall ACL rules with no centralised visibility into actual network flows, making it hard to detect overly permissive, obsolete, or ungoverned rules across 3 sites (Djerba, Monastir, Tunis).',
      fr: "Nouvelair gérait ses règles ACL firewall sans visibilité centralisée sur les flux réels du réseau, rendant difficile la détection de règles trop permissives, obsolètes ou non gouvernées, sur 3 sites (Djerba, Monastir, Tunis).",
    },
    approach: {
      en: 'Built a complete pipeline: parsing Cisco FTD logs, aggregating them into network flows, building a Zone×Zone flow matrix (extensible to 14 analysis dimensions), a criticality scoring engine iterated 3 times on real data, automatic governance anomaly detection, and generation of least-privilege ACL rule proposals. 7-page web interface with a periodic validation cycle comparing the live matrix against a validated reference matrix.',
      fr: "Développement d'un pipeline complet : parsing des logs Cisco FTD, agrégation en flux réseau, construction d'une matrice de flux Zone×Zone (extensible à 14 dimensions d'analyse), moteur de scoring de criticité itéré 3 fois sur données réelles, détection automatique d'anomalies de gouvernance, génération de propositions de règles ACL en moindre privilège. Interface web de 7 pages avec cycle de validation périodique comparant la matrice réelle à une matrice validée de référence.",
    },
    results: {
      en: [
        'Reduced criticality false-positive rate from 81% to 0.5% across 3 iterations',
        'Identified 23 network segments with no formalised security policy',
        '183,000+ log lines processed across 3 sites, 43,000+ flows analysed',
        '151 automated tests, 100% pass rate',
      ],
      fr: [
        'Réduction du taux de faux positifs de criticité de 81% à 0,5% en 3 itérations',
        'Détection de 23 segments réseau sans politique de sécurité formalisée',
        '183 000+ lignes de logs traitées sur 3 sites, 43 000+ flux analysés',
        '151 tests automatisés, 100% de réussite',
      ],
    },
    stack: ['FastAPI', 'SQLAlchemy', 'SQLite', 'React', 'Vite', 'TypeScript', 'MUI', 'AG Grid'],
    status: {
      label: { en: 'Internship project — Nouvelair, Jul-Sep 2026', fr: 'Projet de stage — Nouvelair, Juil-Sep 2026' },
      state: 'ongoing',
    },
    featured: true,
    visualLabel: { en: 'Network Security · Governance', fr: 'Sécurité réseau · Gouvernance' },
    links: [],
  },
  {
    id: 'home-lab-soc',
    number: '002',
    title: { en: 'SOC Detection & Incident Response Home Lab', fr: 'SOC Detection & Incident Response Home Lab' },
    summary: {
      en: 'A complete SOC lab for security incident detection and investigation.',
      fr: "Laboratoire SOC complet pour la détection et l'investigation d'incidents de sécurité.",
    },
    problem: {
      en: 'Understand hands-on — not just in theory — how a SOC detects, correlates, and investigates real security incidents, by building an end-to-end environment.',
      fr: "Comprendre en pratique — pas seulement en théorie — comment un SOC détecte, corrèle et investigue des incidents de sécurité réels, en construisant un environnement de bout en bout.",
    },
    approach: {
      en: 'Deployed a complete lab: Wazuh SIEM (Manager/Indexer/Dashboard via Docker) on Ubuntu Server, Windows 11 (Sysmon) and Ubuntu Desktop endpoints, a Kali Linux attack machine, isolated VMware network. End-to-end Windows/Linux administration (installation, hardening, agent deployment). Reproduced real attack scenarios: SSH/RDP brute-force, sensitive file modification (FIM), with alert analysis and structured investigation.',
      fr: "Déploiement d'un laboratoire complet : Wazuh SIEM (Manager/Indexer/Dashboard via Docker) sur Ubuntu Server, endpoints Windows 11 (Sysmon) et Ubuntu Desktop, machine d'attaque Kali Linux, réseau isolé VMware. Administration Windows/Linux de bout en bout (installation, durcissement, déploiement d'agents). Reproduction de scénarios d'attaque réels : brute-force SSH/RDP, modification de fichiers sensibles (FIM), avec analyse d'alertes et investigation structurée.",
    },
    results: {
      en: [
        'SSH and RDP brute-force scenarios successfully detected and investigated',
        'FIM (File Integrity Monitoring) detection operational',
        'Identified a gap in the default Wazuh ruleset (no correlation between brute-force and successful login)',
        'Designed a custom correlation rule to close that gap',
      ],
      fr: [
        'Scénarios brute-force SSH et RDP détectés et investigués avec succès',
        'Détection FIM (File Integrity Monitoring) opérationnelle',
        'Lacune identifiée dans le ruleset Wazuh par défaut (absence de corrélation brute-force/connexion réussie)',
        "Conception d'une règle de corrélation personnalisée pour combler cette lacune",
      ],
    },
    stack: ['Wazuh SIEM', 'Docker', 'Sysmon', 'Kali Linux', 'VMware'],
    status: {
      label: { en: 'Personal project, 2026', fr: 'Projet personnel, 2026' },
      state: 'done',
    },
    featured: true,
    visualLabel: { en: 'SOC · Detection · IR', fr: 'SOC · Detection · IR' },
    links: [],
  },
  {
    id: 'devsecops-pipeline',
    number: '003',
    title: { en: 'DevSecOps Automated Security Pipeline', fr: 'DevSecOps Automated Security Pipeline' },
    summary: {
      en: 'CI/CD pipeline with security built in from the first commit (shift-left security).',
      fr: 'Pipeline CI/CD avec sécurité intégrée dès le commit (shift-left security).',
    },
    problem: {
      en: 'Learn DevSecOps hands-on by building a real pipeline, not just following a tutorial — with the real problems that come with it.',
      fr: "Apprendre le DevSecOps en pratique en construisant un pipeline réel, pas seulement en suivant un tutoriel — avec les vrais problèmes que ça implique.",
    },
    approach: {
      en: 'GitHub Actions pipeline where every push triggers a secrets scan (Gitleaks) followed by a Docker image vulnerability scan (Trivy), with deployment to Railway automatically blocked if a check fails. Solved two real problems hit in production: a Gitleaks license limitation preventing the pipeline from actually blocking, worked around by installing the tool directly on the runner; an unstable Railway CLI, replaced with direct calls to its GraphQL API.',
      fr: "Pipeline GitHub Actions où chaque push déclenche un scan de secrets (Gitleaks) puis un scan de vulnérabilités de l'image Docker (Trivy), avec déploiement vers Railway bloqué automatiquement si un contrôle échoue. Résolution de deux problèmes réels rencontrés en production : une limitation de licence Gitleaks empêchant le blocage effectif du pipeline, contournée en installant l'outil directement sur le runner ; un CLI Railway instable, remplacé par des appels directs à son API GraphQL.",
    },
    results: {
      en: [
        'Production-ready pipeline with automatic blocking on critical vulnerabilities',
        'Documented workaround for a security tool license limitation',
        'Successful migration from an unstable CLI to a direct API to make deployment more reliable',
      ],
      fr: [
        'Pipeline production-ready avec blocage automatique en cas de vulnérabilité critique',
        "Contournement documenté d'une limitation de licence d'outil de sécurité",
        "Migration réussie d'un CLI instable vers une API directe pour fiabiliser le déploiement",
      ],
    },
    stack: ['GitHub Actions', 'Docker', 'Gitleaks', 'Trivy', 'Railway', 'React'],
    status: {
      label: { en: 'Personal project, Apr 2026', fr: 'Projet personnel, Avril 2026' },
      state: 'done',
    },
    featured: false,
    links: [],
  },
  {
    id: 'sentinelbank',
    number: '004',
    title: { en: 'SentinelBank — Secure Cloud-Native Banking Platform', fr: 'SentinelBank — Plateforme Bancaire Cloud-Native Sécurisée' },
    summary: {
      en: 'Cloud-native neobank built on Zero Trust architecture — final-year team project.',
      fr: "Néobanque cloud-native en architecture Zero Trust — projet d'équipe de fin d'études.",
    },
    problem: {
      en: 'Design a modern banking platform meeting NIST, OWASP, and PCI-DSS security standards, on a Zero Trust microservices architecture, as part of a 5-person team project using Scrum methodology.',
      fr: "Concevoir une plateforme bancaire moderne répondant aux standards de sécurité NIST, OWASP et PCI-DSS, en architecture microservices Zero Trust, dans le cadre d'un projet d'équipe de 5 personnes en méthodologie Scrum.",
    },
    approach: {
      en: 'Owned the Account Service microservice (Spring Boot, Spring Data JPA) and its Angular frontend. Secured with Keycloak (OAuth2/OpenID Connect), RBAC access control, JWT validation on every request via the API Gateway. Initial setup of a private OpenStack MicroStack cloud environment (Nova, Neutron, Keystone) to host the microservices.',
      fr: "Responsable du microservice Account Service (Spring Boot, Spring Data JPA) et de son frontend Angular. Sécurisation via Keycloak (OAuth2/OpenID Connect), contrôle d'accès RBAC, validation JWT à chaque requête via l'API Gateway. Mise en place initiale d'un environnement cloud privé OpenStack MicroStack (Nova, Neutron, Keystone) pour l'hébergement des microservices.",
    },
    results: {
      en: [
        'Account Service microservice developed and integrated into the overall architecture',
        'End-to-end secure authentication and authorisation',
        'Private cloud environment set up to host the platform',
      ],
      fr: [
        "Microservice Account Service développé et intégré à l'architecture globale",
        'Authentification et autorisation sécurisées de bout en bout',
        "Environnement cloud privé initialisé pour l'hébergement de la plateforme",
      ],
    },
    stack: ['Java/Spring Boot', 'Angular/TypeScript', 'Keycloak', 'MySQL', 'Docker'],
    status: {
      label: { en: 'Team project — ESPRIM PFE, Jan-May 2026', fr: "Projet d'équipe — PFE ESPRIM, Janv-Mai 2026" },
      state: 'done',
    },
    featured: false,
    links: [
      { label: 'Frontend', url: 'https://github.com/assali-mohamed-ali/front-end.git' },
      { label: 'Account Service', url: 'https://github.com/assali-mohamed-ali/account-service.git' },
    ],
  },
];
