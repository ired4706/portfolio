export type Project = {
  title: string;
  period: string;
  stack: string[];
  problem: string;
  role: string;
  whatIBuilt: string;
  technicalDecisions: string[];
  impact: string[];
};

export type TechnicalHighlight = {
  title: string;
  description: string;
  tags: string[];
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  items: string[];
};

export type LinkItem = {
  label: string;
  href: string;
  subtle?: boolean;
};

