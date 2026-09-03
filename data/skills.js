// Each group: { category, items: [{ name, level }] }
// category/name are { en, fr }; plain strings where a technical term is identical in both languages.
// level is one of "confirmed" | "working" | "notions" | null — null renders as a plain tag.
export const skillGroups = [
  {
    category: { en: 'Security — Network & Firewall', fr: 'Sécurité — Réseau & Firewall' },
    items: [
      { name: 'Cisco FTD/FMC', level: 'confirmed' },
      { name: { en: 'Network flow analysis', fr: 'Analyse de flux réseau' }, level: 'confirmed' },
      { name: { en: 'ACL (least privilege)', fr: 'ACL (moindre privilège)' }, level: 'confirmed' },
      { name: 'Network Segmentation', level: 'confirmed' },
      { name: 'Zero Trust', level: 'working' },
      { name: 'VPN', level: 'notions' },
    ],
  },
  {
    category: { en: 'SOC & Detection', fr: 'SOC & Détection' },
    items: [
      { name: 'Wazuh SIEM', level: 'confirmed' },
      { name: 'Sysmon', level: 'confirmed' },
      { name: { en: 'Alert analysis & investigation', fr: "Analyse d'alertes & investigation" }, level: 'confirmed' },
      { name: 'CTF (web, crypto, forensics)', level: 'working' },
    ],
  },
  {
    category: { en: 'DevSecOps', fr: 'DevSecOps' },
    items: [
      { name: 'Docker', level: 'confirmed' },
      { name: 'Kubernetes', level: 'working' },
      { name: 'GitHub Actions / GitLab CI', level: 'confirmed' },
      { name: 'Trivy / Gitleaks', level: 'confirmed' },
      { name: 'Secret Scanning', level: 'confirmed' },
      { name: 'Security Gates', level: 'confirmed' },
      { name: 'OWASP', level: 'confirmed' },
      { name: 'JWT', level: 'confirmed' },
      { name: 'REST API Security', level: 'confirmed' },
    ],
  },
  {
    category: { en: 'Security — Fundamentals', fr: 'Sécurité — Fondations' },
    items: [
      { name: 'IAM', level: 'working' },
      { name: 'Active Directory', level: 'working' },
      { name: 'MFA', level: 'notions' },
      { name: 'RBAC', level: 'notions' },
      { name: 'SIEM/SOAR (concepts)', level: 'working' },
      { name: { en: 'Cryptography', fr: 'Cryptographie' }, level: 'working' },
      { name: 'ML for Cybersecurity', level: 'notions' },
      { name: 'Azure', level: 'notions' },
      { name: 'Digital Forensics', level: 'notions' },
    ],
  },
  {
    category: { en: 'Cloud & Infrastructure', fr: 'Cloud & Infrastructure' },
    items: [
      { name: 'Docker', level: 'confirmed' },
      { name: 'Kubernetes', level: 'working' },
      { name: 'OpenStack', level: 'working' },
      { name: 'Linux', level: 'confirmed' },
      { name: 'VMware Workstation', level: 'confirmed' },
    ],
  },
  {
    category: { en: 'Development', fr: 'Développement' },
    items: [
      { name: 'Python', level: 'confirmed' },
      { name: 'TypeScript / JavaScript', level: 'confirmed' },
      { name: 'Java', level: 'working' },
      { name: 'Bash', level: 'confirmed' },
      { name: 'PHP', level: 'confirmed' },
      { name: 'SQL', level: 'confirmed' },
      { name: 'HTML / CSS', level: 'confirmed' },
      { name: 'React / Angular', level: 'working' },
      { name: 'NestJS / Node.js', level: 'confirmed' },
      { name: 'Symfony', level: 'confirmed' },
      { name: 'FastAPI / Spring Boot', level: 'confirmed' },
    ],
  },
];
